"""
    1. capitalize: In hoa chữ cái đầu tiên \ Chữ cái từ đầu tiên
    2. upper: In hoa toàn bộ chữ cái
    3. lower: In thường toàn bộ chữ cái
    4. swapcase: chữ thường thành chữ hoa và chữ hoa thành chữ thường
    5. title: In hoa chữ cái từ đầu
    6. center: Thêm ký tự vào 2 đầu và căn width center
    7. rjust + ljust : Thêm ký tự vào đầu trái hay phải và căn width right or left
    8. encode: mã hóa giải mã chuỗi
    9. (*)join: nối chuỗi dùng phần list
    10. replace: thay thế ký tự
    11. strip - lstrip - rstrip: cắt ký tự ở 2 đầu | ở bên trái | ở bên phải
"""

word = 'python is a program Language'

# 1
print('Expect = Python is a program language \nResult = %s' %(word.capitalize()))

# 2
print('Expect = PYTHON IS A PROGRAM LANGUAGE \nResult = %s' %(word.upper()))

# 3
print('Expect = Python is a program language \nResult = %s' %(word.lower()))

# 4
print('Expect = PYTHON IS A PROGRAM lANGUAGE \nResult = %s' %(word.swapcase()))

# 5
print('Expect = Python Is A Program Language \nResult = %s' %(word.title()))

# 6
print('Expect = *python is a program Language* \nResult = %s' %(word.center(30,'*')))

# 7
print('Expect = **python is a program Language \nResult = %s' %(word.rjust(30,'*')))
print('Expect = python is a program Language** \nResult = %s' %(word.ljust(30,'*')))

# 8
print('Expect = python is a program Language \nResult = %s' %(word.encode(encoding='UTF-8',errors='strict')))

# 10
print('Expect = pythom is a program Lamguage \nResult = %s' %(word.replace('n','m')))
print('Expect = pythom is a program Lamguage \nResult = %s' %(word.replace('n','m',1)))

# 11
print('Expect = python is a program Language \nResult = %s' %(word.strip('py')))
print('Expect = is a program Language \nResult = %s' %(word.rstrip('Language')))
print('Expect = is a program Language \nResult = %s' %(word.lstrip('python')))

