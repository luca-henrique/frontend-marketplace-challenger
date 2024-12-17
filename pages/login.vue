<script setup lang="ts">
import { ref } from 'vue';
import {store} from "~/store/store"
const form = ref({
  email: "",
  password: ""
})

const {addToken} = store()

const router = useRouter();

const handleSubmit = async (event: Event) => {
  event.preventDefault();

  try {
    const response = await fetch("http://localhost:3333/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: form.value.email, password: form.value.password}),
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
  <div class="flex container items-center">
    <form class="form" @submit="handleSubmit">
      <div>
        <h1>Entrar</h1>
        <span>Experience the power of networking</span>
      </div>
      <div class="flex flex-col gap-2">
        <label for="name" class="text">Nome do preço</label>
        <input
          placeholder="placeholder"
          v-model="form.email"
          class="input"
          id="name"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="name" class="text">Password</label>
        <input
          placeholder="placeholder"
          v-model="form.password"
          class="input"
          id="name"
          type="password"
        />
      </div>
      <button type="submit" class="button">Entrar</button>
    </form>
  </div>
</template>


<style scoped>

  .flex{
    display: flex;
  }
  
  .flex-col{
    flex-direction: column;
  }
  
  .text{
    font-weight: bold;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vw;
    justify-content: center;
    gap: 4px;
    
  }
  
  .form{
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 20px;   
    border: 1px solid #b5b5b5;
  }
  
  .container-img{
    background-color: #000; width: 100%;
  }
  
  .input{
    height: 22px;
    padding: 10px;
  }
  
  .button{
    background-color:#468499;
    border: none;
    height: 38px;
    color: white;
    border-radius: 4px;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    
    .container-img{
      display: none;
    }
  }
</style>

