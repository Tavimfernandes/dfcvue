<!-- src/components/Login.vue -->
<template>
    <div class="login-container">
        <el-form :model="loginForm" @submit.native.prevent="handleLogin">
            <el-form-item>
                <el-input v-model="loginForm.username" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="loginForm.password" placeholder="Password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleLogin">Login</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        handleLogin() {
            // Simulate login logic here
            if (this.loginForm.username === 'admin' && this.loginForm.password === 'password') {
                this.$router.push('/dashboard');
                localStorage.setItem('user', this.loginForm.username);
            } else {
                this.$message.error('Invalid username or password');
            }
        }
    }
};
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
}
</style>