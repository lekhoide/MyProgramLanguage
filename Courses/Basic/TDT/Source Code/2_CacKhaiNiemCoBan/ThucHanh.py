"""
Bài 1: Tính chu vi diện tích hình tròn

"""
import math

def ChuViDienTichHinhTron():
    r = float(input("Mời bạn nhập bán kính hình tròn: "))
    cv = 2*math.pi*r
    dt = r**2
    print("Chu vi: ", cv)
    print("Diện tích: ", dt)

# ChuViDienTichHinhTron()

"""
Bài 2: Tính giờ phút giây
"""

def TinhVaXuatThoiGian():
    t = int(input("Mời bạn nhập số giây: "))
    if t <= 43200:
        print("Xuất ra {0}:{1}:{2} AM".format((t // 3600) % 24, (t % 3600) // 60, (t % 3600) % 60))
    else:
        print("Xuất ra {0}:{1}:{2} PM".format((t // 3600) % 24, (t % 3600) // 60, (t % 3600) % 60))

# TinhVaXuatThoiGian()

"""
Bài 3: Tính điểm trung binh học sinh
"""

def DiemTrungBinhHS():
    toan = float(input("Nhập điểm Toán: "))
    ly = float(input("Nhập điểm Lý: "))
    hoa = float(input("Nhập điểm Hóa: "))
    dtb = (toan + ly + hoa) / 3
    print("Điểm trung bình: ", round(dtb, 2))

# DiemTrungBinhHS()

"""
Bài 4: Python hỗ trợ những kiểu dữ liệu cơ bản nào

*Trả lời: kiểu int, str, float
"""

"""
Bài 5: Trình bày các loại ghi chú trong Python

*Trả lời: "#" ghi chú một dòng, ''' ''' ghi chú nhiều dòng
"""

"""
Bài 6: Trình bày ý nghĩa toán tử /, //, %, **, and, or, is

*Trả lời: 
    1. Dấu  /: dùng để chia và lấy số nguyên lẫn dư
    2. Dấu //: dùng để chia và lấy số nguyên
    3. Dấu %: dùng để chia và lấy số dư
    4. Dấu **: lũy thừa
    5. Dấu and: toán tử logic chỉ True khi 1 và 1 còn lại False
    6. Dấu or: toán tử logic chỉ False khi 0 hoặc 0 còn lại True
    7. Dấu is: toán tử so sánh có nằm trong trả về kiểu bool
"""

"""
Bài 7: Trình bày một số cách nhập dữ liệu từ bàn phím

*Trả lời: Ta sử dụng input để nhập dữ liệu từ bàn phím
"""

"""
Bài 8: Trình bày các loại lỗi khi lập trình và cách bắt lỗi trong Python

*Trả lời: Có 3 loại lỗi: lỗi cú pháp, lỗi thực thi, lỗi nghiệp vụ
"""

"""
Bài 9
"""

def TinhGiaTri():
    i1=2
    i2=5
    i3=-3
    d1=2.0
    d2=5.0
    d3=-0.5
    print("(a) ", i1 + (i2*i3)) #13 ==> -13
    print("(b) ", i1 * (i2+i3)) #-4 ==> 4
    print("(c) ", i1 / (i2+i3)) #-0.133333333 ==> 1.0
    print("(d) ", i1 // (i2+i3)) #-0 ==> 1
    print("(e) ", i1 / i2 + i3) #-2.6
    print("(f) ", i1 // i2 + i3) #-3
    print("(g) ", 3 + 4 + 5 / 3) #8.666666667
    print("(h) ", 3 + 4 + 5 // 3) #8
    print("(i) ", (3+4+5) / 3) #4 ==> 4.0
    print("(j) ", (3+4+5) // 3) #4
    print("(k) ", d1 + (d2*d3)) #-0.5
    print("(l) ", d1 + d2 * d3) #-0.5
    print("(m) ", d1 / d2 - d3) #0.9
    print("(n) ", d1 / (d2-d3)) #0.3636363636
    print("(o) ", d1 + d2 + d3 / 3) #6.833333
    print("(p) ", (d1+d2+d3) / 3) #2.166666667
    print("(q) ", d1 + d2 + (d3/3)) #6.8333333
    print("(r) ", 3 * (d1+d2) * (d1-d3)) #52.5

# TinhGiaTri()
