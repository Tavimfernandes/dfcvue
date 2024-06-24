<template>
  <div>
    <h1>Projetos</h1>
    <div v-if="isLoading">Carregando projetos...</div>
    <div v-else>
      <div v-for="project in projects" :key="project.code" class="project-card">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <router-link :to="'/projects/' + project.code">Ver Detalhes</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getProjects } from '../services/projectService';

const projects = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  const response = await getProjects();
  projects.value = response.data;
  isLoading.value = false;
});
</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
}
</style>
