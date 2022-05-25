from ast import Call
from typing import Callable
from typing import Any



def hello(func: Callable) -> Callable:
    # print('hello func')
    def _func1(*args):
        print('hello')
        return func(*args)
    return _func1


@hello
def func1(num: Any) -> int:
    return num ** num


def recursive(num: int):
    def _recursive(num: int):
        if num > 1000:
            return num
        sum = num + num
        return _recursive(sum)

    return _recursive(num)



if __name__ == '__main__':
    print(recursive(1))