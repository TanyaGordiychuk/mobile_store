import template from "./item-comment.component.html";
import './item-comment.component.styl';

class Controller {
    constructor($http, commentService, $state) {
        console.log("Comment init!!");
        $http.get('http://localhost:4001/api/v1/comments/:id').then((resp) => {
            this.comments = resp.data;
        });

        this.$state = $state;
    }
}

const ItemCommentComponent = {
    template,
    controller: Controller
};

export {ItemCommentComponent};