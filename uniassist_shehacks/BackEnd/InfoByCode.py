#!/usr/bin/env python
# coding: utf-8

# In[4]:


import csv
import json
import pandas as pd
import numpy as np
import sqlite3 as sql
import matplotlib.pyplot as plt
from IPython.display import display
import matplotlib.pyplot as plt
dataSet = pd.read_csv("DataSheet.tsv",sep="\t")
display(dataSet.head())
conn = sql.connect('data.db')
#dataSet.to_sql('data', conn)


# In[5]:


first = pd.read_sql('SELECT * FROM data WHERE Code == "MEC"', conn)
display(first)


# In[7]:


a = "HI"
print(a)
b = "yay"
c = ""
d = ""
e = ""
f = ""
g = ""
h = ""
i = ""
j = ""
x = {"Code": a, "Faculty": b, "Program": c, "School": d, "Years": e, "Coop": f, "Tuition": g, "Requirements": f, "LowAvg": g, "CompAvg": h, "SuppApp": i, "Interview": j}
z = json.dumps(x)
print(z)


# In[ ]:





# In[ ]:




