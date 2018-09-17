const axios = require('axios');

class HttpClient {
    constructor(base, headers=null) {
        this.baseUrl = base;
        this.Axios = axios;
        if(headers !== null)
            this.Headers(headers);
    }

    Headers(headers) {
        this.Axios = axios.create({
            headers: headers
        });
    }

    async Get(extraUrl='', params=null) {
        try {
            return (params === null) ? await this.Axios.get(this.baseUrl + extraUrl) : await Axios.get(this.baseUrl + extraUrl, {params: params});
        } catch (e) {
            return {data: false};
        }
    }

    async Post(data, extraUrl='') {
        try {
            return await this.Axios.post(this.baseUrl + extraUrl, data);
        } catch (e) {
            return {data: false};
        }
    }

    async Put(data, extraUrl='', id='', params=null) {
        try {
            return (params !== null) ? await this.Axios.put(this.baseUrl + extraUrl + id, {params: params, data: data}) : await this.Axios.put(this.baseUrl + extraUrl + id, data);
        } catch (e) {
            return {data: false};
        }
    }

    async Delete(extraUrl='', id='', params=null) {
        try {
            return (params !== null) ? await this.Axios.delete(this.baseUrl + extraUrl + id, {params: params}) : await this.Axios.delete(this.baseUrl + extraUrl + id);
        } catch (e) {
            return {data: false};
        }
    }
}

module.exports = HttpClient;