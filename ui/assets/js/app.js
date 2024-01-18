import { DeviceSelectorPage } from "./pages/device-selector.js";
import { DevicePairingPage } from "./pages/device-pairing.js";
import { Pages } from "./pages.js";
import { Page } from "./page.js";

class App {
    constructor() {
        this.pages = new Pages();
        this.pages.push(new DeviceSelectorPage("device-selector-page"));
        this.pages.push(new DevicePairingPage("device-pairing-page"));
        this.pages.showById("device-selector-page");
    }
}

const app = new App();