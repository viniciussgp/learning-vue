<script setup>
import { ref } from "vue";

import Navbar from "@/components/Navbar.vue";
import Footer from "./components/Footer.vue";

import logoImg from "/img/logo.png";

const appName = ref("Make Your Burguer");
const logoSrc = ref(logoImg);
</script>

<template>
  <Navbar :logo_src="logoSrc" :alt="appName" />

  <main>
    <RouterView />
  </main>

  <Footer :appName="appName" />
</template>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 250px;
  background-color: #f8f8f8;
  padding: 32px 24px;
  border-radius: 24px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #222;
}
</style>
