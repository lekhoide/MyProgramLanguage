'''
    Câu 1: Kiểm tra năm nhuần
    Nhập vào một năm bất kỳ. Kiểm tra có phải năm nhuần hay không. Năm nhuần chia hết cho 4 nhưng không chia hết cho 100 hoặc chia hết cho 400
'''
year = int(input("Mời nhập năm: "))
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print(year,"Là năm nhuần")
else:
    print(year,"Không phải năm nhuần")

'''
    Câu 2: Đếm số ngày trong tháng
    Nhập vào 1 tháng, xuất tháng có bao nhiêu ngày
    1,3,5,7,8,9,10,12 - > 31 ngày
    4,6,9,11 - > 30 ngày
    Nếu tháng 2 thì yêu cầu nhập thêm năm. Năm nhuần thì tháng 2 có 29 ngày. không nhuần thì có 28 ngày
'''

month = int(input("Mời nhập tháng: "))
if month in(1,3,5,7,8,9,10,12):
    day = 31
    print("Tháng",month,"có:",day,"ngày")
elif month in (4,6,9,11):
    day = 30
    print("Tháng",month,"có:",day,"ngày")
elif month==2:
    check_year = int(input("Mơi nhập năm: "))
    if (check_year % 4 == 0 and check_year % 100 != 0) or check_year % 400 == 0:
        day = 29
        print(check_year,"là năm nhuần","có:",day,"ngày")
    else:
        day = 28
        print(check_year,"không phải năm nhuần","có:",day,"ngày")
else:
    print("Tháng",month,"không hợp lệ")

'''
    Câu 3: Giải phương trình bậc 2
    Viết chương trình giải phương trình bậc 2: ax**2 + bx + c = 0
'''
from math import nan, sqrt

a = int(input("Mời nhập số a: "))
b = int(input("Mời nhập số b: "))
c = int(input("Mời nhập số c: "))

'''
    Giải thích while-else
    - Khối lệnh của else sẽ được thực hiện khi điều kiện của While là False
'''
while(a == 0):
    print("Số a không được phép bằng không")
    a = int(input("Mời nhập lại số a: "))
    break
else:
    print("Số a vừa nhập: ",a)
    print("Số b vừa nhập: ",b)
    print("Số c vừa nhập: ",c)
    delta = b**2 - 4*a*c
    print("Ta có delta= ",delta)
    if delta < 0:
        print("Phương trình vô nghiệm")
    elif delta == 0:
        x1 = x2 = -b / 2*a
        print("Nghiệm x1=",x1,"\nNghiệm x2=",x2)
    elif delta > 0:
        x1 = (-b+sqrt(delta))/2*a
        x2 = (-b-sqrt(delta))/2*a
        print("Nghiệm x1=",x1,"\nNghiệm x2=",x2)


'''
    Câu 4: Cho biết kết quả của boolean expression
    Ta có x=3, y=5, z=7
'''
x=3
y=5
z=7

# True
x==3 
# True
x<y
# False
x>=y
# False
x!=y-2
# True
x<10
# True
x>=0 and x<10
# False
x<0 and x<10
# False
x>=0 and x<2
# True
x<0 or x<10
# True
x>0 or x<10
# False
x<0 or x>10

'''
    Câu 5: Hãy cho biết kết quả xuất ra màn hình
'''
def cau5(i,j,k):
    if i<j:
        if j<k:
            i=j
        else:
            j=k
    else:
        if j>k:
            j=i
        else:
            i=k
    print("i =",i,"j =",j,"k =",k)
cau5(3,5,7)
cau5(3,7,5)
cau5(5,3,7)
cau5(5,7,3)
cau5(7,3,5)
cau5(7,5,3)

'''
    Câu 6: Nhập một số n có tối đa 2 chữ số. Hãy cho biết cách đọc ra dạng chữ(n=35 => Ba mươi lăm,n=5 => năm)
'''
n = int(input("Mời bạn nhập n: "))
convert = list(map(int,str(n)))
# Thêm bộ dữ liệu là xong. Còn có cách khác nhưng sẽ phức tạp hơn
so_hoc = {0:"Không",1:"Một",2:"Hai",3:"Ba",4:"Bốn",5:"Năm",6:"Sáu",7:"Bảy",8:"Tám",9:"Chín",10:"Mười"}
if n <= 9:
    for x in convert:
        for key,value in so_hoc.items():
            if x == key:
                print(value)
