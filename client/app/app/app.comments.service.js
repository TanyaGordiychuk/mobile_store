class CommentsService {
    constructor() {
        this.inputComment = {};
    }

    addComment(comment){
            this.comments.push(this.inputComment);
            this.inputComment = {};
        };
    
}

export {CommentsService};