from item import Item
from phone import Phone
from keyboard import Keyboard

Item.instantiate_from_csv()

print(Item.all)

item1 = Item("MyItem", 750, 6)
item2 = Phone("jscPhone", 1000, 3)

# Setting an Attribute
# Setter
item1.name = "OtherItem"

# Getting an Attribute
# Getter
print(item1.name)

# Encapsulation
item1.apply_increment(0.2)
item1.apply_discount()

print(item1.price)

# Abstraction
item1.send_email()
item2.send_email()

item2.apply_increment(0.2)
print(item2.price)

# Polymorphism
item3 = Keyboard("jscKeyboard", 1000, 3)

item3.apply_discount()

print(item3.price)
