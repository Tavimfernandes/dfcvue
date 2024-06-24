<!-- src/components/Sidebar.vue -->
<template>
    <el-menu class="sidebar-menu" mode="vertical">
      <el-menu-item index="1" @click="navigateTo('dashboard')">
        <i class="el-icon-menu"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="2" @click="navigateTo('projects')">
        <i class="el-icon-document"></i>
        <span slot="title">Projetos</span>
      </el-menu-item>
      <el-menu-item index="3" @click="triggerCreateProject">
        <i class="el-icon-plus"></i>
        <span slot="title">Criar Novo Projeto</span>
      </el-menu-item>
      <el-menu-item index="4" @click="logout">
        <i class="el-icon-logout"></i>
        <span slot="title">Logout</span>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push({ name: path });
  };
  
  const logout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };
  
  const triggerCreateProject = () => {
    // Trigger modal or navigation to create project page
    router.push({ name: 'create-project' });
  };
  </script>
  
  <style scoped>
  .sidebar-menu {
    width: 240px;
    height: 100vh;
    background-color: #f4f4f4;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
  }
  </style>
  