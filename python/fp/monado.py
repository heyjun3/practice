import functools
from typing import Any


class Maybe(object):

    def __init__(self, value) -> None:
        self.value = value

    def get(self) -> Any:
        return self.value

    @staticmethod
    def from_None(value):
        return Maybe(value) if value is not None else Nothing(None)

    def map(self, func):
        return Maybe.from_None(func(self.value))

class Nothing(Maybe):

    def map(self, f):
        return self

def lift(f):
    def _inner(value):
        return Maybe.from_None(value).map(f)
    return _inner

def run(f):
    def _inner(container: Maybe):
        result = container.map(f)
        return result
    return _inner

def add(a):
    if isinstance(a, int):
        return a + 1
    return None

def array_sum(l, s=0):
    if not len(l):
        return 0
    return array_sum(l[1:], s + l[0])


if __name__ == '__main__':

    # result = functools.reduce(
    #     lambda v, f: f(v),
    #     [
    #         lift(add),
    #         run(lambda x: str(x)),
    #         run(lambda x: x * x),
    #     ], None)
    # print(result.get())
    l = range(10000)
    print(array_sum(l))
