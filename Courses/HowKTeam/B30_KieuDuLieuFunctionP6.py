# Ôn lại khái niệm iterables
# Khi tạo ra một list truy xuất lần lượt từng giá trị của list đó
# gọi là iteration

# lst là một iterable. mọi thứ dùng for in đều là môt iterable
lst = [1,'lekhoide',2]
for item in lst:
    print(item)

# Giới thiệu generator là một iterator một dạng iterable
# không thể tái sử dụng
gen = (value for value in range(3))
for item in gen:
    print(item)
# đây là generator
for item1 in gen:
    print(item1)

# Lệnh yield: trả về generator còn return thì object
# mà generator thì phải dùng for in để xuất giá trị
def square(lst):
    for num in lst:
        # Mũ bình phương: **
        yield num**2
gen_1 = square([1,2,3])
for item in gen_1:
    print(item)

def gen_2():
    for value in range(3):
        print("yield",value+1,"times")
        yield value
for value in gen_2():
    print(value)

def gen_3():
    yield "le"
    print("this is second yield")
    yield "khoi"
    print("this is last yield")
    yield "de"
    print("will not return anything")
for value in gen_3():
    print(value)

# Phương thức send: phương thức giúp bạn gửi giá trị vào trong một generator
def gen_4():
    for i in range(4):
        x = yield i
        print("value sent from you: ",x)
# Gán generator cho biến g
g = gen_4()
print(next(g))
print(g.send("le"))
print(g.send("khoide"))
print(next(g))

def gen_5():
    while True:
        x = yield
        yield x**2
g_1 = gen_5()
print(next(g_1))
print(g_1.send(2))
print(next(g_1))
print(g_1.send(10))

# Vì sao nên dùng yield: tốc dộ sử dụng generator, duyệt các giá trị
# generator nhanh hơn khi duyệt một iterable
# Cân nhắc khi làm việc với những tập dữ liệu lớn