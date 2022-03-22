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

XyLyChuoi("5;7;8;-2;8;11;13;9;10")

