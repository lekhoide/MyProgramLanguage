# Đệ quy: dùng để duyệt các cây
def cal_sum(lst):
    # Nếu giá trị đưa vào không có thì retun 0
    # tương ứng len(lst) == 0
    if not lst:
        return 0
    else:
        # Giá trị đầu tiên + giá trị kế tiếp đưa vào hàm cal_sum
        return lst[0] + cal_sum(lst[1:])

print(cal_sum([1,2,3,4]))

# Đệ quy theo phong cách theo python
def cal_sum_A(lst):
    return 0 if not lst else lst[0] + cal_sum_A(lst[1:])

print(cal_sum_A([1,2,3]))

# Sử dụng packing arugment
# Có thể cộng chuỗi hoặc list
def cal_sum_B(lst):
    idx0, *r = lst
    return idx0 if not r else idx0 + cal_sum_B(r)
print(cal_sum_B(['a','b','c']))

# Đệ quy vòng lặp
def cal_sum_C(lst):
    if not lst: return 0
    return cal_sum_D(lst)
def cal_sum_D(lst):
    return lst[0] + cal_sum_C(lst[1:])

print(cal_sum_C([1,2,3,4,5]))

