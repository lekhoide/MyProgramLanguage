# Học các phương thức trong List:
#   + count
#   + index
#   + copy
#   + clear
#   + append: thêm giá trị vào list
#   + extend
#   + insert
#   + pop
#   + reverse
#   + sort
#   + map


a = [1,2,3,4,5,6,8]
# Count ở đây giống phương thức count ở chuỗi trả về số nguyên
# đếm số lần xuất hiện trong mảng
b = a.count(1)
# Index trả về vị trí nằm trong List
b1 = a.index(8)
# Copy tạo ra bản sao giống như List Constructor
b2 = a.copy()
b2[6] = 1996
# Clear là xóa một List
b3 = a.clear()

# Ví dụ về clear()
tien_de = [50]
tien_de_an = tien_de
print(tien_de)
print(tien_de_an)
tien_de_an.clear()
print(tien_de)
print(tien_de_an)

# Append thêm giá trị vào list
a.append(4)
# Extend lấy từng giá trị thêm vào list
a.extend([1,2,3])
# Insert(vị trí i,số insert)
a.insert(1,5)
# Pop bỏ đi phần tử thứ i trong list, nếu không có giá trị truyền vào thì là phần tử cuối cùng
a.pop(0)
# Remove: bỏ đi giá trị phần tử
a.remove(5)
# Reversed ra list đảo ngược lại
a.reverse()
# Sort sắp xếp nhỏ đến lớn, reverse: true đảo ngược lại
a.sort(reverse=True)

print(
    a,
    "\nCount:",b,
    "\nIndex:",b1,
    "\nCopy:",b2,
    "\nClear:",b3,
    "\nAppend",a,
    "\nExtend:",a,
    "\nInsert:",a
)

# Bài tập
# Câu 1: Vẫn chạy không báo lỗi
# Câu 2: Không vì không thể sắp xếp mảng theo mảng
