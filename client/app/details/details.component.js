/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./details.component.html";
import './details.component.styl';

class Controller {
    constructor($scope, detailsService, $stateParams) {
        console.log($stateParams.id);
        detailsService.getOne($stateParams.id).then((resp) => {
            this.item = resp.data;
            console.log(this.item.images[0]);
        })

    }
}

const DetailsComponent = {
    template,
    controller: Controller
};

export {DetailsComponent};