# while expression:
    # while-block

# Kiểm tra giá trị Boolean của expression
# nếu False bỏ qua while-block đến câu lệnh tiếp theo
# ngược lại thực hiện toàn bộ câu lệnh trong while-block
# sau đó quay lại thực hiện boolean expression
# nếu False bỏ qua còn True thì tiếp tục

k = 5
while k > 0:
    print('k=',k)
    k -=1

# Ví dụ
s = "Lê Khôi Đệ"
# vị trí bắt đầu muốn xử lí chuỗi
idx = 0 
# lấy độ dài chuỗi làm mốc kết thúc
length = len(s)

while idx < length:
    print(idx,'stand for',s[idx])
    idx +=1

# Ví dụ câu lệnh break: thoát khỏi vòng lặp
# Khai báo một biến rỗng List
five_even_numbers = []
k_number = 0
while True:
    if k_number % 2 == 0:
        five_even_numbers.append(k_number)
        if len(five_even_numbers) == 5:
            break
    k_number+=1
print(five_even_numbers)
print(k_number)

# Ví dụ câu lệnh continue: chạy tiếp vòng lặp, không xuống lệnh tiếp theo
while k_number < 10:
    k_number += 1
    if k_number % 2 == 0:
        continue
    print(k_number,"is odd number")

print(k_number)

# Ví dụ: Khi while kết thúc thì else thực hiện, nếu dùng break thì ko xuống else
k = 0
while k<3:
    print("value of k is",k)
    k+=1
else:
    print("k is not less than 3 anymore")


# Bài tập 1
# Viết lại vòng lặp không dùng câu lệnh break
five_even_numbers_1 = []
k_number_1 = 0
while len(five_even_numbers_1) < 5:
    if k_number_1 % 2 == 0:
        five_even_numbers_1.append(k_number_1)
    k_number_1+=1
print("Five even numbers 1 : ",five_even_numbers_1)
print("K Number 1: ",k_number_1)

# Bài tập 2: Trong file này có một số chữ Kteam (Kteam sẽ không xuất hiện ở đầu dòng), và trước nó là một chữ ngẫu nhiên nào đó và nhiệm vụ của bạn là đổi chữ đó thành How.
# Nhớ là sử dụng vòng lặp.
# Sau khi đổi thành công, bạn lưu nội dung đó vào file tên kteam.txt.
# r+: để đọc và ghi và con trỏ được theo lệnh

# Bài tập 3: Sắp xếp mảng từ nhỏ đến lớn tuy nhiên số 11 ko được thay đổi vị trí
# [56, 14, 11, 756, 34, 90, 11, 11, 65, 0, 11, 35]

