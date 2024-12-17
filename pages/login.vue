<script setup lang="ts">
import { ref } from 'vue';
import { store } from "~/store/store"
const form = ref({
  email: "",
  password: ""
})

const { addToken } = store()

const router = useRouter();

const handleSubmit = async (event: Event) => {
  event.preventDefault();

  try {
    const response = await fetch("http://localhost:3333/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: form.value.email, password: form.value.password }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();
    addToken(data.token)
    router.push('/')
    console.log("Produto enviado com sucesso:", data);
  } catch (error) {
    console.error("Erro ao enviar o produto:", error);
  }
};

</script>

<template>
  <div class="container">
    <form class="form" @submit="handleSubmit">
      <div>
        <h1 class="title">Entrar</h1>
      </div>
      <div class="flex flex-col gap-2 mb-22">
        <label for="name" class="text">Email</label>
        <input placeholder="Email" v-model="form.email" class="input" id="name" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="name" class="text">Password</label>
        <input placeholder="Senha" v-model="form.password" class="input" id="name" type="password" />
      </div>
      <button type="submit" class="button">Entrar</button>
    </form>
  </div>
</template>


<style scoped>

.mb-22{
  margin-bottom: 22px;
}
.container {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #ebebeb;
}

.form {
  width: 500px;
  background: #fff;
  border-radius: 10px;
  padding: 55px 85px;
}

.text {
  font-size: 13px;
  color: #555555;
  line-height: 1.4;
  text-transform: uppercase;
  padding-bottom: 11px;
}

.flex-col {
  flex-direction: column;
}

.title {
  padding-bottom: 32px;
  font-size: 30px;
  color: #555555;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: left;
  width: 100%;
  display: block;
  font-weight: 500;
}

.input {
  color: #555555;
  line-height: 1.2;
  font-size: 18px;
  display: block;
  background: transparent;
  height: 55px;
  padding: 0 25px 0 25px;
  border: none;
  border: 1px solid #d4d4d4;
}

.button {
  margin-top: 34px;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 100%;
  height: 55px;
  background-color: #333333;
  border-radius: 27px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}
</style>
