import instance from "./http";
import qs from 'qs';

const request = {
    get(url, params) {
        return instance.get(url, {
            params: params
        })
    },
    post(url, data, params) {
        return instance.post(url, qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: params
        })
    }
}

export default request
