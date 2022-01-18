'''Câu 1: tích chu vi diện tích hình tròn
B1: Sử dụng thư viện math
B2: Công thức chu vi và diện tích hình tròn
Yêu cầu: Nhập bán kính đường tròn. Tính và xuất chu vi, diện tích đường tròn tương ứng
'''
import math
R = int(input("Mời nhập bán kính đường tròn: "))
C = 2*R*math.pi
S = R**2*math.pi
print("Chu vi hình tròn: %.1f" %(C))
print("Diện tích hình tròn: %.1f" %(S))

'''Câu 2: Tính điểm trung bình
B1: Nhập 3 hệ số toán lý hóa
B2: Xuất 3 hệ số toán lý hóa
B3: Viết xuất điểm với 2 số lẻ thập phân
Yêu cầu: Nhập toán, lý, hóa của một học sinh và in ra điểm của học sinh đó
với 2 số lẻ thập phân
NEW: hàm round(số muốn làm tròn,làm tròn bao nhiêu chữ số) làm tròn số thập phân'''

Math = int(input("Mời nhập điểm toán: "))
Physics = int(input("Mời nhập điểm Lý: "))
Chemistry = int(input("Mời nhập điểm Hóa: "))
GPA = (Math + Physics + Chemistry)/3
print("Điểm trung bình: %.2f" %(GPA))

'''Câu 9: Giải thích kết quả tính toán của các biểu thức'''
i1 = 2
i2 = 5
i3 = -3
d1 = 2.0
d2 = 5.0
d3 = -0.5
print("a.Kết quả: ",i1+(i2*i3))
print("b. Kết quả: ",i1+(i2*i3))
print("c. Kết quả: ",i1/(i2+i3))
print("d. Kết quả: ",i1//(i2+i3))
print("e. Kết quả: ",i1/i2+i3,"(Chia trước cộng sau)")
print("f. Kết quả: ",i1//i2+i3,"(Chia nguyên trước cộng sau)")
# ...

'''Câu 10: Hãy viết ngắn gọn lại các lệnh'''
x = 1
y = 1
# x = x + 1
x+=1
# x = x / 2
x/=2
# x = x - 1
x-=1
# x = x + y
x+=y
# x = x - (y+7)
x-=(y+7)
# x = x*2
x*=2


