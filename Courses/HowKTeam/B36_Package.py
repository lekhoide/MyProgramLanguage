# Package là một foler chứa các module, package con và bên cạnh đó là file __init__.py

# Ví dụ 1:
# import Package.module_1 as mod_a, Package.module_2 as mod_b, Package as p
# C2
# from Package import module_1 as mod_a, module_2 as mod_b

# print(Package.lkd_init)
# Package.mod_a.func()
# print(mod_a.a_var)
# mod_b.func()
# print(mod_b.b_var)

# Ví dụ 2:# File __init__.py (initialization)
# import Package
# Package.module_1.func()
# Package.module_2.func()


# Ví dụ 3 biến __all__
from Package import *
module_a.func()
module_b.func()