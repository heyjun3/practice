
def func2(n: float):
    if n <= 1:
        return
    else:
        print(n)
        func2(n/2)


if __name__ == '__main__':
    func2(10)