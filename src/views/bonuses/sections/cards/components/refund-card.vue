<template>
  <div class="refund-card">
    <div class="refund-card__text">
      <h3 class="refund-card__title">RAKEBACK REFUND</h3>

      <div class="refund-card__body">
        <p>
          Get a refund on every bet you place. Your rakeback percentage depends
          on your account level!
        </p>
      </div>

      <div class="refund-card__btn-box">
        <a href="#" class="btn btn--black">more info</a>
      </div>
    </div>

    <img
      src="@/assets/images/bonuses/refund-card.png"
      alt=""
      class="refund-card__img"
    />
  </div>
</template>

<script>
export default {
  name: "RefundCard",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.refund-card {
  position: relative;
  border-radius: rem(6);
  background: #343241 url("@/assets/images/bonuses/refund-card-bg.svg")
    no-repeat top right / auto 100%;

  [class^="col-"] &,
  [class*=" col-"] & {
    min-height: 100%;
  }

  &__text {
    padding: rem(35) rem(64) rem(35) 0;
    background: url("@/assets/images/bonuses/refund-card-text-bg.png") no-repeat
      top left / 100% 100%;
    max-width: 60%;

    @include respond-below(md) {
      max-width: 100%;
      padding: rem(35) rem(22);
      background: none;
    }
  }

  &__title {
    padding: rem(15) rem(34) rem(9) rem(24);
    background: url("@/assets/images/bonuses/refund-card-title-bg.png")
      no-repeat top left / 100% 100%;
    font-size: rem(23);
    font-weight: 400;
    line-height: 1.25;
    color: $color-white;

    @include respond-below(md) {
      padding: rem(15) rem(24) rem(9) rem(24);
      background: url("@/assets/images/bonuses/refund-card-title-bg-mobile.png")
        no-repeat top left / 100% 100%;
      font-size: rem(22);
      color: $color-black;
      text-align: center;
    }
  }

  &__body {
    padding: rem(18) rem(28) rem(18) rem(24);
    font-family: $font-family-secondary;
    font-size: rem(16);
    font-weight: 400;
    color: $color-black;

    @include respond-below(md) {
      padding: rem(20) 0;
      color: $color-white;
      text-align: center;
    }
  }

  &__btn-box {
    padding: 0 rem(24);

    @include respond-below(md) {
      padding: 0;
    }

    > .btn {
      @include respond-below(md) {
        width: 100%;
      }
    }
  }

  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 55%;
    max-height: 110%;

    @include respond-below(md) {
      display: none;
    }
  }
}
</style>
