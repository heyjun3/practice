2, 7, 2, 4
[[2, 7], [2, 2], [2, 4], [7, 2], [7, 4], [2, 4]]
import itertools

N, X = input().split()
a = []
for _ in range(int(N)):
    w, r = list(map(int, input().split()))
    a.append([w, r, r/w])

lst = sorted(a, key=lambda x: x[2], reverse=True)
weight = 0
point = 0

for i in lst:
    weight += i[0]
    if int(X) <= weight:
        break
    point += i[1]

print(point)






    