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

async def worker1(event):
    print('worker1 start')
    await event.wait()
    print('worker1 got event')
    await asyncio.sleep(3)
    print('worker1 end')

async def worker2(event):
    print('worker2 start')
    await event.wait()
    print('worker2 got event')
    await asyncio.sleep(3)
    print('worker2 end')
 
async def worker3(event):
    print('worker3 start')
    print('worker3 got event')
    await asyncio.sleep(3)
    print('worker3 end')
    event.set()


class AwaitableClass(object):
    def __init__(self, name, loop) -> None:
        self.name = name
        self.loop = loop

    def __await__(self):
        reader, writer = yield from asyncio.open_connection(
            '127.0.0.1', 8888, loop=self.loop,
        )
        writer.write(self.name.encode())
        writer.write_eof()
        data = yield from reader.read()
        return data


async def main(name, loop):
    print('chunk reader')
    result = await AwaitableClass(name, loop)
    print(result)

if __name__ == '__main__':
    loop.run_until_complete(asyncio.wait([
        main('task1', loop), main('task2', loop),
        ]))
    loop.close()