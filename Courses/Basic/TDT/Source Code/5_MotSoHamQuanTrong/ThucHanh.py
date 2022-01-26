"""
    Bài 1: Game đoán số
"""

from math import sqrt
from random import randrange


def GameDoanSo():
    somay = randrange(1,101)
    solandoan = 0
    while solandoan < 7:
        solandoan += 1
        songuoi = int(input("Máy đoán (1..100), mời bạn đoán:"))
        print("Bạn đoán lần thứ ", solandoan)
        if somay == songuoi:
            print("Chúc mừng bạn đoán đúng, số mấy là=",somay)
            break
        if somay > songuoi:
            print("Bạn đoán sai, số máy > số bạn")
        elif somay < songuoi:
            print("Bạn đoán sai, số máy < số bạn")
    else:
        print("GAME OVER")

# GameDoanSo()

"""
    Bài 2: Tính diện tích tam giác
"""

def DienTichTamGiac():
    a = float(input("Nhập cạnh a>0: "))
    b = float(input("Nhập cạnh b>0: "))
    c = float(input("Nhập cạnh c>0: "))
    if (a<=0 or b<=0 or c<=0) or (a+b)<=c or (a+c)<=b or (b+c)<=a:
        print("Tam giác không hợp lệ")
    else:
        cv = a+b+c
        p = cv/2
        dt = sqrt(p*(p-a)*(p-b)*(p-c))

        print("Diện tích = ", dt)

"""
    Bài 3: Tính điểm trung bình
"""

def TinhDTB():
    toan,ly,hoa = eval(input("Nhập điểm toán,lý,hóa:"))
    dtb = (toan+ly+hoa) / 3
    print("Điểm trung bình", dtb)
    print("Điểm làm tròn",round(dtb,2))

"""
    Bài 4: Những giá trị có thể xuất hiện khi chạy randrange(0,100)
            4.5,34,-1,100,0,99
    
    Bài 5: Tính và xuất độ dài đoạn AB: xem clip

    Bài 6: Tính log: xem clip

    Bài 7: Tính căn bặc 2: xem clip

    Bài 8: Vẽ hình: xem clip
"""