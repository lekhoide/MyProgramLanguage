# Bài tập
# Cho trước nlà số nguyên được nhập từ bàn phím. Viết chương trình Python để kiểm tra số đó có phải là số abundant hay là không.
# Sau đó, in kết quả True hoặc False ra màn hình

# Ví dụ:
# Với n = 55 thì hiển thị là False
# Với n = 66 thì hiển thị là True
# Đầu vào: n là số tự nhiên được nhập từ bàn phím
# Đầu ra: Hiển thị ra màn hình True hoăc False theo yêu cầu đề bài
# Thời gian chạy: 1s
# Gợi ý
# Hoàn thành bài tập này bằng cách dùng vòng lặp for

# Lưu ý: Trong lĩnh vực lý thuyết số, một số tự nhiên n được gọi là số abundant khi mà tổng các ước số của n (không tính n) lớn hơn n.
# Ví dụ số 12 có các ước số là 1, 2, 3, 4, 6 có tổng là 1 + 2 + 3 + 4 + 6 = 16 > 12

# Input 10 - 15 - 21
# Output: false

n = int(input())

def is_abundant(n):
    lst = []
    sum = 0
    if n > 0:
        for i in range(1,n):
            if n%i==0:
                lst.append(i)
        for i in lst:
            sum +=i
    return "true" if sum > n else "false"
print(is_abundant(n))