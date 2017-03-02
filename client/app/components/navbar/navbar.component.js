/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./navbar.component.html";

class Controller {
    constructor() {
        console.log("Navbar init!!");
    }
}

const NavbarComponent = {
    template,
    controller: Controller,
    bindings: {
        totalPrice: '<'
    }
};

export {NavbarComponent};