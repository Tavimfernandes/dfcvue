<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard-container">
    <Sidebar @create-project="showCreateProjectModal = true" />
    <div class="dashboard-content">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="panel">
            <h2>Visão Geral dos Projetos</h2>
            <line-chart :data="projectData"></line-chart>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="panel notifications">
            <h2>Notificações</h2>
            <el-list>
              <el-list-item v-for="(notification, index) in notifications" :key="index">
                {{ notification }}
              </el-list-item>
            </el-list>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mt-20">
        <el-col :span="12">
          <div class="panel calendar-panel">
            <h2>Calendário de Prazos</h2>
            <vue-cal :events="events" style="height: 300px;"></vue-cal>
          </div>
        </el-col>
      </el-row>
    </div>
    <CreateProject v-if="showCreateProjectModal" @close="showCreateProjectModal = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LineChart from './../components/LineChart/index.vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import Sidebar from '../components/Sidebar/index.vue';
import CreateProject from '../components/CreateProject/index.vue';
import axios from 'axios';

const projectData = ref({
  labels: [],
  datasets: [
    {
      label: 'Projetos Concluídos',
      backgroundColor: '#42A5F5',
      data: []
    },
    {
      label: 'Projetos em Andamento',
      backgroundColor: '#66BB6A',
      data: []
    }
  ]
});

const notifications = ref([]);
const events = ref([]);
const showCreateProjectModal = ref(false);

const fetchDashboardData = async () => {
  try {
    const response = await axios.get('/path/to/db.json');
    const data = response.data;

    projectData.value.labels = data.projectData.labels;
    projectData.value.datasets[0].data = data.projectData.completed;
    projectData.value.datasets[1].data = data.projectData.inProgress;

    notifications.value = data.notifications;
    events.value = data.events;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  }
};

onMounted(() => {
  fetchDashboardData();
});
</script>

<style scoped>
.dashboard-container {
  display: flex;
}

.dashboard-content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 240px; /* Adjust this based on sidebar width */
}

.panel {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.notifications {
  max-height: 300px;
  overflow-y: auto;
}

.calendar-panel {
  height: 300px;
}

.mt-20 {
  margin-top: 20px;
}
</style>
