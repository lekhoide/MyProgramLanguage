"""
    Câu 4: Các hàm quan trọng trong xử lý chuỗi của Python
    trình bày một số hàm quan trọng xử lý chuỗi của Python
"""

name_cau4 = " Lê Khôi Đệ"
# upper đưa chuỗi về in HOA
# lower đưa chuỗi về in thường
print(name_cau4.upper())
print(name_cau4.lower())

# rjust căn lề phải
# ljust căn lề trái
# center căn giữa
word_4 = " ABCD"
print(word_4.rjust(10,"*"))
# Output: ABCD nếu số ký tự chèn nhỏ hơn chuỗi gốc thì không có gì thay đổi
print(word_4.rjust(3,"*"))
# Output: ABCD nếu số ký tự muốn chèn nhỏ hơn Chuỗi gốc thì không có gì thay đổi
print(word_4.ljust(1))
print(word_4.ljust(10,'*'))
# Output: ABCD số lượng căn giữa mà nhỏ hơn số ký tự gốc thì không có gì thay đổi
print(word_4.center(10,'*'))

# strip: hàm xóa khoảng trắng dư thừa
print(word_4.__len__())
word_4 = word_4.strip()
print(word_4.__len__())

# startsWith: kiểm tra chuỗi có bắt đầu bằng một chuỗi con nào đó hay không
# endsWith: kiểm tra chuỗi có kết thúc bằng một chuỗi con nào đó hay không
print(word_4.startswith("A"))
print(word_4.endswith("D"))

# find: trả về vị trí đầu tiên tìm thấy
# rfind: trả về vị trí cuối cùng tìm thấy. Nếu không thấy sẽ trả về -1
print(word_4.find('C'))
print(word_4.rfind(''))

# Hàm count trả về số lần xuât hiện của Chuỗi con trong Chuỗi gốc, không tồn tại trả về 0
print(word_4.count("A"))

# formant sử dụng {} để dành chỗ xuất dữ liệu
a_4 = 5
b_4 = 9
c_4 = a_4/b_4
word_5 = "{0}/{1}={2}".format(a_4,b_4,c_4)
print(word_5)

# substring
word_6 = "Hello World!"
print(word_6[2:])
print(word_6[:2])
print(word_6[:-2])
print(word_6[-2:])
print(word_6[2:-2])
print(word_6[6:11])

# split: dùng để tách chuỗi thành mảng các chuỗi con
word_7 = "sv007;Nguyễn Thị Tẹt;1/1/1999"
arr_4 = word_7.split(';')
for x in arr_4:
    print(x)

# join: dùng để nối chuỗi
word_8 = ','
word_8 = word_8.join(arr_4)
print(word_8)
