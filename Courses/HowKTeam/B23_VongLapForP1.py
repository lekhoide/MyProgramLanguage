# Ví dụ
length = 3
# Tạo một interater
iter_ = (x for x in range(length))
# c = 0
# while c < length:
#     print(next(iter_))
#     c+=1

# Ví dụ mở try-catch
# thử chạy iter_ nếu chạy vượt ngưỡng stopinterration thì break vòng lặp
while 1:
    try:
        print(next(iter_))
    except StopIteration:
        break

# for variable_1, variable_2, .. variable_n in sequence:
    # for-block

    # sequence: là một interable object, có thể là interater hoặc một
    # dạng object cho phép sử dụng indexing. Lưu ý nếu là một
    # interater object thì việc vòng lặp thì tương tự sử dụng hàm next
    # không hỗ trợ indexing
    # bao nhiêu biến cũng được thì mỗi phần tử sequence

# Ví dụ 1
iter1_ = (x for x in range(3))
# Với từng phần tử value thay thế cho, duyệt từ trước về sau từ đầu đến cuối
# value như là cái next
for value in iter1_:
    print("->",value)

# Ví dụ 2
# Tạo một dict
dictA = {'Name':'lekhoide',"Age":24}
# Mỗi phần tử gọi là items in ra items
print(dictA.items())
# Chuyển đôi qua list
listA = list(dictA.items())
print(listA)
# Lấy từng item
print(listA[0])
# Tạo vòng lặp duyệt từng item trong dict
for key,value in dictA.items():
    print(key,"-",value)

# Ví dụ 3: lấy từng ký tự dùng hàm Break
strA = "lekhoide"
for item in strA:
    if item == ' ':
        break
    else:
        print(item)

# Ví dụ 4: khi kết thúc hàm for thì sẽ đến else block và thực hiện nếu dùng
# lệnh Break thì hàm For kết thúc sẽ KHÔNG đi đến else block
for item in (1,2,3):
    print(item)
    # if item % 2 == 0:
    #     break
    if item % 2 !=0:
        continue
else:
    print("Done!")

# Bài tập 1
# Bài tập 2
