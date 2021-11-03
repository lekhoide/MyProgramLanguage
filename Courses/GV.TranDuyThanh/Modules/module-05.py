"""
    Câu 1: Kiểm tra chuỗi đối xứng
    dùng vòng lặp while, nhập vào một chuỗi - xuất chuỗi có phải đối xứng hay không?
    Hỏi người dùng có tiếp tục phần mềm. Nếu tiếp tục nhập chuỗi mới, còn không thì thoát
    thông báo cảm ơn 
"""

def CheckDoiXung(s):
    flag = True
    for i in range(len(s)):
        if s[i] != s[len(s) - i - 1]:
            flag = False
            break
    return flag

def main():
    print("Nhập một chuỗi: ")
    s = input()
    if (CheckDoiXung(s)):
        print("Chuỗi bạn nhập đối xứng")
    else:
        print("Chuỗi bạn nhập không đối xứng")
# while(True):
#     main()
#     print("Tiếp tục (c/k): ")
#     s = input()
#     if s == 'k':
#         break
# print("Cảm ơn")

"""
    Câu 2: Viết chương trình tối ưu chuỗi
    Một chuỗi được gọi là tối ưu khi: không chứa các khoảng trắng dư thừa, các từ cách
    nhau bởi khoảng trắng
"""

def ToiUuChuoi(s):
    s2 = s
    # Cắt các ký tự khoảng trống nằm ở 2 đầu
    s2 = s2.strip()
    # Lấy chuỗi vừa cắt tạo thành mảng array - các khoảng trống là một phần tử
    arr = s2.split(' ')
    # Đặt s2 về null
    s2 = ""
    for x in arr:
        word = x
        if len(word.strip()) != 0:
            s2 = s2 + word + " "
    return s2.strip()

# s = "   Lê   Khôi    Đệ"
# print(s,"=>",len(s))
# s = ToiUuChuoi(s)
# print(s,"=>",len(s))

"""
    Câu 3: Xử lý Tách chuỗi
    Cho 1 chuỗi:
        Xuất các các chữ số trên các dòng riêng biệt
        Xuất có bao nhiêu chữ số chẵn
        Xuất có bao nhiêu số âm
        Xuất có bao nhiêu chữ số nguyên tố
        Tính giá trị trung bình
"""

def CheckPrime(x):
    dem = 0
    for i in range(1,x+1):
        if x % i == 0:
            dem += 1
    return dem == 2

# s = "5;7;8;-2;8;11;-13;9;10"
# arr = s.split(';')
# sochan = 0
# soam = 0
# sont = 0
# sum = 0
# for x in arr:
#     print(x)
#     number = int(x)
#     if number % 2 == 0:
#         sochan+=1
#     if number < 0:
#         soam+=1
#     if CheckPrime(number):
#         sont+=1
#     sum+=number
# print("Số chẵn =",sochan)
# print("Số âm =", soam)
# print("Số Nguyên tố = ", sont)
# print("Trung bình =", sum/len(arr))


"""
    Câu 4: Các hàm quan trọng trong xử lý chuỗi của Python
    trình bày một số hàm quan trọng xử lý chuỗi của Python
"""

# name_cau4 = " Lê Khôi Đệ"
# upper đưa chuỗi về in HOA
# lower đưa chuỗi về in thường
# print(name_cau4.upper())
# print(name_cau4.lower())

# rjust căn lề phải
# ljust căn lề trái
# center căn giữa
# word_4 = " ABCD"
# print(word_4.rjust(10,"*"))
# Output: ABCD nếu số ký tự chèn nhỏ hơn chuỗi gốc thì không có gì thay đổi
# print(word_4.rjust(3,"*"))
# Output: ABCD nếu số ký tự muốn chèn nhỏ hơn Chuỗi gốc thì không có gì thay đổi
# print(word_4.ljust(1))
# print(word_4.ljust(10,'*'))
# Output: ABCD số lượng căn giữa mà nhỏ hơn số ký tự gốc thì không có gì thay đổi
# print(word_4.center(10,'*'))

