<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2025 Fabian - Desarrollador Web</p>
      <div class="socials">
        <a
          href="mailto:fabian@example.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/tuUsuario"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/tuPerfil"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/tuUsuario"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No hay lógica JS por ahora
</script>

<style scoped>
.footer {
  background-color: #0a0a0a;
  border-top: 2px solid #00ffff55;
  padding: 1.5rem 2rem;
  text-align: center;
  color: #00ffff;
  font-family: "Orbitron", sans-serif;
  box-shadow: 0 -2px 10px #00ffff33 inset;
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.socials a {
  margin: 0 0.5rem;
  color: #00ffff;
  font-size: 1.5rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
  display: inline-block;
}

.socials a:hover {
  color: #ffa500;
  transform: scale(1.2);
  text-shadow: 0 0 8px #ffa500;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
