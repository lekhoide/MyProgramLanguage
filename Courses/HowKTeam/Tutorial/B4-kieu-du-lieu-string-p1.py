"""
    1. Kiểu chuỗi chuẩn SOLID
    2. Nối chuỗi
    3. In ra một đoạn chuỗi
    4. In ra các ký tự trong chuỗi
    5. In ra chiều dài của một chuỗi
    6. Ép kiểu
    7. In và xử lý chuỗi
    8. In chuỗi sử dụng format
"""

# 2.1 Concatenated(nối các biến) + thêm toán tử nhân
print(f'Expect = unununium => Result = {3*"un" + "ium"}')
# 2.2 Concatenated sử dụng escape, và không thể sử dụng biến để nối cho trường hợp này
print(f'Expect = Python => Result = {"Py" "thon"}')

# 3.1 Cách thức in ra một đoạn chuỗi
text = ('Put several strings within parentheses '
        'to have them joined together.')
print(text)

# 4.1 Định nghĩa indexed cho ký tự chuỗi
'''

 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 0   1   2   3   4   5   6
-6  -5  -4  -3  -2  -1

'''
word = 'Python'

# 4.2 Substring(chuỗi con): the start is always 0, the end is always len(word) - 1 
print(f'Expect = py => Answer is = {word[0:2]}')
print(f'Expect = Pytho => Answer is = {word[:5]}')

# 4.3 Substring and Concatenate
print(f'Expect = Python => Answer is = {word[:3] + word[3:]}')

# 4.4 Concatenated
print(f'Expect = Python is a program language \nResult = {word[0:6] + " is a program language"}')

# 4.5 [a:b:c]: a the start, b the end, c the jump
# c the jump: is always 1
# None có thể sử dụng ở a,b,c
print(f'Expect = Pto => Result = {word[0:6:2]}')

# 5.1 Return length of a string
s = 'supercalifragilisticexpialidocious'
print(f'Expect = 34 => Result = {len(s)}')


# 6.1 Concatenate and ép kiểu
epKieuInt = int('0110196')
epKieuString = str(25)
print(f'Expect = int and string => Result = {type(epKieuInt)}+" and " {type(epKieuString)}')

# 7.1 Giải thích các function in chuỗi đồng thời xử lý chuỗi
'''
%s : string
%d : lấy số nguyên (13.444 => 13)
%.(number)f: lấy số thực (13.444 => 13.444)
%r : None

'''
pi = 13.444444

# 7.2 Cách in chuỗi cho các trường hợp
print('Expect = Python 13 13.4 => Result = %s %d %.1f' %(word,pi,pi))

# 8.1 Giới thiệu in bằng format
'''
 + ----- + ------------- + --------+
 |id     |   Ho va ten   | Noi sinh|
 |1      |   LeKhoiDe    | VietNam |
 |6      |   Brack Obama | Canada  |
 + ----- + ------------- + --------+
'''
print("+ {:->6} + {:->15} + {:->10} +".format('','',''))
print("| {:<6} | {:^15} | {:>10} |".format('ID','Ho va ten','Noi sinh'))
print("| {:<6} | {:^15} | {:>10} |".format('1','LeKhoiDe','VietNam'))
print("| {:<6} | {:^15} | {:>10} |".format('6','Brack Obama','USA'))
print("+ {:->6} + {:->15} + {:->10} +".format('','',''))




