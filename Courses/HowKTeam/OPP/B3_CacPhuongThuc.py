# Đặc điểm chung của các phương thức
    # luôn có tối thiêu argument được gửi vào
    # Phương thức mặc định parameter self gọi là regular method

# Class Method
    # Nếu regular method có argument đầu tiên tự động đưa vào đối tượng nhận bởi parameter self
    # Theo quy ước parameter nhận argument này sẽ là cls
    # Tính toàn vẹn và đúng đắn của dữ liệu

class SieuNhan:
    suc_manh = 50
    def __init__(self, para_vu_khi, para_thu):
        self.vu_khi = para_vu_khi
        self.thu = para_thu
    @classmethod
    def from_string(cls,s):
        lst = s.split("-")
        new_lst = [st.strip() for st in lst]
        vu_khi,thu = new_lst
        return cls(vu_khi,thu)
    @staticmethod
    def bien_hinh():
        print("1,2,3, Biến Hình")
# sieu_nhan_xanh = SieuNhan("Súng","Cá mập")
# print(SieuNhan.suc_manh)
# print(sieu_nhan_xanh.suc_manh)
# SieuNhan.cap_nhat_suc_manh(0)
# print(sieu_nhan_xanh.suc_manh)
# print(SieuNhan.suc_manh)

# Ví dụ 1 cách cũ và cách mới
s = "Kiếm - Sư tử"
# # Xử lý chuỗi
# lst = s.split("-")
# print(lst)
# # Xử lý dư khoảng trắng trong chuỗi
# new_lst = [st.strip() for st in lst]
# print(new_lst)
# # Gán thông tin
# vu_khi,thu = new_lst
# print(vu_khi,thu)

# Cách mới
sieu_nhan_do = SieuNhan.from_string(s)
print(sieu_nhan_do.__dict__)

# Static method: hàm bình thường
sieu_nhan_do.bien_hinh()


# Tóm lại
    # Regular method: dựng một phương thức cần sử dụng đối tượng đó
    # Class method: cần dùng class
    # Static method: trường hợp còn lại không dùng gì