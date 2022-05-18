import random
from typing import List


def in_order(numbers: List) -> bool:
    for i in range(len(numbers)-1):
        if numbers[i] > numbers[i+1]:
            return False
    return True

def bogo_sort(numbers: List) -> List[int]:
    while not in_order(numbers):
        random.shuffle(numbers)
    return numbers


if __name__ == '__main__':
    num = [random.randint(0, 1000) for _ in range(10)]
    print(bogo_sort(num))