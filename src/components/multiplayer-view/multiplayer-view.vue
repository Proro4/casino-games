<template>
  <div class="multiplayer-view">
    <h3 class="multiplayer-view__value">
      {{ displayValue }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "MultiplayerView",
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    displayValue() {
      const num = +this.value;
      return `${num.toFixed(2)}x`;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.multiplayer-view {
  display: inline-block;

  &__value {
    display: inline-block;
    border-radius: rem(23);
    padding: rem(2.5) rem(6.5);
    background-color: $color-green;
    font-family: $font-family-primary;
    font-size: rem(10);
    color: #150a30;
  }
}
</style>
