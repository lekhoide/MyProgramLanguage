"""
    Bài tập rèn luyện: kiểm tra chuỗi đối xứng
"""

from tabnanny import check


def CheckDoiXung(s):
    flag = True
    for i in range(len(s)):
        if s[i] != s[len(s)-i-1]:
            flag=False
            break
    return flag

def main():
    while True:
        s = input("Nhập 1 chuỗi: ")
        if(CheckDoiXung(s)):
            print("Chuỗi bạn nhập đối xứng")
        else:
            print("Chuỗi bạn nhập không đối xứng")
        stop = input("Tiếp tục không?(c/k)")
        if stop == "k":
            break
# main()

"""
    Viết chương trình tối ưu chuỗi
"""

def ToiUuChuoi(s):
    text = s.strip()
    split_text = text.split(' ')
    new_text = ""
    for t in split_text:
        check_t = t
        if len(check_t.strip()) != 0:
            new_text += check_t + " "
    return new_text.strip()

# print(ToiUuChuoi("   Le    Khoi   De  "))


"""
    Tách xử lý chuỗi
"""

def CheckPrime(x):
    dem = 0
    for i in range(1,x+1):
        if x % i == 0:
            dem += 1
    return dem == 2

def XyLyChuoi(s):
    text = s.split(";")
    text = list(map(int,text))
    even_number = [t for t in text if t % 2 == 0]
    negative_number = [t for t in text if t < 0]
    prime_number = [t for t in text if CheckPrime(t)]
    sum_number = 0
    for t in text:
        sum_number += t
    print("Split Text:  %s" % text)
    print("Even number %s" % even_number)
    print("Negative_number %s" % negative_number)
    print("Prime number %s" % prime_number)
    print("Sum number %s" % sum_number)

# XyLyChuoi("5;7;8;-2;8;11;13;9;10")

"""
    Câu 1: Trình bày một số hàm quan trọng trong xử lý Chuỗi của Python
"""

"""
    Câu 2: Viết chương trình cho phép nhập vào 1 chuỗi. Yêu cầu xuất ra
    - Bao nhiêu chữ In Hoa
    - Bao nhiêu chữ in thường
    - Bao nhiêu chữ là chữ số
    - Bao nhiêu chữ là ký tự dặc biệt
    - Bao nhiêu chữ là khoảng trắng
    - Bao nhiêu chữ là Nguyên Âm
    - Bao nhiêu chữ là Phụ âm
"""

"""
    Câu 3: Đề xuât ra các số nguyên âm trong chuỗi
    Ví dụ: nhập vào chuỗi "abc-5xyz-12k91--p" xuất ra được 2 số nguyên âm đó là -5 và -12
"""

def NegativeNumberInString(self):
    split_str = list(self)
    list_str = []
    for nega in range(1,len(split_str)):
        if split_str[nega].isnumeric() and split_str[nega-1] == "-":
            list_str.append(split_str[nega-1]+split_str[nega])
    return [int(number) for number in list_str]

print(NegativeNumberInString("abc-5xyz-12k91--p"))


"""
    Câu 4: Tối ưu chuỗi: không chứa các khoảng trắng dư thừa, các từ cách nhau
    bởi một khoảng trắng. Ký tự đầu tiên của các từ Viết Hoa
    Vd: LÊ   khÔI   đỆ
    Lê Khôi Đệ
"""

def OptimalInString(self):
    """
    1. Không chứa các khoảng trắng dư thừa
    2. Các từ cách nhau bởi một khoảng trắng
    3. Ký tự đầu tiên các từ Viết Hoa
    """
    split_str = self.split(" ")
    list_str = []
    for string in split_str:
        if len(string) != 0:
            list_str.append(string.capitalize())
    self = ' '.join(list_str)
    return self

print(OptimalInString("LÊ   khÔI          đỆ"))



