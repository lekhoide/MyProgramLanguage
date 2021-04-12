# Kiểu dữ liệu chuỗi Phần 5
#   + split - rsplit
#   + partition - rpartition
#   + count
#   + startswith - endswith
#   + find - rfind
#   + index - rindex
#   + lower - islower
#   + upper - isupper
#   + digit - isdigit: số - kiểm tra có phải là số
#   + space - isspace
# 

# split cắt ra từng phần tử phía trái cắt ra bởi khoảng trắng
# rsplit cắt từ phía bên phải
a = "Le Khoi De"
# Câu lệnh split()[]: hiểu là cắt từ vị trí đã chọn và chọn các từ còn lại nếu 0 là các từ bên trái từ đã chọn và ngược lại
b = a.split('Khoi')[1]
print(a)
print(b)

# partition kiểu dữ liệu ngoặc tròn còn ý nghĩa giống split
# rpartition phía bên phải qua trái
c = a.rpartition("y")
print(c)

# count dem ky tu trong chuoi
# count(kuty,vi tri dau,vi tri cuoi)
d = a.count('e',0,10)
print(d)

# startswith kiem tra trong chuoi xuat phat không có ký tự đầu
# endswith kiểm tra trong chuỗi ký tự cuối có xuât hiện
# startswith("ký tự kiểm tra")
# startswith("ký tự kiểm tra",bắt đầu từ,đến ký tự cuối)
e = a.startswith('h',4,10)
print(e)

# find trả về vị trí số nguyên vị trí đầu tiên
# rfind tìm bên phải qua
f = a.find('e')
print("f",f)

# Index tìm ký tự trong chuỗi trả về kết quả 1 và -1
# rindex
g = a.index('e')
print(g)

# islower có phải nó là chuỗi viết thường
# isupper có phải nó là chuỗi viết hoa
q = a.islower()
print(q)

# isdigit kiểm tra nó có phải là số
w = a.isdigit()
print(w)

# isspace kiểm tra chuỗi có phải khoảng trắng
l = a.isspace()
print(l)

# 'Neu Mot Ngay Nao Do'
# lower: dùng để thay thể các từ viết hoa thành viết thường trong chuỗi
# strip: dùng để bỏ từ mong muốn ở 2 đầu
# lstrip: dùng để cắt các từ mong muốn ở bên trái
# title: viết hoa chữ cái đầu tiên
sy = "aaaAAaaaooaaneu mot Ngay naO Doaaaaaaa"
s1 = sy[12:31].title()
s2 = sy.lower().strip('a').lstrip('oa').title()
print(s1)
print(s2)



