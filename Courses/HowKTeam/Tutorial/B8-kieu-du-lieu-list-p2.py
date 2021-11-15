"""

    1. Using Lists as Stacks: use a list as a stack(ngăn xếp). last-in, first-out
    2. Using Lists as Queues: use a list as a queue(hàng đợi). first-in, first-out
    3. List Comprehensions: a concise way(ngắn gọn) to create lists
    4. Nested List Comprehensions:
    5. Tools for Working with Lists
    *Comprehensions: viết ngắn gọn code khi xử lý mảng và chỉ dùng khi có ít điều kiện
    * phải đảm bảo tiêu chí: không phức tạp đọc thấy dễ hiểu

"""

# 1.1
stack = [3,4,5]
stack.append(6)
stack.append(7)

print("[3,4,5,6,7] => Result = %s" %(stack))

stack.pop()
stack.pop()
stack.pop()

print(f"[3,4] => Result = {stack}")

# 2.1
from collections import deque
quene = deque(["Eric", "John", "Michael"])
quene.append("Terry")
quene.append("Graham")
quene.popleft()
quene.popleft()
print(f"(['Michael','Terry','Graham']) => Result = {quene}")

# 3.1
squares = []

for x in range(10):             #that this creates a variable named x that still
    squares.append(x**2)        #exists after the loop completes(vẫn tồn tại biến x)

squares = list(map(lambda x: x**2, range(10))) #using cách này thì không bị

squares = [x**2 for x in range(10)] #is more concise and readable

# 3.2
[(y,z) for y in [1,2,3] for z in [3,1,4] if x!=y]

# and it's equivalent to
combs = []
for y in [1,2,3]:
    for z in [3,1,4]:
        if x != y:
            combs.append((x,y))

# 4.1
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

# [[row[i] for row in matrix] for i in range(4)]

# transposed = []
# for i in range(4):
#     transposed.append([row[i] for row in matrix])

# for i in range(4):
#     transposed_row = []
#     for row in matrix:
#         transposed_row.append(row[i])
#     transposed.append(transposed_row)

print(list(zip(*matrix))) # In the real world

# 5.1
from array import array
# typecode: H
a = array('H', [4000, 10, 700, 22222])

import bisect
# sử dụng thêm phần tử vào danh sách đã sắp xếp
scores = [(100, 'perl'), (200, 'tcl'), (400, 'lua'), (500, 'python')]
bisect.insort(scores, (300, 'ruby'))

from heapq import heapify, heappop, heappush
# Applications which repeatedly(liên tục) access the smallest element(phần tử nhỏ nhất)
# but do not want to run a full list sort
data = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]
heapify(data)
heappush(data, -5)
print([heappop(data) for i in range(3)])


