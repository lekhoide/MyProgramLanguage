d = {'Team':'Xboss',(1,2):69}
print(d)

# Phương thức copy
d2 = d.copy()
print(d2)

# Phương thức clear
# d.clear()
print(d)

# Get Key trả về giá trị
value = d.get('Team')
# get(key,giá trị gán)
value1 = d.get('abc',"defaut")
print(value1)

# Phương thức items: Trả về một giá trị thuộc lớp dict_items. Các giá trị sẽ là một tuple
value2 = list(d.items())
print(value2[0][0])

# keys: lấy danh sách các key
# values: lấy danh sach values
value3 = d.keys()
value4 = d.values()
print(value3)
print(value4)

# phương thức pop: lấy hoàn toàn một phần tử khi truyền giá trị key
# pop("key","giá trị mặc định")
value5 = d.pop('Team')
print(value5)
# popitem: mặc định pop ra một thằng bất kì và trả về thằng định pop
value6 = d.popitem()
print("popitem:",value6)
print(d)

# setdefault: trả về giá trị value khi truyền key
d = {'name':"lkd",'tuoi':24}
value7 = d.setdefault('name')
print(value7)

# Phương thức Update cập nhật cả key và value
value8 = d.update(name='lekhoide')
print(value8)
print(d)

# Bài tập 1: tại vì nó dùng chung một bộ dữ liệu dict có tên hàm là dict1
dict1 = {'key': 6969}
print(dict1)
dict2 = dict(dict1)
print(dict2)
dict2.update(key="changed")
print("dict2",dict2)
print("dict1:",dict1)

# Các cách khắc phục
dict2 = dict1.copy()
dict2 = dict(dict1)
dict2.update(key='changed')

# Bài tập 2: 
d3 = {}
print(d3)
d3.update({'a': 3})
print(d3)

d4 = {}
print(d4)
d4.update({3:0})
print(d4)

# Sự khác nhau ở hàm thứ nhất sử dụng phương thức update một phần tử còn hàm thứ hai thì
# hàm update không phân biệt được là key hay một phần tử
