# Initial list
res = []

# Input lengths
lengths = int(input("Mời nhập số phần tử: "))

# Add element
for i in range(lengths):
    # Input elements
    n = int(input("Mời nhập số: "))
    res.append(n)

# Cách 1: Sử dụng vòng lặp For
def evenNum_1(res):
    for num in res:
        if num % 2 == 0:
            print(num, end=" ")

# Cách 2: Sử dụng vòng lặp While
def evenNum_2(res):
    num = 0
    while num < len(res):
        if res[num] % 2 == 0:
            print(res[num], end=" ")
        num+=1

# Cách 3: List
def evenNum_3(res):
    even_num = [num for num in res if num % 2 == 0]
    print(even_num)


# Cách 4: Sử dụng lambda
def evenNum_4(res):
    even_num = list(filter(lambda num:num%2==0,res))
    print(even_num)

evenNum_1(res)
print()
evenNum_2(res)
print()
evenNum_3(res)
print()
evenNum_4(res)

