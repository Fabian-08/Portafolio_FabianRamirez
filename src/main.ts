import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el) => observer.observe(el));
}

createApp(App).mount("#app");

setupScrollAnimations();
