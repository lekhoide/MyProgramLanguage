"""
    1. Set: tập hợp không có thứ tự và phần tử không trùng lặp
    2. class set([iterable]) same class frozenset([iterable])
    3. Là một hashable object : không thể thay đổi giá trị
    4. Operations
        *len(s)
        *x in s
        *x not in s
        *isdisjoint(other): kiển tra trùng lặp với một tập hợp khác
        *issubset(other)
        *set <= other
        *set > other
        *union(*others)
        *set | other | ...
        *intersection(*others)
        *set & other & ...
        *difference(*others)
        *set - other - ...
        *symmetric-difference(other)
        *set ^ other
        *copy()
        *update(*others)
        *set != other | ...
        *intersection_update(*others)
        *set &= other & ...
        *difference_update(*others)
        *set -= other | ...
        *symmetric_difference_update(other)
        *set ^= other
        *add(elem)
        *remove(elem)
        *discard(elem)
        *pop()
        *clear()

"""

# 1.1 Giới thiệu cơ bản
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}

print('Expect = {orange, apple, banana, pear} => Result = %s' % (basket))

print(f"Expect = True => Result = {'orange' in basket}")

# 1.2 Sử dụng các toán tử

a = set('Harry')
b = set('Potter')

# unique letters in a
print("Expect = {H, a, r, y} => Result = %s" % (a))
# letters in a but not in b
print("Expect = {H, a, y} => Expect = %s" % (a-b))
# letters in a or b or both
print("Expect = {H, a, r, y, P, o, t, e} => Expect = %s" % (a | b))
# letters in both a and b
print("Expect = {r, } => Result = %s" % (a & b))
# letters in a or b but not both
print("Expect = {H, a, y, P, o, t, e} => Result = %s" % (a ^ b))
