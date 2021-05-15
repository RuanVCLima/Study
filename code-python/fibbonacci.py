entrada = input()
num  = int(entrada)
def fibo(n):
    if n == 0: return "b"
    if n == 1: return "a"
    else: return fibo(n-1) + fibo(n-2)


print(fibo(num))
