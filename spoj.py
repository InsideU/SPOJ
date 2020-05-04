import requests
import lxml
from bs4 import BeautifulSoup
import json
import sys

username=sys.argv[1]
url = 'https://www.spoj.com/users/'+username+'/'
try:
    res = requests.get(url)
except requests.exceptions.RequestException as e:
    raise SystemExit(e)

soup = BeautifulSoup(res.text,'lxml')

print("User : ",soup.find('h4').text)

s=soup.find_all('tr')
question=''
for i in s:
    question+=i.text
l=[]
r=''
for i in question:
    if(i=='\n'):
        l.append(r)
        r=''
    else:
        r+=i
l=list(set(l))
for i in l:
    print(i)
print("\n")
print("Number of questions Solved : " , len(l))




