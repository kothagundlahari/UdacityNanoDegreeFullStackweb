import random
import string

# implement the function make_salt() that returns a string of 5 random
# letters use python's random module.
# Note: The string package might be useful here.

def make_salt(l):
    ###Your code here

    return ''.join(random.choice(string.lowercase) for i in range(5))
print make_salt(5)