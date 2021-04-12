# Một Set gồm các yếu tố sau:
#   Được giới hạn bởi cặp ngoặc {}, tất cả những gì nằm trong đó là những phần tử của Set.
#   Các phần tử của Set được phân cách nhau ra bởi dấu phẩy (,).
#   Set không chứa nhiều hơn 1 phần tử trùng lặp
#   Không lưu được list
#   Không thể tạo một empy set
#   Không quan tâm vị trí cá phần tử
#   Không phải là một hashable object

set_1 = {69,96}
print(set_1)
print(type(set_1))

set_2 = {'HowkTeam'}
print(set_2)

set_3 = {('HowkTeam'),69}
print(set_3)

set_4 = set('lekhoide')
print(set_4)

# Toán tử in: kiểm tra một phần tử
print(1 in {1,2,3})
# Toán tử -(XOR): Kết quả trả về các phần tử tồn tại trong Set 1
# mà không tồn tại trong Set
print({1,2,3} - {2,3})
# Toán tử &(và): Trả về một Set chứa các phần tử tồn tại ở Set1 và Set2
print({1,2,3}&{1,4,5})
# Toán tử |(hoặc): trả về một Set chứa tât cả phần từ tồn tại trong 2 Set
print({1,2,3}|{4,5})
# Toán tử ^: trả về một Set chứa tất cả phần tử tồn tại ở một trong hai Set
print({1,2,3} ^ {1,4})

# Phương thức Clear: làm sạch
set_5 = {1,2,3}
set_5.clear()
print(set_5)

# Phương thức pop: lấy ra giá trị hoàn toàn ở vị trí đầu
set5 = {3,4,5}
set5.pop()
print(set5)

# Phương thức remove: truyền giá trị cần remove
set5.remove(5)
print(set5)

# Phương thức discard: giống như remove nhưng kop báo lỗi
set5.discard(4)
print(set5)

# Phương thức copy
set5 = set_5.copy()
print(set5)

# Phương thức add
set5.add(1)
print(set5)

# Ví dụ set không phải là hashable object
vd1 = {1,2,3,4}
print(id(vd1))
vd1.add(5)
print(id(vd1))

# Bài tập: tại vì nó dùng chung một danh sách set. Để giải quyết ta cần khai báo b = set(a) để khắc phục
# Dùng phương thức copy
a = {1,2}
print(a)
b = a
b.clear()
print(b)