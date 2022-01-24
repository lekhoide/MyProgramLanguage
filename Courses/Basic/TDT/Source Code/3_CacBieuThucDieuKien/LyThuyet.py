"""
    1. Biểu thức Boolean: ==, < <=, > >=, !=

    2. Biểu thức If: if condition:

    3. Biểu thức If ... else

    4. Biểu thức If ... elif lồng nhau

    5. Biểu thức pass

    6. So sánh số thực trong Python: Tính sai số

    7. Sử dụng if/else như phép gán
    - expression-1 if condition else expression-2
    - sử dụng trong trường hợp đơn giản

"""

# Excersice: So sánh số thực trong Python
d1 = 1.11 - 1.10
d2 = 2.11 - 2.10
diff = d1 - d2 # Compute difference
if diff < 0:
    diff = -diff
if diff < 0.0000001:
    print("Same")
else:
    print("Different")