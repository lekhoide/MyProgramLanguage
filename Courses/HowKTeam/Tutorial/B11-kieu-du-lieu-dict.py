"""

    1. Dictionaries are indexed by keys, strings and numbers can always be keys
    2. Keys is hashable object(không thể thay đổi và là unique)
    3. Operations
        *copy
        *clear
        *get
        *items
        *keys
        *values
        *pop
        *popitem
        *setdefault
        *update
"""

# 1.1 Basic
tel = {'jack': 4098, 'sape': 4139}
tel['guido'] = 4127
print("Expect={'jack': 4098, 'sape': 4139, 'guido': 4127} => Result= %s" %(tel))
print("Expect=4098 => Result= %s" %(tel['jack']))

# 1.2 Use del
del tel['sape']
tel['irv'] = 4127
print("Expect={'jack': 4098, 'guido': 4127, 'irv': 4127} => Result= %s" %(tel))

# 1.3 Used in the dictionary
print("Expect=['jack', 'guido', 'irv'] => Result= %s" %(list(tel)))
print("Expect=['guido', 'irv', 'jack'] => Result= %s" %(sorted(tel)))
print("Expect=True => Result=%s" %('guido' in tel))
print("Expect=False => Result=%s" %('jack' not in tel))

# 1.4 Create Dictionaries anotherway
print(dict([('sape', 4139), ('guido', 4127), ('jack', 4098)]))
print({x: x**2 for x in (2, 4, 6)})
print(dict(sape=4139, guido=4127, jack=4098))
