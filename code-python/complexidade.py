entrada = input().split()
soma = 0
multi = 0
total = 0
con = 0
veri = False
lista = []
for x in entrada:
    con +=1
    if x == 'INICIO':
        lista.append(x)
    elif x == 'LOOP':
        lista.append(entrada[con])
        
        lista.append('*')
    elif x == 'OP':
        lista.append(entrada[con])
        
        if len(lista) < 3:
            for x in lista:
                if x !='INICIO':
                    soma += int(lista.pop())
    elif x == 'FIMLOOP':
        while lista[-1] != 'INICIO'and lista[-1] !='*':
            multi += int(lista.pop())
        if lista[-1]=='*':
            lista.pop()
            if  entrada[con]== 'FIM':
                total += multi
                total *=int(lista.pop())
                break
            else:
                multi*=int(lista.pop())
        
        total += multi
        multi = 0

total +=soma
print(total)
