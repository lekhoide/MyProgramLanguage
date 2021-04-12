# Số nguyên - Intergers
a = 4
print("#Intergers",a)
# Loại kiểu dữ liệu của a
print(type(a))

#Số thực - Xấp xỉ 15 số thập phân
b = 1.961234567891234567
print("#Float",b)
print(type(b))


# lấy toàn bộ nội dung thư viện decimal
from decimal import*
# lấy tối đa 30 chữ số phần nguyên và phần thập phân Decimal
getcontext().prec = 3
# Decimal
# Nếu một biểu thức là kiểu dữ liệu Decimal thì cả biểu thức
# được hiểu là Decimal
c = Decimal(10)/3
print("#Decimal",c)
print(type(c))

# Import thư viện fractions
from fractions import*
# Fraction - phân số
d = Fraction(6,9)
print(d)
print(type(d))

d1 = Fraction(5,10)
d2 = d + d1
print("d+d1=",d+d1,"d2=d+d1=",d2)

# Số phức: phần thực + phần ảo*j
e = complex(2,5)
# In phần thực
print(e.real)
# In phần ảo
print(e.imag)

# Toán tử chia nguyên
f = 10/3
# Toán tử thương nguyên
g = 15//-4
# Toán tử lấy số dư khi chia
h = 10%3
# Toán tử lũy thừa
i = 2**2
print(f,g,h,i)

import math
# Trả về số nguyên
print(math.trunc(3.9))
# Trả về số nguyên làm tròn
print(math.fabs(-3))
# Trả về số thực căn bặc hai
print(math.sqrt(16))
# Trả về số nguyên là ước chung lớn nhất
print(math.gcd(6,4))

# Kiểu dữ liệu số nguyên có các lớp: int, float, decimal, fraction, complex

# Là kiểu dữ liệu Intergers a = 0
# Là kiểu dữ liệu float hay decimal b = 0.0

# import math
# math.trunc(15/-4)
# -3
# 15//-4
# -4
# Tại vì hàm trunc lấy số nguyên còn toán tử // thì cũng lấy số nguyên
# nhưng nó làm tròn vì theo lý thuyết kết quả luôn nhỏ hơn hoặc = X/Y



