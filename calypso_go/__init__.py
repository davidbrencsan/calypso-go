import webview
import asyncio
from .model import Screen
from bleak import BleakScanner
from bleak.backends.device import BLEDevice

class JsApi:

    def __init__(self) -> None:
        pass

    async def explore_devices(self) -> list[BLEDevice]:
        """"""
        return await BleakScanner.discover()

    def get_device_list(self, timeout: float = 5) -> list:
        """"""

        def ble_device_to_dict(item:BLEDevice) -> dict:
            return {
                "address": item.address,
                "name": item.name
            }

        res = asyncio.run(self.explore_devices())
        results = list(map(ble_device_to_dict, res))
        return results
    
    def echo(self):
        return "Hello"
    
    def create_test_json(self) -> dict:
        return {
            "address": "AA:01:04:4F:61:66",
            "name": "Ultrasonic"
        }
    
    # def create_html_template(self, testdata:dict):
    #     print("Hello")

def run():

    js_api = JsApi()

    test_data = js_api.create_test_json()
    print(test_data)


    screen = Screen()
    width, height = screen.get_screen_size_percentage(40,70)

    webview.create_window(
        "Calypso Go",
        "ui/app.html",
        width=width,
        height=height,
        min_size=(400, 300),
        js_api=js_api,
    )
    
    webview.start(debug=True)