import csv
import datetime
import itertools
import matplotlib
import matplotlib.cm as cm
from matplotlib.colors import ListedColormap, LinearSegmentedColormap
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
import math

# Function, Converts notation like "GR1: 0,3% | GR2: 5,6%" to [("GR1",0.3), ("GR2", 5.6)]
def parseElectionResult(string):
    parties = []
    bars = [-2] + [i for i, bar in enumerate(string) if bar == "|"] + [0]
    for i in range(0,len(bars)-1):
        party = string[bars[i]+2:bars[i+1]-1].replace(".","").replace(",",".").replace("%","")
        colonIndex = party.find(":")
        parties.append((party[:colonIndex], float(party[colonIndex+2:])))
    return parties

# Parses alle .csv files
with open("Countries data - Elections.csv") as file_elections:
    sheet_elections = list(csv.reader(file_elections))
with open("Countries data - Parties.csv") as file_parties:
    sheet_parties = list(csv.reader(file_parties))

# Reads and converts all election data
data_elections = []
for j in range(1,len(sheet_elections[0])):
    currentCountryElectionsList = []
    for i in range(1,len(sheet_elections)):
        if not sheet_elections[i][j] == "":
            currentElectionPartiesList = sheet_elections[i][j]
            dateObj = datetime.datetime.strptime(sheet_elections[i][0], "%d-%m-%Y")
            currentCountryElectionsList.append((dateObj, parseElectionResult(currentElectionPartiesList)))
    data_elections.append((sheet_elections[0][j], currentCountryElectionsList))

# Test print
'''for x in data_elections:
    print(x[0])
    for y in x[1]:
        print(y)'''

# Calculates minimum and maximum dates
# minimum date = first election of Switzerland
allDatesList = list(map(lambda x: x[0], list(itertools.chain.from_iterable(filter(lambda x: not len(x) == 0, map(lambda x: x[1], data_elections))))))
allDatesList.sort()
allDatesList_switzerland = list(map(lambda x: x[0], list(itertools.chain.from_iterable(filter(lambda x: not len(x) == 0, map(lambda x: x[1], list(filter(lambda x: x[0] == "Switzerland", data_elections))))))))
allDatesList_switzerland.sort()
dateRangeMin = allDatesList_switzerland[0]
dateRangeMax = allDatesList[-1]
dateRangeDays = (dateRangeMax-dateRangeMin).days

# Reads and converts all party data
data_parties = dict()
for i in range(1,len(sheet_parties)):
    data_parties.update({sheet_parties[i][0] : (sheet_parties[i][1], sheet_parties[i][2], int(sheet_parties[i][3]))})

# Test print
#print(data_parties)

def colormapScalingFunction(value):
    print(value)
    return ((value+0)**(1/3)).real

# Combine election and party data, add timeline position, add corrected country score (corrected country score = sum of seats*partyScore for each party)
# Note: the country score is set to be 0.1 or higher
data_combined = list(map(lambda y: (y[0], list(map(lambda x: ((x[0]-dateRangeMin).days/dateRangeDays, x[0], list(map(lambda z: (z[0], z[1], z[1]*data_parties.get(z[0])[2]), x[1])) if x[1] else x[1], sum(list(map(lambda z: colormapScalingFunction(max(0.1,z[1]*data_parties.get(z[0])[2])), x[1])) if x[1] else x[1])), y[1]))), data_elections))

# Test print
'''for x in data_combined:
    print(x[0])
    for y in x[1]:
        print(y)'''

# Generates color palette from file
colorPaletteImgSource = Image.open("colorPalette.png")
colorPaletteImgPixels = []
for pixel in colorPaletteImgSource.getdata():
    colorPaletteImgPixels.append(pixel)
colorPaletteImgRange = list(map(lambda x: [x[0]/256, x[1]/256, x[2]/256, 1], colorPaletteImgPixels[:colorPaletteImgSource.size[0]]))
customColormap = ListedColormap(np.array(colorPaletteImgRange))

# Generate normalized colormap and map corrected country scores to color-hex
minimumCountryScore = min(map(lambda x: (min(map(lambda y: y[3], x[1]))), filter(lambda x: x[1], data_combined)))
maximumCountryScore = max(map(lambda x: (max(map(lambda y: y[3], x[1]))), filter(lambda x: x[1], data_combined)))
normalizedColorspace = matplotlib.colors.Normalize(vmin=minimumCountryScore, vmax=maximumCountryScore, clip=True)
colorMapper = cm.ScalarMappable(norm=normalizedColorspace, cmap=customColormap) # previously 'OrRd' or 'afmhot_r'
data_colored = list(map(lambda y: (y[0], list(map(lambda x: (x[0], x[1], x[2], x[3], matplotlib.colors.to_hex(colorMapper.to_rgba(x[3]))), y[1]))), data_combined))

# Test print
'''for x in data_colored:
    print(x[0])
    for y in x[1]:
        print(y)'''

# Generate keyframe list for debugging
data_keyframed = list(itertools.chain.from_iterable(map(lambda y: (list(map(lambda x: (x[0], y[0], x[4], x[2], x[1], x[3]), y[1]))), data_colored)))
data_keyframed.sort()

# Test case: sort on score, ascending
data_keyframed.sort(key=lambda x: x[5])

# Test print
'''for x in data_keyframed:
    print('{:<21} {:<16} {:<10} {:<44} {:<20}'.format(x[0], x[1], x[2], "<<party and date are hidden for clarity>>", x[5]))
print("Number of keyframes: " + str(len(data_keyframed)))'''

# Interpolating keyframes for use in plot
keyframeTimestamps = [data_keyframed[i][0] for i in range(0,len(data_keyframed))]
keyframeTimestamps.sort()

