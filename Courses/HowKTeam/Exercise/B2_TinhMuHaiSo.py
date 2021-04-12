a = int(input())
b = int(input())

def power(a, b):
    if b==1:
        return a
    else:
        return a*power(a,b-1)

print(power(a,b))