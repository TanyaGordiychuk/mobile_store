/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./catalog.component.html";
import './catalog.component.styl';

class Controller {
    constructor($http, cartService, $state) {
        console.log("Catalog init!!");
        $http.get('http://localhost:4001/api/v1/phones').then((resp) => {
            this.items = resp.data;
        });

        this.cart = cartService;
        this.$state = $state;
    }

    addItemToCart(catalogItem) {
        this.cart.setItem(catalogItem)
    }

    toDetails(id) {
        this.$state.go('details', {id});
    }
}

const CatalogComponent = {
    template,
    controller: Controller
};

export {CatalogComponent};