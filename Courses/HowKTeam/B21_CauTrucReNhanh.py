# If: nếu thì
# if expression:
    # if block
# Cùng một tab là một block
# If có thể lồng nhau
a = 6
b = -2
if a - 1 < 0:
    print("a nhỏ hơn 1")
    if b - 1 < 0:
        print("b nhỏ hơn 1")

# Ví dụ về khối Big
if a - 1 < 0:
    print("a nhỏ hơn 1")
elif a- 2 < 0:
    print("a nhỏ hơn 2")
elif a - 3 < 0:
    print("a nhỏ hơn 3")
elif a - 4 < 0:
    print("a nhỏ hơn 4")
elif a - 5 < 0:
    print("a nhỏ hơn 5")
else:
    print("Đi vào đây")


# Ví dụ về if else
if b + 1 > 0:
    print("b lớn hơn 0")
else:
    print("b nhỏ hơn 0")


# Code Block trong python
    # Câu lệnh mở block kết thúc bằng dấu hai chấm (:), sau khi sử dụng câu lệnh có dấu hai chấm (:) buộc phải xuống dòng và lùi lề vào trong và có tối thiểu một câu lệnh để không bỏ trống block.
    # Những dòng code cùng lề thì là cùng một block.
    # Một block có thể có nhiều block khác.
    # Khi căn lề block không sử dụng cả tab lẫn space.
    # Nên sử dụng 4 space để căn lề một block

# Bài tập củng cổ: Nhập từ bàn phím 3 số, in ra số lớn nhất trong 3 số
num1 = int(input("Nhập num1: "))
num2 = int(input("Nhập num2: "))
num3 = int(input("Nhập num3: "))

# C1
# if num1.isdigit() and num2.isdigit() and num3.isdigit():
#     print("Cả 3 đều là số")
#     if (num1 >= num2) and (num1 >= num3):
#         largest = num1
#     elif (num2 >= num1) and (num2 >= num3):
#         largest = num2
#     else:
#         largest = num3
#     print("Largest: %r" %largest)
# else:
#     print("Không phải là số")

# C2
if num1 > num2 > num3:
    largest = num1
elif num2 > num3 > num1:
    largest = num2
else:
    largest = num3
print(largest)


