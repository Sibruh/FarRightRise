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
import pandas as pd

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
roomBottom = 0.02
minimumPlotYval = min(plotYvals)
plotYvals_normalized = list(map(lambda x: x-minimumPlotYval*(1-roomBottom), plotYvals))

# Generate and save plot
fig, ax = plt.subplots()
ax.stackplot(keyframeTimestamps, plotYvals_normalized, colors = ["#606060"]) # #d3d3d3
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

# Generate JavaScript code, for changing the colors only (bodyscript_py.js)
# TODO: uitzondering maken voor landen die uit vectorgroep bestaan: Rusland, UK, DK.
colormap = list(map(lambda x: (x[0].replace(" ", "_"), list(map(lambda y: (y[0], y[4]), x[1]))), data_colored))

'''for x in colormap:
    print(x[0])
    for y in x[1]:
        print(y)'''

# Define democratisation date for each country (country will be colored grey before democratisation date)
democratisationDates = {
                        #'Ukraine': 'ALREADY CORRECTLY ALIGNED',
                        #'Russia': 'ALREADY CORRECTLY ALIGNED',
                        #'North_Macedonia': 'ALREADY CORRECTLY ALIGNED',
                        'Bulgaria': '1-10-1991',
                        'Lithuania': '1-1-1991', # arbitrary date
                        'Latvia': '1-1-1992', # arbitrary date
                        'Estonia': '1-1-1992', # arbitrary date
                        'Greece': '12-10-1944',
                        'Cyprus': '1-8-1960',
                        'Turkey': '1-5-1950',
                        #'Croatia': 'ALREADY CORRECTLY ALIGNED',
                        #'Romania': 'ALREADY CORRECTLY ALIGNED',
                        #'Serbia': 'ALREADY CORRECTLY ALIGNED',
                        'Finland': '6-12-1917',
                        #'Slovakia': 'ALREADY CORRECTLY ALIGNED',
                        'Luxembourg': '10-9-1944',
                        'Norway': '9-5-1945',
                        #'Slovenia': 'ALREADY CORRECTLY ALIGNED',
                        'Czech_Republic': '1-12-1989',
                        'Czechoslovakia': '1-12-1989',
                        'Danish_Kingdom': '4-5-1945',
                        'Portugal': '25-4-1976',
                        'Poland': '1-1-1991',
                        #'Spain': 'ALREADY CORRECTLY ALIGNED',
                        'Italy': '1-1-1945',
                        #'Hungary': 'ALREADY CORRECTLY ALIGNED',
                        'Switzerland': '1-1-1900',
                        'France': '25-8-1944',
                        #'Germany': 'ALREADY CORRECTLY ALIGNED',
                        'The_Netherlands': '5-5-1945',
                        'Belgium': '1-1-1945',
                        'Sweden': '1-1-1900',
                        'United_Kingdom': '1-1-1900',
                        'Ireland': '11-7-1921',
                        'Bosnia_and_Herzegovina': '1-1-1993', # arbitrary date
                        'Iceland': '17-6-1944',
                        'Moldova': '27-2-1994',
                        'Malta': '18-9-1964',
                        'Austria': '9-5-1945',
                        #'Belarus': 'INTENTIONALLY LEFT EMPTY',
                        'Albania': '22-3-1992',
                        'Kosovo': '1-1-1995', # arbitrary date
                        #'Montenegro': 'ALREADY CORRECTLY ALIGNED'
                        }

# Define independence date for country (country will be transparent before democratisation date)
# Undefined countries will be assumed to have not independence date
independenceDates = {
                        '1-3-1990': ['Lithuania', 'USSR2'],
                        '3-10-1990': ['Germany'],
                        '25-6-1991': ['Slovenia', 'Croatia', 'Yugoslavia2'],
                        '24-8-1991': ['Moldova', 'Ukraine', 'Belarus', 'Estonia', 'Latvia', 'Russia'], # allemaal samengevoegd omdat deze data allemaal ongeveer binnen een week van elkaar liggen
                        '8-9-1991': ['North_Macedonia', 'Yugoslavia3'],
                        '1-3-1992': ['Bosnia_and_Herzegovina', 'Yugoslavia4'],
                        '1-1-1993': ['Slovakia', 'Czech_Republic'],
                        '21-5-2006': ['Montenegro', 'Serbia'],
                        '17-2-2008': ['Kosovo'],
                        }

