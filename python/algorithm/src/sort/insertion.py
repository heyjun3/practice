from typing import List
from unittest import result


def _insertion_sort(numbers: List[int]) -> List[int]:
    len_numbers = len(numbers)
    index = 0

    while index < len_numbers:
        if numbers[index] > numbers[index+1]:
            min_index = index + 1

            if min_index == 1:
                numbers[index], numbers[min_index] = numbers[min_index], numbers[index]
            
            for i in range(min_index, -1, -1):
                if numbers[min_index-1] > numbers[min_index]:
                    numbers[min_index-1], numbers[min_index] = numbers[min_index], numbers[min_index-1]

        index += 1

    return numbers


def insertion_sort(numbers: List[int]) -> List[int]:
    len_numbers = len(numbers)

    for i in range(1, len_numbers):
        tmp = numbers[i]
        j = i - 1
        while j >= 0 and numbers[j] > tmp:
            numbers[j+1] = numbers[j]
            j -= 1

        numbers[j+1] = tmp

    return numbers


def bucket_sort(numbers: List[int]) -> List[int]:
    len_numbers = len(numbers)
    max_num = max(numbers)
    size = max_num // len_numbers

    bucket = [[] for _ in range(size)]

    for num in numbers:
        i = num // len_numbers
        if i != size:
            bucket[i].append(num)
        else:
            bucket[size-1].append(num)

    for i in range(size):
        insertion_sort(bucket[i])

    result = []
    for i in range(size):
        result += bucket[i]

    return result

    
        


if __name__ == '__main__':
    # nums = [1, 5, 28, 25, 100, 52, 27, 91, 22, 99]
    import random
    nums = [random.randint(0, 1000) for _ in range(10)]
    print(bucket_sort(nums))