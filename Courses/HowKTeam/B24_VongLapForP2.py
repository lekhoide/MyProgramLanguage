# Kiểu dữ liệu range: comprehension hoặc iterator object
# kiếu dữ liệu đặc biệt vì bản thân nó không lưu giá trị
# hỗ trợ indexing
# range có tốc độ nhanh hơn list
# Câu pháp: range(stop)
# Tạo range
r1 = range(3)
# In các giá trị phần tử
print(r1[0],r1[1],r1[2])
# Chuyển qua list
list_r1 = list(r1)
# Update phần tử
list_r1[0] = 10
# In các giá trị phần tử
print(list_r1[0],list_r1[1],list_r1[2])

# Câu pháp: range(start,stop,step)
# step -1: đếm xuống
# step 1: mặc định đếm lên
r2 = list(range(2,5))
r3 = list(range(4,1,-1))
r4 = list(range(2,-3,-1))
print(r2,"\n",r3,"\n",r4)


# range duyệt các kiểu List, Tuple, Chuỗi dùng indexing
listA = ["s",(1,2,3),{'abc','xyz'}]
for item in range(len(listA)):
    print(listA[item])

# Dùng hàm range duyệt hết các phần tử của List tại vì
# ta cần Update List.
# Ta dùng sequence scan
listB = [1,2,3]
for item in listB:
    item+=1
print(listB)
# Biến var riêng lẻ nên không cập nhật được

# Ta dùng Indexing scan
for item in range(len(listB)):
    listB[item] +=1
print(listB)

# Comprehension:
    # tốc độ nhanh
    # kết hợp anonymous fuction là lambda one-liner
    # API: các chức năng mà ngôn ngữ hỗ trợ
# Cú pháp: [output-expression for-statement optional-predicate]
# output-expression: là cú pháp phía trong như dict là key-value

# Ví dụ 1:
comA = ['--'.join((a.capitalize(),b.upper() + c.lower())) for a,b,c in [('le','khoi','de'),('sap','thoat','xac')]]
print(comA)

# Ví dụ 2:
comB = {key:value+1 for key,value in (("lekhoide",96),("le",9),("khoi",6),("de",19)) if value % 2 != 0}
print(comB)

# Hàm enumerate: in danh sách có số thứ tự
# Câu pháp: enumerate(iterable,start)
student_list = ["Đệ","Tâm","Khôi"]
enuA = enumerate(student_list)
print(list(enuA))

for item,name in enumerate(student_list,1):
    print(item,"=>",name)

# Bài tập 1:
# Bài tập 2:

