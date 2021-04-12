# Bài tập
# Cho trước một chuỗi str. Viết chương trình Python để kiểm tra:

# Nếu str có nhiều hơn hoặc bằng 3 ký tự thì kiểm tra:
# Nếu str kết thúc mà không có "ing" ở cuối thì thêm "ing" vào sau chuỗi đã cho (không có dấu cách) và in chuỗi đã được chỉnh ra màn hình.
# Nếu str kết thúc với "ing" ở cuối thì thêm "ly" vào sau chuỗi đã cho (không có dấu cách) và in chuỗi đã được chỉnh sửa ra màn hình.
# Nếu str có ít hơn 3 ký tự, trả về chính chuỗi đó.
# Ví dụ:
# Với str = "ab" thì hiển thị kết quả là "ab"
# Với str = "ping" thì hiển thị kết quả là "pingly"
# Với str = "macbook" thì hiển thị kết quả là "macbooking"
# Đầu vào: str là chuỗi ký tự được nhập từ bàn phím
# Đầu ra: hiển thị kết quả ra màn hình theo yêu cầu đề bài
# Thời gian chạy: 1s
# Gợi ý
# Hoàn thành bài tập này bằng cách sử dụng kĩ thuật slicing trong bài String đã học trước.

# Input: ab
# Output: ab
# Input: alibaba
# Output: alibabaing
# Input justlongstring
# Output: justlongstringly

# s = str("ab")
# s = str("alibaba")
s = str("justlongstring")

# B1: Tui phải đếm no bao nhiêu ký tự
# B2: Lấy 3 ký tự cuối
def format(s):
    if len(s) >= 3:
        if s[-3:None] != "ing":
            noiChuoi = s + "ing"
            print(noiChuoi)
        elif s[-3:None] == "ing":
            noiChuoi = s + "ly"
            print(noiChuoi)
        else:
            print(s)
    else:
        print(s)
format(s)
