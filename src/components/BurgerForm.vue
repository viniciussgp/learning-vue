<script setup>
import { onMounted, ref } from "vue";

import Message from "./Message.vue";

const breads = ref(null);
const meats = ref(null);
const optionsData = ref(null);

const name = ref(null);
const bread = ref(null);
const meat = ref(null);
const optionals = ref([]);

const status = "Solicitado";
const msg = ref("");

const getIngredients = async () => {
  const response = await fetch("http://localhost:3000/ingredientes");
  const data = await response.json();

  breads.value = data.paes;
  meats.value = data.carnes;
  optionsData.value = data.opcionais;
};

const validateFields = () => {
  if (!name.value) {
    msg.value = "Preencha o campo nome";
    return false;
  }

  if (!bread.value) {
    msg.value = "Escolha o pão";
    return false;
  }

  if (!meat.value) {
    msg.value = "Escolha a carne";
    return false;
  }

  return true;
};

const createBurger = async (e) => {
  e.preventDefault();

  if (!validateFields()) {
    return;
  }

  const data = {
    name: name.value,
    bread: bread.value,
    meat: meat.value,
    optionals: Array.from(optionals.value),
    status,
  };

  const dataJson = JSON.stringify(data);

  const req = await fetch("http://localhost:3000/burgers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: dataJson,
  });

  const response = await req.json();

  msg.value = `Pedido Nº ${response.id} realizado com sucesso`;

  setTimeout(() => {
    msg.value = "";
  }, 3000);

  name.value = null;
  bread.value = null;
  meat.value = null;
  optionals.value = [];
};

onMounted(() => {
  getIngredients();
});
</script>

<template>
  <div>
    <Message :msg="msg" v-show="msg" />

    <div>
      <form id="burguer-form" @submit="createBurger">
        <div class="input-container">
          <label for="name">Nome do cliente:</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            placeholder="Digite o seu nome"
          />
        </div>

        <div class="input-container">
          <label for="bread">Escolha o pão:</label>
          <select name="bread" id="bread" v-model="bread">
            <option value="">Selecione o seu pão</option>
            <option v-for="bread in breads" :key="bread.id" :value="bread.tipo">
              {{ bread.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="meat">Escolha a carne:</label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Selecione o tipo de carne:</option>
            <option v-for="meat in meats" :key="meat.id" :value="meat.tipo">
              {{ meat.tipo }}
            </option>
          </select>
        </div>

        <div id="optional-container" class="input-container">
          <label id="optional-title" for="optional"
            >Selecione os opcionais:</label
          >
          <div
            class="checkbox-container"
            v-for="optional in optionsData"
            :key="optional.id"
          >
            <input
              type="checkbox"
              name="optional"
              v-model="optionals"
              :value="optional.tipo"
            />
            <span>{{ optional.tipo }}</span>
          </div>
        </div>

        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger!" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
#burguer-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 12px;
}

#optional-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#optional-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
  width: 100%;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
