"""
    Notes:
        1. Những thuộc tính - properties/attributes và phương thức - methods
        2. OOP gồm có 4 nguyên lý:
            - Tính đóng gói(encapsulation)
            - Tính kế thừa(inheritance)
            - Tính trừu tượng(abstraction)
            - Tính đa hình(polymorphism)
        3. Tính bao đóng/đóng gói(encapsulation)
            - Public: khai báo như hàm bình thường
            - Protected: Lớp con mới có thể truy cập - "_age"
            - Private: Chỉ class đó có quyền truy cập - "__age"
        4. Kế thừa(abstraction): class childClass(baseClass)
"""

# Tính kế thừa
class Animal:
    legs = 0
    def __init__(self) -> None:
        pass
    def whoAmI(self):
        print("Animal")
    def eat(self):
        print("Eating")
    
class Entity:
    def __init__(self) -> None:
        pass
    def weight(self):
        print('Weight 88')

# Class, methods, attributes
class Dog(Entity ,Animal):

    # Constructor
    def __init__(self):
        Animal.__init__(self)
        Entity.__init__(self)
        print("Dog created")
        self.legs = 4
    
    def whoAmI(self):
        print("Dog go go")
    
    def eat(self):
        print("eat eat eat ...")
    
    def run(self):
        print("legs: %s run run run ..." %(self.legs))

pug = Dog()
pug.whoAmI()
pug.eat()
pug.run()
pug.weight()

# Tính đóng gói
class Foo:
    __name = "Foo"
    def __getName(self):
        print(self.__name)
    def get(self):
        self.__getName()

# print(Foo().__name)
# Foo().__getName()
# Foo().get()