import math

N, M = input().split()

lst = []
for _ in range(int(N)):
    row = input().split()
    lst.append(row)

for i in range(int(M)):
    count = int(N)
    sum = 0
    for l in lst:
        try:
            value = int(l[i])
        except ValueError:
            count -= 1
            continue
        if value >= 0 and value <= 100:
            sum += value
        else:
            count -= 1
    if not sum:
        print(0)
    else:
        print(math.floor(sum/count))