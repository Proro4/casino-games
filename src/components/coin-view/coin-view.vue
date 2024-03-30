<template>
  <div class="coin-view">
    <div v-if="showImg" class="coin-view__img">
      <img src="@/assets/images/layout/coin-17.png" alt="" />
    </div>

    <h3 class="coin-view__value" :class="[variant]">
      {{ value }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "CoinView",
  props: {
    value: {
      type: Number,
      required: true,
    },
    showImg: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.coin-view {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &__img {
    flex: 0 0 2rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__value {
    font-family: $font-family-primary;
    font-size: rem(14);
    font-weight: 750;
    text-transform: uppercase;

    &.success {
      color: $color-green;
    }

    &.danger {
      color: $color-red;
    }
  }
}
</style>
