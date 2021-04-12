# giới hạn bởi cặp ngoặc vuông []
# các phần tử của list cách nhau bởi dấu ,
# List có khả năng chứa mọi giá trị đối tượng của Python
# vạ bao gồm chính nó

a = [1,2,3,"KTeam"]
b = [[1,2,3],[4,5,6],[7,8,9]]
# list rỗng
# cú pháp của list range phạm vi 0 đến 30
# tạo ra một list từ 0 đến 30
# [biến for biến đó in phạm vị]
c = [i for i in range(3)]
d =[[n,n*1,n*2] for n in range(1,4)]

# Constructor list(iterable): một đối tượng nói chung của container
# Tác dụng của list constructor là dạng cấu trúc tập hợp
# Nếu dùng cộng chuỗi thì cả 2 cần phải đều dùng List
e = list("lekhoide")

f = [1,2]

# f = f + ...
# Cộng chuỗi
f += ['one','two']
# Có thể nhân chuỗi lên nhiều lần nhưng không thể nhân 2 chuỗi với nhau
f *= 2

# Toán tử in: kiểm tra một thằng có nằm bên trong 1 thằng hay không
g = 1 in f

# Lấy phần tử trong trong danh sách một List
h = [1,2,'a','b','c',[3,4]]
# Lấy một phần tử trong một phần tử
h1 = h[5][0]
# Lấy phần tử cuối
h2 = h[-1]
# LEN:Lấy từ vị trí(0->n) : Độ dài:đến vị trí(tính bằng 1->n)
h3 = h[1:3]
# Lấy đến vị trí thứ 2
h4 = h[:2]
# Từ phần tử thứ 2 lấy hết
h5 = h[2:]
# Lấy toàn bộ và đảo ngược lại
h6 = h[::-1]
# Thay đổi giá trị trong danh sách một List
h[5] = "LKD"

# Ma trận
# Chú thích:
# 1. Không được phép gán List này qua List kia nếu không có chủ đích
# bản chất List là kiểu tham chiếu: sử dụng chung một danh sách List
# 2. Để giải quyết vấn đề thì dùng list constructor sẽ giải quyết thay đổi
i = [[1,2,3],[4,5,6],[7,8,9]]
i1 = list(i)
i1[1] = [10,11,12]


# BÀI tập
# Câu 1: câu a đúng, câu b sai vì không thể nối chuỗi nếu 2 chuỗi một bên ko List một bên có List, câu c đúng tạo list rỗng, câu d đúng
#   c,d là cách khởi tạo đúng
# Câu 2: List klà hashable object nhưng chia thành loại mutable object địa chỉ tham khảo https://viblo.asia/p/python-doi-tuong-mutable-va-immutable-V3m5WBvwlO7
#   Trả lời: không, vì ta có thể thay đổi nội dung của List
# Câu 3 Lấy mật mã trong chuỗi s, biết mật mã nằm giữa && và %%
c3 = 'aaaaaaaAAAAAaaa//123123//000000//&&TTT%%abcxyznontqfadf'
c31 = c3[35:38]
c32 = list(c3)[35:38]
c33 = c3[c3.find('&&') + 2:c3.find('%%')]
c34 = c3[c3.find('&&'):c3.find('%%')].strip('&')
c35 = c3[int(c3.find('&&'))+2:c3.find('%%')]
# Câu trả lời câu 3
c36 = c3.split('&&')[-1].split('%%')[0]

print(a)
print(b)
print(c)
print(d)
print(e)
print(f)
print(g)
print(h1)
print(h3)
print(h6)
print(h)
print(i)
print(i1)
print(c36)
