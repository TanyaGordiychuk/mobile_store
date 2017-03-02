/**
 * Created by IlyaLitvinov on 24.01.17.
 */
class CartService {
    constructor() {
        this.cartItems = [];
    }

    setItem(catalogItem) {
        this.cartItems.push(catalogItem);
    }

    getItems() {
        return this.cartItems;
    }

    // delItems(catalogItem) {
    //     var itemIndex = this.cartItems.indexOf(catalogItem);
    //     this.cartItems.splice(itemIndex,1);
    // }
}

export {CartService}