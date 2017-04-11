/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./details.component.html";
import './details.component.styl';

class Controller {
    constructor($scope, detailsService, $stateParams, commentsService) {
        console.log($stateParams.id);
        detailsService.getOne($stateParams.id).then((resp) => {
            this.item = resp.data;
            console.log(this.item);
        })

        // this.service = commentsService;
        // this.comments = this.getReviews();
    }

    // getReviews() {
    //     service.getComments(this.item._id);
    // }
}
const DetailsComponent = {
    template,
    controller: Controller
};

export {DetailsComponent};