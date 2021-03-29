import csv
import datetime
import itertools

# Functie, Convertert notatie als "GR1: 0,3% | GR2: 5,6%" naar [("GR1",0.3), ("GR2", 5.6)]
def parseElectionResult(string):
    parties = []
    bars = [-2] + [i for i, bar in enumerate(string) if bar == "|"] + [0]
    for i in range(0,len(bars)-1):
        party = string[bars[i]+2:bars[i+1]-1].replace(".","").replace(",",".").replace("%","")
        colonIndex = party.find(":")
        parties.append((party[:colonIndex], float(party[colonIndex+2:])))
    return parties

# Leest alle .csv bestanden in
with open("Countries data - Elections.csv") as file_elections:
    sheet_elections = list(csv.reader(file_elections))
with open("Countries data - Parties.csv") as file_parties:
    sheet_parties = list(csv.reader(file_parties))
with open("Countries data - Countries.csv") as file_countries:
    sheet_countries = list(csv.reader(file_countries))

# Leest en converteert alle election data
data_elections = []
for j in range(1,len(sheet_elections[0])):
    currentCountryElectionsList = []
    for i in range(1,len(sheet_elections)):
        if not sheet_elections[i][j] == "":
            currentElectionPartiesList = sheet_elections[i][j]
            dateObj = datetime.datetime.strptime(sheet_elections[i][0], "%d-%m-%Y")
            currentCountryElectionsList.append((dateObj, parseElectionResult(currentElectionPartiesList)))
    data_elections.append((sheet_elections[0][j], currentCountryElectionsList))

#test print
'''for x in data_elections:
    print(x[0])
    for y in x[1]:
        print(y)'''

# Berekent minimale en maximale datum
allDatesList = list(map(lambda x: x[0], list(itertools.chain.from_iterable(filter(lambda x: not len(x) == 0, map(lambda x: x[1], data_elections))))))
allDatesList.sort()
minDateRange = allDatesList[0]
maxDateRange = allDatesList[-1]
