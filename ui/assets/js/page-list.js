class PageList {
    routeTriggerSelector ='[data-route-onclick]';
    routeTriggerIdAttribute ='data-route-onclick';
    routeTriggerAttrsAttribute ='data-route-attrs';


    constructor() {
        this.pages = [];
        this.triggers = [];
        this.handleEvent = function(event) {
            this.handleEvents.call(this, event);  // Call-al meg lehet adni, hogy mi legyen a this. Egymásba ágyazott hívásoknál kell. This: Pagelist
        };
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

    handleEvents(event) {
        switch(event.type) {
            case 'click':
                if (event.target.hasAttribute(this.routeTriggerIdAttribute)) {
                    let pageId = event.target.getAttribute(this.routeTriggerIdAttribute);
                    let pageAttrs = event.target.getAttribute(this.routeTriggerAttrsAttribute);
                    this.showById(pageId);
                }
                break;
        }
    }

    initRouteTriggers() {
        document.querySelectorAll(this.routeTriggerSelector).forEach(elem => {
            this.initRouteTrigger(elem);
        });
    }

    initRouteTrigger(elem) {
        elem.addEventListener('click', this);
        this.triggers.push(elem);
    }

    removeRouteTriggers() {
        for (let i = this.triggers.length - 1; i >= 0; i--) {
            this.removeRouteTriggerByElem(this.triggers[i]);
        }
    }

    removeRouteTrigger(pageId, pageAttrs) {
        this.triggers.forEach(elem => {
            let innerPageId = elem.getAttribute(this.routeTriggerIdAttribute);
            let innerPageAttrs = elem.getAttribute(this.routeTriggerAttrsAttribute);
            if (innerPageId == pageId && innerPageAttrs == pageAttrs) {
                this.removeRouteTriggerByElem(elem);
            }
        });
        
    }

    removeRouteTriggerByElem(elem) {
        let index = this.triggers.indexOf(elem);
        this.triggers[index].removeEventListener('click', this);
        this.triggers.splice(index, 1);
    }
}



export { PageList };