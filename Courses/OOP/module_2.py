

class Car:
    # Attributes / Properties
    typeCar = "Ô tô"

    # Constructor
    def __init__(self, nameCar, colorCar, material) -> None:
        self.nameCar = nameCar
        self.colorCar = colorCar
        self.material = material
    
    def stop(self, purpose):
        return "{} đang dừng xe để {}".format(self.nameCar, purpose)
    def run(self):
        return "{} đang chạy trên đường".format(self.nameCar)
    def startCar(self):
        return "{} đang nổ máy".format(self.nameCar)
    def check_material(self):
        print("Nguyên liệu là {}".format(self.material))

class ElectricVehicle(Car):

    def __init__(self, nameCar, colorCar, insurance) -> None:
        super().__init__(nameCar, colorCar, material="Điện")
        self.insurance = insurance
        self.__price = 0
    
    def stop(self, purpose):
        print("{} đang dừng xe để {}".format(self.nameCar, purpose))
        print("{} chạy bằng {}".format(self.nameCar, self.material))

    def warranty(self):
        print("{} có chế độ bảo hành {}".format(self.nameCar, self.insurance))

    def sell(self):
        print("Giá bán Electric Vehicle: {:,}".format(self.__price))
    
    def setPrice(self, price):
        print("Update Price")
        self.__price = price

    def check_material(self):
        return super().check_material()

toyota = Car("Toyota", "Đỏ", "Điện")
lamborghini = Car("Lamborghini", "Vàng", "Deisel")
porsche = Car("Porsche", "Xanh", "Gas")
VinFast = ElectricVehicle("VFe34", "Xanh biển", "10 năm")

# access the class attributes
print("Porsche là {}.".format(porsche.__class__.typeCar))
print("Toyota là {}.".format(toyota.__class__.typeCar))
print("Lamborghini cũng là {}.".format(lamborghini.__class__.typeCar))

# access the instance attributes
print("Xe {} có màu {}. {} là nguyên liệu vận hành.".format(toyota.nameCar, toyota.colorCar, toyota.material))
print("Xe {} có màu {}. {} là nguyên liệu vận hành.".format(lamborghini.nameCar, lamborghini.colorCar, lamborghini.material))
print("Xe {} có màu {}. {} là nguyên liệu vận hành.".format(porsche.nameCar, porsche.colorCar, porsche.material))

# Call our instance methods
print(toyota.stop("nạp điện"))
print(lamborghini.run())
print(porsche.startCar())

# Inheritance
VinFast.stop("nạp điện vào pin")
print(VinFast.run())
VinFast.warranty()

# Encapsulation
VinFast.sell()
VinFast.setPrice(690000000)
VinFast.sell()

# Polymorphism
def check_material(car):
    car.check_material()

check_material(porsche)
check_material(VinFast)

