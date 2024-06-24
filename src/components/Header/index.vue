<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
            <div class="logo-container">
                <el-menu-item index="0" class="logo-item">
                    <img style="width: 150px;" src="./../../images/cropped-dfc-logo.webp" alt="Element logo" @click="navigateTo('/')"/>
                </el-menu-item>
            </div>
            <div class="menu-items-container">
                <el-menu-item index="1"><a @click="navigateTo('/')">Home</a></el-menu-item>
                <el-menu-item index="2"><a @click="navigateToSection('#servicos')">Serviços</a></el-menu-item>
                <el-menu-item index="3"><a @click="navigateToSection('#destaques')">Destaques</a></el-menu-item>
                <el-sub-menu index="4">
                    <template #title>Projetos</template>
                    <el-menu-item index="4-1"><a @click="navigateToSection('#projetos')">Reforma Comercial</a></el-menu-item>
                    <el-menu-item index="4-2"><a @click="navigateToSection('#projetos')">Reforma Residencial</a></el-menu-item>
                    <el-menu-item index="4-3"><a @click="navigateToSection('#projetos')">Reforma Condominial</a></el-menu-item>
                    <el-menu-item index="4-4"><a @click="navigateToSection('#projetos')">Individualização</a></el-menu-item>
                </el-sub-menu>
                <el-menu-item index="5"><a @click="navigateToSection('#sobre')">Sobre Nós</a></el-menu-item>
                <el-sub-menu index="6">
                    <template #title>Obras</template>
                    <el-menu-item index="6-1"><a @click="navigateTo('/obras')">Catálogo</a></el-menu-item>
                    <el-menu-item index="6-2"><a @click="navigateTo('/track')">Andamento de Obra</a></el-menu-item>
                </el-sub-menu>
                <el-menu-item index="7"><a @click="navigateToSection('#contato')">Contato</a></el-menu-item>
            </div>
            <div class="login-button-container">
                <el-button v-if="!loggedIn" type="primary" @click="goToLogin">Login</el-button>
                <el-button v-else type="primary" @click="goToClientArea">Área do Cliente</el-button>
            </div>
        </el-menu>
        <!-- Floating Buttons -->
        <div class="floating-buttons">
            <el-button class="back-to-top" type="primary" icon="el-icon-arrow-up" @click="scrollToTop"></el-button>
            <el-button class="whatsapp-button" type="success" icon="el-icon-message" @click="openWhatsApp"></el-button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const activeIndex = ref('1');
const loggedIn = ref(!!localStorage.getItem('user'));

const router = useRouter();
const route = useRoute();

const goToLogin = () => {
    router.push('/login');
};

const goToClientArea = () => {
    router.push('/dashboard');
};

const navigateTo = (path) => {
    if (route.path !== path) {
        router.push(path);
    }
};

const navigateToSection = (section) => {
    if (route.path !== '/') {
        router.push('/').then(() => {
            setTimeout(() => {
                document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });
    } else {
        document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
    }
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const openWhatsApp = () => {
    const phoneNumber = '5511999999999'; // Coloque o número do WhatsApp da empresa aqui
    const message = 'Olá, gostaria de saber mais informações sobre os serviços.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

watch(route, () => {
    loggedIn.value = !!localStorage.getItem('user');
});

onMounted(() => {
    loggedIn.value = !!localStorage.getItem('user');
});
</script>

<style scoped>
.el-menu-demo {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-container {
    display: flex;
    align-items: center;
}

.menu-items-container {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

.login-button-container {
    margin-right: 20px;
}

.floating-buttons {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.back-to-top, .whatsapp-button {
    border-radius: 50%;
}
</style>
