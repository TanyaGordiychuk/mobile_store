class DetailsService {
    constructor($http) {
        this.baseUrl = "http://localhost:4001/api/v1/phones";
        this.$http = $http;
    }

    getAll() {
        return this.$http
            .get(this.baseUrl)
    }
    getOne(id) {
        return this.$http
            .get(this.baseUrl+`/${id}`);
    }
}

export {DetailsService};