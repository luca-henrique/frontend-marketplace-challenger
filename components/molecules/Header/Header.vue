<script setup lang="ts">

</script>

<template>
  <header class="navigation">
    <div class="flex flex-row justify-between content">
    <h1 class="padding-vertical"><a href="/">Marketplace</a></h1>
    <div class="flex flex-row menu-navigation padding-vertical">
      <nav class="flex flex-row">
        <ul class="menu flex flex-row items-center gap-16">
          <li><a href="#" class="active">Home</a></li>
          <li>
            <a href="/checkout"><i class="bx bx-shopping-bag"></i></a>
          </li>
          <li>
            <a href="/login"><i class="bx bx-user"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  
    <div class="flex flex-row items-center gap-2 mobile-container">
      <a href="#"><i class="bx bx-shopping-bag"></i></a>
      <button class="menu-mobile">
        <i class="bx bx-menu"> </i>
      </button>
    </div>
  </div>
  </header>
</template>

<style scoped lang="css">
  .navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    z-index: 9999;
    background-color: #f4f4f6;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.3);
  }
  
  .content{
    width: 80%;
  }
  
  .padding-vertical{
    padding: 20px 0;
  }
  
  .active{
    cursor: pointer;
  }
</style>
