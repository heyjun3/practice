from typing import List



def _bubble_sort(numbers: List[int]) -> List[int]:
    limit = len(numbers) - 1
    
    while limit > 1:
        for i in range(limit):
            if numbers[i] > numbers[i+1]:
                numbers[i], numbers[i+1] = numbers[i+1], numbers[i]
        
        limit -= 1

    return numbers


def bubble_sort(numbers: List[int]) -> List[int]:
    len_numbers = len(numbers)
    for i in range(len_numbers):
        for j in range(len_numbers - 1 - i):
            if numbers[j] > numbers[j+1]:
                numbers[j], numbers[j+1] = numbers[j+1], numbers[j]
    return numbers

if __name__ == '__main__':
    import random
    nums = [random.randint(0, 1000) for _ in range(10)]
    # nums = [2, 5, 1, 8, 7, 3]
    print(_bubble_sort(nums))
