
import json
import pandas as pd


def hello_world(request):
    dataSet = pd.read_csv("DataSheet.tsv",sep="\t")

    #replace empty spaces
    dataSet.columns = [column.replace(" ", "_") for column in dataSet.columns]

    #given program code
    if request.args and 'message' in request.args:
        programCode = 'message'
    
    programCode = 'MEH'
    #search for code
    dataSet.query(f'Code == "{programCode}"', inplace = True )

    return(dataSet.to_json(orient = "records"))
