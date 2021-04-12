# Paramenter Object
print("le","khoi","de")

# Paramenter sep: seprate chia ra
print("le","khoi","de",sep='-',end='@gmail.com')

# Paramenter end
print("a line without newline",end='|||')

# Paramenter sleep: đợi thời gian
from time import sleep
print('start...')
sleep(3)
print('...end')

# Ví dụ 1: ứng dụng một số thứ rất thú vị kẹt trong bộ nhớ đệm
print("Bat dau",end='')
sleep(3)
print("Ket thuc")

# Tạo file và ghi thông tin vào file
cdl = ([1,2,3],[3,4,5],[6,7,8])
with open('B16_XuLyFile.txt','w') as f:
    print(cdl,file=f)

# flush=True:yêu cầu bộ đệm xuất thông tin trong bộ đệm ra
print("Bat dau",end='',flush=True)
sleep(3)
print("Ket thuc")

# Ví dụ
your_name = "lekhoide"
your_great = "Học Python tuyệt"

for c in your_name+your_great:
    print(c,end="",flush=True)
    sleep(0.1)
print()