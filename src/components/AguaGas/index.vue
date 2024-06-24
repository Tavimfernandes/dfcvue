<template>
    <section class="bg-body-tertiary" id="destaques">
      <div class="container px-4 py-5">
        <h2 class="pb-2 mb-4 border-bottom">
          Nossos destaques
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-stars text-primary"
            viewBox="0 0 16 16"
          >
            <path
              d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"
            />
          </svg>
        </h2>
        <div class="row align-items-md-stretch">
          <div class="col-md-6 mb-4 mb-md-3">
            <div class="h-100 p-5 text-bg-dark rounded-3 bg-primary">
              <h2>Individualização de Água & Gás</h2>
              <p>
                Reformas condominiais são essenciais para manter a qualidade e
                valorização do patrimônio coletivo, melhorando espaços
                compartilhados, segurança e conforto, com participação ativa dos
                moradores, garantindo melhor qualidade de vida a longo prazo.
                <br />
                Conte conosco para realizar a reforma do seu condomínio.
              </p>
              <a
                class="text-decoration-none btn btn-outline-light"
                :href="link1"
              >
                Faça um orçamento
              </a>
            </div>
          </div>
          <div class="col-md-6 mb-4 mb-md-3">
            <div class="h-100 p-5 text-primary bg-white border border-primary rounded-3">
              <h2>Reformas Condominiais</h2>
              <p>
                Reformas condominiais são essenciais para manter a qualidade e
                valorização do patrimônio coletivo, melhorando espaços
                compartilhados, segurança e conforto, com participação ativa dos
                moradores, garantindo melhor qualidade de vida a longo prazo.
                <br />
                Conte conosco para realizar a reforma do seu condomínio.
              </p>
              <a
                class="text-decoration-none btn btn-outline-primary"
                :href="link2"
              >
                Faça um orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AguaGas",
    data() {
      return {
        link1: "https://api.whatsapp.com/send?phone=5561981657327&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20individualiza%C3%A7%C3%A3o%20de%20%C3%81gua%20e%20G%C3%A1s",
        link2: "https://api.whatsapp.com/send?phone=5561981657327&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20Reforma%20Condominial",
      };
    },
  };
  </script>
  
  <style scoped>
  .bg-body-tertiary {
    background-color: #f8f9fa;
  }
  
  .container {
    max-width: 1140px;
    margin: auto;
    padding: 2rem;
  }
  
  .pb-2 {
    padding-bottom: 0.5rem;
  }
  
  .mb-4 {
    margin-bottom: 2rem;
  }
  
  .border-bottom {
    border-bottom: 1px solid #dee2e6;
  }
  
  .text-primary {
    color: #007bff !important;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .col-md-6 {
    flex: 1 1 calc(50% - 1.5rem);
  }
  
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  
  .mb-md-3 {
    margin-bottom: 1rem;
  }
  
  .h-100 {
    height: 100%;
  }
  
  .p-5 {
    padding: 3rem;
  }
  
  .text-bg-dark {
    color: #fff;
    background-color: #343a40;
  }
  
  .bg-primary {
    background-color: #007bff !important;
  }
  
  .rounded-3 {
    border-radius: 0.3rem;
  }
  
  .text-decoration-none {
    text-decoration: none !important;
  }
  
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  
  .btn-outline-light {
    color: #f8f9fa;
    border-color: #f8f9fa;
  }
  
  .btn-outline-primary {
    color: #007bff;
    border-color: #007bff;
  }
  
  .btn:hover {
    text-decoration: none;
  }
  
  .text-primary {
    color: #007bff !important;
  }
  
  .bg-white {
    background-color: #fff;
  }
  
  .border-primary {
    border-color: #007bff !important;
  }
  </style>
  