import webview


def run():
    webview.create_window("Calypso Go", "ui/app.html")
    webview.start(debug=True)