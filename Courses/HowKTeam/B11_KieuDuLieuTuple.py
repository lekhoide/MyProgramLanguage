# Được giới hạn bởi cặp ngoặc ()
# Các phần tử của tupble được
# phân cách nhau bởi dấu,
# tuple có khả năng chứa mọi giá trị,
# tốc độ truy xuất tuple nhanh hơn List
# dung lượng chiếm trong bộ nhớ nhỏ hơn List
# bảo vệ dữ liệu của bạn sẽ không bị thay đổi
# có thể dùng làm key của dictionary

# Chú ý
#   + List là một unhasble object
#   + Tuple và chuỗi đều là dạng hasble object: không thể thay đổi giá trị

tup = (i for i in range(10) if i % 2 == 0)
a = tuple(tup)
print(a)

# Toán tử cộng
tup1 = (1,5,9)
tup1 += (2,4,6)
tup1 *= 2
print(tup1)

# Toán tử in: kiểm tra tồn tại trong tuple
a1 = 2 in tup1
print(a1)

# Lấy phần tử
a2 = tup1[0]
print(a2)

# Hàm len: đếm số phần tử từ 1 -> n
# Lấy ra phần tử ở vị trí cuối: dùng tup[-1]
# Đảo ngược phần tử: dùng tup[::-1]
a3 = tup1[::-1]
print(a3)

# Ma trận và dùng phần từ list trong tuple
tup2 = ([1,5,9,4],[3,4,5,6],(3,5,6,7))
tup2[0][0] = 5
a4 = tup2.count([5,5,9,4])
print(tup2)
print("a4:",a4)

# Hàm index truyền giá trị và in ra vị trí phần tử
tup3 = (1,5,1,9,4)
a5 = tup3.index(1)
print("a5",a5)

# Bài tập
tup4 = (1,2,[3,4])
tup4[2][1] = [50,60]
print(tup4)
