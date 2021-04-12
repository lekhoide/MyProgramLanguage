# Toán tử %
# %s dùng __str__ string
# $r dùng _repr__ 
# %d lấy số nguyên
# %f lấy số thực
# %.<số>f lấy số thực và lấy bao nhiêu qua số cần lấy
a = 'My team is %s %s years old' %('1','2')
print(a)

b = "%s %s"
c = b %('1','2')
print(c)

d = '%.0f' %(3.9999)
print(d)

# Định dạng bằng chuỗi f(f-string)
e = 'Le Khoi De Hoc Python'
f = f'{e}'
print(f)

name = 'LeKhoiDe'
phone = '0782657635'
address = '62B Le Dai Hanh'
result = f'Student: {name}\nAddress: {address}\nPhone: {phone}'
print(result)

# Định dạng bằng phương thức Format
g= '1:{0},2:{1}'.format('abc','def')
print(g)

# Căn lề giữa
h = '{:^10}'.format('LKD')
print(h)

# Căn lề trái
h1 = '{:<10}'.format('LKD')
print(h1)

# Căn lề phải
h2 = '{:>10}'.format("LKD")
print(h2)

# Căn lề trái thay thế ký tự khoảng trắng *
h3 = '{:*>10}'.format("LKD")
print(h3)

# Căn lề phải thay thế ký tự khoảng trắng *
h4 = '{:^<10}'.format("LKD")
print(h4)

h5 = '{:*^11}'.format("LKD")
print(h5)

# + ----- + ------------- + --------+
# |id     |   Ho va ten   | Noi sinh|
# |123    |   LeKhoiDe    | VietNam  |
# |6939   |   Brack Obama | Canada    |
# + ----- + --------------+----------+

row1 = "+ {:->6} + {:->15} + {:->10} +".format('','','')
row2 = "| {:<6} | {:^15} | {:>10} |".format('ID','Ho va ten','Noi sinh')
row3 = "| {:<6} | {:^15} | {:>10} |".format('123','LeKhoiDe','VietNam')
row4 = "| {:<6} | {:^15} | {:>10} |".format('456','Brack Obama','USA')
row5 = "+ {:->6} + {:->15} + {:->10} +".format('','','')
print(row1)
print(row2)
print(row3)
print(row4)
print(row5)







