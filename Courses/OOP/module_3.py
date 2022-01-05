"""
    1. Python class names are written in CapitalizedWords
"""

class Dog:
    # Class attribute
    species = "Canis familiaris"

    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

    # Instance method
    def __str__(self) -> str:
        return f"{self.name} is {self.age} years old"

    # Another instance method
    def speak(self, sound):
        return f"{self.name} barks: {sound}"
    
    def setBuddy(self, buddy):
        self.buddy = buddy
        buddy.buddy = self

class JackRussellTerrier(Dog):
    def speak(self, sound="Arf"):
        # return f"{self.name} says {sound}"
        return super().speak(sound)
class GoldenRetriever(Dog):
    def speak(self, sound="Bark"):
        return super().speak(sound)
class Dachshund(Dog):
    pass
class Bulldog(Dog):
    pass


buddy = Dachshund("Buddy", 9)
miles = JackRussellTerrier("Miles", 4)
jack = Bulldog("Jack", 3)
jim = Bulldog("Jim", 5)
golden_retriever = GoldenRetriever("Golden Retriever", 8)

print(isinstance(miles, Dog))

print(miles.speak())

print(jim.speak("Woof"))

print(golden_retriever.speak())

jack.setBuddy(jim)
print(jack.buddy.name)
print(jim.buddy.name)
print(jack.buddy)

class Car:
    def __init__(self, color, mileage) -> None:
        self.color = color
        self.mileage = mileage
    # def __str__(self) -> str:
    #     return "The {} car has {:,} miles".format(self.color, self.mileage)

blue_car = Car('blue', 20_000)
red_car = Car('red', 30_000)
for car in (blue_car, red_car):
    print(f"The {car.color} car has {car.mileage:,} miles")