keyframeMatrix = dict()

# Function, returns the nearest values in the array that it lies directly in between. Returns only one value if it lies directly on a value.
def findNearest(array, value):
    a = list(map(lambda x: (abs(value-x[1]), x[0]), enumerate(array)))
    a.sort()
    if a[0][0] == 0:
        return [a[0][1]]
    else:
        b = list(map(lambda x: x[1], a[:2]))
        b.sort()
        return b

def interpolate(array, value):
    a = findNearest(array, value)
    if len(a) == 1:
        return value
    else:
        left = (value-a[0])/(a[1]-a[0])
        right = (a[1]-value)/(a[1]-a[0])
        return value


for country in data_colored:
    if country[1]:
        newKeys = []
        for timestamp in keyframeTimestamps:
            for i in range(0, len(country[1])):
                if timestamp >= country[1][i][0]:
                    newKeys.append(country[1][i][3])
                    break
        keyframeMatrix.update({country[0] : newKeys})

#print(keyframeMatrix)

'''fig, ax = plt.subplots()
ax.stackplot(keyframeTimestamps, keyframeMatrix.values(), labels=keyframeMatrix.keys())
plt.show()'''

# Old test case, only Hungary
'''# JavaScript code generation test, only Hungary
subset = list(map(lambda x: (x[0].replace(" ", "_"), list(map(lambda y: (y[0], y[4]), x[1]))), filter(lambda x: x[0] == "Hungary", data_colored)))[0]

print("\n========== data ==========")

print(subset[0])
for y in subset[1]:
    print(y)

print("\n========== code ==========")

# TODO: garanderen dat er altijd minstens 1 keyframe is per land. anders resulteert dit in crash
# TODO: uitzondering maken voor landen die uit vectorgroep bestaan: Rusland, UK, DK.
print("document.getElementById(\"timeline\").oninput = function() {")
for i in range(0, len(subset[1])):
    print("\t" + ("" if i == 0 else "else ") + "if (this.value/1000 >= " + str(subset[1][i][0]) + ((" && this.value/1000 < " + str(subset[1][i+1][0])) if i < len(subset[1])-1 else "") + ") {")
    print("\t\tdocument.getElementById(\"" + subset[0] + "\").setAttribute(\"fill\", \"" + str(subset[1][i][1]) + "\");")
    print("\t}")
print("\telse {")
print("\t\tdocument.getElementById(\"" + subset[0] + "\").setAttribute(\"fill\", \"#c0c0c0\");")
print("\t}")
print("}")'''

# Generate JavaScript code, for changing the colors only
# TODO: uitzondering maken voor landen die uit vectorgroep bestaan: Rusland, UK, DK.
colormap = list(map(lambda x: (x[0].replace(" ", "_"), list(map(lambda y: (y[0], y[4]), x[1]))), filter(lambda x: x[1], data_colored)))

print("\n========== data ==========")

'''for x in colormap:
    print(x[0])
    for y in x[1]:
        print(y)'''

print("\n========== code ==========")

# TODO: garanderen dat er altijd minstens 1 keyframe is per land. anders resulteert dit in crash
# TODO: uitzondering maken voor landen die uit vectorgroep bestaan: Rusland, UK, DK.
content = ("document.getElementById(\"timeline\").oninput = function() {\n")
for subset in colormap:
    if subset[0] in ["Russia", "United_Kingdom", "Danish_Kingdom"]:
        for i in range(0, len(subset[1])):
            content += ("\t" + ("" if i == 0 else "else ") + "if (this.value/1000 >= " + str(subset[1][i][0]) + ((" && this.value/1000 < " + str(subset[1][i+1][0])) if i < len(subset[1])-1 else "") + ") {\n")
            content += ("\t\t" + "paths = document.getElementById(\"" + subset[0] + "\").querySelectorAll(\"path\");\n")
            content += ("\t\tfor (i = 0; i < paths.length; i++) {\n")
            content += ("\t\t\tpaths[i].setAttribute(\"fill\", \"" + str(subset[1][i][1]) + "\");\n")
            content += ("\t\t}\n")
            content += ("\t}\n")
        content += ("\telse {\n")
        content += ("\t\t" + "paths = document.getElementById(\"" + subset[0] + "\").querySelectorAll(\"path\");\n")
        content += ("\t\tfor (i = 0; i < paths.length; i++) {\n")
        content += ("\t\t\tpaths[i].setAttribute(\"fill\", \"#c0c0c0\");\n")
        content += ("\t\t}\n")
        content += ("\t}\n")
    else:
        for i in range(0, len(subset[1])):
            content += ("\t" + ("" if i == 0 else "else ") + "if (this.value/1000 >= " + str(subset[1][i][0]) + ((" && this.value/1000 < " + str(subset[1][i+1][0])) if i < len(subset[1])-1 else "") + ") {\n")
            content += ("\t\tdocument.getElementById(\"" + subset[0] + "\").setAttribute(\"fill\", \"" + str(subset[1][i][1]) + "\");\n")
            content += ("\t}\n")
        content += ("\telse {\n")
        content += ("\t\tdocument.getElementById(\"" + subset[0] + "\").setAttribute(\"fill\", \"#c0c0c0\");\n")
        content += ("\t}\n")
content += ("}\n\n")
content += ("var event = document.createEvent('Event');\n")
content += ("event.initEvent('input', true, true);\n")
content += ("document.getElementById(\"timeline\").dispatchEvent(event);\n")

# Write to JavaScript file
f = open("bodyscript.js", "w")
f.write(content)
f.close()

# Test print
print(content)
