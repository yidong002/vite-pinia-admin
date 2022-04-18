import axios from 'axios';
import qs from 'qs'
import { message } from 'ant-design-vue';


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
            message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
            });
            return Promise.reject('error');
        } else {
            return response.data;
        }
    }, error => {
        console.log('err' + error); // for debug
        message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);
const ContentType = {
    'fomdata': 'application/x-www-form-urlencoded; charset=UTF-8',
    'json': 'application/json; charset=UTF-8',
    'mult': 'multipart/form-data'
}
// promise封装
const request = (
    url = '', 
    method = 'get',
    data = {}, 
    params = {}, 
    baseURL = 'main', 
    headers, 
    type) => {
    // 请求参数处理
    let baseurl = baseURL || BASE_URL || ''
    headers['Content-Type'] = ContentType[type] || ContentType['urlcoded']
    return new Promise((resolve, reject) => {
        service({
            baseURL: baseurl,
            headers: headers,
            url,
            method,
            data: type === 'formdata' ? qs.stringify(data) : data,
            params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}
export default request;