<template>
  <section class="section contact fade-in" id="contact">
    <h2 class="section-title">Contacto</h2>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <label>
        Nombre
        <input type="text" v-model="name" required placeholder="Tu nombre" />
      </label>
      <label>
        Email
        <input
          type="email"
          v-model="email"
          required
          placeholder="tucorreo@example.com"
        />
      </label>
      <label>
        Mensaje
        <textarea
          v-model="message"
          required
          placeholder="Escribe tu mensaje..."
        ></textarea>
      </label>
      <button type="submit"><i class="fas fa-paper-plane"></i> Enviar</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

function handleSubmit() {
  alert(`Mensaje enviado por ${name.value} (${email.value}): ${message.value}`);
  name.value = "";
  email.value = "";
  message.value = "";
}
</script>

<style scoped>
.contact {
  margin-top: 4rem;
  padding: 10rem;
  background-color: #111111;
  border-radius: 10px;
  box-shadow: 0 0 15px #00ffff55;
}

.section-title {
  text-align: center;
  color: #00ffff;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  color: #ccc;
  font-size: 1rem;
}

.contact-form input,
.contact-form textarea {
  background-color: #1a1a1a;
  border: 2px solid #00ffff55;
  border-radius: 8px;
  padding: 0.8rem;
  color: #00ffff;
  font-family: "Orbitron", sans-serif;
  resize: none;
  transition: 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #ffa500;
  box-shadow: 0 0 10px #ffa50066;
}

.contact-form button {
  background-color: transparent;
  border: 2px solid #00ffff55;
  color: #00ffff;
  font-family: "Orbitron", sans-serif;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
}

.contact-form button:hover {
  background-color: #ffa50022;
  color: #ffa500;
  border-color: #ffa500;
  box-shadow: 0 0 12px #ffa50088;
}
</style>
