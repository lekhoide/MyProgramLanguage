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

s = "5;7;8;-2;8;11;-13;9;10"
arr = s.split(';')
sochan = 0
soam = 0
sont = 0
sum = 0
for x in arr:
    print(x)
    number = int(x)
    if number % 2 == 0:
        sochan+=1
    if number < 0:
        soam+=1
    if CheckPrime(number):
        sont+=1
    sum+=number
print("Số chẵn =",sochan)
print("Số âm =", soam)
print("Số Nguyên tố = ", sont)
print("Trung bình =", sum/len(arr))

