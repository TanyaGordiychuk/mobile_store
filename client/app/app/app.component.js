/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./app.component.html";
import "./app.component.styl";

class Controller {
    constructor($scope, cartService) {
        console.log("App init!!");
        this.cart = cartService;

        $scope.$watch(()=> {
           return this.cart.cartItems.length
        }, (newAmout, oldAmout) => {
            if(newAmout !== oldAmout) {
                this.totalPrice = this.getTotalPrice(this.cart.cartItems);
            }
        })
    }

    getTotalPrice(arrayOfItems) {
        let total = 0;

        arrayOfItems.forEach((obj) => {
            total += parseInt(obj.price);
        });

        return total;
    }
}

const AppComponent = {
    template,
    controller: Controller
};

export {AppComponent};