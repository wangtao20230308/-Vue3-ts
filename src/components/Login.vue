<script setup lang="ts">
// import { ref } from 'vue'
import { reactive } from "vue";
import { LoginData } from "../type/login";
// import { login } from "../request/api";
import { useRouter } from "vue-router";
import { FormInstance, FormRules } from "element-plus";
import { loginToken } from '../api/index.ts'

const data = reactive(new LoginData())
const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 3, max: 10, message: '账号的长度在3-10之间', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 10, message: '密码的长度在3-10之间', trigger: 'blur' },
    ],

})
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return

    formEl.validate((valid) => {
        if (valid) {
            const params = JSON.parse(JSON.stringify(data.ruleForm))
            loginToken(params).then((res) => {
                console.log("res", res)
                if (res.data.code == 0) {
                    ElMessage.success(res.data.message)
                    //保存token
                    localStorage.setItem("token", res.data.token)
                    //跳转
                    router.push('/home')
                } else {
                    ElMessage.error(res.data.message)
                }
            }).catch((err) => {
                console.log("err", err);
            })
        } else {
            console.log('error submit!')
            return false
        }
    })
}
const resetForm = () => {
    data.ruleForm.password = "",
        data.ruleForm.username = ""
}

defineProps<{ msg: string }>()

// const count = ref('这是一个登入页面')
</script>

<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="data.ruleForm" :rules="rules" status-icon label-width="80px"
            class="demo-ruleForm">
            <h2>合作方平台</h2>
            <img src="../assets/jpay.jpg">
            <el-form-item label="账号：" prop="username">
                <el-input v-model="data.ruleForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="data.ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn" @click="submitForm(ruleFormRef)">登录
                </el-button>
                <el-button class="login-btn" @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>
.login-box {
    background: #576776 url("../assets/nature-1.jpg") no-repeat 36% 37%;
    background-size: cover;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 1px;

    .demo-ruleForm {
        width: 400px;
        position: absolute;
        top: 60px;
        right: 150px;
        box-shadow: 3px 0 28px hsl(0deg 100% 2.16%);
        margin: 200px auto;
        background: #ffffff;
        padding: 40px;
        border-radius: 5px;
    }

    .login-btn {
        width: 48%;
    }

    h2 {
        margin-bottom: 20px;
    }
}
</style>