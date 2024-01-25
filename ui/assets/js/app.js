import { DeviceSelectorPage } from "./page/device-selector-page.js";
import { DevicePairingPage } from "./page/device-pairing-page.js";
import { PageList } from "./page-list.js";
import { Page } from "./page.js";

class App {
    constructor() {
        this.pages = new PageList();
        this.pages.push(new DeviceSelectorPage("device-selector-page"));
        this.pages.push(new DevicePairingPage("device-pairing-page"));
        this.pages.showById("device-selector-page");
    }
}

const app = new App();