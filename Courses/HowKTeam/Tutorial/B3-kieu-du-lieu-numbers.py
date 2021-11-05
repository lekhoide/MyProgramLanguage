"""
    1. Int
    2. Float : xấp xỉ 15 số thập phân
    3. Decimal : 
    4. Fractions : phân số
    5. Complex : real + imag*j
    6. Math : 

"""

# Todo Decimal
from decimal import*
getcontext().prec = 3 # Lấy tối đa 3 chữ số = phần nguyên . phần thập phân
decimal = Decimal(10)/3
print("Decimal =",decimal)

# Todo Fraction
from fractions import*
a = Fraction(6,9)
b = Fraction(5,10)
c = a + b
print('Fraction c =',c)

# Todo Complex
complex = complex(2,5)
print(f'Complex: {complex.real} + {complex.imag}j = 0')

# Todo Math
import math
print(f'Trả về số nguyên: {math.trunc(3.9)}')
print(f'Trả về số nguyên dương: {math.fabs(-3.1)}')
print(f'Trả về float căn bậc 2: {math.sqrt(16)}')
print(f'Trả về số nguyên là ước chung lớn nhất: {math.gcd(6,4)}')