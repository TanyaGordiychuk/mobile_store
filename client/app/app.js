import angular from "angular";
import uiRouter from 'angular-ui-router';

import routerConfig from "./app.routes";

import { CatalogComponent } from "./catalog/catalog.component";
import { AppComponent } from "./app/app.component";
import { CartComponent } from "./cart/cart.component";
import { DetailsComponent } from "./details/details.component";
import { OrderComponent } from "./order/order.component";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { CatalogItemComponent } from "./components/catalog-item/catalog-item.component";

import { CartService } from "./app/app.cart.service";
import { DetailsService } from "./app/app.details.service";

import "./variables.styl";
import "./app.styl";

angular.module("client", [uiRouter])
    .constant("enums", {
        baseUrl: "http://localhost:4001/api/v1"
    })
    .config(routerConfig)
    .component("app", AppComponent)
    .component("appCatalog", CatalogComponent)
    .component("appCart", CartComponent)
    .component("appNavbar", NavbarComponent)
    .component("appDetails", DetailsComponent)
    .component("appCatalogItem", CatalogItemComponent)
    .component("appOrder", OrderComponent)
    .service("cartService", CartService)
    .service("detailsService", DetailsService)
    .run();
