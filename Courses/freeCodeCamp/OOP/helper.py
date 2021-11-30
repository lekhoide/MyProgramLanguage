# When to use class methods and when to use static methods?

class Item:
    @staticmethod
    def is_integer():
        '''
        This should do something that has a relationship(mối quan hệ)
        with the class, but not something that must be unique
        per instance!
        '''

    @classmethod
    def instantiate_from_something(clas):
        '''
        This should also do something that has a relationship
        with the class, usually, those are used to
        manipulate(thao tác) different structures(cấu trúc) of data to instantiate
        objects, like we have done with csv
        '''

# However, those could be also called from instances.

item1 = Item()
item1.is_integer(5)
item1.instantiate_from_something()