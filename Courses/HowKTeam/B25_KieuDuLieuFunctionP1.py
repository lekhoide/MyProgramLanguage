# Khai báo hàm Create Fuction
# def<fuction_name>(parameter_1,parameter_2,...,parameter_n):
    # function-block
def lkd():
    # pass ở đây là lệnh giữ chỗ(placeholder statement)
    pass

# Gọi hàm call function
def inSomething():
    print("Học Python")
inSomething()

# DRY Don't Repeat Yourself
def DRY():
    print("lekhoide")
    print("Đang học Python")
DRY()
DRY()
DRY()

# Parameter và Argument
def argument(text):
    print(text)
argument("Truyền vào argument")
def argument1(name,age):
    print(name,"\t",age)
argument1("lekhoide",24)

# Default Argument: là một unhashable container
# unhashable container như list, dict, set
# Giá trị không được làm mới sau mỗi lần gọi hàm
# nghĩa là giá trị sẽ ở đó và ko biến mất
def argumment2(name,age=24):
    print(name, age)
argumment2("lekhoide")
