entrada = input().split()
numt = int(entrada[0])
lista = []
cont =0
respostaf = ""
for x in range(1,numt+1):
    lista.append(int(entrada[x]))
    
def buscab (alista,e,d,na):
    global cont 
    if d<e:
        return cont
    m = (e+d)//2
    cont +=1
    if alista[m]== na:
        return cont
    elif alista[m]>na:
        return buscab(alista,e,m-1,na)
    else:
        return buscab(alista,m+1,d,na)

for y in range(numt+1,len(entrada)):
    respostaf += str(buscab(lista,0,numt-1,int(entrada[y])))+" "
    cont = 0

print(respostaf)
