# Getter: lấy ra
    # Lưu ý bị trùng tên hàm
class lkd:
    def __init__(self,para_ho,para_ten):
        self.ho = para_ho
        self.ten = para_ten
    @property
    def ho_va_ten(self):
        return "{} {}".format(self.ho,self.ten)
    @property
    def email(self):
        return self.ho + "-" + self.ten + "@gmail.com"
    @ho_va_ten.setter
    def ho_va_ten(self,ten_moi):
        ho_moi, ten_moi = ten_moi.split(" ")
        self.ho = ho_moi
        self.ten = ten_moi
    @ho_va_ten.deleter
    def ho_va_ten(self):
        self.ho = None
        self.ten = None
        print("Delete success")

lkd_A = lkd("Lê","Đệ")

lkd_A.ho = "Nguyễn"
lkd_A.ten = "Hùng"

print(lkd_A.ho)
print(lkd_A.ten)
# Gọi kiểu thuộc tính - atributte
print(lkd_A.email)
print(lkd_A.ho_va_ten)

# Setter: gán vào
lkd_A.ho_va_ten = "Lê Minh"
print(lkd_A.ho_va_ten)

# Deleter: xóa
del lkd_A.ho_va_ten

print(lkd_A.ho_va_ten)