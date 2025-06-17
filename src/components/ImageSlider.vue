<template>
  <section id="hero">
    <div class="slider-container">
      <img
        :src="images[currentIndex]"
        alt="Imagen de presentación"
        class="slider-image"
        :key="currentIndex"
      />
    </div>
  </section>
</template>

<script setup>
import foto1 from "../assets/Foto1.jpeg";
import foto2 from "../assets/FotoDos.jpeg";
import foto3 from "../assets/Foto_Tres.jpeg";

import { ref, onMounted, onBeforeUnmount } from "vue";

const images = [foto1, foto2, foto3];

const currentIndex = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 3000); // cambia cada 3 segundos
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* Ajustamos el scroll-margin para que el navbar fijo no tape el inicio */
#hero {
  scroll-margin-top: 60px; /* Igual que el padding-top del app o altura navbar */
}

.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  margin: 2rem 0;
  position: relative;
}

.slider-image {
  max-width: 300px;
  max-height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 20px #00ffffaa;
  transition: opacity 1s ease-in-out;
  object-fit: cover;
}
</style>
