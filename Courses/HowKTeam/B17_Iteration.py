# Là một danh sách mảng

# Nếu được đặt trong dấu ngoặc vuông kiểu list thì...
print([x for x in range(3)])
# Nếu được đặt trong dấu ngoặc tròn thì in ra interable
itera = (x for x in range(4))
print(itera)
# Hàm next truy xuất trong interable
print(next(itera))
# Sum: cộng vào và trả kết quả
# sum(hàm truyền vào,phép tính toán vào hàm)
print(sum(itera,0))
# Phương thức max: in ra giá trị lớn nhất
print(max([1,2,3],default='KTeam'))
# Phương thức min: in ra giá trị nhỏ nhất
print(min([1,2,3],default='KTeam'))
# Phương thức sort
itera1 = [1,6,7,2]
print(itera1)
print(sorted(itera1,reverse=True))