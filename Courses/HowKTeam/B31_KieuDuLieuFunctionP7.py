# def tạo một hàm với tên xác định
# lambda thì trả về một hàm. Gọi là hàm nặc danh anonymous
    # lambda dùng để tạo ra một hàm với một dòng lệnh

# Cú pháp: lambda argument_1,argument_2,...,argument_n:expression
# Ưu điểm:
    # là một expression không phải là một câu lệnh
    # là một dòng expression duy nhất không phải khối lệnh
    # dùng cho hàm đơn giản

# Ví dụ giữa def và lambda
def ave_d(a,b,c):
    return (a+b+c)/3

print(ave_d(1,3,2))

ave_l = lambda a,b,c:(a+b+c)/3
print(ave_l(1,3,2))

# Ví dụ giữa default argument và lambda
def power_da(x,a=2):
    return a**2
print(power_da(2))
print(power_da(2,3))

power_l = lambda x,a=2:a**2
print(power_l(2))
print(power_l(2,3))

# Ví dụ về global và local
def lkd():
    mem = lambda x:x+" is a member of lkd"
    return mem
# Lấy biến call_mem giữ hàm nặc danh
call_mem = lkd()
print(call_mem("Đệ"))

lkd_lst = [lambda x: x**2,lambda x: x**3,lambda x: x**4]
print(lkd_lst[0])
print(lkd_lst[0](2))
print(lkd_lst[-1](4))
for func in lkd_lst:
    print(func(3))

# Lambda là một expression
# Sử dụng lambda với dictionary
# argument của lambda ta để trống đúng cú pháp nhưng bắt buộc phải có expression
key = "Google"
print({'Google':lambda : "Gooooog",'Youtube':lambda : "Youuuuuu",'lekhoide':lambda : "Learn Python"}[key]())

# Cầu điều kiện cho lambda
find_greater = lambda x,y: x if x > y else y
print(find_greater(1,3))
print(find_greater(6,2))

cd_of_2_3 = lambda x: (1 if x%3==0 else 0) if x%2 == 0 else 0
print(cd_of_2_3(6))
cd_of_2_4 = lambda x: (1 if not (x%3) else 0) if not (x%2) else 0
print(cd_of_2_4(6))

# Lambda chồng lambda so sánh: rất phức tạp không khuyến khích
def lkd_1(first_string):
    return lambda second_string: first_string+second_string

slogan = lkd_1("lekhoide")
print(slogan)
print(slogan("Learn Python"))

lkd_2 = lambda first_string: (lambda second_string: first_string+second_string)
slogan_1 = lkd_2("khoide")
print(slogan_1)
print(slogan_1("le"))
lkd_3 = (lambda first_string: (lambda second_string: first_string+second_string))("LE KHOI ")("DE")
print(lkd_3)
