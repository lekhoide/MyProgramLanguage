# Bài tập
# Cho số là số nguyên dương n được nhập từ bàn phím. Viết chương trình Python để tính tổng tất cả các ước số nguyên dương khác n của n. Sau đó, in kết quả ra màn hình.

# Ví dụ:
# Với n = 8 thì kết quả là 7 
# Bởi vì các ước số của nó có tổng là 1 + 2 + 4 = 7
# Với n = 12 thì kết quả là 16 
# Bởi vì các ước số của nó có tổng là 1 + 2 + 3 + 4 + 6 = 16 
# Đầu vào: n là số tự nhiên được nhập từ bàn phím
# Đầu ra: kết quả hiển thị ra màn hình theo yêu cầu đề bài
# Thời gian chạy: 1s
# Gợi ý
# Hoàn thành bài tập này bằng cách dùng hàm append và range

# Input: 25 - 20 - 30
# Output: 6 - 22- 42



# B1: Đưa về hướng List để dùng append
# B2: Check điều kiện nhập vào là số nguyên dương
# B3: Điều kiện n%uocso==0 thì đưa vào list
# B4: Cộng tất cả các phần tử trong list dùng for và range

n = int(input())

def sumOfAll(n):
    lst = []
    sum = 0
    if n > 0:
        for i in range(1,n):
            if n%i==0:
                lst.append(i)
        for i in lst:
            sum +=i
        print(sum)

sumOfAll(n)

        
        