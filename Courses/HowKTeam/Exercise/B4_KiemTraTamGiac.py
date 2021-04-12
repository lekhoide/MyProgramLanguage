a = int(input())
b = int(input())
c = int(input())


if a!=0 and b!=0 and c!=0:
    if a==b==c:
        print("Tam giác đều")
    elif a==b or b==c or a==c:
        print("Tam giác cân")
    else:
        print("Tam giác thường")
else:
    print("Không phải là tam giác")