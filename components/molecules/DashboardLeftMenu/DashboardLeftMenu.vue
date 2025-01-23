<script setup lang="ts">
import { useRoute } from "vue-router";


import DashboardIcon from "~/assets/icons/dashboard-icon.svg"
import OrderIcon from "~/assets/icons/order-icon.svg"
import Wishlist from '~/assets/icons/whitelist-icon.svg'
import ShoppingCart from "~/assets/icons/shopping-cart-icon.svg"
import SettingsIcon from "~/assets/icons/settings-icon.svg"
import LogoutIcon from '~/assets/icons/logout-icon.svg'

const route = useRoute();

const routers = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: DashboardIcon,
  },
  {
    name: 'Order History',
    path: '/dashboard/orders',
    icon: OrderIcon,
  },
  {
    name: 'Wishlist',
    path: '/dashboard/wishlist',
    icon: Wishlist,
  },
  {
    name: 'Carrinho',
    path: '/dashboard/cart',
    icon: ShoppingCart,
  },
  {
    name: 'Configurações',
    path: '/dashboard/settings',
    icon: SettingsIcon,
  },
  {
    name: 'Sair',
    path: '/',
    icon: LogoutIcon,
  },
]

function isActive(path: string) {
  return route.path === path;
}

</script>


<template>
  <div class="flex flex-col w-[312px] border boder-[#E6E6E6] rounded-lg h-fit">
    <div class="p-2">
      <h4>Navegação</h4>

    </div>
    <ul>
      <li v-for="route in routers" :key="route.path" :class="[
        isActive(route.path)
          ? 'text-[#1A1A1A] text-base font-medium bg-[#EDF2EE] border-l-2 border-[#00B207]'
          : 'text-base font-medium bg-[#fff] text-[#666666]'
      ]" class="cursor-pointer">
        <div class="flex flex-row p-2">
          <img :src="route.icon" :alt="route.name" class="mr-2" />
          <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
        </div>
      </li>

    </ul>
  </div>
</template>