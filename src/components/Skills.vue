<template>
  <section class="section skills" id="skills">
    <h2 class="section-title">Habilidades</h2>
    <div class="skills-grid">
      <div class="skill fade-in" v-for="(skill, index) in skills" :key="index">
        <i :class="skill.icon"></i>
        <span>{{ skill.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "Java", icon: "fab fa-java" }, // usa ícono de java si está disponible
  { name: "Vue.js", icon: "fab fa-vuejs" },
  { name: "React", icon: "fab fa-react" },
  { name: "Node.js", icon: "fab fa-node" },
  { name: "PHP", icon: "fab fa-php" },
  { name: "MySQL", icon: "fas fa-database" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "GitHub", icon: "fab fa-github" },
  { name: "Ciberseguridad", icon: "fas fa-shield-alt" },
  { name: "Hacking Ético", icon: "fas fa-user-secret" },
];
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  justify-items: center;
}

.skill {
  background-color: #1a1a1a;
  border: 2px solid #00ffff55;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  width: 100px;
  transition: 0.3s ease;
  color: #00ffff;
  font-size: 1.2rem;
  box-shadow: 0 0 10px transparent;
}

.skill i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
  transition: color 0.3s ease;
}

.skill:hover {
  border-color: #ffa500;
  color: #ffa500;
  box-shadow: 0 0 15px #ffa50088;
  transform: translateY(-5px);
}

.skill:hover i {
  color: #ffa500;
}
</style>
