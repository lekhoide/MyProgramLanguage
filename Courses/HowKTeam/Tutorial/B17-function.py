"""

    1. Defining Func
    2. More on Defining Functions
    3. Documentation Strings
    4. Coding Style
"""

#1.1 Fibonacci
def fib(n):    # write Fibonacci series up to n
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

#1.2 Fibonacci List
def fib2(n):   # return Fibonacci series up to n
    """Return a list containing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a+b
    return result

#2.1 Default Argument Values
def ask_ok(prompt, retries=4, reminder='Please try again!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)

#2.2 Keyword Atguments
def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.")
    print("-- Lovely plumage, the", type)
    print("-- It's", state, "!")

# print(parrot(1000)) # 1 positional argument
# print(parrot(voltage=1000)) # 1 keyword argument
# print(parrot()) # required argument missing
# print(parrot(voltage=5.0, 'dead')) # non-keyword argument after a keyword argument
# print(parrot(110, voltage=220)) # duplicate value for the same argument
# print(parrot(actor='John Cleese')) # unknown keyword argument

def cheeseshop(kind, *arguments, **keywords):
    print("-- Do you have any", kind, "?")
    print("-- I'm sorry, we're all out of", kind)

    for arg in arguments:
        print(arg)
    print("-" * 40)
    for kw in keywords:
        print(kw, ":", keywords[kw])

print(cheeseshop("Limburger", "It's very runny sir.",
                "It's really very, VERY runny, sir.",
                shopkeeper="Micheal Palin",
                client="John Cleese",
                sketch="Cheese Shop Sketch"))

#2.3 Special parameters
def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
    """
      ----------     ----------     ----------
      |              |                    |
      |          Positional or keyword    |
      |                                   - Keyword only
      -- Positional only
    """
    pass

#3.1
def my_function():
    """Do nothing, but document it.

    No, really, it doesn't do anything.
    """
    pass

print(my_function.__doc__)

# 4.1
"""
- 4-space indentation, and no tabs
- Wrap lines exceed 79 characters
- Name your classed and functions consistently; the convention is to use UpperCamelCase for classes and lowercase_with_underscores for functions and methods
- Always use self as the name for the first method argument
"""



