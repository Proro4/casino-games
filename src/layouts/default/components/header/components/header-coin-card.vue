<template>
  <div class="header-coin-card">
    <img :src="card.img" alt="" class="header-coin-card__img" />

    <div class="header-coin-card__title">
      {{ card.title }}
    </div>

    <div class="header-coin-card__value">
      {{ card.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCoinCard",
  props: {
    card: {
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

.header-coin-card {
  display: flex;
  align-items: center;
  gap: rem(8);
  border: rem(2) solid #292830;
  border-radius: rem(8);
  padding: rem(12) rem(16);
  background-color: #292830;
  transition: border-color $transition-duration-primary;

  @include hover {
    border-color: #feeb3c;
  }

  &__img {
    flex: 0 0 rem(28);
    height: rem(28);
    border-radius: 50%;
    object-fit: contain;
  }

  &__title {
    font-size: rem(16);
    font-weight: 600;
  }

  &__value {
    margin-left: auto;
    font-size: rem(16);
    font-weight: 600;
  }
}
</style>
