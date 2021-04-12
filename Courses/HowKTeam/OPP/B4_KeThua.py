# Tạo lớp kế thừa
class SieuNhan:
    suc_manh = 50
    def __init__(self, para_vu_khi, para_thu):
        self.vu_khi = para_vu_khi
        self.thu = para_thu
    def ten_thu(self):
        print("Tên thú " + self.thu)

class SieuNhanDienQuang(SieuNhan):
    suc_manh = 0
    def __init__(self,para_vu_khi,para_thu,para_chieuthuc):
        super().__init__(para_vu_khi,para_thu)
        self.chieuthuc = para_chieuthuc
    def ten_thu(self):
        print("Tên thú " + self.thu)
        print("Chiêu thức của thú: ", self.chieuthuc)

# Kế thừa thuộc tính
# Batman = SieuNhanDienQuang("Kiếm","Sư tử")
# print(Batman.suc_manh)

# Kế thừa hàm constructor
Batman = SieuNhanDienQuang("Kiếm","Sư tử","Cực khỏe")
# print(Batman.__dict__)
# print(Batman.suc_manh)

# Kế thừa phương thức
Batman.ten_thu()
