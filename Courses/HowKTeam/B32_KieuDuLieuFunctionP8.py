# Hàm map cú pháp map(function,*iterable)
# Chúng ta thường phải xử lí các phần tử của một list hay một container = một phương thức
# dùng nhanh hơn list
# Tóm lại muốn tăng tốc generator, yield, map

# Ví dụ cập nhật một list bằng cách tăng mỗi giá trị trong list đó lên 1 đơn vị
def inc(x):
    return x + 1
lkd = [1,2,3,4]
print(list(map(inc,lkd)))
# Dùng lambda
print(list(map(lambda x: x+1,lkd)))

inc_1 = lambda x: x+1
print([inc_1(x) for x in lkd])

# Ví dụ 2
func_A = lambda x,y: x+y
lkd_1 = [5,6,7,8]
map_1 = map(func_A,lkd,lkd_1)
print(list(map_1))

# Ham filter bộ phận lọc
# Cú pháp: filter(function or None, iterable)
# Trả về một filter object một dạng generator object
# Là một container không phải packing agrument

# Ví dụ filter và list comprehension
func_B = lambda x: x>0
lkd_2 = [1,-3,5,0,2,6,-4,-9]
filter_A = filter(func_B,lkd_2)
print(list(filter_A))

com_A = [x for x in lkd_2 if x > 0]
print(com_A)

# Ví dụ đưa vào là none
filter_B = filter(None,lkd_2)
print(list(filter_B))

# Hàm reduce: xem phần mô tả
from functools import reduce
# Cú pháp: reduce(function,sequence[,intitial])

# Ví dụ 1
lkd_add = lambda x,y: x+y
lkd_3 = [1,2,3,4,5]
# Mô tả: ((((1+2)+3)+4)+5)
print(reduce(lkd_add,lkd_3))

# Ví dụ 2
lkd_3 = [1,2,3,4]
# Mô tả: 10 + 10
lam_A = lambda x,y:x+y
lam_B = lambda x,y:x*y
reduce_A = reduce(lam_A,lkd_3,10)
reduce_B = reduce(lam_B,lkd_3,10)
print(reduce_A)
print(reduce_B)

