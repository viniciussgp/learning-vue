<script setup lang="ts">
import Banner from "@/components/Banner.vue";
import BurgerForm from "@/components/BurgerForm.vue";
</script>

<template>
  <Banner />

  <div class="main-container">
    <h1>Monte o seu burguer</h1>

    <BurgerForm />
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 450px;
}
</style>
