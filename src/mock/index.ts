import { MockMethod } from 'vite-plugin-mock'

interface loginData {
    username: string,
    password: string
}

function getAccPwd() {
    return [
        {
            username: 'admin',
            password: '123456'
        }
    ]
}

export default [
    {
        url: '/api/login', // 注意，这里只能是string格式
        method: 'get',
        response: (body: any) => {
            const { username, password } = body.query as loginData
            const accPwd = getAccPwd()
            const check = accPwd.some(item => item.username === username && item.password === password)
            console.log('accPwd', accPwd);
            console.log('check', check);
            if (check) {
                return {
                    code: 0,
                    message: '登录成功',
                    token: 'fakeToken123456789'
                }
            } else {
                return {
                    code: 1,
                    message: '账号或者密码不正确，请重新输入'
                }
            }
        }
    }
] as MockMethod[]