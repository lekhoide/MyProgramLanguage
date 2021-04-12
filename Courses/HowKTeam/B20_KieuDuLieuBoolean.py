# Các toán tử so sánh
# Cộng trừ nhân chia trước, toán tử so sánh thực hiện sau
print(241 == 141 + 100)
print((5*0) != 0)
# ord: lấy giá trị của ACSII
print(ord('a'))
# is: toán tử so sánh cụ thể obejct dùng cho những thằng phức tạp
# Các số từ -5 đến 256 hoặc là một số chuỗi có số kí tự dưới 20 thì các biến
# có cùng giá trị thì sẽ có giá trị id
lst = [1,2,3]
lst_ = [1,2,3]
_lst = lst
print(lst == lst_)
print(lst is lst_)
print(_lst==lst)

# Not: phủ định

# And (và):
a = b = -4
# Ở đây là hiểu là And rút gọn
print(b<-3<-1<0<a<6)

# Or(hoặc):

# Các giá trị của Bolean ra False
print(0)
bool(None)
bool('')
bool([])
bool(())
bool(set())
bool({})

# Nên dùng () hơn là [] hoặc thứ gì khác
k=1
print(k in (3,4,5))

