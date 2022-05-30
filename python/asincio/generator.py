def g_hello():
    yield 'hello1'
    yield 'hello2'
    yield 'hello3'
    yield 'hello4'
    return 'done'


def g_hello2():
    while True:
        r = yield from g_hello()
        yield r


if __name__ == '__main__':
    g = g_hello2()
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))