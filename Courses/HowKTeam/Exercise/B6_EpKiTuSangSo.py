#Initial list
res = []

# Input lengths
lengths = int(input())

# Add element
for i in range(lengths):
    # Input elements
    n = int(input())
    res.append(n)

for i in res:
    print(i,end="")
def EpKieuJoin(res):
    a = [str(i) for i in res]
    b = int(''.join(a))
    return b
def EpKieuMap(res):
    a = int(''.join(map(str,res)))
    return a

# Input [11,12,33] <class "list",list "int">
# Output 111233 <class int>








