import axios from 'axios'

//创建axios实例
const service = axios.create({
    baseURL: '/',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

//请求拦截
service.interceptors.request.use((config) => {
    console.log("请求拦截器", config);
    
    config.headers = config.headers || {}
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config
})
//响应拦截
service.interceptors.response.use((res) => {
    console.log("响应拦截器", res);

    const code: number = res.data.code
    if (code !== 0) {
        ElMessage.error(res.data.message)
        return Promise.reject(res.data)
    }
    return res
}, (error) => {
    console.log(error)
})

export default service