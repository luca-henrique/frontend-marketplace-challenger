<script setup lang="ts">
import HeaderIcon from "~/components/atoms/HeaderIcon/HeaderIcon.vue";

import HeartIcon from "~/assets/icons/heart-icon.svg"
import BagIcon from "~/assets/icons/bag-outlined-icon.svg"
import UserIcon from "~/assets/icons/user-icon.svg"


import { store } from "~/store/store";

const storeCart = store();

const { getTotalWhiteList, getTotalCart, getToken } = storeToRefs(storeCart);

const pathIconUser = getToken.value ? '/dashboard' : '/entrar';

</script>

<template>
  <div class="flex flex-row gap-4 max-md:hidden">
    <HeaderIcon :img="HeartIcon" :total="getTotalWhiteList" path="/whitelist" />
    <HeaderIcon :img="BagIcon" :total="getTotalCart" path="/whitelist" />
    <HeaderIcon :img="UserIcon" :path="pathIconUser" />
  </div>
</template>