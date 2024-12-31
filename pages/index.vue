<script setup lang="ts">
import "@/assets/css/tailwind.css";
import 'swiper/css';

import Header from "~/components/organisms/Header/Header.vue";
import BannerSwiper from "~/components/molecules/BannerSwiper/BannerSwiper.vue";
import Informations from "~/components/organisms/Informations/Informations.vue";
import Categories from "~/components/organisms/Categories/Categories.vue";
import SaleInformations from "~/components/organisms/SaleInformations/SaleInformations.vue";
import FeaturedProducts from "~/components/organisms/FeaturedProducts/FeaturedProducts.vue";
import BannerOffer from "~/components/organisms/BannerOffer/BannerOffer.vue";
import NewProducts from "~/components/organisms/NewProducts/NewProducts.vue";
import Footer from "~/components/organisms/Footer/Footer.vue";

</script>


<template>
  <div class="flex flex-col h-full bg-white justify-center ">
    <Header />
    <BannerSwiper />
    <Informations />
    <Categories />
    <SaleInformations />
    <FeaturedProducts />
    <BannerOffer />
    <NewProducts />
    <Footer />
  </div>
</template>
