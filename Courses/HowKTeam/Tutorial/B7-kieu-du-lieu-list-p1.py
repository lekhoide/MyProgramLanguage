"""

    1. [string, int, float]
    2. count: đếm các dữ liệu trùng lặp có trong list
    3. index: trả về vị trí index nằm trong list
    4. copy: copy các giá trị trong mảng tạo thành mảng mới
    5. clear: xóa list trả về None
    6. append: thêm giá trị vào cuối list
    7. extend: lấy giá trị của mảng khác thêm vào mảng muốn thêm. Thêm vào cuối
    8. insert: thêm giá trị vào vị trí mong muốn trong list
    9. pop: truyền vị trí index để bỏ ra khỏi list
    10. remove: truyền giá trị để bỏ ra khỏi list
    11. reverse: đảo ngược giá trị list
    12. sort: sắp xếp giá trị list
    13. map(func, iter)
        iter: nói chung của các kiểu list, tuple, dict

"""

squares = [1, 4, 9, 16, 25]

# slicing returns a new list
print(f'Expect = [9,16,25] => Result = {squares[2:]}')

# concatenation(cộng list)
print(f'Expect = [1,4,9,16,25,12,13] => Result = {squares + [12, 13]}')

# use len
print(f'Expect = 5 => Result = {len(squares)}')

# 2.1
print(f'Expect = 1 => Result = {squares.count(1)}')

# 3.1
print(f'Expect = 4 => Result = {squares.index(25)}')

# 5.1
print(f'Expect = None => Result = {squares.clear()}')

# 6.1
extend = [13,14]
squares.extend(extend)
print(f'Expect = [1,4,9,16,25,13,14] => Result = {squares}')

# 7.1
print(f'Expect = [1,abc,4,9,16,25] => Result = {squares.insert(0,1)}')

# 9.1
print(f'Expect = [14] => Result = {squares.pop(1)}')

# 10.1
print(f'Expect = None => Result = {squares.remove(14)}')

# 13.1
print(f'Expect =  => Result = {list(map(lambda n: n+1, squares))}')

print(squares)