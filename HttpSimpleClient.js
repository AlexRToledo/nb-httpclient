const axios = require('axios');

class HttpSimpleClient {
    constructor(headers=null) {
        this.Axios = axios;
        if(headers !== null)
            this.Headers(headers);
    }

    Headers(headers) {
        this.Axios = axios.create({
            headers: headers
        });
    }

    async Get(url) {
        try {
            return await this.Axios.get(url);
        } catch (e) {
            return {data: false};
        }
    }

    async Post(url, data) {
        try {
            return await this.Axios.post(url, data);
        } catch (e) {
            return {data: false};
        }
    }

    async Put(url, data) {
        try {
            return await this.Axios.put(url, data);
        } catch (e) {
            return {data: false};
        }
    }

    async Delete(url) {
        try {
            return await this.Axios.delete(url);
        } catch (e) {
            return {data: false};
        }
    }
}

module.exports = HttpSimpleClient;