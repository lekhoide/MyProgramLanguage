"""
    1. (a, b, c)
    2. Có khả năng chứa mọi giá trị, tốc độ truy xuất nhanh hơn List, dung lượng chiếm nhỏ hơn List
    3. Một hashble object: không thể thay đổi giá trị


"""

# Khai báo một tuple
t = 12345, 54321, 'hello!'

# Chuyển kiểu dữ liệu tuple
u = t, (1, 2, 3, 4, 5)

# In giá trị nằm trong phần tử tuple
print(f'Expect = hello! => Resut = {t[2]}')

print(f'Expect = ((12345, 54321, "hello!"), (1, 2, 3, 4, 5)) => Result = {u}')