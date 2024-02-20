import request from '../utils/request'

interface loginData {
    username: string,
    password: string
}

// 登入系统模拟接口
export const loginToken = (params: loginData) =>
    request({ url: '/api/login', method: 'get', params: params })