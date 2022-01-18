"""
    1. Các kiểu dữ liệu cơ bản trong Python
    - Kiểu int
    - Kiểu float
    - Kiểu complex
    - Kiểu str
    - Kiểu bool

    2. Khai báo biến trong Python
    - type(): kiểm tra kiểu dữ liệu

    3. Cách xóa biến

    4. Cách kiểm tra vùng lưu trữ

    5. Cách ghi chú lệnh trong Python
    - Dấu #: Trong hàm ghi chú ít
    - Dấu """ """ / ''' ''': ghi chú nhiều dòng

    6. Toán tử số học cơ bản
    - Dấu +
    - Dáu -
    - Dấu *
    - Dấu /: Chia lấy phần nguyên và lẻ
    - Dấu //: Chia lấy phần nguyên
    - Dấu %: Chia lấy phần dư
    - Dấu **: Lũy thừa

    7. Toán tử gán
    - Dấu =
    - Dấu +=
    - Dấu -=
    - Dấu *=
    - Dấu /=
    - Dấu //=
    - Dấu %=
    - Dấu **=

    8. Toán tử so sánh
    - Dấu ==
    - Dấu !=
    - Dấu <
    - Dấu <=
    - Dấu >
    - Dấu >=
    - Dấu is: trả về kiểu bool
    - Dấu is not: trả về kiểu bool

    9. Toán tử logic
    - Dấu and
    - Dấu or
    - Dấu not

    10. Độ ưu tiên toán tử:
    **
    * / % //
    + -
    <= < > >=
    <> == !=
    = %= /= //= -= += *= **=
    is is not
    not or and
    ! Nên dùng ()

    11. Cách nhập liệu từ bàn phím
    - input(): đầu ra kiểu dữ liệu là chuỗi
    - int(input()): ép kiểu đầu ra kiểu dữ liệu là số
    - float(input()): ép kiểu đầu ra kiểu dữ liệu là số thực

    12. Các kiểu xuất dữ liệu
    - "{0} {1}".format(a, b)
    - "{0:>2} {1:>11}".format(a, b): căn phải

    13. Các loại lỗi trong Python
    - Lỗi cũ pháp(Syntax Errors)
    - Lỗi thực thi(Run-time Exceptions)
    - Lỗi nghiệp vụ(Logic Errors)
    - Bắt lỗi bằng try..except
"""

# Excercise: Các kiểu dữ liệu cơ bản trong Python / Kiểu complex
so_complex = complex(3, 2)
print("Thực=", so_complex.real, "Ảo=",so_complex.imag)

# Exercice: Cách xóa biến
cxb = "LeKhoiDe"
del cxb

# Excercise: Cách kiểm tra vùng lưu trữ
import sys
print("Thông tin chi tiết của int: ", sys.int_info)

# Excercise: Cách nhập liệu từ bàn phím
def StrToBool(s):
    return s.lower() in("true", "t", "1", "yes")
check_bool = input(" Mời bạn nhập True/False: ")
StrToBool(check_bool)