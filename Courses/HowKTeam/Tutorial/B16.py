"""
    1. while Statements
    2. if Statements
    3. for Statements
    4. break and continue Statements and else Clauses on Loops
    5. pass Statements

"""

# 1.1 Fibonacci series
a, b = 0, 1
while a < 10000:
    print(a, end=',')
    a,b = b, a+b

# 2.1
x = int(input("Please enter an integer: "))
if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')

#3.1
words = ['cat', 'window', 'defenestrate']
for w in words:
    print(w, len(w))

# 4.1: Ví dụ về break
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n//x)
            break # Ngắt và chạy lại vòng lặp ông
    else:
        print(n, 'is a prime number')

# 4.2: ví dụ về continue
for num in range(2, 10):
    if num % 2 == 0:
        print('Found an even number', num)
        continue # Ngắt và chạy lại vòng lặp cha
    print('Found an odd number', num)