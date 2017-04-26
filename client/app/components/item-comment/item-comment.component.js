import template from "./item-comment.component.html";
import './item-comment.component.styl';

class Controller {
    constructor() {

    this.inputComment = {};
    }
//добавление комментариев
    addComment(comment) {
            this.comments.push(this.inputComment);
            this.inputComment = {};
        };
}
const ItemCommentComponent = {
    template,
    controller: Controller
};

export {ItemCommentComponent};