import hashlib
from typing import Any


class HashTable(object):

    def __init__(self, size=10) -> None:
        self.size = size
        self.table = [[] for _ in range(10)]

    def hash(self, key) -> int:
       return int(hashlib.md5(key.encode()).hexdigest(), base=16) % self.size

    def add(self, key, value) -> None:
        index = self.hash(key)
        for data in self.table[index]:
            if data[0] == key:
                data[1] = value
                break
        else:
            self.table[index].append([key, value])

    def get(self, key) -> Any:
        index = self.hash(key)
        for data in self.table[index]:
            if data[0] == key:
                return data[1]

    def print(self) -> None:
        for index in range(self.size):
            print(index, end=' ')
            for data in self.table[index]:
                print('-->', end=' ')
                print(data, end=' ')

            print()

    def __setitem__(self, key, value) -> None:
        self.add(key, value)

    def __getitem__(self, key) -> Any:
        return self.get(key)


if __name__ == '__main__':
    hash_table = HashTable()
    hash_table.add('car', 'Tesla')
    hash_table.add('car', 'Toyota')
    hash_table.print()
    print(hash_table.get('car'))