elif n>=10:
    for key,value in so_hoc.items():
        if n == key:
            print(value)

"""
    Câu 7: Nhập vào một ngày(ngày,tháng,năm). Tìm ngày kế sau ngày vừa nhập(ngày/tháng/năm)
"""

day_cau7 = int(input("Mời nhập ngày: "))
month_cau7 = int(input("Mời nhập tháng: "))
year_cau7 = int(input("Mời nhập năm: "))

if month_cau7 in(1,3,5,7,8,9,10,12):
    if day_cau7 > 31:
        day_cau7 = int(input("Mời nhập lại ngày: "))
        print("Ngày tháng năm vừa nhập: {0}/{1}/{2}".format(day_cau7,month_cau7,year_cau7))
        print("Ngày kế sau ngày vừa nhập: {0}".format(day_cau7-1))
    else:
        print("Ngày tháng năm vừa nhập: {0}/{1}/{2}".format(day_cau7,month_cau7,year_cau7))
        print("Ngày kế sau ngày vừa nhập: {0}".format(day_cau7-1))
elif month_cau7 in (4,6,9,11):
    if day_cau7 > 30:
        day_cau7 = int(input("Mời nhập lại ngày: "))
        print("Ngày tháng năm vừa nhập: {0}/{1}/{2}".format(day_cau7,month_cau7,year_cau7))
        print("Ngày kế sau ngày vừa nhập: {0}".format(day_cau7-1))
    else:
        print("Ngày tháng năm vừa nhập: {0}/{1}/{2}".format(day_cau7,month_cau7,year_cau7))
        print("Ngày kế sau ngày vừa nhập: {0}".format(day_cau7-1))
elif month_cau7==2:
    if (year_cau7 % 4 == 0 and year_cau7 % 100 != 0) or year_cau7 % 400 == 0:
        if day_cau7 > 29:
            day_cau7 = int(input("Mời nhập lại ngày vì là năm nhuần: "))
            print("Ngày tháng năm vừa nhập: {0}/{1}/{2}".format(day_cau7,month_cau7,year_cau7))
            print("Ngày kế sau ngày vừa nhập: {0}".format(day_cau7-1))
        else:
            print("Ngày tháng năm vừa nhập: {0}/{1}/{2}".format(day_cau7,month_cau7,year_cau7))
            print("Ngày kế sau ngày vừa nhập: {0}".format(day_cau7-1))
    else:
        if day_cau7 > 28:
            day_cau7 = int(input("Mời nhập lại ngày vì không là năm nhuần: "))
            print("Ngày tháng năm vừa nhập: {0}/{1}/{2}".format(day_cau7,month_cau7,year_cau7))
            print("Ngày kế sau ngày vừa nhập: {0}".format(day_cau7-1))
        else:
            print("Ngày tháng năm vừa nhập: {0}/{1}/{2}".format(day_cau7,month_cau7,year_cau7))
            print("Ngày kế sau ngày vừa nhập: {0}".format(day_cau7-1))
else:
    print("Không hợp lệ mời nhập lại")


"""
    Câu 8: Nhập hai giá trị a,b và phép toán '+','-','*','/'. Hãy xuất kết quả theo phép toán đã nhập
"""
a = int(input("mời nhập số a: "))
b = int(input("mời nhập số b: "))
phep_tinh = input("Mời nhập phép tính chọn biểu tượng(+ - * /): ")

if phep_tinh == "+":
    print("a + b = {0} + {1} = {2}".format(a,b,a+b))
elif phep_tinh == "-":
    print("a - b = {0} - {1} = {2}".format(a,b,a-b))
elif phep_tinh == "*":
    print("a * b = {0} * {1} = {2}".format(a,b,a*b))
elif phep_tinh == "/":
    print("a / b = {0} / {1} = {2}".format(a,b,a/b))


