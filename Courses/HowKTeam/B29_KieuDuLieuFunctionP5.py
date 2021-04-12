# Giới thiệu hàm return: để lấy kết quả và trả kết quả trong function

def cal_rec_per(width,height):
    per = (width + height) * 2
    return per
print(cal_rec_per(7,4))

# return còn dùng để ngắt hàm
def _return_ter_func():
    print("Sử dụng return ngắt hàm")
    return
    print("Hàm print này dĩ nhiên mất")
_return_ter_func()

def cal_rec_area_per(width,height):
    perimeter = (width+height) * 2
    area = width * height
    return perimeter, area
print(cal_rec_area_per(3,9))

# Bài tập 1: