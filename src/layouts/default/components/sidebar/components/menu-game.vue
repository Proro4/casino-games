<template>
  <router-link :to="{name: game.link}" class="menu-game">
    <img :src="game.img" :alt="game.title" class="menu-game__img" />

    <h3 class="menu-game__title">{{ game.title }}</h3>
  </router-link>
</template>

<script>
export default {
  name: "SidebarMenuGame",
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.menu-game {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: rem(56);
  height: rem(48);

  &__img {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: center;
    inset: 0;
  }

  &__title {
    font-family: $font-family-primary;
    font-size: rem(7);
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
