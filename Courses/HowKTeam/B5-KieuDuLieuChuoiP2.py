# Kiểu dữ liệu chuỗi P2:
    # r"": chuỗi trần là chuỗi in luôn escape sequence
    # a + b + c: toán tử cộng nối chuỗi
    # a*5: toán tử nhân chuỗi
    # a in b: toán tử in kiểm tra chuỗi nằm trong chuỗi
    # a[số]: cắt chuỗi và lấy ký tự đã cắt

# Chuỗi trần
print(r'Haizz, \neu mot ngay nao do')

# Toán tử cộng nối Chuỗi
strA = "le"
strB = "khoi"
strC = "de"
strD = strA + strB + strC
print(strD)

# Toán tử nhân
strE = strC*5
print(strE)

# Toán tử in: kiểm tra chuỗi nằm trong chuỗi
strF = strC in strA
print(strF)

# Cắt chuỗi và lấy ký tự đã cắt
strG = strA[-2]
print(strG)

# Lấy độ dài của chuỗi
strH = len(strA)
print(strH)

# Cắt chuỗi: [lấy từ vị trí, đến vị trí không lấy vị trí đó]
# k h o i
# 0 1 2 3
strI = strB[1:None]
# Cú pháp cắt từ phải qua trái
# [Từ vị trí : Đến vị trí dừng : Bước nhảy]
# Lưu ý bước nhảy không được phép đặt là 0

strJ = strB[None:None:2]
# >>>ko
print(strJ)

# Ép kiểu
strK = int(6.9)
strL = float("6.9")
strM = str(69)
print(strK)
print(strM)

# Ví dụ
strN = "HowKteam.com"
strN = strN[None:1] + "0" + strN[2:None]

print(strN)

# 1. Có 5 Escape Sequence
kiemTra = "\gte\teng\n\vz\adf\t"
print(kiemTra)
# 2. Giá trị rỗng
# 3. Có 3 giá trị rỗng b,c,e
s = "abc xyz"
print(s[0:0:-1])




