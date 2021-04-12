# Sự khác biệt hashable và unhashable
# List là unhashable thì dùng hàm
# Tuple là hashable thì dùng toán tử, biết dạng dữ liệu nào cần thay đổi để tối ưu hóa truy xuất
# Ví dụ hash object
s_1 = "lekhoide"
s_2 = "Hoc python"
print(id(s_1))
print(id(s_2))

s_1 = s_1 + "rat hay"
s_2 += "lekhoide"

print(id(s_1))
print(id(s_2))

# Ví dụ unhashable object
s_3 = [1,2]
s_4 = [3,4]
print(id(s_3))
print(id(s_4))

s_3 = s_3 + [0]
s_4 += [0]
print(id(s_3))
print(id(s_4))

# Giới thiệu hàm id: hash số nguyên ko thay đổi, còn lại thay đổi 
# Nếu ta truyền giá trị vào hàm khác thì sẽ có sự thay đổi id
# Nếu không thì vẫn giữ nguyên nếu dùng toán tử
a = id(5)
print(a)

# Toán tử
n = 69
print(n)
# Add thêm một đơn vị
print(n+1)
print(n.__add__(1))
# Trừ một đơn vị
print(n-1)
print(n.__sub__(1))
# Nhân thêm một đơn vị
print(n*2)
print(n.__mul__(2))
# Đơn vị + biến
print(1+n)
print(n.__radd__(1))
# Tạo âm
print(-n)
print(n.__neg__())


c = (1,2)
# Thêm giá trị vào mảng
# c.append(3)
c += (3,4)
print(c)


