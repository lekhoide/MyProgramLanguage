"""
    Câu 1: Viết hàm để tính diện tích tam giác
    Nhập vào 3 cạnh của tam giác. Kiểm tra tính hợp lệ của tam giác.
    Sau đó tính diện tích theo công thức Herong
"""

from math import sqrt

while(True):
    a_1 = float(input("Mời nhập số a: "))
    b_1 = float(input("Mời nhập số b: "))
    c_1 = float(input("Mời nhập số c: "))

    if(a_1<=0 or b_1<=0 or c_1<=0) or (a_1+b_1)<=c_1 or (a_1+c_1)<=b_1 or (b_1+c_1)<=a_1:
        print("Tam giác không hợp lệ. Mời nhập lại")
    else:
        cv_1 = a_1 + b_1 + c_1
        p_1 = cv_1/2
        dt_1 = sqrt(p_1*(p_1-a_1)*(p_1-b_1)*(p_1-c_1))
        print("Diện tích =",dt_1)
        break

"""
    Câu 2: Viết hàm để chơi game Đoán số
    Máy ra 1 số trong đoạn [1...100]
    Người chơi đoán số, chỉ được phép đoán sai 7 lần. Mỗi lần đoán sẽ thông báo số người chơi
    đoán nhỏ hơn hay lớn hơn số của máy và hiển thị số lần đoán
    Game kết thúc khi: đoán sai quá 7 lần hoặc đoán trung trước 7 lần
    Sau khi game kết thúc hỏi người chơi có tiếp tục hay không
"""

from random import randrange

while True:
    somay=randrange(1,11)
    solandoan=0
    win=False
    while solandoan < 7:
        solandoan+=1
        songuoi=int(input("Máy đoán [1..10], mời bạn đoán: "))
        print("Bạn đoán lần thứ",solandoan)
        if somay==songuoi:
            print("Chúc mừng bạn đoán đúng, số máy là = ",somay)
            win=True
            break
        if somay>songuoi:
            print("Bạn đoán sai, số máy > số bạn")
        elif somay<songuoi:
            print("Bạn đoán sai, số máy < số bạn")
    if win ==False:
        print("Game Over!, số máy =",somay)
    hoi=input("Tiếp không")
    if hoi is 'k':
        break

"""
    Câu 3: Viết hàm tính BMI
    Gọi BMI là chỉ số cân đối cơ thể. Yêu cầu đầu vào nhập là chiều cao và cân nặng
    hãy cho biết người này như thế nào, biết rằng
"""

def BMI(height,weight):
    return weight/(height**2)

def PhanLoai(bmi):
    if bmi < 18.5:
        return "Gầy"
    elif bmi<24.9:
        return "Bình thường"
    elif bmi<=29.9:
        return "Hơi béo"
    elif bmi<=34.9:
        return "Béo phì cấp độ 1"
    elif bmi<=39.9:
        return "Béo phì cấp độ 2"
    else:
        return "Béo phì cấp độ 3"
    
def NguyCoBenh(bmi):
    if bmi<18.5:
        return "Thấp"
    elif bmi<=24.9:
        return "Trung Bình"
    elif bmi<=29.9:
        return "Cao"
    elif bmi<=34.9:
        return "Cao"
    elif bmi<=39.9:
        return "Rất cao"
    else:
        return "Nguy hiểm"

# print("Nhập vào chiều cao: ")
# height = float(input())
# print("Nhập vào cân nặng: ")
# weight=float(input())
# bmi=BMI(height,weight)
# print("BMI của bạn",bmi)
# print("Phân loại của bạn=",PhanLoai(bmi))
# print("Nguy cơ bệnh của Thím=",NguyCoBenh(bmi))

"""
    Câu 4: Viết hàm tính ROI
"""

def ROI(dt,cp):
    return (dt-cp)/cp
def GoiYDauTu(roi):
    if roi>=0.75:
        return "Nên đầu tư"
    else:
        return "Không nên đầu tư"

# print("Chương trình tính ROI")
# dt = int(input("Nhập doanh thu: "))
# cp = int(input("Nhập chi phí: "))
# roi = ROI(dt,cp)
# print("Tỉ lệ ROI=",roi)
# print("==>",GoiYDauTu(roi))

"""
    Câu 5: Viết hàm đệ qui Fibonacci
"""

def fibonacci(n):
    if n<=2:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)

def listfibo(n):
    for i in range(1,n+1):
        print(fibonacci(i),end='\t')

# print(fibonacci(9))
# listfibo(9)

"""
    Câu 6: Những giá trị nào có thể xuất hiện trong randrange(0,100)
"""

def randrange():
    for i in range(0,100):
        print(i)

# randrange() # 0, 34, 99 xuất hiện và -1, 4.5, 100 không xuất hiện

"""
    Câu 7: Tính và xuất độ dài đoạn AB
"""

# xA = int(input("Mời nhập tọa độ xA"))
# yA = int(input("Mời nhập tọa độ yA"))

# xB = int(input("Mời nhập tọa độ xB"))
# yB = int(input("Mời nhập tọa độ yB"))

def doDaiAB(xB,xA,yB,yA):
    a = sqrt((xB-xA)**2 + (yB-yA)**2)
    print(a)

# doDaiAB(5,3,3,5)

"""
    Câu 8: Viết chương trình tính logax
    a,x là các số thực nhập vào từ bàn phím, x>0 và a>0 a!=1(logax=lnx/lna)
"""
import math

def tinhLog():
    a_8 = float(input("Mời bạn nhập a: "))
    x_8 = float(input("Mời bạn nhập x: "))

    if a_8 > 0 and x_8 > 0 and a_8 != 1:
        logax = math.log(x_8) / math.log(a_8)
        print(logax)
    else:
        print("Nhập không đúng mời nhập lại")

tinhLog()