"""
    Câu 9: Nhập vào một tháng, xuất ra tháng đó thuộc quý mấy trong năm
"""

cau_9 = int(input("Mời nhập tháng: "))

if cau_9 in (1,2,3):
    print("Tháng {0} thuộc quý 1".format(cau_9))
elif cau_9 in (4,5,6):
    print("Tháng {0} thuộc quý 2".format(cau_9))
elif cau_9 in (7,8,9):
    print("Tháng {0} thuộc quý 3".format(cau_9))
elif cau_9 in (10,11,12):
    print("Tháng {0} thuộc quý 4".format(cau_9))
else:
    print("Làm gì có tháng {0} nhập lại dùm".format(cau_9))


"""
    Câu 10: Tính dãy số trang 23/69
    Cho biểu thức toán học
    Viết chương trình phép nhập x,n xuất ra kết quả biểu thức
"""

x_cau10 = int(input("Mời nhập x: "))
n_cau10 = int(input("Mời nhập n: "))
s_cau10=0
for i in range(1,x_cau10+1):
    tu=x_cau10**i
    mau=1
    for j in range(1,i+1):
        mau*=j
    s_cau10+=(tu/mau)
print("s({0},{1})={2}".format(x_cau10,n_cau10,s_cau10))

"""
    Câu 11: Kiểm tra số nguyên tố
    Viết chương trình nhập vào một số kiểm tra có phải là số nguyên tố: Hỏi người dùng có tiếp tục sử dụng phần mềm
"""
while True:
    n_cau11 = int(input("Mời nhập một số: "))
    if n_cau11 == 2:
        print("n={0} là số nguyên tố".format(n_cau11))
    elif n_cau11<0:
        print("n={0} không số nguyên tố".format(n_cau11))
    elif n_cau11 % 2 != 0:
        print("n={0} là số nguyên tố".format(n_cau11))
    else:
        print("n={0} không số nguyên tố".format(n_cau11))

    nhap_lai = input("Mời nhập (c/k) để tiếp tục: ")
    if nhap_lai is 'k':
        print("Thoát chương trình")
        break
    else:
        print("Mời bạn tiếp tục sử dụng phần mềm")

"""
    Câu 12: Xuất bảng cửu chương
"""

for i in range(1,11):
    for j in range(2,10):
        line = "{0}*{1:>2} = {2:>2}".format(j,i,i*j)
        print(line,end='\t')
    print()

"""
    Câu 13: Cho biết dấu * xuất hiện bao nhiêu trên màn hình
"""

a_13 = 0
while(a_13 < 100):
    print('*',end='')
    a_13+=1
# Output: 0 den 99 = 100 dau *

"""
    Câu 14: Cho biết dấu * xuất hiện bao nhiêu trên màn hình
"""

a_14 = 0
c_14 = 0
while a_14<100:
    b_14 = 0
    while b_14<40:
        if (a_14 + b_14) % 2 == 0:
            print(c_14,end=' ')
            c_14+=1
        b_14+=1
    a_14+=1

"""
    Câu 15: Giai thich dong lenh range
"""
# (0,5): 0,1,2,3,4
range(5)
# 5,6,7,8,9
range(5,10)
# 5,8,11,14,17
range(5,20,3)
# 20,19,18,17,16,...6
range(20,5,-1)
# 20,17,14,11,8
range(20,5,-3)
# unknown
range(10,5)
# unknown
range(0)
# 10,20,30,...100
range(10,101,10)
# 10,9,8...0
range(10,-1,-1)
# -3,-2,...3
range(-3,4)
# 0,1,2..,9
range(0,10,1)

"""
    Câu 16: Cho biết bao nhiêu dấu * xuất hiện
"""
# 16 + 1 = 17
for a in range(20,100,5):
    print('*',end='')

"""
    Câu 17: Viết lại function thay thế biến done thàng break
"""

# done = False
n_cau17,m_cau17 = 0,100
# Không phải False và giá trị n khác m
while n_cau17!=m_cau17:
    n_cau17 = int(input())
    if n_cau17<0:
        break
    print("n = ",n_cau17)





