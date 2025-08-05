# 🚀 Projeto: Learning Vue 3

O objetivo do projeto é aplicar na prática os conceitos fundamentais do Vue 3 utilizando **Composition API**, **Vue Router**, e simulação de API com o **JSON Server**.

---

## 🛠️ Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [JSON Server](https://github.com/typicode/json-server)

---

## 📦 Instalação do Projeto

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/viniciussgp/learning-vue.git
cd learning-vue
yarn
```

---

## ▶️ Executando o Projeto

### Iniciar o servidor de desenvolvimento:

```bash
yarn dev
```

### Iniciar a API fake com JSON Server:

```bash
yarn api
```

A API estará disponível em: [http://localhost:3000](http://localhost:3000)

### Build para produção:

```bash
yarn build
```

---

## 🧑‍💻 Requisitos de Desenvolvimento

- Recomendado: [VSCode](https://code.visualstudio.com/)
- Extensão: [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- Desativar extensão [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

---

## 📂 Estrutura de Pastas

```
learning-vue/
├── public/
├── src/
│   ├── components/
│   ├── views/
│   ├── router.js
│   ├── App.vue
│   └── main.js
├── db/
│   └── db.json (dados para o JSON Server)
├── package.json
└── vite.config.js
```
