<script setup lang="ts">
import CardProductVertical from '~/components/molecules/CardProductVertical/CardProductVertical.vue';
import Button from '~/components/atoms/Button/Button.vue';

const { params: { id } } = useRoute()

const { data, status, error } = await useFetch<any[]>(`http://localhost:3333/product/${id}`);


const loading = status.value === 'success'
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex w-full bg-black h-[120px]">
      <div class="text-white text-2xl font-bold">Produtos</div>
    </div>
    <div class="flex flex-row w-[1320px] gap-4 my-6">
      <div class="flex flex-col w-[312px]">
        <Button text="Filtrar" />
        <div>
          <fieldset id="group1">
            <div class="inline-flex items-center">
              <label class="relative flex items-center cursor-pointer" for="html">
                <input name="framework" type="radio"
                  class="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#000] checked:border-[#00B207] transition-all"
                  id="html">
                <span
                  class="absolute bg-[#00B207] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                </span>
              </label>
              <label class="ml-2 text-slate-600 cursor-pointer text-sm" for="html">HTML(10)</label>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex flex-row justify-between mb-4">
          <div>
            <select type="select" class="border-2 border-[#E6E6E6] rounded-lg p-2 w-[140px]">
              <option value="1">Menor preço</option>
              <option value="1">Maior preço</option>
            </select>
          </div>
          <div>
            <h5>{{ data.data.length }} produtos</h5>
          </div>
        </div>
        <div class="flex flex-row flex-wrap gap-5">
          <div v-for="(item, index) in data.data" :key="index" v-if="loading">
            <CardProductVertical :title="item.name" :price="item.price" :image="item.image" :id="item.id"
              size="large" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>