class Pages {
    constructor() {
        this.pages = [];
    }

    showById(id) {
        this.pages.forEach(page => {
            page.hide();
            if(page.id == id){
                page.show();
            }
        });
    }

    push(page) {
        this.pages.push(page);
    }
}