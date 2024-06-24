<template>
  <div class="construction-details" v-if="details">
    <h1>{{ details.name }}</h1>
    <p class="description"><strong>Descrição:</strong> {{ details.description }}</p>
    <p class="responsibles"><strong>Responsáveis:</strong> {{ details.responsibles }}</p>
    <p class="estimated-delivery"><strong>Data Estimada de Entrega:</strong> {{ details.estimatedDeliveryDate }}</p>
    
    <div v-if="details.photos && details.photos.length" class="photos-section">
      <h2>Fotos</h2>
      <div class="photos">
        <img v-for="(photo, index) in details.photos" :key="index" :src="photo" alt="Foto da Obra">
      </div>
    </div>

    <div v-if="details.steps && details.steps.length" class="steps-section">
      <h2>Etapas da Obra</h2>
      <ol class="steps">
        <li v-for="(step, index) in details.steps" :key="index">
          <strong>{{ step.name }}:</strong> {{ step.description }}
        </li>
      </ol>
    </div>
  </div>
  <div v-else>
    <p>Carregando detalhes da obra...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const details = ref(null);

const fetchConstructionDetails = async (code) => {
  try {
    const response = await axios.get(`http://localhost:3000/projects?code=${code}`);
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error('Código da obra inválido.');
    }
  } catch (error) {
    throw new Error('Erro ao buscar os dados.');
  }
};

onMounted(async () => {
  try {
    details.value = await fetchConstructionDetails(route.params.code);
  } catch (error) {
    ElMessage.error(error.message);
    // Redirect to track page if code is invalid
    router.push('/track');
  }
});
</script>

<style scoped>
.construction-details {
  max-width: 800px;
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

.description, .responsibles, .estimated-delivery {
  margin-bottom: 10px;
  color: #666;
}

.photos-section {
  margin-top: 30px;
}

.photos {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.photos img {
  width: calc(50% - 10px);
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.steps-section {
  margin-top: 30px;
}

.steps {
  list-style: decimal;
  padding-left: 20px;
  color: #666;
}

.steps li {
  margin-bottom: 10px;
}
</style>
