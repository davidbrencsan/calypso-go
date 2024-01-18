class Page {
    constructor(id) {
        this.id = id;
        this.wrapper = document.getElementById(id);
    }

    show() {
        this.wrapper.removeAttribute('hidden');
    }

    hide() {
        this.wrapper.setAttribute('hidden', 'hidden');
    }
}

export { Page };