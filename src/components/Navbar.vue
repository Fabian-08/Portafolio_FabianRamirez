<template>
  <header class="navbar">
    <div class="logo">Fabian<span class="accent">Dev</span></div>
    <nav :class="{ open: isMenuOpen }">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        @click="closeMenu"
        >{{ link.text }}</a
      >
    </nav>
    <div class="menu-toggle" @click="toggleMenu">
      <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const closeMenu = () => (isMenuOpen.value = false);

const links = [
  { text: "Inicio", href: "#hero" },
  { text: "Habilidades", href: "#skills" },
  { text: "Proyectos", href: "#projects" },
  { text: "Contacto", href: "#contact" },
];
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #0d0d0d;
  border-bottom: 2px solid #00ffff55;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;
  box-shadow: 0 0 15px #00ffff44;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ffff;
  font-family: "Orbitron", sans-serif;
}

.logo .accent {
  color: #ffa500;
}

nav {
  display: flex;
  gap: 2rem;
}

nav a {
  color: #ccc;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

nav a:hover {
  color: #ffa500;
}

.menu-toggle {
  display: none;
  font-size: 1.5rem;
  color: #00ffff;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #111;
    width: 100%;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }

  nav.open {
    max-height: 300px;
    padding: 1rem 0;
    box-shadow: 0 5px 10px #00ffff44;
  }

  nav a {
    padding: 0.8rem 0;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
