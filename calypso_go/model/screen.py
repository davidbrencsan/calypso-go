from screeninfo import get_monitors

class Screen:
    def __init__(self) -> None:
        pass

    def get_screen_size_percentage(self, percentage_width: int, percentage_height: int) -> tuple[int,int]:

        '''
        The method calculates the current display width and height in pixels based on the percentage values provided in the parameters.

        Parameters:
            percentage_width(int): Percentage of the active display's width
            percentage_height(int): Percentage of the active display's height

        Returns:
            Tuple[int, int]: It returns the current display width and height in pixels.
        '''

        monitors = get_monitors()
        if monitors:
            primary_monitor = monitors[0]
            width_percentage = int(primary_monitor.width * percentage_width / 100)
            height_percentage = int(primary_monitor.height * percentage_height / 100)
            return width_percentage, height_percentage
        else:
            return 800, 600