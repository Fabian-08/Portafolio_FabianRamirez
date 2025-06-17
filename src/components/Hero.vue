<template>
  <section class="hero fade-in">
    <div class="content">
      <h1>Hola, soy <span class="name">Fabian David Rammirez</span></h1>
      <p class="subtitle">Desarrollador Frontend Futurista 🚀</p>
      <a href="#projects" class="btn">Ver Proyectos</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 30vh;
  padding-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #0d0d0d;
  background-image: repeating-linear-gradient(
    135deg,
    rgba(128, 0, 255, 0.04) 0px,
    rgba(128, 0, 255, 0.04) 1px,
    transparent 1px,
    transparent 80px
  );
}

.name {
  color: #ff00ff;
}

.subtitle {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #39ff14;
}

.btn {
  background-color: transparent;
  border: 2px solid #00ffff;
  padding: 0.75rem 1.5rem;
  color: #00ffff;
  border-radius: 5px;
  transition: 0.3s ease;
}

.btn:hover {
  background-color: #00ffff;
  color: #0d0d0d;
}
</style>
