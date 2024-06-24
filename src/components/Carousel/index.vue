<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const nextDom = ref(null);
const prevDom = ref(null);
const carouselDom = ref(null);
const SliderDom = ref(null);
const thumbnailBorderDom = ref(null);
const timeDom = ref(null);

let runTimeOut;
let runNextAuto;

const timeAutoNext = 8500;
const timeRunning = 3000; // Definindo a variável timeRunning

onMounted(() => {
    nextDom.value = document.getElementById('next');
    prevDom.value = document.getElementById('prev');
    carouselDom.value = document.querySelector('.carousel');
    SliderDom.value = carouselDom.value.querySelector('.carousel .list');
    thumbnailBorderDom.value = document.querySelector('.carousel .thumbnail');
    timeDom.value = document.querySelector('.carousel .time');

    // Adicione os event listeners
    nextDom.value.addEventListener('click', () => showSlider('next'));
    prevDom.value.addEventListener('click', () => showSlider('prev'));

    // Inicie o timeout automático
    runNextAuto = setTimeout(() => {
        nextDom.value.click();
    }, timeAutoNext);
});

onBeforeUnmount(() => {
    // Limpe os event listeners antes de desmontar o componente
    nextDom.value.removeEventListener('click', () => showSlider('next'));
    prevDom.value.removeEventListener('click', () => showSlider('prev'));
});

function showSlider(type) {
    const SliderItemsDom = SliderDom.value.querySelectorAll('.carousel .list .item');
    const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.value.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.value.appendChild(thumbnailItemsDom[0]);
        carouselDom.value.classList.add('next');
    } else {
        SliderDom.value.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.value.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.value.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.value.classList.remove('next');
        carouselDom.value.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.value.click();
    }, timeAutoNext);
}
</script>

<template>
    <!-- carousel -->
    <div class="carousel">
        <!-- list item -->
        <div class="list">
            <div class="item">
                <img src="./../../images/carrossel-1.svg">
                <div class="content">
                    <div class="author">DFC ENGENHARIA</div>
                    <div class="title">Qualidade & Confiabilidade</div>
                    <div class="des">
                        Nossa reputação é construída sobre a base sólida da qualidade e confiabilidade.
                    </div>
                    <div class="buttons">
                        <button>CONHEÇA NOSSOS SERVIÇOS</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./../../images/carrossel-2.svg">
                <div class="content">
                    <div class="author">DFC ENGENHARIA</div>
                    <div class="title">Solicite uma visita técnica</div>
                    <div class="des">
                        Para soluções adaptadas às suas necessidades, estamos à disposição para agendar uma visita
                        técnica.
                    </div>
                    <div class="buttons">
                        <button>ENTRAR EM CONTATO</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./../../images/carrossel-3.svg">
                <div class="content">
                    <div class="author">DFC ENGENHARIA</div>
                    <div class="title">Aqui cada detalhe importa</div>
                    <div class="des">
                        Cada detalhe é tratado com cuidado e importância para alcançar a excelência.
                    </div>
                    <div class="buttons">
                        <button>NOSSOS PROJETOS</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./../../images/carrossel-4.svg">
                <div class="content">
                    <div class="author">DFC ENGENHARIA</div>
                    <div class="title">Mais Facilidade para Reformar</div>
                    <div class="des">
                        Linhas de Crédito para Reformas com Parcelas que Cabem no Seu Bolso.
                    </div>
                    <div class="buttons">
                        <button>SAIBA MAIS</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- list thumnail -->
        <div class="thumbnail">
            <div class="item">
                <img src="./../../images/carrossel-5.svg" alt="Qualidade & Confiabilidade">
                <div class="content">
                    <div class="">
                        <div class="title">
                            Qualidade & Confiabilidade
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./../../images/carrossel-6.svg" alt="Solicite uma Visita Técnica">
                <div class="content">
                    <div class="title" style="">
                        Solicite uma Visita Técnica
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./../../images/carrossel-7.svg" alt="Cada detalhe importa">
                <div class="content">
                    <div class="title">
                        Cada detalhe importa
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./../../images/carrossel-8.svg" alt="Linha de Crédito">
                <div class="content">
                    <div class="title">
                        Linha de Crédito
                    </div>
                </div>
            </div>
        </div>


        <!-- next prev -->

        <div class="arrows">
            <button id="prev"><</button>
            <button id="next">></button>
        </div>
        <!-- time running -->
        <div class="time"></div>
    </div>
</template>

<style scoped src="./styles.css"></style>