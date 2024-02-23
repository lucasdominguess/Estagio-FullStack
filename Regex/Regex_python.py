

import re 

string = 'este é um teste de empressoes teste regulares '
print(re.search(r'teste',string))
print(re.findall(r'teste',string))
