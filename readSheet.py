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
import os
import os.path as path

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
    return ((value)**(1/(3))).real

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
keyframeTimestamps = [data_keyframed[i][0] for i in range(0,len(data_keyframed)) if data_keyframed[i][0] >= 0]
keyframeTimestamps.sort()

keyframeMatrix = dict()

# Function, returns True if both values have the same sign, i.e. they are either both negative or both positive.
def isSameSign(val1, val2):
    if (val1 < 0 and val2 < 0) or (val1 >= 1 and val2 >= 0):
        return True
    else:
        return False

# Function, returns the nearest values in the array that it lies directly in between. Returns only one value if it lies directly on a value.
def findNearest(timestamp, elections):
    a = list(map(lambda x: (abs(timestamp-x[1][0]), x[0]), enumerate(elections)))
    a.sort()
    if a[0][0] == 0 or len(a) == 1 or isSameSign(timestamp-elections[a[0][1]][0], timestamp-elections[a[1][1]][0]):
        return [elections[a[0][1]]]
    else:
        b = list(map(lambda x: elections[x[1]], a[:2]))
        b.sort()
        return b

# Function, returns interpolated score
def interpolate(timestamp, elections):
    a = findNearest(timestamp, elections)
    if len(a) == 1:
        return a[0][3]
    else:
        left = (timestamp-a[0][0])/(a[1][0]-a[0][0])
        right = (a[1][0]-timestamp)/(a[1][0]-a[0][0])
        return a[0][3]*left + a[1][3]*right

# Generate keyframes, for all timestamps, for all countries
for country in data_colored:
    if country[1]:
        newKeys = []
        for timestamp in keyframeTimestamps:
            newKeys.append(interpolate(timestamp, country[1]))
        keyframeMatrix.update({country[0] : newKeys})

# Combine dictionary entries, sum scores of all countries
plotYvals = [0]*len(list(filter(lambda x: x[0] >= 0, data_keyframed)))
for key in keyframeMatrix.keys():
    currentKeyVal = keyframeMatrix.get(key)
    for i in range(0, len(plotYvals)):
        plotYvals[i] += currentKeyVal[i]

# Normalize plot y values, but leave space at the bottom for the timeline
roomBottom = 0.1
minimumPlotYval = min(plotYvals)
plotYvals_normalized = list(map(lambda x: x-minimumPlotYval*(1-roomBottom), plotYvals))

# Generate and save plot
fig, ax = plt.subplots()
ax.stackplot(keyframeTimestamps, plotYvals_normalized, colors = ["#c0c0c0"]) # #d3d3d3
plt.axis('off')
crop = [0.22,0,0.22,0.17]
plt.savefig("timelinePlot.svg", transparent=True, bbox_inches = matplotlib.transforms.Bbox.from_extents(0.8+crop[0], 0.528+crop[1], 5.76-crop[2], 4.224-crop[3]))

# Add 'preserveAspectRatio="none"' tag to .svg file
svgFile = open("timelinePlot.svg", "r")
content = svgFile.read()
svgFile.close()
splitIndex = content.find("<svg")+5
svgFile = open("timelinePlot.svg", "w")
svgFile.write(content[:splitIndex] + "preserveAspectRatio=\"none\" " + content[splitIndex:])
svgFile.close()

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

# Generate JavaScript code, for changing the colors only (bodyscript.js)
# TODO: uitzondering maken voor landen die uit vectorgroep bestaan: Rusland, UK, DK.
colormap = list(map(lambda x: (x[0].replace(" ", "_"), list(map(lambda y: (y[0], y[4]), x[1]))), filter(lambda x: x[1], data_colored)))

# TODO: garanderen dat er altijd minstens 1 keyframe is per land. anders resulteert dit in crash
# TODO: uitzondering maken voor landen die uit vectorgroep bestaan: Rusland, UK, DK.
content = ("document.getElementById(\"timeline\").oninput = function() {\n")
content += ("\tvar startDate = new Date(" + dateRangeMin.strftime("%Y, %m, %d") + ");\n")
content += ("\tvar endDate = new Date(" + dateRangeMax.strftime("%Y, %m, %d") + ");\n")
content += ("\tdocument.getElementById(\"dateIndicator\").innerHTML = getPaddedDate(startDate*(1-this.value/1000) + endDate*(this.value/1000));\n")
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
        content += ("\tif (typeof selectedCountry != 'undefined' && selectedCountry != \"\") {\n")
        content += ("\t\tcountryClick(selectedCountry)\n")
        content += ("\t}\n")
content += ("}\n\n")
content += ("var event = document.createEvent('Event');\n")
content += ("event.initEvent('input', true, true);\n")
content += ("document.getElementById(\"timeline\").dispatchEvent(event);\n")

# Write to JavaScript file (bodyscript.js)
f = open("bodyscript.js", "w")
f.write(content)
f.close()

# Test print
'''print("\n========== data ==========")
for x in colormap:
    print(x[0])
    for y in x[1]:
        print(y)
print("\n========== code ==========")
print(content)'''

# Create list of countries and parties
countriesList = list(map(lambda x: x[0].replace(" ", "_"), data_colored))
partiesList = list(data_parties.keys())
electionDataMap = list(filter(lambda x: x[1], map(lambda x: (x[0].replace(" ", "_"), x[1]), data_colored)))

# Check if .htm files for all countries and partie exist, and create them if this is not yet the case
countryDir = "textpages//countries//"
partyDir = "textpages//parties//"
if not (path.exists(countryDir) and path.exists(partyDir)):
    print("ERROR: Run the script in the correct directory")
else:
    for country in countriesList:
        countryPath = countryDir + country + ".htm"
        if not (path.exists(countryPath) and path.isfile(countryPath)):
            f = open(countryPath, "w")
            f.write("<h1>" + country + "</h1>\n<p>Lorem ipsum et cetera " + country + "</p>\n")
            f.close()
    for party in partiesList:
        partyPath = partyDir + party + ".htm"
        if not (path.exists(partyPath) and path.isfile(partyPath)):
            f = open(partyPath, "w")
            f.write("<h3>" + data_parties.get(party)[0] + "</h3>\n<p>Lorem ipsum et cetera " + data_parties.get(party)[0] + "</p>\n")
            f.close()

# Test print
'''for x in electionDataMap:
    print(x[0])
    for y in x[1]:
        print(y)'''

# Combine textpages for all countries and parties and generate JavaScript file (headscript.js)
# NOTE: assuming every data entry in the spreadsheet contains at least one party for each country
if not (path.exists(countryDir) and path.exists(partyDir)):
    print("ERROR: Run the script in the correct directory")
else:
    content = ("function pad(n, width, z) {\n")
    content += ("\tz = z || '0';\n")
    content += ("\tn = n + '';\n")
    content += ("\treturn n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;\n")
    content += ("}\n\n")
    content += ("function getPaddedDate(date) {\n")
    content += ("\td = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);\n")
    content += ("\tm = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);\n")
    content += ("\ty = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);\n")
    content += ("\treturn pad(m,2,'0') + '-' + y;\n")
    content += ("}\n\n")
    content += ("var selectedCountry = \"\";\n\n")
    content += ("function countryClick(country) {\n")
    content += ("\tselectedCountry = country;\n")
    for i, country in enumerate(electionDataMap):
        content += ("\t" + ("" if i == 0 else "else ") + "if (country == \"" + country[0] + "\") {\n")
        for i, election in enumerate(country[1]):
            content += ("\t\t" + ("" if i == 0 else "else ") + "if (document.getElementById(\"timeline\").value/1000 >= " + str(election[0]) + ((" && document.getElementById(\"timeline\").value/1000 < " + str(country[1][i+1][0])) if i < len(country[1])-1 else "") + ") {\n")
            content += ("\t\t\t" + "document.getElementById(\"textbox\").innerHTML = \"")
            # Add .htm file contents to content
            f = open(countryDir + country[0] + ".htm", "r")
            content += f.read().replace("\n", "\\n")
            f.close()
            content += "<h2>Latest election</h2>\\n"
            content += "<p>At this time, the most recent election was held at " + election[1].strftime("%A %d %B %Y") + ".<\p>\\n"
            content += "<ul>\\n"
            for party in election[2]:
                content += "\t<li>" + data_parties.get(party[0])[0] + " (" + data_parties.get(party[0])[1] + ") received " + str(party[1]) + "% of the votes</li>\\n"
            content += "</ul>\\n"
            content += "<h2>Parties</h2>\\n"
            for party in election[2]:
                f = open(partyDir + party[0] + ".htm", "r")
                content += f.read().replace("\n", "\\n")
                f.close()
            content += ("\";\n\t\t}\n")
        content += ("\t\telse {\n")
        content += ("\t\t\t" + "document.getElementById(\"textbox\").innerHTML = \"")
        # Add .htm file contents to content
        f = open(countryDir + country[0] + ".htm", "r")
        content += f.read().replace("\n", "\\n")
        f.close()
        content += ("\";\n\t\t}\n")
        content += ("\t}\n")
    content += ("\telse {\n")
    content += ("\t\t" + "document.getElementById(\"textbox\").innerHTML = \"")
    content += "<p>Unfortunately, there is not yet any data available for this country.</p>"
    content += ("\";\n\t}\n")
    content += ("}\n")

# Write to JavaScript file (headscript.js)
f = open("headscript.js", "w")
f.write(content)
f.close()
