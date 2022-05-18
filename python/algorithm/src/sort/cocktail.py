from sre_constants import RANGE_UNI_IGNORE
from typing import List


def _cocktail_sort(numbers: List[int]) -> List[int]:
    start = 0
    end = len(numbers)
    swap = False

    for i in range(end):
        for j in range(start + i, end - 1 - i):
            if numbers[j] > numbers[j+1]:
                numbers[j], numbers[j+1] = numbers[j+1], numbers[j]
                print(numbers)
                swap = True

        if not swap:
            return numbers

        for j in range(end - 1 - i, start + i, -1):
            if not j:
                continue
            if numbers[j] < numbers[j-1]:
                numbers[j], numbers[j-1] = numbers[j-1], numbers[j]
                print(numbers)
                swap = True

        if not swap:
            return numbers

    return numbers


def cocktail_sort(numbers: List[int]) -> List[int]:
    start = 0
    end = len(numbers) - 1
    swap = True

    while swap:
        swap = False
        for i in range(start, end):
            if numbers[i] > numbers[i+1]:
                numbers[i], numbers[i+1] = numbers[i+1], numbers[i]
                swap = True

        if not swap:
            break

        end = end - 1

        for i in range(end-1, start-1, -1):
            if numbers[i] > numbers[i+1]:
                numbers[i], numbers[i+1] = numbers[i+1], numbers[i]
                swap = True

        start = start + 1

    return numbers


if __name__ == '__main__':
    nums = [4, 5, 1, 8, 7, 3]
    print(cocktail_sort(nums))
