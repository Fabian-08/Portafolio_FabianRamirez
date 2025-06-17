<template>
  <section class="section about fade-in" id="about">
    <h2 class="section-title">Sobre Mí</h2>
    <div class="about-content">
      <div class="text">
        <p>
          ¡Hola! Soy <strong>Fabian David Ramírez</strong>, un desarrollador
          <strong>Full Stack</strong> con más de tres años de formación
          universitaria en programación y desarrollo de software. Durante este
          tiempo he trabajado en múltiples proyectos académicos que me han
          permitido fortalecer mis habilidades técnicas y creativas.
        </p>
        <p>
          Me apasiona el <strong>código</strong>, pero también disfruto mucho de
          la <strong>música</strong>, el <strong>deporte</strong> y los
          <strong>viajes</strong>. Actualmente me encuentro estudiando
          <strong>Ciberseguridad</strong> y <strong>Hacking Ético</strong>,
          expandiendo así mis conocimientos hacia el mundo de la seguridad
          informática.
        </p>
        <p>
          Soy una persona <strong>sociable</strong>, <strong>amigable</strong> y
          me encanta colaborar en equipo. Siempre busco ir más allá, llevar mis
          habilidades al límite y enfrentar nuevos desafíos con actitud
          positiva.
        </p>
      </div>
      <div class="tech-icons">
        <i class="fab fa-html5" title="HTML5"></i>
        <i class="fab fa-css3-alt" title="CSS3"></i>
        <i class="fab fa-js" title="JavaScript"></i>
        <i class="fab fa-vuejs" title="Vue.js"></i>
        <i class="fab fa-node" title="Node.js"></i>
        <i class="fab fa-react" title="React"></i>
        <i class="fab fa-php" title="PHP"></i>
        <i class="fas fa-database" title="MySQL"></i>
        <i class="fab fa-git-alt" title="Git"></i>
        <i class="fab fa-github" title="GitHub"></i>
        <i class="fas fa-user-secret" title="Hacking Ético"></i>
        <i class="fas fa-shield-alt" title="Ciberseguridad"></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: fadeIn 1.2s ease forwards;
}

.text {
  max-width: 600px;
  text-align: center;
  color: #cccccc;
  font-size: 1.1rem;
  line-height: 1.6;
}

.tech-icons {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 2.5rem;
}

.tech-icons i {
  color: #00ffff;
  transition:
    transform 0.3s,
    color 0.3s;
}

.tech-icons i:hover {
  transform: scale(1.2);
  color: #ff00ff;
}

/* Animación fadeIn */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
