# Một Dict gồm các yếu tố sau:
#   Được giới hạn bởi cặp ngoặc nhọn {}, tất cả những gì nằm trong đó là những phần tử của Dict.
#   Các phần tử của Dict được phân cách nhau ra bởi dấu phẩy (,).
#   Các phần tử của Dict phải là một cặp key-value
#   Cặp key-value của phần tử trong Dict được phân cách bởi dấu hai chấm (:)
#   Các key buộc phải là một hash object

dic = {"Ten":"lekhoide","Tuoi":"2n"}
print(dic)

# Sử dụng comprehension
dic1 = {key:value for key, value in [("Noi sinh","Nha Trang")]}
print(dic1)

# 4 cách khởi tạo một dict
    # dict rỗng
    # dict mapping
    # dict iterable
    # keyword arguments

# Vi du dict iterable
iter_ = [('name','lkd'),('member','2n')]
dic3 = dict(iter_)
print(dic3)

# Vi du keyword arguments
name = 'lekhoide'
chucai = 'a'
dic4 = dict(name='abc',chucai='cde')
print(dic4)

# Phương thức fromkeys
iter1_ = ('name','number')
dic5 = dict.fromkeys(iter1_)
print(dic5)
dic5 = dict.fromkeys(iter1_,'lkd')
print(dic5)

# Lấy value trong dict bằng key
# Lấy key không tồn tại sẽ báo lỗi
print(dic5['name'])

# Thay đổi nội dung của dict qua key
dic5['name'] = 'kd'
print(dic5)

# Thêm thủ công một phần tử của dict
dic6 = dict(L="le",K=96,D="de")
print(dic6)
dic6['L'] = dic6['L'] + ' - khoi de'
print(dic6)  


