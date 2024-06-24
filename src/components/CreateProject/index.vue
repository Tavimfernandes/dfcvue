<!-- src/components/CreateProject.vue -->
<template>
    <el-dialog title="Criar Novo Projeto" :visible.sync="visible" width="30%" @close="handleClose">
      <el-form :model="form" ref="form">
        <el-form-item label="Nome do Projeto" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Descrição" :label-width="formLabelWidth">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="Categoria" :label-width="formLabelWidth">
          <el-select v-model="form.category" placeholder="Selecione uma categoria">
            <el-option label="Comercial" value="Comercial"></el-option>
            <el-option label="Residencial" value="Residencial"></el-option>
            <el-option label="Condominial" value="Condominial"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Responsáveis" :label-width="formLabelWidth">
          <el-input v-model="form.responsibles"></el-input>
        </el-form-item>
        <el-form-item label="Data Estimada de Entrega" :label-width="formLabelWidth">
          <el-date-picker v-model="form.estimatedDeliveryDate" type="date" placeholder="Escolha a data"></el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">Cancelar</el-button>
        <el-button type="primary" @click="handleCreateProject">Criar</el-button>
      </span>
    </el-dialog>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const visible = ref(true);
  const form = ref({
    name: '',
    description: '',
    category: '',
    responsibles: '',
    estimatedDeliveryDate: ''
  });
  const formLabelWidth = '120px';
  
  const handleClose = () => {
    visible.value = false;
    // Emit the close event to the parent component
    emit('close');
  };
  
  const handleCreateProject = async () => {
    try {
      await axios.post('/path/to/db.json', form.value); // Update the URL to match your API endpoint
      handleClose();
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };
  </script>
  
  <style scoped>
  .dialog-footer {
    text-align: right;
  }
  </style>
  