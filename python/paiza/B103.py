N = int(input())
x_R, x_G, x_B = list(map(int, input().split()))
R_list = ['R', 'Y', 'M', 'W']
G_list = ['G', 'Y', 'C', 'W']
B_list = ['B', 'M', 'C', 'W']
flag = False

for _ in range(N):
    light, color = input().split()

    if light == 'L':
        quan = -1
    else:
        quan = 1

    if color in R_list:
        x_R += quan
    if color in G_list:
        x_G += quan
    if color in B_list:
        x_B += quan
        
    if x_R == x_G == x_B:
        print(x_R)
        flag = True
        break

if not flag:
    print('no') 
