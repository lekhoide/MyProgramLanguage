# Special method(phương thức đặc biệt)
    # Hàm print ưu tiên dùng __str__ hơn
    # Còn trên interactive prompt thì ưu tiên __repr__ hơn
    # __str__: cho ra giá trị
    # __repr__: thông tin chi tiết về đối tượng
    # __len__:
    # __add__:
class SieuNhan:
    suc_manh = 50
    def __init__(self, para_vu_khi, para_thu):
        self.vu_khi = para_vu_khi
        self.thu = para_thu
    def ten_thu(self):
        return "Tên thú " + self.thu
    def __str__(self):
        return "Sử dụng {}, sức mạnh của {}".format(self.vu_khi,self.thu)

Batman = SieuNhan("Kiếm","Dơi")
print(Batman.__str__())
Superman = SieuNhan("Tay","Ngoài hành tinh")