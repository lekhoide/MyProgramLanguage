# Biến khai báo ở hàm cha có thể sử dụng trong hàm con nhưng
# biến ở hàm con không thể sử dụng ở hàm cha

# Thay đổi giá trị argument gián tiếp qua parameter
    # pass by reference: bản gốc
    # pass by value: bản copy

# Ví dụ 1
num = 69
strA = "Lê Khôi Đệ"
lst = [1,2,3]
tup = tuple('learn Python')

def change(parameter):
    parameter = "New value"
    print("Change successfully")

change(num)
change(strA)
change(lst)
change(tup)
print("{0}\n{1}\n{2}\n{3}".format(num,strA,lst,tup))

# Ví dụ 2
lstA = ["lekhoide",1,2,3]
def change1(parameter):
    parameter[1] = "learn python"
    print("change successfully")
print(lstA)
change1(lstA)
print(lstA)

# Sử dụng lệnh global: để khai báo biến thì có thể sử dụng đâu cũng được
# biến nằm trong một hàm gọi là local variable
def make_slogan():
    global lkd
    lkd = "lekhoide"
# Phải chạy function
make_slogan()
print(lkd)

# trường hợp trùng tên biến local
# không nên sử dụng global khi hết cách
# nó giống như hàm eval
# làm chương trình rối, khó kiểm soát
def make_global():
    global x
    x = 1
def local(x = 5):
    print("x in local",x)
make_global()
print(x)
local()
print(x)

# Giới thiệu hàm locals và globals
    # Hàm locals: cho biết những biến local khai báo trong hàm
    # Hàm globals:cho biết những biến global trong chương trình 
locals()
globals()