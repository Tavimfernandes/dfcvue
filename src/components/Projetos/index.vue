<!-- src/components/Projetos.vue -->
<template>
    <section class="container mt-5" id="projetos">
      <h2 class="pb-2 border-bottom">Projetos de excelência</h2>
      <div class="row">
        <div class="d-md-flex flex-md-equal my-md-3 ps-md-3 w-100">
          <div
            class="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden animate__animated animate__fadeInUp w-100"
            style="cursor: pointer; animation-duration: 2s"
            @click="handleFilterSelection('individualizacao')"
          >
            <router-link
              to="/obras#listaObras"
              class="text-decoration-none text-light"
            >
              <div class="my-3 py-3">
                <h2 class="display-5">Individualização de Água & Gás</h2>
                <p class="lead">Com fita de led embutida e guarda corpo</p>
              </div>
              <div
                class="mx-auto"
                style="width: 80%; height: 300px"
              >
                <img
                  src="./images/ship/ship-01.webp"
                  class="img-fluid rounded-4"
                  alt=""
                />
              </div>
            </router-link>
          </div>
  
          <div
            class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden animate__animated animate__fadeInUp w-100"
            style="cursor: pointer; animation-duration: 2.2s"
            @click="handleFilterSelection('predial')"
          >
            <router-link
              to="/obras#listaObras"
              class="text-decoration-none text-primary"
            >
              <div class="my-3 p-3">
                <h2 class="display-5">Reformas Condominiais</h2>
                <p class="lead">
                  Um ambiente condominial que combina sofisticação e conforto.
                </p>
              </div>
              <div
                class="mx-auto"
                style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
              >
                <img
                  src="./images/estacionamento/estacionamento-fachada.webp"
                  class="img-fluid rounded-4"
                  alt=""
                  loading="lazy"
                />
              </div>
            </router-link>
          </div>
        </div>
  
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div
            class="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden animate__animated animate__fadeInUp w-100"
            style="cursor: pointer; animation-duration: 2.4s"
            @click="handleFilterSelection('residencial')"
          >
            <router-link
              to="/obras#listaObras"
              class="text-decoration-none text-light"
            >
              <div class="my-3 py-3">
                <h2 class="display-5">Obras Residenciais</h2>
                <p class="lead">
                  Duplex com decoração em ladrilhos hidráulicos à modernidade das placas de ACM.
                </p>
              </div>
              <div
                class="mx-auto"
                style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
              >
                <img
                  src="./images/casaPark/casaPark-01.webp"
                  class="img-fluid rounded-4"
                  alt=""
                />
              </div>
            </router-link>
          </div>
          <div
            class="order-md-first bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden animate__animated animate__fadeInUp w-100"
            style="cursor: pointer; animation-duration: 2.3s"
            @click="handleFilterSelection('comercial')"
          >
            <router-link
              to="/obras#listaObras"
              class="text-decoration-none text-primary"
            >
              <div class="my-3 p-3">
                <h2 class="display-5">Obras Comerciais</h2>
                <p class="lead">
                  Ambientes profissionais e acolhedores para colaboradores e clientes.
                </p>
              </div>
              <div
                class="mx-auto"
                style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
              >
                <img
                  src="./images/mara/MARA-01.webp"
                  class="img-fluid rounded-4"
                  alt=""
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Projetos',
    setup() {
      const router = useRouter();
      const selectedFilter = ref('');
  
      const handleFilterSelection = (filter) => {
        selectedFilter.value = filter;
        router.push(`/obras?filter=${filter}`);
      };
  
      return {
        handleFilterSelection,
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
  
  .mt-5 {
    margin-top: 3rem;
  }
  
  .pb-2 {
    padding-bottom: 0.5rem;
  }
  
  .border-bottom {
    border-bottom: 1px solid #dee2e6;
  }
  
  .text-bg-primary {
    color: #fff;
    background-color: #007bff;
  }
  
  .text-primary {
    color: #007bff !important;
  }
  
  .bg-body-tertiary {
    background-color: #f8f9fa;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .d-md-flex {
    display: flex !important;
  }
  
  .flex-md-equal {
    flex: 1 1 0%;
  }
  
  .my-md-3 {
    margin: 1rem 0;
  }
  
  .ps-md-3 {
    padding-left: 1rem;
  }
  
  .me-md-3 {
    margin-right: 1rem;
  }
  
  .pt-3 {
    padding-top: 1rem;
  }
  
  .px-3 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .pt-md-5 {
    padding-top: 3rem;
  }
  
  .px-md-5 {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  
  .text-center {
    text-align: center;
  }
  
  .overflow-hidden {
    overflow: hidden;
  }
  
  .w-100 {
    width: 100%;
  }
  
  .animate__animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  
  .animate__fadeInUp {
    animation-name: fadeInUp;
  }
  
  @keyframes fadeInUp {
    from {
      transform: translate3d(0, 100%, 0);
      opacity: 0;
    }
  
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  
  .rounded-4 {
    border-radius: 0.5rem;
  }
  
  .text-decoration-none {
    text-decoration: none !important;
  }
  
  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }
  
  .display-5 {
    font-size: 3rem;
    font-weight: 300;
  }
  </style>
  