# Add initial keyframes at democratisation dates
fourYearInterval = 1461/dateRangeDays
for country in colormap:
    if country[0] in democratisationDates:
        if datetime.datetime.strptime(democratisationDates.get(country[0]), "%d-%m-%Y") >= dateRangeMin:
            if country[1]:
                nextKeyPos = country[1][0][0]
                country[1].insert(0, (nextKeyPos-fourYearInterval, matplotlib.colors.to_hex(colorMapper.to_rgba(0))))
                country[1].insert(0, (((datetime.datetime.strptime(democratisationDates.get(country[0]), "%d-%m-%Y") - dateRangeMin).days)/dateRangeDays, matplotlib.colors.to_hex(colorMapper.to_rgba(0))))
            else:
                country[1].insert(0, (((datetime.datetime.strptime(democratisationDates.get(country[0]), "%d-%m-%Y") - dateRangeMin).days)/dateRangeDays, matplotlib.colors.to_hex(colorMapper.to_rgba(0))))
        else:
            country[1].insert(0, (0, matplotlib.colors.to_hex(colorMapper.to_rgba(0))))

# Make countries that are still undefined grey
for country in colormap:
    if not country[1]:
        country[1].append((0, '#c0c0c0'))

# Convert independenceDates dict to list where date is converted to slider position
independenceDatesList = []
for date in independenceDates.keys():
    independenceDatesList.append((str(((datetime.datetime.strptime(date, "%d-%m-%Y") - dateRangeMin).days)/dateRangeDays),independenceDates.get(date)))

# Test print
'''for x in colormap:
    print(x[0])
    for y in x[1]:
        print(y)'''

# Define iron curtain fall range
ironCurtainFallStartDate = '1-1-1983'
ironCurtainFallEndDate = '1-1-1993'
ironCurtainFallStart = ((datetime.datetime.strptime(ironCurtainFallStartDate, "%d-%m-%Y") - dateRangeMin).days)/dateRangeDays
ironCurtainFallEnd = ((datetime.datetime.strptime(ironCurtainFallEndDate, "%d-%m-%Y") - dateRangeMin).days)/dateRangeDays

