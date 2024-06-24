<template>
    <section class="container" id="servicos">
      <h2 class="section-title">Nossos serviços</h2>
      <div class="row">
        <div v-for="servico in servicos" :key="servico.id" class="col">
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="white" :class="`bi bi-${servico.icon}`" viewBox="0 0 16 16">
              <path :d="servico.path" />
            </svg>
          </div>
          <h3 class="title">{{ servico.title }}</h3>
          <p class="description">{{ servico.description }}</p>
          <a class="btn" href="#projetos">Saiba Mais &raquo;</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Servicos",
    data() {
      return {
        servicos: [
          {
            id: 1,
            icon: "house",
            title: "Residencial",
            description: "Construção e reformas residenciais e processos de construção financiada para clientes.",
            path: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
          },
          {
            id: 2,
            icon: "buildings",
            title: "Predial",
            description: "Reformas de fachadas, fiscalizações, laudos, teste de bate fofo, juntas de dilatação e outros.",
            path: "M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z",
          },
          {
            id: 3,
            icon: "shop",
            title: "Comercial",
            description: "Reformas e construções de escritórios corporativos, salas comerciais e outros",
            path: "M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1140px;
    margin: auto;
    padding: 2rem;
  }
  
  .section-title {
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #dee2e6;
    font-size: 2rem;
    text-align: center;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .col {
    flex: 1 1 calc(33.333% - 1.5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .icon-container {
    background-color: #007bff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    margin-bottom: 1rem;
  }
  
  .title {
    font-weight: normal;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .description {
    margin-bottom: 1rem;
  }
  
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 0.25rem;
    text-decoration: none;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  