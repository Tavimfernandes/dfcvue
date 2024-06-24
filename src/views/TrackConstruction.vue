<template>
  <div class="track-construction">
    <h1>Acompanhe o Andamento da Obra</h1>
    <p>Para acompanhar o andamento da sua obra, insira o código fornecido pela DFC Engenharia.</p>
    <el-form @submit.prevent="handleSubmit" class="form">
      <el-form-item>
        <el-input v-model="code" placeholder="Insira o código da obra" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit" class="submit-button">Acompanhar Obra</el-button>
      </el-form-item>
    </el-form>
    <div class="contact-info">
      <p>Não tem o código ou esqueceu? <a href="/contato">Entre em contato com a DFC Engenharia</a></p>
    </div>

    <div v-if="project" class="project-details">
      <h2>Detalhes do Projeto</h2>
      <p><strong>Código:</strong> {{ project.code }}</p>
      <p><strong>Nome:</strong> {{ project.name }}</p>
      <p><strong>Categoria:</strong> {{ project.category }}</p>
      <p><strong>Status:</strong> {{ project.status }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ElMessage } from 'element-plus';

const code = ref('');
const router = useRouter();
const project = ref(null);

const handleSubmit = async () => {
  if (code.value.trim() === '') {
    ElMessage.error('Por favor, insira um código válido.');
    return;
  }
  try {
    const response = await axios.get(`http://localhost:3000/projects?code=${code.value}`);
    if (response.data.length > 0) {
      project.value = response.data[0];
      // Redirect to the details page if needed
      router.push(`/track/${code.value}`);
    } else {
      ElMessage.error('Nenhum projeto encontrado com este código.');
      project.value = null;
    }
  } catch (error) {
    ElMessage.error('Erro ao buscar os dados. Tente novamente mais tarde.');
  }
};
</script>

<style scoped>
.track-construction {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

p {
  text-align: center;
  margin-bottom: 20px;
  color: #666;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.submit-button {
  width: 100%;
}

.contact-info {
  margin-top: 20px;
  text-align: center;
  color: #666;
}

.contact-info a {
  color: #409EFF;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.project-details {
  margin-top: 20px;
  padding: 20px;
  border-top: 1px solid #eee;
}
</style>
