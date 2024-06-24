<!-- src/components/LineChart.vue -->
<template>
    <div>
      <line-chart :chart-data="data" :options="options"></line-chart>
    </div>
  </template>
  
  <script setup>
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);
  
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  });
  
  const options = {
    responsive: true,
    maintainAspectRatio: false
  };
  </script>
  
  <style scoped>
  </style>
  