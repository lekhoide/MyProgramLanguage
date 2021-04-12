# Kiểu dữ liệu chuỗi phần 4:
#   + Ép kiểu
#   + capitalize
#   + upper
#   + lower
#   + swapcase
#   + title
#   + center
#   + rjust + ljust
#   + encode
#   + join
#   + replace
#   + strip - rstrip

a = 'LÊ Khôi Đệ'
# Ép kiểu int
# print(int(a))

# Capitalize dùng viết hoa ký tự đầu tiên
b = a.capitalize()
print(b)

# upper dùng để viết hoa
c = a.upper()
print(c)

# lower dùng để viết thường
d = a.lower()
print(d)

# swapcase đùng để viết hoa chữ thường và chữ thường viết hoa
e = a.swapcase()
print(e)

# title viết hoa chữ cái đầu tiên còn lại viết thường
f = a.title()
print(f)

# center căn giữa và điền vào khoảng trắng 
h = a.center(30,'*')
print(h)
# rjust căn trái và ljust căn phải

# encode dùng mã hóa giải mã một chuỗi
g = a.encode(encoding='UTF-8',errors='strict')
print(g)

# join cộng một danh sách và một chuỗi
u = a.join(['1','2','3'])
print("Join",u)

# replace(từ cần thay thế, từ thay thế, số lần thay thế)
r = a.replace('ệ',"ó",0)
print(r)

# strip cắt các chữ nằm ở 2 đầu
n = a.strip('Đệ')
print(n)
# rstrip cắt bên phải và lstrip cắt bên trái
