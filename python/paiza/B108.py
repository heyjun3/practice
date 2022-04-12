N, M = input().split(' ')
gondola = []
for _ in range(int(N)):
    g = input()
    gondola.append([int(g), 0])

group = []
for _ in range(int(M)):
    g = input()
    group.append(int(g))
i = 0
group = list(reversed(group))
while group:
    m = group.pop()
    if gondola[i][0] < m:
        last = m - gondola[i][0]
        group.append(last)
        gondola[i][1] += gondola[i][0]
    else:
        gondola[i][1] += m

    if i == int(N) - 1:
        i = 0
    else:
        i += 1

for g in gondola:
    print(g[1])