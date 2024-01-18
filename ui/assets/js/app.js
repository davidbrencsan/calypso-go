class App {
    constructor() {
        this.pages = new Pages();
        this.pages.push(new DeviceSelectorPage("device-selector-page"));
        this.pages.push(new DeviceSelectorPage("device-pairing-page"));
        this.pages.showById("device-selector-page");

    }
}

const app = new App();