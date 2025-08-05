<template>
  <footer>
    <p>{{ appName }} &copy; {{ currentYear }}</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());

defineProps({
  appName: String,
});
</script>

<style scoped>
footer {
  display: flex;
  height: 100px;
  background-color: #222;
  border-top: 4px solid #111;
  color: #fcba03;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
