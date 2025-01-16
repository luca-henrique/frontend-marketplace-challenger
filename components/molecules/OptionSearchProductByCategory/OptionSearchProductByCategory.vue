<script setup lang="ts">

import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";


const route = useRoute();
const router = useRouter();

const { data } = await useFetch<any[]>("http://localhost:3333/api/category");
const selectedCategory = ref(route.query.category || "");

const changeSelectedCategory = (category: string) => {
  selectedCategory.value = category;
  router.push({ query: { category, page: 1 } });
};

</script>

<template>
  <div class="border-b py-4 flex flex-col">
    <h5 class="mb-2">Categorias</h5>
    <fieldset id="category" class="flex flex-col gap-2">

      <div v-for="({ item, count }, index) in data.data" :key="index">
        <div class="flex flex-row items-center">
          <label class="flex flex-row items-center gap-1 cursor-pointer  text-[#1A1A1A] text-sm" for="category">
            <input name="category" type="radio" :id="`category-${index}`" class="mr-2" :value="item.path"
              v-model="selectedCategory" @change="changeSelectedCategory($event.target.value)" />
            {{ item.name }}
            <label for="category" class="text-[#808080] text-sm">
              ({{ count }})
            </label>
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>
