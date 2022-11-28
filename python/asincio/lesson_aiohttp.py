import aiohttp
import asyncio
import time
import datetime

import requests

start_time = time.time()


async def main():
    async with aiohttp.ClientSession() as session:
        for number in range(1, 151):
            pokemon_url = f'https://pokeapi.co/api/v2/pokemon/{number}'
            print(number)
            async with session.get(pokemon_url) as response:
                pokemon = await response.json()
                print(pokemon['name'], number, datetime.datetime.now())


def request_pokemon():
    for number in range(1, 151):
        pokemon_url = f'https://pokeapi.co/api/v2/pokemon/{number}'
        response = requests.get(pokemon_url)
        pokemon = response.json()
        print(pokemon['name'], datetime.datetime.now())


request_pokemon()
# asyncio.run(main())
print(time.time() - start_time)