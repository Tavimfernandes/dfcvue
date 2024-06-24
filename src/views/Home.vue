<!-- src/views/Home.vue -->
<template>
  <div>
    <Carousel />
    <Servicos />
    <AguaGas />
    <Projetos />
    <Sobre />
    <Contato />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel/index.vue'
import Servicos from '@/components/Servicos/index.vue'
import AguaGas from '@/components/AguaGas/index.vue'
import Projetos from '@/components/Projetos/index.vue'
import Sobre from '@/components/Sobre/index.vue'
import Contato from '@/components/Contato/index.vue'
export default {
  components: {
    Carousel,
    Servicos,
    AguaGas,
    Projetos,
    Sobre,
    Contato
  }
}
</script>