# Unpacking arguments
def lkd(k,t,e,r):
    print(k)
    print(t,e)
    print("end",r)
lst = ['123','lekhoide',69.96,"De"]
lkd(lst[0],lst[1],lst[2],lst[3])

# Nếu 50 parameter và gõ hết indexing thì rất mệt
# nên có hàm * để khắc phục
# có thể unpack các container khác như Tuple, Chuỗi, Generator, Set, Dict(chỉ lấy key)
lkd(*lst)
lkd(*('a','b','c'),'d')

# Packing arguments với *
def lkd1(*args):
    print(args)
    print(type(args))
lkd1(*(x for x in range(9)))

def lkd2(*args,d):
    print(d)
lkd2(*(x for x in range(7)),d=24)

# Unpacking arguments với **
# parameter và key phải giống nhau
dic = {'name':"lekhoide","age":24}
def lkd3(name,age):
    print(name)
    print(age)
lkd3(**dic)

# Packing arguments với **
# kwargs: keyword arguments
def lkd4(**kwargs):
    print(kwargs)
    print(type(kwargs))
lkd4(id=1,name="lekhoide",age=24,lang="Python")

def lkd5(**kwargs):
    for key,value in kwargs.items():
        print(key,"=>",value)
lkd5(**dic)

# Fuction default
def best_function_ever(*args,**kwargs):
    # tự biến tấu
    pass

