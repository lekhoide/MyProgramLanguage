# Module đơn giản là tạo file Python, một Module có thể rỗng
# Tuy nhiên đặt tên Module có chút ràng buộc
    # Muốn sử dụng Module ta sẽ lưu Module vào một biến
    # biến đó thuộc lớp Module
    # Là biến thì tuân theo quy tắc đặt tên biến
    # Các module được tạo cùng một thư mục
# Extension Module: là những file Python được viết bởi những ngôn ngữ lập trình khác
# Mô hình:
    # File module sẽ chạy và tạo một module object lưu dưới tên biến
    # Module object có các attribute và method lầm lượt các biến và hàm


# Ví dụ 1
# a.py
# text = "lekhoide"
# def pout(name):
#     print("Hello",name)
# pout(text)

# Ví dụ 2
# print("imported")
# def say(something):
#     print(something)

# Ví dụ 3
# print("Ví dụ 3")
# var_module_a = 10
# def func_module_a():
    # local_var = 20
    # print("run function of module a")

# Ví dụ 7:
# num = 20
# lst = [1,2,3]

# Ví dụ 8: Reload Module
# var = 10

# Ví dụ 9: Đổi tên module, attribute khi import
short_name = 10
a_long_name_for_a_variable = 20
def a_long_name_for_a_function():
    print("lekhoide")

# Ví du 11: Folder __pycahe__
    # Sẽ giúp code chạy nhanh hơn lần thứ 2 trở đi
    # Sinh ra khi bạn import được biên dịch (import) ra
    # Nếu bạn không muốn Folder này thì cmd: python -B file.py