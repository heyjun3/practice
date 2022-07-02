import asyncio
import time
import datetime

async def main():
    print(f'started at {time.strftime("%X")}')
    
    await say_after(1, 'hello')
    await say_after(2, 'world')

    print(f'finished at {time.strftime("%X")}')


async def say_after(delay: int, what: str) -> None:
    await asyncio.sleep(delay)
    print(what)

async def main_1():
    task1 = asyncio.create_task(say_after(1, 'hello'))
    task2 = asyncio.create_task(say_after(2, 'world'))

    print(f'started at {time.strftime("%X")}')
    await task1
    await task2
    print(f'finished at {time.strftime("%X")}')

async def nested():
    return 42

async def main_2():
    task = asyncio.create_task(nested())
    await task


async def display_date():
    loop = asyncio.get_running_loop()
    end_time = loop.time() + 5.0
    while True:
        print(datetime.datetime.now())
        if (loop.time() + 1.0) > end_time:
            break
        await asyncio.sleep(1)

async def factorial(name, number):
    f = 1
    for i in range(2, number + 1):
        print(f'Task {name}: Compute factorial({number}), currently i={i}...')
        await asyncio.sleep(1)
        f *= i
    print(f'Task {name}: factorial({number}) = {f}')
    return f

async def main_3():
    L = await asyncio.gather(
        factorial('A', 2),
        factorial('B', 3),
        factorial('C', 4),
    )
    print(L)

async def eternity():
    await asyncio.sleep(3500)
    print('yay!')

async def main_4():
    try:
        await asyncio.wait_for(eternity(), timeout=1.0)
    except asyncio.TimeoutError:
        print('timeout!!')

async def pprint(num: int):
    while True:
        await asyncio.sleep(num)
        print(f'asyncio test {num}', time.time())

async def main_5():
    task1 = asyncio.create_task(pprint(1))
    task2 = asyncio.create_task(pprint(2))
    await task1
    await task2

async def wait_x_sec(num: int):
    print(datetime.datetime.now(), num)
    await asyncio.sleep(num)
    print(datetime.datetime.now(), num)

async def main_6():
    task1 = asyncio.create_task(wait_x_sec(10))
    task2 = asyncio.create_task(wait_x_sec(1))
    print(asyncio.current_task())
    await asyncio.gather(task1, task2)
    print(asyncio.current_task())

import requests
def request(url):
    print(datetime.datetime.now())
    response = requests.get(url)
    print(datetime.datetime.now())
    return response
import aiohttp

async def async_request(url):
    print(datetime.datetime.now())
    async with aiohttp.request('GET', url) as response:
        print(datetime.datetime.now())
        return response


if __name__ == '__main__':
    url = 'https://yahoo.co.jp'
    # asyncio.run(main_6())
    asyncio.run(async_request(url))
    