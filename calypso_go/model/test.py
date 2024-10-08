import asyncio

from calypso_anemometer.core import CalypsoDeviceApi
from calypso_anemometer.model import CalypsoReading
from calypso_anemometer.util import wait_forever
from calypso_anemometer.engine import run_engine

from bleak import BleakScanner

mac_address = "F2:01:04:4F:61:66"




async def connect():

    # async with CalypsoDeviceApi() as device:
    #     info = await device.get_info()
    #     print(info)


    # result = await run_engine(workhorse=CalypsoDeviceApi, handler=lambda calypso: calypso.about())
    # print(result)

    # ------------------------------
    # def process_reading(reading: CalypsoReading):
    #     reading.dump()

    # async with CalypsoDeviceApi(ble_address=mac_address) as calypso:
    #     await calypso.subscribe_reading(process_reading)
    #     await wait_forever()

    # -----------------------------------

    stop_event = asyncio.Event()

    def callback(device, advertising_data):
        print(advertising_data)

    async with BleakScanner(callback) as scanner:
        # Important! Wait for an event to trigger stop, otherwise scanner
        # will stop immediately.
        await stop_event.wait()


asyncio.run(connect())

