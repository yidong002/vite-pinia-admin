import axios from 'axios';


const BASE_URL = import.meta.env.VITE_API_URL;

// 创建axios实例
const service = axios.create({
    baseURL: BASE_URL, // api的base_url
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        if (res.code !== 20000) {
            Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
            });
            return Promise.reject('error');
        } else {
            return response.data;
        }
    }
);

// promise封装
const request = (url, method, data) => {
    return new Promise((resolve, reject) => {
        service({
            url,
            method,
            data
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
export default request;