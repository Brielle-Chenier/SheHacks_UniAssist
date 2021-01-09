import csv
import json
import pandas as pd
import numpy as np
import sqlite3 as sql
import matplotlib.pyplot as plt
from IPython.display import display



data = pd.read_csv("plz.tsv",sep="\t")
#display(data.head())

conn = sql.connect('data.db')
#data.to_sql('data', conn)

first = pd.read_sql('SELECT "Code" FROM data WHERE Program == "Engineering 1"', conn)
display(first)
