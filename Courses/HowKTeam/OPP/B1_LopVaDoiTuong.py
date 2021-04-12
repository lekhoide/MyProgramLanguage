# Class: một khuôn mẫu khai báo các thuộc tính, phương thức
# Object đôi khi ghi là instance
# theo chuẩn PEP08 khi đặt tên class

class SieuNhan:
    def __init__(self, para_vu_khi, para_thu):
        self.vu_khi = para_vu_khi
        self.thu = para_thu
        pass
    def ten_thu(self):
        return "Tên thú " + self.thu

# sieu_nhan_do = SieuNhan()
# print(sieu_nhan_do)

# Thuộc tính
# sieu_nhan_do.vu_khi = "Kiem"
# sieu_nhan_do.thu = "Sư tử"

# print("Vũ khí của siêu nhân: ",sieu_nhan_do.vu_khi)
# print("Vũ khí của siêu nhân: ",sieu_nhan_do.thu)

# Hàm Constructor(initialize method)
# dấu gạch "_" bắt đầu và kết thúc
# self: parameter self là một quy ước. là đối tượng, là chính đổi tượng đó
sieu_nhan_do = SieuNhan("Kiem","Sư tử")
print("Sử dụng vũ khí: ",sieu_nhan_do.vu_khi)
print("Mượn sức mạnh: ",sieu_nhan_do.thu)

# Phương thức là gì:
# Vì là hàm nên thêm ()
print(sieu_nhan_do.ten_thu())
