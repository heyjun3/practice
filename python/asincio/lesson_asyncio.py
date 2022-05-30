import asyncio
import time

import aiohttp
import requests


loop = asyncio.get_event_loop()


# @asyncio.coroutine
async def worker():
    print('start')
    await asyncio.sleep(2)
    print('stop')


async def hello_1(url):
    print(requests.get(url).content)
    print(time.time())


async def hello_2(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            response = await response.read()
            print(response)
            print(time.time())

async def worker1(lock):
    print('worker1 start')
    async with lock:
        print('worker1 got lock')
        await asyncio.sleep(3)
    print('worker1 end')

async def worker2(lock):
    print('worker2 start')
    async with lock:
        print('worker2 got lock')
        await asyncio.sleep(3)
    print('worker2 end')

if __name__ == '__main__':
    lock = asyncio.Lock()
    loop.run_until_complete(asyncio.wait([
        worker1(lock), worker2(lock),
        ]))
    loop.close()