<template>
  <div class="main-layout">
    <Header @burger-clicked="handleBurgerClicked" />
    <div class="row">
      <div class="col-lg-2">
        <Sidebar :is-active="isHeaderBurgerActive" />
      </div>
    <!-- <div class="col-lg-2">
      <gameList/>
    </div> -->
      <div class="col-lg-10">
        <div class="main-layout__content">
          <router-view />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import Header from "./components/header/header.layout.vue";
  import Sidebar from "./components/sidebar/sidebar.layout.vue";
  import Footer from "./components/footer.layout.vue";

  import gameList from '@/components/games/gameList.vue'
  const isHeaderBurgerActive = ref(false);

  const handleBurgerClicked = (isActive) => {
    this.isHeaderBurgerActive = isActive;
  };
</script>