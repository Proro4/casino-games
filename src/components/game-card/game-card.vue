<template>
  <div class="game-card" :class="{ 'game-card--sm': sm }">
    <img :src="game.img" :alt="game.title" class="game-card__bg" />

    <h3 class="game-card__title">
      {{ game.title }}
    </h3>

    <div class="game-card__underline" :class="[game.variant]">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true,
    },
    sm: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.game-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: rem(2) solid #3a3f50;
  border-radius: rem(6);
  height: rem(280);
  padding: rem(32) rem(16);
  background-color: #343241;
  transition: border-color $transition-duration-primary;

  @include respond-above(md) {
    justify-content: flex-end;
  }

  @include hover {
    border-color: $color-primary;
  }

  &--sm {
    height: rem(220);
    padding: rem(24) rem(12);

    .game-card__title {
      font-size: rem(22);
    }
  }

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    position: relative;
    z-index: 10;
    margin-bottom: rem(7);
    font-family: $font-family-secondary;
    font-size: rem(32);
    line-height: 1.15625;
    text-transform: uppercase;

    @include respond-above(md) {
      text-align: center;
    }
  }

  &__underline {
    --color-bg: #1afaea;

    position: relative;
    z-index: 10;
    display: flex;

    @include respond-above(md) {
      justify-content: center;
    }

    &::before,
    &::after {
      content: "";
      height: rem(4);
      background: var(--color-bg);
    }

    &::before {
      width: rem(54);
    }

    &::after {
      width: rem(8);
    }

    &.purple {
      --color-bg: linear-gradient(270deg, #6c35a9 0%, #c33ac8 98.96%);
    }

    span {
      margin: 0 rem(5);
      width: rem(13);
      height: rem(4);
      background: var(--color-bg);
    }
  }
}
</style>
