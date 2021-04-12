# Các loại mode:
    # a+: luôn đưa con trỏ về cuối file
    # r: đưa con trỏ tho lệnh
    # w: sẽ xóa nội dung trong file

# help(open)
file_object = open('D:\Python\B16_XuLyFile.txt',encoding='UTF8')
# Read: phương thức để đọc file
# read(n): n ở đây là số ký tự muốn lấy
data = file_object.read(5)
print(data)
# readline: phương thức đọc từng dòng
data1 = file_object.readline()
print(data1)
# readlines: trả về một list
data2 = file_object.readlines()
print(data2)
# close: phương thức đóng file
file_object.close()

# Sử dụng kiểu dữ liệu list, tupble
file_object = open('D:\Python\B16_XuLyFile.txt',encoding='UTF8')
data3 = list(file_object)
data4 = tuple(file_object)
file_object.close()
print(data3)
print(data4)


# Sử dụng phương thức ghi vào file
file_object = open('D:\Python\B16_XuLyFile.txt',mode='a+',encoding='UTF8')
data5 = file_object.write('\nđẹp trai')
file_object.close()
print(data5)

# Seek: Phương thức giúp di chuyển con trỏ để đọc nội dung bất ký trong file
file_object = open('D:\Python\B16_XuLyFile.txt',mode='r',encoding='UTF8')
data6 = file_object.read()
# Đưa về đầu file giúp đọc 2 lần
file_object.seek(0)
data7 = file_object.read()
file_object.close()
print(data6)
print(data7)

# Bài tập 1: sự khác nhau ở usage, r+ dùng để đọc và ghi còn w+ để ghi và đọc và tạo file
# xóa hết nội dung của file hiện có
# Bài tập 2: do mode la w+ nên con trỏ nằm cuối file nên ta dùng hàm seek để khắc phục
teo_file = open('teo.txt', 'w+')
teo_file.write('Teo dep trai\n')
teo_file.read()
teo_file.close()