# TODO: garanderen dat er altijd minstens 1 keyframe is per land. anders resulteert dit in crash
# TODO: uitzondering maken voor landen die uit vectorgroep bestaan: Rusland, UK, DK.
undefinedToDefinedTransitionLength = 0.1
content = ("document.getElementById(\"timeline\").oninput = function() {\n")
content += ("\tvar startDate = new Date(" + dateRangeMin.strftime("%Y, %m, %d") + ");\n")
content += ("\tvar endDate = new Date(" + dateRangeMax.strftime("%Y, %m, %d") + ");\n")
content += ("\tdocument.getElementById(\"dateIndicator\").innerHTML = getPaddedDate(startDate*(1-this.value/1000) + endDate*(this.value/1000));\n")
content += ("\tif (this.value/1000 >= " + str(ironCurtainFallEnd) + ") {\n")
#content += ("\t\tdocument.getElementById(\"ironCurtain\").setAttribute(\"stroke-dashoffset\", 1000);\n")
content += ("\t\tdocument.getElementById(\"ironCurtain\").setAttribute(\"opacity\", 0);\n")
content += ("\t} else if (this.value/1000 < " + str(ironCurtainFallStart) + ") {\n")
#content += ("\t\tdocument.getElementById(\"ironCurtain\").setAttribute(\"stroke-dashoffset\", 825);\n")
content += ("\t\tdocument.getElementById(\"ironCurtain\").setAttribute(\"opacity\", 1);\n")
content += ("\t} else {\n")
#content += ("\t\tdocument.getElementById(\"ironCurtain\").setAttribute(\"stroke-dashoffset\", jQuery.easing[\"easeColor\"](0,this.value/1000-(" + str(ironCurtainFallStart) + "),825,175," + str(ironCurtainFallEnd-ironCurtainFallStart) + "));\n")
content += ("\t\tdocument.getElementById(\"ironCurtain\").setAttribute(\"opacity\", jQuery.easing[\"easeColor\"](0,this.value/1000-(" + str(ironCurtainFallStart) + "),1,-1," + str(ironCurtainFallEnd-ironCurtainFallStart) + "));\n")
content += ("\t}\n")
for subset in colormap:
    for i in range(0, len(subset[1])):
        content += ("\t" + ("" if i == 0 else "else ") + "if (this.value/1000 >= " + str(subset[1][i][0]) + ((" && this.value/1000 < " + str(subset[1][i+1][0])) if i < len(subset[1])-1 else "") + ") {\n")
        if subset[0] == "Yugoslavia":
            content += ("\t\tdocument.getElementById(\"Yugoslavia1\").setAttribute(\"fill\", interpolateColor(\"" + str(subset[1][i][1]) + "\", \"" + (str(subset[1][i+1][1]) if i < len(subset[1])-1 else str(subset[1][i][1])) + "\", " + (("((this.value/1000-(" + str(subset[1][i][0]) + "))/" + str(subset[1][i+1][0]-subset[1][i][0]) + ")") if i < len(subset[1])-1 else "0") + "));\n")
            content += ("\t\tdocument.getElementById(\"Yugoslavia2\").setAttribute(\"fill\", interpolateColor(\"" + str(subset[1][i][1]) + "\", \"" + (str(subset[1][i+1][1]) if i < len(subset[1])-1 else str(subset[1][i][1])) + "\", " + (("((this.value/1000-(" + str(subset[1][i][0]) + "))/" + str(subset[1][i+1][0]-subset[1][i][0]) + ")") if i < len(subset[1])-1 else "0") + "));\n")
            content += ("\t\tdocument.getElementById(\"Yugoslavia3\").setAttribute(\"fill\", interpolateColor(\"" + str(subset[1][i][1]) + "\", \"" + (str(subset[1][i+1][1]) if i < len(subset[1])-1 else str(subset[1][i][1])) + "\", " + (("((this.value/1000-(" + str(subset[1][i][0]) + "))/" + str(subset[1][i+1][0]-subset[1][i][0]) + ")") if i < len(subset[1])-1 else "0") + "));\n")
            content += ("\t\tdocument.getElementById(\"Yugoslavia4\").setAttribute(\"fill\", interpolateColor(\"" + str(subset[1][i][1]) + "\", \"" + (str(subset[1][i+1][1]) if i < len(subset[1])-1 else str(subset[1][i][1])) + "\", " + (("((this.value/1000-(" + str(subset[1][i][0]) + "))/" + str(subset[1][i+1][0]-subset[1][i][0]) + ")") if i < len(subset[1])-1 else "0") + "));\n")
        elif subset[0] == "USSR":
            content += ("\t\tdocument.getElementById(\"USSR1\").setAttribute(\"fill\", interpolateColor(\"" + str(subset[1][i][1]) + "\", \"" + (str(subset[1][i+1][1]) if i < len(subset[1])-1 else str(subset[1][i][1])) + "\", " + (("((this.value/1000-(" + str(subset[1][i][0]) + "))/" + str(subset[1][i+1][0]-subset[1][i][0]) + ")") if i < len(subset[1])-1 else "0") + "));\n")
            content += ("\t\tdocument.getElementById(\"USSR2\").setAttribute(\"fill\", interpolateColor(\"" + str(subset[1][i][1]) + "\", \"" + (str(subset[1][i+1][1]) if i < len(subset[1])-1 else str(subset[1][i][1])) + "\", " + (("((this.value/1000-(" + str(subset[1][i][0]) + "))/" + str(subset[1][i+1][0]-subset[1][i][0]) + ")") if i < len(subset[1])-1 else "0") + "));\n")
        else:
            # Uncomment to disable interpolation:
            #content += ("\t\tdocument.getElementById(\"" + subset[0] + "\").setAttribute(\"fill\", interpolateColor(\"" + str(subset[1][i][1]) + "\", \"" + (str(subset[1][i+1][1]) if i < len(subset[1])-1 else str(subset[1][i][1])) + "\", " + str(0) + "));\n")
            content += ("\t\tdocument.getElementById(\"" + subset[0] + "\").setAttribute(\"fill\", interpolateColor(\"" + str(subset[1][i][1]) + "\", \"" + (str(subset[1][i+1][1]) if i < len(subset[1])-1 else str(subset[1][i][1])) + "\", " + (("((this.value/1000-(" + str(subset[1][i][0]) + "))/" + str(subset[1][i+1][0]-subset[1][i][0]) + ")") if i < len(subset[1])-1 else "0") + "));\n")
        content += ("\t}\n")
    content += ("\telse {\n")
    #print(subset[1])
    content += ("\t\tif (this.value/1000 >= " + str(subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + ") {\n")
    if subset[0] == "Yugoslavia":
        content += ("\t\t\tdocument.getElementById(\"Yugoslavia1\").setAttribute(\"fill\", interpolateColor(\"#c0c0c0\", \"" + (str(subset[1][0][1])) + "\", " + ("((this.value/1000-(" + str(subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + "))/" + str(subset[1][0][0]-subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + ")") + "));\n")
        content += ("\t\t\tdocument.getElementById(\"Yugoslavia2\").setAttribute(\"fill\", interpolateColor(\"#c0c0c0\", \"" + (str(subset[1][0][1])) + "\", " + ("((this.value/1000-(" + str(subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + "))/" + str(subset[1][0][0]-subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + ")") + "));\n")
        content += ("\t\t\tdocument.getElementById(\"Yugoslavia3\").setAttribute(\"fill\", interpolateColor(\"#c0c0c0\", \"" + (str(subset[1][0][1])) + "\", " + ("((this.value/1000-(" + str(subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + "))/" + str(subset[1][0][0]-subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + ")") + "));\n")
        content += ("\t\t\tdocument.getElementById(\"Yugoslavia4\").setAttribute(\"fill\", interpolateColor(\"#c0c0c0\", \"" + (str(subset[1][0][1])) + "\", " + ("((this.value/1000-(" + str(subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + "))/" + str(subset[1][0][0]-subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + ")") + "));\n")
    elif subset[0] == "USSR":
        content += ("\t\t\tdocument.getElementById(\"USSR1\").setAttribute(\"fill\", interpolateColor(\"#c0c0c0\", \"" + (str(subset[1][0][1])) + "\", " + ("((this.value/1000-(" + str(subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + "))/" + str(subset[1][0][0]-subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + ")") + "));\n")
        content += ("\t\t\tdocument.getElementById(\"USSR2\").setAttribute(\"fill\", interpolateColor(\"#c0c0c0\", \"" + (str(subset[1][0][1])) + "\", " + ("((this.value/1000-(" + str(subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + "))/" + str(subset[1][0][0]-subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + ")") + "));\n")
    else:
        # Uncomment to disable interpolation:
        #content += ("\t\t\tdocument.getElementById(\"" + subset[0] + "\").setAttribute(\"fill\", \"#c0c0c0\");\n")
        content += ("\t\t\tdocument.getElementById(\"" + subset[0] + "\").setAttribute(\"fill\", interpolateColor(\"#c0c0c0\", \"" + (str(subset[1][0][1])) + "\", " + ("((this.value/1000-(" + str(subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + "))/" + str(subset[1][0][0]-subset[1][0][0]*(1-undefinedToDefinedTransitionLength)) + ")") + "));\n")
    content += ("\t\t}\n")
    content += ("\t\telse {\n")
    if subset[0] == "Yugoslavia":
        content += ("\t\t\tdocument.getElementById(\"Yugoslavia1\").setAttribute(\"fill\", \"#c0c0c0\");\n")
        content += ("\t\t\tdocument.getElementById(\"Yugoslavia2\").setAttribute(\"fill\", \"#c0c0c0\");\n")
        content += ("\t\t\tdocument.getElementById(\"Yugoslavia3\").setAttribute(\"fill\", \"#c0c0c0\");\n")
        content += ("\t\t\tdocument.getElementById(\"Yugoslavia4\").setAttribute(\"fill\", \"#c0c0c0\");\n")
    elif subset[0] == "USSR":
        content += ("\t\t\tdocument.getElementById(\"USSR1\").setAttribute(\"fill\", \"#c0c0c0\");\n")
        content += ("\t\t\tdocument.getElementById(\"USSR2\").setAttribute(\"fill\", \"#c0c0c0\");\n")
    else:
        content += ("\t\t\tdocument.getElementById(\"" + subset[0] + "\").setAttribute(\"fill\", \"#c0c0c0\");\n")
    content += ("\t\t}\n")
    content += ("\t}\n")
    content += ("\tif (typeof selectedCountry != 'undefined' && selectedCountry != \"\") {\n")
    content += ("\t\tcountryClick(selectedCountry)\n")
    content += ("\t}\n")
for iDate in independenceDatesList:
    content += ("\tif (this.value/1000 < " + str(iDate[0]) + ") {\n")
    for iCountry in iDate[1]:
        content += ("\t\tdocument.getElementById(\"" + iCountry + "\").style.display = \"none\";\n")
    content += ("\t}\n")
    content += ("\telse {\n")
    for iCountry in iDate[1]:
        content += ("\t\tdocument.getElementById(\"" + iCountry + "\").style.display = \"block\";\n")
    content += ("\t}\n")
content += ("}\n\n")
content += ("var event = document.createEvent('Event');\n")
content += ("event.initEvent('input', true, true);\n")
content += ("document.getElementById(\"timeline\").dispatchEvent(event);\n")

# Test print
'''for x in independenceDatesList:
    print(x)'''

# Write to JavaScript file (bodyscript_py.js)
f = open("bodyscript_py.js", "w")
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
# Uncomment to remove all countries without spreadsheet entry from list:
#electionDataMap = list(filter(lambda x: x[1], map(lambda x: (x[0].replace(" ", "_"), x[1]), data_colored)))
electionDataMap = list(map(lambda x: (x[0].replace(" ", "_"), x[1]), data_colored))

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
            f.write("<h1>" + country.replace("_", " ") + "</h1>\n<p>Lorem ipsum et cetera " + country.replace("_", " ") + "</p>\n")
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

# Combine textpages for all countries and parties and generate JavaScript file (headscript_py.js)
# NOTE: assuming every data entry in the spreadsheet contains at least one party for each country
if not (path.exists(countryDir) and path.exists(partyDir)):
    print("ERROR: Run the script in the correct directory")
else:
    content = ("var selectedCountry = \"\";\n\n")
    content += ("function countryClick(country) {\n")
    content += ("\tselectedCountry = country;\n")
    for i, country in enumerate(electionDataMap):
        if country[1]:
            content += ("\t" + ("" if i == 0 else "else ") + "if (country == \"" + country[0] + "\") {\n")
            for i, election in enumerate(country[1]):
                content += ("\t\t" + ("" if i == 0 else "else ") + "if (document.getElementById(\"timeline\").value/1000 >= " + str(election[0]) + ((" && document.getElementById(\"timeline\").value/1000 < " + str(country[1][i+1][0])) if i < len(country[1])-1 else "") + ") {\n")
                content += ("\t\t\t" + "document.getElementById(\"textbox\").innerHTML = \"")
                # Add .htm file contents to content
                f = open(countryDir + country[0] + ".htm", "r")
                content += f.read().replace("\n", "\\n")
                f.close()
                content += "<h2>Latest election</h2>\\n"
                content += "<p>At this time, the most recent election in which at least one far-right party participated was held at " + election[1].strftime("%A %d %B %Y") + ".<\p>\\n"
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
        else:
            content += ("\t" + ("" if i == 0 else "else ") + "if (country == \"" + country[0] + "\") {\n")
            content += ("\t\t" + "document.getElementById(\"textbox\").innerHTML = \"")
            # Add .htm file contents to content
            f = open(countryDir + country[0] + ".htm", "r")
            content += f.read().replace("\n", "\\n")
            f.close()
            content += ("\";\n\t}\n")
    content += ("\telse {\n")
    content += ("\t\t" + "document.getElementById(\"textbox\").innerHTML = \"")
    content += "<p>Unfortunately, there is no data available for this country at this time.</p>"
    content += ("\";\n\t}\n")
    content += ("}\n")

# Write to JavaScript file (headscript_py.js)
f = open("headscript_py.js", "w")
f.write(content)
f.close()

# Define election years for countries that will be plotted
democratisationDates = {
                        #'Austria': [1970,1980,1986,1990,1994,1995,1999,2002,2006,2008,2013,2017,2019],
                        #'Belgium': [1981,1985,1987,1991,1995,1999,2003,2007,2010,2014,2019],
                        #'BRD': [1949,1953,1957,1965,1972,1976,1980,1983,1987],
                        #'Bulgaria': [2005,2009,2013,2014,2017],
                        #'Croatia': [1992,1995,2000,2003,2007,2009,2014,2020],
                        #'Cyprus': [2011,2013,2016,2018,2019],
                        #'Czech_Republic': [2013,2017],
                        #'Danish_Kingdom': [1998,2001,2005,2007,2011,2015,2019],
                        #'Estonia': [2015,2019],
                        #'Finland': [1999,2003,2007,2011,2015,2019],
                        #'France': [1973,1978,1981,1986,1988,1995,2002,2007,2012,2017],
                        #'Germany': [1949,1953,1957,1965,1969,1972,1976,1980,1983,1987,1990,1998,2002,2005,2009,2013,2017], # KLOPT DIT WEL?
                        #'Greece': [1996,2004,2007,2009,2012,2012(2),2015,2015(2),2019],
                        #'Hungary': [1990,1994,1998,2002,2006,2010,2014,2018],
                        #'Italy': [1992,1994,1996,2001,2006,2008,2013,2018],
                        #'Latvia': [2010,2011,2014,2018],
                        #'Lithuania': [2002,2004,2008,2012,2016],
                        #'Luxembourg': [1989,1994,1999,2004,2009,2013,2018],
                        #'Moldova': [2005,2014,2019],
                        #'Montenegro': [1992,1996,1998,2001,2002,2006,2009,2012,2016],
                        #'North_Macedonia': [1990,1994,1998,2002,2006,2008,2011,2014,2016,2020],
                        #'Norway': [1973,1977,1981,1985,1989,1993,1997,2001,2005,2009,2013,2017],
                        #'Poland': [2001,2005,2007,2011,2015,2019],
                        #'Portugal': [2019,2021],
                        #'Romania': [1992,1996,2000,2004,2008,2012,2016,2020],
                        #'Russia': [1993,1995,1999,2003,2007,2011,2016],
                        #'Serbia': [1992,1997,2000,2003,2007,2008,2012,2014,2016,2020],
                        #'Slovakia': [1990,1992,1994,1998,2002,2006,2010,2012,2016,2020],
                        #'Slovenia': [1990,1992,1996,2000,2004,2008,2011,2014,2018],
                        #'Spain': [1977,2015,2016,2019,2019(2)],
                        #'Sweden': [1991,1994,1998,2002,2006,2010,2014,2018],
                        #'Switzerland': [1967,1971,1975,1979,1983,1987,1991,1995,1999,2003,2007,2011,2015,2019],
                        #'The_Netherlands': [1986,1989,1994,1998,2002,2003,2006,2010,2012,2017,2021],
                        #'Turkey': [1969,1973,1977,1995,1999,2002,2007,2011,2015,2015(2),2018],
                        #'Ukraine': [1994,1998,2006,2007,2012,2014,2019],
                        #'United_Kingdom': [1992,1997,2001,2005,2010,2015,2017,2019],
                        #'Yugoslavia': [1992,1997,2000,2003,2007]
                        }

# Prepare data for generating stacked bar plots
data_pre_plottable = list(map(lambda x: (x[0], list(map(lambda y: (y[1].year, y[2]), x[1]))), data_colored))
partiesPerCountry = dict()
for country in data_pre_plottable:
    differentParties = []
    for election in country[1]:
        for partyTuple in election[1]:
            if not partyTuple[0] in differentParties:
                differentParties.append(partyTuple[0])
    differentParties.sort()
    partiesPerCountry.update({country[0] : differentParties})

for country in data_pre_plottable:
    for election in country[1]:
        availableParties = list(map(lambda x: x[0], election[1]))
        for party in partiesPerCountry.get(country[0]):
            if not party in availableParties:
                election[1].append((party, 0, 0))
        election[1].sort(key=lambda x: x[0])

data_plottable = dict()
for country in data_pre_plottable:
    dataset = [list(map(lambda x: x[0], country[1]))]
    for i in range(0, len(partiesPerCountry.get(country[0]))):
        dataset.append(list(map(lambda x: x[1][i][2], country[1])))
    data_plottable.update({country[0] : dataset})

'''for x in data_pre_plottable:
    print(x[0])
    for y in x[1]:
        print(y)'''

'''for key in data_plottable.keys():
    dataset = data_plottable.get(key)
    if dataset[0]:
        print(key)
        for y in dataset:
            print(y)'''

# Generate stacked bar plot as test:
'''for country in data_plottable.keys():
    dataset = data_plottable.get(country)
    if dataset[0]:
        dataframe = dict()
        yearList = dataset[0]
        for i in range(1, len(dataset)):
            dataframe.update({partiesPerCountry.get(country)[i-1] : dataset[i]})
        plotdata = pd.DataFrame(dataframe, index=yearList)
        plt.close()
        with plt.rc_context({'axes.edgecolor':(1,1,1,0), 'figure.facecolor':'white'}):
            plotdata.plot(kind='bar', stacked=True, width=1)
            #plt.xlabel("Election year")
            plt.grid(True, color='#000000', alpha=0.1, axis="y", linestyle='--')
            plt.ylabel("% of votes", loc='top')
            plt.legend(partiesPerCountry.get(country), frameon=False)
            #plt.axis('off')
            crop = [-0.5,-0.55,-0.1,-0.1]
            plt.savefig("stackedBarPlots//" + country.replace(" ", "_") + ".svg", transparent=True)#, bbox_inches = matplotlib.transforms.Bbox.from_extents(0.8+crop[0], 0.528+crop[1], 5.76-crop[2], 4.224-crop[3]))
            plt.savefig("stackedBarPlots//png_preview//" + country.replace(" ", "_") + ".png", transparent=True, bbox_inches = matplotlib.transforms.Bbox.from_extents(0.8+crop[0], 0.528+crop[1], 5.76-crop[2], 4.224-crop[3]))'''

"""======================================================
                        TODO:
 - domein van plots beperken tot dat van de tijdlijn
 - voor elk land een lijst van election years maken
 - FUCK DIE PYTHON PLOTS - javascript bar plot template zoeken?
    ^^ alhoewel: die US site gebruikt ook svg plots 0 misschien gewoon pyplot mooier maken
 - legenda koppelen aan partijentabel zodat daar de naam van de partij of de juiste afkortingkomt te staan
 X plot crop optimaliseren
 - andorra toevoegen?
 - LAGG FIXEN + TESTEN MET MEERDERE BROWSERS EN APPARATEN
 - landen als andorra, liechtenstein en monaco hebben nog een glitch
 - nalopen of ranges van landen nog wel kloppen - bestaat land wel op elk tijdstip in de plot?
 - nalopen of bestaande election dates wel kloppen (de witte keyframes dus negeren)
 - tijd constant maken?
 - passend kleurenpalet instellen
 - onderzoeken of font aan te passen is
======================================================"""
