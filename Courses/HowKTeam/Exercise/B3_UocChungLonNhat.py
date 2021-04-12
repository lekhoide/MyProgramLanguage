a = int(input())
b = int(input())

def gcd(a,b):
    # Tui tạo ra một list để sử dụng phương thức max lấy giá trị ước chung lớn nhất
    lst=[]
    if a<b:
        # Tui lặp n từ 2 đến a+1
        for n in range(2,a+1):
            # Nếu a và b chia hết cho n thì tui thêm giá trị đó vào biến lst
            if a%n == 0 and b%n==0:
                lst.append(n)
    else:
        # Tui lặp n từ 2 đến b+1
        for n in range(2,b+1):
            # Nếu a và b chia hết cho n thì tui thêm giá trị đó vào biến lst
            if a%n == 0 and b%n==0:
                lst.append(n)
    # Tui in ra giá trị lớn nhất trong biến lst
    return max(lst)

print(gcd(a,b))

