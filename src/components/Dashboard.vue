<script setup>
import { onMounted, ref } from "vue";
import Message from "./Message.vue";

const burgers = ref(null);
const statuses = ref([]);
const msg = ref("");

const getOrders = async () => {
  const response = await fetch("http://localhost:3000/burgers");
  const data = await response.json();

  burgers.value = data;
};
const getStatus = async () => {
  const response = await fetch("http://localhost:3000/status");
  const data = await response.json();

  statuses.value = data;
};

const cancelOrder = async (orderId) => {
  const response = await fetch(`http://localhost:3000/burgers/${orderId}`, {
    method: "DELETE",
  });
  const data = await response.json();

  msg.value = `Pedido ${data.id} removido com sucesso`;

  setTimeout(() => {
    msg.value = "";
  }, 3000);

  getOrders();
};

const updateStatus = async (event, orderId) => {
  const option = event.target.value;

  const dataJson = JSON.stringify({ status: option });

  const req = await fetch(`http://localhost:3000/burgers/${orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: dataJson,
  });

  const response = await req.json();

  msg.value = `O pedido Nº ${response.id} foi atualizado para ${response.status}!`;

  setTimeout(() => {
    msg.value = "";
  }, 3000);
};

onMounted(() => {
  getOrders();
  getStatus();
});
</script>

<template>
  <Message :msg="msg" v-show="msg" />
  <div id="burger-table">
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#</div>
        <div>Cliente</div>
        <div>Pão</div>
        <div>Carne</div>
        <div>Opcionais</div>
        <div>Ações</div>
      </div>

      <div id="burger-table-rows">
        <div
          class="burger-table-row"
          v-for="burger in burgers"
          :key="burger.id"
        >
          <div class="order-number">{{ burger.id }}</div>
          <div>{{ burger.name }}</div>
          <div>{{ burger.bread }}</div>
          <div>{{ burger.meat }}</div>
          <div>
            <ul>
              <li v-for="(opcional, index) in burger.optionals" :key="index">
                {{ opcional }}
              </li>
            </ul>
          </div>
          <div>
            <select
              name="status"
              class="status"
              @change="updateStatus($event, burger.id)"
            >
              <option
                v-for="value in statuses"
                :key="value.id"
                :value="value.tipo"
                :selected="burger.status == value.tipo"
              >
                {{ value.tipo }}
              </option>
            </select>
            <button class="delete-btn" @click="cancelOrder(burger.id)">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#burger-table-heading div,
.burger-table-row div {
  width: 19%;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
