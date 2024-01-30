import webview
from .model import Screen

def run():

    screen = Screen()
    width, height = screen.get_screen_size_percentage(40,70)

    webview.create_window(
        "Calypso Go",
        "ui/app.html",
        width = width,
        height = height,
        min_size=(400, 300)
    )
    
    webview.start(debug=True)