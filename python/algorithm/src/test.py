from ast import Call
from typing import Callable
from typing import Any



def hello(func: Callable) -> Callable:
    print('hello func')
    def _func1(*args):
        print('hello')
        return func(*args)
    return _func1


@hello
def func1(num: Any) -> int:
    return num ** num


if __name__ == '__main__':
    print(func1)