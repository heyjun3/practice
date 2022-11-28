import functools
from typing import Any


class Maybe(object):

    def __init__(self, value) -> None:
        self.value = value

    def get(self) -> Any:
        return self.value

    @staticmethod
    def from_None(value):
        return Maybe(value) if value is not None else Maybe(None)

    def map(self, func):
        return Maybe.from_None(func(self.value))

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


if __name__ == '__main__':

    result = functools.reduce(
        lambda v, f: f(v),
        [
            lift(add),
            run(add),
            run(lambda x: x * x),
        ], 1)
    print(result.get())
