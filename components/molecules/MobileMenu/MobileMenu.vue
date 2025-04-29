<script setup lang="ts">
import HeaderIcon from "~/components/atoms/HeaderIcon/HeaderIcon.vue";


import HeartIcon from "~/assets/icons/heart-icon.svg"
import BagIcon from "~/assets/icons/bag-outlined-icon.svg"
import UserIcon from "~/assets/icons/user-icon.svg"
import HomeIcon from "~/assets/icons/home-icon.svg"

import { store } from "~/store/store";

const storeCart = store();

const { getTotalWhiteList, getTotalCart, getToken } = storeToRefs(storeCart);

const pathIconUser = getToken.value ? '/dashboard' : '/entrar';

</script>


<template>
  <div class="flex-row absolute justify-around bottom-0 w-full gap-2 p-4 max-sm:flex hidden shrink-0 bg-slate-100 z-20">
    <HeaderIcon :img="HomeIcon" path="/" />
    <HeaderIcon :img="HeartIcon" :total="getTotalWhiteList" path="/whitelist" />
    <HeaderIcon :img="BagIcon" :total="getTotalCart" path="/whitelist" />
    <HeaderIcon :img="UserIcon" :path="pathIconUser" />
  </div>
</template>