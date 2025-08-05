<template>
  <nav>
    <RouterLink to="/" class="logo-url">
      <img :src="logo_src" :alt="alt" class="logo" />
    </RouterLink>

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/orders">Pedidos</RouterLink>
  </nav>
</template>

<script setup>
defineProps({
  logo_src: String,
  alt: String,
});
</script>

<style scoped>
nav {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 16px 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

nav a {
  color: #fcba03;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

nav a:hover {
  color: #fff;
}

.logo-url {
  margin: auto;
  margin-left: 0;
}

.logo {
  width: 40px;
  height: 40px;
}
</style>
