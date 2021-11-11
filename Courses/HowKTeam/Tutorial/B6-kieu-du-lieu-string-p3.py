"""
  1. split: chuyển chuỗi thành array
  2 partition: chuyển chuỗi thành tupple
  3 count: đếm những ký tự trong chuỗi
  4 startswith - endswith: kiểm tra ký tự đã truyền có đúng ký tự bắt đầu | kết thúc
  5 find - rfind: tìm ký tự ở index. Tự động cắt thành array và output int
  + index - rindex: tìm ký tự rồi trả về index. Thường dùng cho list
  + lower - islower: kiểm tra chuỗi có viết thường
  + upper - isupper: kiểm tra chuỗi có viết hoa
  + digit - isdigit: số - kiểm tra có phải là số
  + space - isspace: kiểm tra chuỗi có khoảng cách

"""

word = 'python is a program Language'

# 1.1
print(f'Expect = [python, is, a, program, Language] => Expect = {word.split()}')

# 2.1
print(f'Expect = (python, is, a program Language) => Expect = {word.partition("is")}')

# 3.1
print(f'Expect = 4 => Expect = {word.count(" ")}')

# 4.1
print(f'Expect = True => Expect = {word.startswith("python")}')
print(f'Expect = False => Expect = {word.endswith("python")}')

# 5.1
print(f'Expect = True => Expect = {word.find("Language")}')

# 6.1
print(f'Expect = 1 => Expect = {word.split().index("program")}')










