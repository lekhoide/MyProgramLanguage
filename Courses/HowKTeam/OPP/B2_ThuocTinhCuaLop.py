# Thuộc tính các biến
class SieuNhan:
    stt = 1
    version = 1
    suc_manh = 50
    def __init__(self, para_vu_khi, para_thu):
        self.vu_khi = para_vu_khi
        self.thu = para_thu
        self.version = SieuNhan.stt
        SieuNhan.stt += 1
    def ten_thu(self):
        return "Tên thú " + self.thu

sieu_nhan_xanh = SieuNhan("Súng","Cá mập")
# print(sieu_nhan_xanh.suc_manh)
# print(SieuNhan.suc_manh)

# Cập nhật giá trị thuộc tính thông qua lớp
# SieuNhan.suc_manh = 40
# print(sieu_nhan_xanh.suc_manh)
# print(SieuNhan.suc_manh)

sieu_nhan_vang = SieuNhan("Đao","Cọp")
# print(sieu_nhan_xanh.version)
# print(sieu_nhan_vang.version)
# print(SieuNhan.stt)

# Cập nhật giá trị thuộc tính thông qua đối tượng
# print(SieuNhan.suc_manh)
# print(sieu_nhan_xanh.suc_manh)

# sieu_nhan_xanh.suc_manh = 0

# print(SieuNhan.suc_manh)
# print(sieu_nhan_xanh.suc_manh)

# Sử dụng thuộc tính trong các phương thức
    # Sử dụng "." để xài
    # Gọi thay đổi thông qua class đều thay đổi theo
print(sieu_nhan_vang.ten_thu())
