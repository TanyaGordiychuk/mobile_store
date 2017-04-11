class CommentsService {
    constructor($http) {
        this.baseUrl = "http://localhost:4001/api/v1/comments";
        this.$http = $http;
    }
    getComments(id) {
        return this.$http
            .get(this.baseUrl+`/${id}`);
    }
}
export {CommentsService};