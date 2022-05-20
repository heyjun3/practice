from typing import List


def _select_sort(numbers: List[int]) -> List[int]:
    len_numbers = len(numbers)

    for i in range(len_numbers - 1):
        for j in range(i, len_numbers):
            if numbers[i] > numbers[j]:
                numbers[i], numbers[j] = numbers[j], numbers[i]

    return numbers


def select_sort(numbers: List[int]) -> List[int]:
    len_numbers = len(numbers)

    for i in range(len_numbers):
        min_index = i
        for j in range(i+1, len_numbers):
            if numbers[min_index] > numbers[j]:
                min_index = j
        numbers[i], numbers[min_index] = numbers[min_index], numbers[i]

    return numbers


if __name__ == '__main__':
    # import random
    # nums = [random.randint(0, 1000) for _ in range(10)]
    nums = [2, 5, 1, 8, 7, 3]
    print(select_sort(nums))