# strip: hàm xóa khoảng trắng dư thừa
# print(word_4.__len__())
# word_4 = word_4.strip()
# print(word_4.__len__())

# startsWith: kiểm tra chuỗi có bắt đầu bằng một chuỗi con nào đó hay không
# endsWith: kiểm tra chuỗi có kết thúc bằng một chuỗi con nào đó hay không
# print(word_4.startswith("A"))
# print(word_4.endswith("D"))

# find: trả về vị trí đầu tiên tìm thấy
# rfind: trả về vị trí cuối cùng tìm thấy. Nếu không thấy sẽ trả về -1
# print(word_4.find('C'))
# print(word_4.rfind(''))

# Hàm count trả về số lần xuât hiện của Chuỗi con trong Chuỗi gốc, không tồn tại trả về 0
# print(word_4.count("A"))

# formant sử dụng {} để dành chỗ xuất dữ liệu
# a_4 = 5
# b_4 = 9
# c_4 = a_4/b_4
# word_5 = "{0}/{1}={2}".format(a_4,b_4,c_4)
# print(word_5)

# substring
# word_6 = "Hello World!"
# print(word_6[2:])
# print(word_6[:2])
# print(word_6[:-2])
# print(word_6[-2:])
# print(word_6[2:-2])
# print(word_6[6:11])

# split: dùng để tách chuỗi thành mảng các chuỗi con
# word_7 = "sv007;Nguyễn Thị Tẹt;1/1/1999"
# arr_4 = word_7.split(';')
# for x in arr_4:
#     print(x)

# join: dùng để nối chuỗi
# word_8 = ','
# word_8 = word_8.join(arr_4)
# print(word_8)

"""
    Câu 5: Xử lý chuỗi với hàm cơ bản
    Viết chương trình nhập vào một chuối
    - Bao nhiêu chữ in HOA
    - Bao nhiêu chữ in thường
    - Bao nhiêu chữ là chữ số
    - Bao nhiêu chữ là ký tự đặc biệt
    - Bao nhiêu chữ là khoảng trắng
    - Bao nhiêu chữ là nguyên âm
    - Bao nhiêu chữ là phụ âm
"""

def checkChuoi(str):
    inHoa = 0
    inThuong = 0
    chuSo = 0
    khoangTrang = 0
    kyTuDB = 0
    nguyenAm = 0
    phuAm = 0
    for i in str:
        if i.isupper():
            inHoa += 1
        if i.islower():
            inThuong += 1
        if i.isdigit():
            chuSo += 1
        if not i.isalnum():
            kyTuDB += 1
        if i.isspace():
            khoangTrang += 1
        if i in ['a', 'ă', 'â', 'e', 'ê', 'i', 'o', 'ô', 'ơ', 'u', 'ư', 'y']:
            nguyenAm += 1
        else:
            phuAm += 1
    print("Có",inHoa,"chữ in hoa")
    print("Có",inThuong,"chữ in thường")
    print("Có",chuSo,"chữ số")
    print("Có",kyTuDB,"ký tự đặc biệt")
    print("Có",khoangTrang,"chữ khoảng trắng")
    print("Có",nguyenAm,"nguyên âm")
    print("Có",phuAm,"phụ âm")   

# str_5 = "Lê Khôi Đệ 05 &"
# checkChuoi(str_5)

"""
    Câu 6: Trích lọc số âm trong chuỗi

"""
def NegativeNumberInString(str):
    arr = []
    i = 0
    while i < len(str):
        newStr = ''
        if(str[i] == '-'):
            newStr = str[i]
            while str[i+1].isdigit():
                newStr += str[i+1]
                i = i + 1
            if(newStr != '-'):
                arr.append(newStr)
        i=i+1
    return arr

str_6 = "abc-5xyz-12k91--p"
print(NegativeNumberInString(str_6))









