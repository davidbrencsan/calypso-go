import { FocusTracker } from "./focus-tracker.js";
import { Icons } from "./icons.js";
import { DeviceSelectorPage } from "./page/device-selector-page.js";
import { DevicePairingPage } from "./page/device-pairing-page.js";
import { DeviceSettingsPage } from "./page/device-settings-page.js";
import { PageList } from "./page-list.js";
import { Page } from "./page.js";

class App {
    constructor() {
        this.isTouch = false;
        this.pages = new PageList();
        this.pages.push(new DeviceSelectorPage("device-selector-page"));
        this.pages.push(new DevicePairingPage("device-pairing-page"));
        this.pages.push(new DeviceSettingsPage("device-settings-page"));
        this.pages.showById("device-selector-page");
		FocusTracker.init();

        // Detect touch screen
		window.addEventListener('touchstart', function touchDetect() {
			this.isTouch = true;
			document.body.classList.remove('no-touch');
			window.removeEventListener('touchstart', touchDetect);
		});

		window.addEventListener('pointerdown', function pointerTouchDetect(event) {
			if (event.pointerType != 'mouse') {
				this.isTouch = true;
				document.body.classList.remove('no-touch');
			}
			window.removeEventListener('touchstart', pointerTouchDetect);
		});

        // Initializes
        Icons.init();

		this.pages.initRouteTriggers();
    }


}

const app = new App();
window.app = app;

