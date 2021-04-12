# Positional argument và keyword argument
def lkd(a,b):
    print('a: ',a)
    print('b ',b)
lkd(a=3,b=4)
lkd(b=3,a=4)

def lkd1(name,verb):
    print("lekhoide",verb + "s",name)
# Cho thấy fuction đi theo tuần tự trái sang phải
lkd1(name=123,verb="like")

# * syntax: ý nghĩa biến các paramenter sau thành các
# keyword only argument chỉ nhận giá trị theo kiểu
# keyword argument
def lkd2(pos_or_key_arg,*,key_arg1,key_arg2):
    print(pos_or_key_arg)
    print(key_arg1)
    print(key_arg2)
lkd2("lekhoide",key_arg1 = 3,key_arg2=4)

# Bài 1:Câu hỏi: Dùng hàm help để xem cú pháp của hàm sorted? 
# Sau đó cho biết parameter nào là positional only? 
# Parameter nào là keyword only?


