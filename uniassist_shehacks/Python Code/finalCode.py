
import json
import pandas as pd

def main():
    request = "MEE"
    z = hello_world(request)

    #debugging
    print(z)
    
def hello_world(request):
    dataSet = pd.read_csv("DataSheet.tsv",sep="\t")

    #replace empty spaces
    dataSet.columns = [column.replace(" ", "_") for column in dataSet.columns]

    #given program code
    programCode = request

    #search for code
    dataSet.query(f'Code == "{programCode}"', inplace = True )

    return(dataSet.to_json(orient = "records"))

if __name__ == "__main__":
    main()
