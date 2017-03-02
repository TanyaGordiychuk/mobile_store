import template from "./order.component.html";
import './order.component.styl';

class Controller {
    constructor() {
        console.log("Order init!!");
    }
}

const OrderComponent = {
    template,
    controller: Controller
};

export {OrderComponent};