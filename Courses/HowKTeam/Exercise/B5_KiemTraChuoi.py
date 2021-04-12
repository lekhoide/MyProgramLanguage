# str1 = str("The quick brown fox jumps over the lazy dog")
# str2 = str("you are apple in my eye")
# str3 = str("Understand requirement of practice areas")

# lst = []

# for i in str1.split():
#     if len(i) > 3:
#         lst.append(i)
# print(lst)

# for i in str2.split():
#     if len(i) > 3:
#         lst.append(i)
# print(lst)

# for i in str3.split():
#     if len(i) > 3:
#         lst.append(i)
# print(lst)

str = str(input())

def ktc(str):
    lst=[]
    for i in str.split():
        if len(i) > 3:
            lst.append(i)
    return lst

print(ktc(str))