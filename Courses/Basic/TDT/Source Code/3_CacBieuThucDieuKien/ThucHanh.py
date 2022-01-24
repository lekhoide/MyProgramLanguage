"""
Bài 1: Kiểm tra năm nhuần
"""


from math import sqrt
from platform import java_ver


def KiemTraNamNhuan():
    year = int(input("Mời bạn nhập số năm: "))
    if (year % 4) == 0:
        print("{0} là năm nhuận".format(year))
    else:
        print("{0} không là năm nhuận".format(year))

# KiemTraNamNhuan()

"""
Bài 2: Đếm số ngày trong tháng
"""

def DemSoNgayTrongThang():
    month = int(input("Mời bạn nhập một tháng: "))
    if month in (1,3,5,7,8,10,12):
        print("Tháng {0} có 31 ngày".format(month))
    elif month in (4,6,9,11):
        print("Tháng {0} có 30 ngày".format(month))
    elif month == 2:
        year = int((input("Mời bạn nhập năm: ")))
        if year % 4 == 0:
            print("{0} là năm nhuận nên tháng {1} có 29 ngày".format(year,month))
        else:
            print("{0} không là năm nhuận nên tháng {1} có 28 ngày".format(year,month))
    else:
        print("Tháng {0} không hợp lệ".format(month))

# DemSoNgayTrongThang()

"""
Bài 3: Phương trình bậc 2
"""

def PhuongTrinhBac2():
    a = float(input("Nhập số a: "))
    b = float(input("Nhập số b: "))
    c = float(input("Nhập số c: "))

    if a == 0:
        pass
        if b == 0 and c == 0:
            print("VSN")
        elif b == 0 and c != 0:
            print("VN")
        else:
            x = c/b
            print("x = ", x)
    else:
        delta = b**2 - 4*a*c
        if delta < 0:
            print("VN")
        elif delta == 0:
            x1 = x2 = - (b / 2*a)
            print("x1 = x2 =", x1)
        else:
            x1 = (-b + sqrt(delta)) / (2*a)
            x2 = (-b - sqrt(delta)) / (2*a)
            print("x1 = ", x1, "x2 = ", x2)

# PhuongTrinhBac2()

"""
Bài 4: Bài tập tự rèn luyện câu 1
"""

def TuRenLuyenCau1():
    x = 3
    y = 5
    z = 7
    if x == 3: # True
        print("(a) True")
    if x < y: #True
        print("(b) True")
    if x >= y: #False
        pass
    if x <= y: #True
        print("(d) True")
    if x != y-2: #False
        pass
    if x < 10: #True
        print("(f) True")
    if x >= 0 and x < 10: #True
        print("(g) True")
    if x < 0 and x < 10: #False
        pass
    if x >= 0 and x < 2: #False
        pass
    if x < 0 or x < 10: #True
        print("(j) True")
    if x > 0 or x < 10: #True
        print("(k) True")
    if x < 0 or x > 10: #False
        pass

# TuRenLuyenCau1()

"""
Bài 5: Bài tập tự rèn luyện câu 2
"""

def TuRenLuyenCau2(i, j, k):
    if i < j:
        if j < k:
            i = j
        else:
            j = k
    else:
        if j > k:
            j = i
        else:
            i = k
    print("i =", i, "j =", j, "k =", k)

# TuRenLuyenCau2(3,5,7) #(a) i=5, j=5, k=7
# TuRenLuyenCau2(3,7,5) #(b) i=3, j=5, k=5
# TuRenLuyenCau2(5,3,7) #(c) i=7, j=3, k=7
# TuRenLuyenCau2(5,7,3) #(d) i=5, j=3, k=3
# TuRenLuyenCau2(7,3,5) #(e) i=5, j=3, k=5
# TuRenLuyenCau2(7,5,3) #(f) i=7, j=7, k=3

"""
    Bài 6: Nhập một số n có tối đa 2 chữ số. Hãy cho biết cách đọc ra dạng chữ
    Bài 7: Nhập vào một ngày(ngày, tháng, năm). Tìm ngày kế sau ngày vừa nhập
    Bài 8: Nhập vào 2 giá trị a, b và phép toán cộng trừ nhân chia. Hãy xuất kết quả
    Bài 9: Nhập vào 1 tháng xuất ra tháng đó thuộc quý mấy trong năm

"""
