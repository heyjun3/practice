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

def lift(f, value):
    return Maybe.from_None(value).map(f)

# def run(f, container: Maybe):
    # return container.map(f)

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

    result = functools.reduce(lambda v, f: f(v), [functools.partial(lift, add), run(add)], 1)
    print(result.get())