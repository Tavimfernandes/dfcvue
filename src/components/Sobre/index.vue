<!-- src/components/Sobre.vue -->

<template>
  <section class="sobre" id="sobre">
    <div class="container">
      <h2 class="section-title">Sobre a Empresa</h2>

      <div class="content">
        <div class="text-content">
          <h2 class="highlight">
            Sua parceira de confiança na construção civil em Brasília!
          </h2>
          <p>
            A DFC Engenharia tem como principais ramos de atuação:
          </p>
          <ul>
            <li>Individualização de Água e gás</li>
            <li>Reformas Condominiais</li>
            <li>Reformas Residenciais</li>
            <li>Finalizações de Obra</li>
            <li>Laudos técnicos</li>
          </ul>
          <p>
            Em nossas mãos, a construção vai além da edificação física; é um
            processo que molda o futuro, cria memórias e estabelece bases
            sólidas para a comunidade. Nós estamos aqui para realizar e você
            pode contar com a gente.
          </p>
          <a href="#contato" class="contact-button">Entre em Contato</a>
        </div>

        <div class="icon-content">
          <div class="icon-box">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-bullseye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                />
                <path
                  d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"
                />
                <path
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                />
                <path
                  d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                />
              </svg>
            </div>
            <h4>Nossa Missão</h4>
            <p>
              Garantir a excelência, oferecendo segurança e confiabilidade
              aos nossos clientes.
            </p>
          </div>

          <div class="icon-box">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                />
              </svg>
            </div>
            <h4>Nossa Visão</h4>
            <p>
              Buscamos a excelência, almejando ser reconhecidos como líderes
              na indústria da Construção Civil.
            </p>
          </div>

          <div class="icon-box">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-stars"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"
                />
              </svg>
            </div>
            <h4>Nossos Valores</h4>
            <p>
              Garantir a satisfação do cliente, cultivar confiança e
              reconhecer a qualidade do serviço prestado.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Sobre'
}
</script>

<style scoped>
.sobre {
  background-color: #f8f9fa;
  padding: 50px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.section-title {
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;
  font-size: 24px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.text-content {
  flex: 1;
}

.highlight {
  font-weight: bold;
  color: #343a40;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
  color: #6c757d;
}

.contact-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.icon-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.icon-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  margin-bottom: 10px;
}

.icon svg {
  width: 24px;
  height: 24px;
}

h4 {
  font-size: 18px;
  color: #343a40;
}

p {
  color: #6c757d;
  margin: 0;
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
  }

  .text-content, .icon-content {
    flex: 1;
  }
}
</style>
