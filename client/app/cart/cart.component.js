/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./cart.component.html";
import './cart.component.styl';

class Controller {
    constructor(cartService) {
        console.log("App init!!");
        this.cart = cartService;
        this.purchases = this.getPurchases();
        this.totalPrice = this.getTotalPrice( this.purchases);
    }

    getPurchases() {
        return this.cart.getItems();
    }

    getTotalPrice(arrayOfItems) {
        let total = 0;

        arrayOfItems.forEach((obj) => {
            total += parseInt(obj.price);
        });

        return total;
    }
}

const CartComponent = {
    template,
    controller: Controller
};

export { CartComponent };