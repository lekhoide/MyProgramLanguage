"""
    Câu 1: Tính BMI
"""
def BMI(height, weight):
    return weight / (height**2)

def PhanLoai(bmi):
    if bmi < 18.5:
        return "Gầy"
    elif bmi <= 24.9:
        return "Bình thường"
    elif bmi <= 29.9:
        return "Hơi béo"
    elif bmi <= 34.9:
        return "Béo phì cấp độ 1"
    elif bmi <= 39.9:
        return "Béo phì cấp độ 2"
    else:
        return "Béo phì cấp độ 3"
def NguyCoBenh(bmi):
    if bmi < 18.5:
        return "Thấp"
    elif bmi <= 24.9:
        return "Trung Bình"
    elif bmi <= 29.9:
        return "Cao"
    elif bmi <= 34.9:
        return "Cao"
    elif bmi <= 39.9:
        return "Rất cao"
    else:
        return "Nguy hiểm"


# height = float(input("Mời nhập chiều cao: "))
# weight = float(input("Mời nhập cân nặng: "))
# bmi = BMI(height, weight)
# print("BMI của bạn = {0} \nPhân loại bạn: {1} \nNguy cơ bệnh của bạn: {2}".format(round(bmi,2),PhanLoai(bmi),NguyCoBenh(bmi)))

"""
    Bài 2: Viết hàm tính ROI
"""
def ROI(dt,cp):
    return (dt-cp)/cp
def GoiYDauTu(roi):
    if roi >= 0.75:
        return "Nên đầu tư"
    else:
        return "Không nên đầu tư"

# dt = int(input("Doanh thu của bạn = "))
# cp = int(input("Chi phí của bạn = "))
# roi = ROI(dt,cp)
# print("ROI của bạn = {0} \nGợi ý đầu tư: {1}".format(roi,GoiYDauTu(roi)))

"""
    Bài 3: Viết hàm Đệ qui Fibonacci
"""
def fibonacci(n):
    if n<=2:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)

def listfibo(n):
    for i in range(1,n+1):
        print(fibonacci(i),end="\t")

# listfibo(9)

"""
    Bài 4+5: Cho 3 hàm dưới đây(xem Clip)
"""

"""
    Bài 6: Cho coding
"""
def oscillate(a,b):
    """
        1. Điểm dừng của bài toán: >=a and <b
        2. Quy luật của bài toán:
        - In số a và -a
        - Từ số 0
        - In số -b và b
    """
    for n in range(a,b):
        if n<=0:
            print(n,-n, end="\t")
        else:
            print(-n,n, end="\t")

# oscillate(-3,5)

"""
    Bài 7: Xem Clip
"""