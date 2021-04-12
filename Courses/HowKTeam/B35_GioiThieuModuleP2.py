# Ta có thể import nhiều module cùng một lúc trên cùng một dòng
# lệnh qua dấu phẩy

# import B34_GioiThieuModuleP1 as a
# import các function riêng lẻ
# from B34_GioiThieuModuleP1 import func_module_a,say
# import hết function
# from B34_GioiThieuModuleP1 import *

# Ví dụ 2
# a.say("Đây là file main")
# a.say("Chạy bởi hàm trong module a")

# Ví dụ 3
# print(type(a))
# print(a.var_module_a)
# a.func_module_a()
# print(a.local_var)

# Ví dụ 4: sử dụng câu lệnh from import
# func_module_a()

# say = a.say

# Xóa hàm
# del a

# say()

# Ví dụ 5: import hay from import để import một module thì chỉ hoạt động một lần
# việc này được coi là expensive operation
# dòng Ví dụ 3 chỉ hiện một lần dù dùng nhiều lẹnh import
# và biến của module object sau khi gán giá trị cũng ko bị reset lại là 10

# import B34_GioiThieuModuleP1 as a
# print(a.var_module_a)
# a.var_module_a = 100
# import B34_GioiThieuModuleP1 as a
# print(a.var_module_a)

# Ví dụ 6: sử dụng from import sau đó sử dụng import thì lần import thứ 2
#  được coi như là một cách reset lại các giá trị của biến
# thuộc module đó
# Vì bản thân sử dụng from import là ta copy, chỉ lấy giá trị
# from B34_GioiThieuModuleP1 import var_module_a
# var_module_a = 100
# import B34_GioiThieuModuleP1 as a
# print(a.var_module_a)

# Ví dụ 7: Lưu ý về list object khi import
# from B34_GioiThieuModuleP1 import num,lst

# num = 200
# lst[0] = 100

# import B34_GioiThieuModuleP1
# print(B34_GioiThieuModuleP1.num)
# print(B34_GioiThieuModuleP1.lst)

# Ví dụ 8: Reload Module
# Python chỉ cho phép import một module một lần, không tự động reload
# nhưng có thể sử dụng hàm reload
# import B34_GioiThieuModuleP1
# B34_GioiThieuModuleP1.var = 20
# print(B34_GioiThieuModuleP1.var)

# import B34_GioiThieuModuleP1
# print(B34_GioiThieuModuleP1.var)

# from importlib import reload

# reload(B34_GioiThieuModuleP1)
# print(B34_GioiThieuModuleP1.var)

# Ví dụ 9:Đổi tên module, attribute khi import
import B34_GioiThieuModuleP1 as module
from B34_GioiThieuModuleP1 import a_long_name_for_a_variable as longvar,a_long_name_for_a_function as longfunc
print(module.short_name)
print(longvar)
longfunc()

# Ví dụ 10: Trường hợp bắt buộc dùng import
import B34_GioiThieuModuleP1 as a
import B34_GioiThieuModuleP1 as b

print(a.a_long_name_for_a_variable)
b.a_long_name_for_a_variable = 0
print(b.a_long_name_for_a_variable)