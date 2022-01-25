"""
    Bài 1: Tính dãy số
"""

def TinhDaySo(x, n):
    s = 0
    for i in range(1,n+1):
        tu = x**i
        mau = 1
        for j in range(1,i+1):
            mau = mau*j
        s = s + (tu/mau)
    print("s({0},{1}) = {2}".format(x,n,s))

# TinhDaySo(2,3)

"""
    Bài 2: Kiểm tra số nguyên tố
"""

def KiemTraSoNguyenTo(n):
    while True:
        dem = 0
        for i in range(1,n+1):
            if n % i == 0:
                dem+=1
        if dem == 2:
            print(n, "Là số nguyen tố")
        else:
            print(n, "Không là số nguyên tố")
        hoi = input("Tiếp không thím?(c/k)")
        if hoi is "k":
            break
    print("Bye!")

"""
    Bài 3: Xuất bảng cửu chương
"""

def XuatBangCuuChuong():
    for i in range(1,11):
        for j in range(2,10):
            line = "{0}*{1:>2}={2:>2}".format(j,i,i*j)
            print(line,end="\t")
        print()

"""
    Bài 4: Cho biết bao nhieu dấu * được in ra trên màn hình

    Bài 5: Cho biết bao nhiêu dấu * được in ra trên màn hình

    Bài 6: Giải thích cách chạy dòng lệnh range
    a. (5)
    b. (5,10)
    c. (5,20,3)
    d. (20,5,-1)
    e. (20,5,-3)
    f. (10,5)
    g. (0)
    h. (10,101,10)
    i. (10,-1,-1)
    j. (-3,4)
    k. (0,10,1)

    Bài 7: Bao nhiêu dấu * được in ra màn hình

    Bài 8: Viết lại coding dưới đây bằng cách dùng từ khóa break thay thế cho biến done

    Bài 9: Vẽ các hình dưới đây: xem clip

    Bài 10: Nhận x, n tính S(x,n): xem clip
"""

def Bai4():
    a = 0
    while a < 100:
        print("*",end="")
    print()

def Bai5():
    a = 0
    while a < 100:
        b = 0
        while b < 40:
            if(a+b) % 2 == 0:
                print("*",end="")
            b += 1
        print()
        a += 1

def Bai7():
    for a in range(20,100,5):
        print("*", end="")
    print()

def Bai8():
    done = False
    n,m=0,100
    while not done and n!= m:
        n = int(input())
        if n < 0:
            done = True
        print("n =", n)