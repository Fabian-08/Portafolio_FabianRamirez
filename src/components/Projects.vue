<template>
  <section class="section projects fade-in" id="projects">
    <h2 class="section-title">Proyectos</h2>
    <div class="projects-grid">
      <div
        class="project-card"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div
          class="image"
          :style="{ backgroundImage: 'url(' + project.image + ')' }"
        ></div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="badges">
            <span v-for="tech in project.technologies" :key="tech">{{
              tech
            }}</span>
          </div>
          <div class="buttons">
            <a :href="project.demo" target="_blank" class="btn">Demo</a>
            <a :href="project.github" target="_blank" class="btn github"
              >GitHub</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "Commerce-E",
    description:
      "Tienda online desarrollada como proyecto académico con funcionalidades completas de comercio electrónico.",
    technologies: ["PHP", "JavaScript", "MySQL", "CSS"],
    image:
      "https://th.bing.com/th/id/OSK.HERO2xteQ66ZAjmd5sNKR5zYoyjevlTQpC4kKCd9walYGB4?pid=ImgDetMain",
    demo: "https://commerce-e.wuaze.com",
    github: "https://github.com/tuusuario/commerce-e", // Actualiza si tienes el repositorio público
  },
];
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background-color: #1a1a1a;
  border: 2px solid #00ffff55;
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px #00ffff88;
}

.image {
  height: 180px;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid #00ffff44;
}

.project-content {
  padding: 1rem;
  color: #ccc;
}

.project-content h3 {
  color: #00ffff;
  margin-bottom: 0.5rem;
}

.badges {
  margin: 0.5rem 0;
}

.badges span {
  background: #00ffff33;
  color: #00ffff;
  border: 1px solid #00ffff77;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 5px;
  font-size: 0.8rem;
}

.buttons {
  margin-top: 1rem;
}

.btn {
  border: 2px solid #00ffff;
  color: #00ffff;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 6px;
  transition: 0.3s ease;
}

.btn:hover {
  background: #00ffff;
  color: #0d0d0d;
}

.btn.github {
  border-color: #ff00ff;
  color: #ff00ff;
}

.btn.github:hover {
  background: #ff00ff;
  color: #0d0d0d;
}
</style>
