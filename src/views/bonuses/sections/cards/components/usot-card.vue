<template>
  <div class="usot-card">
    <div class="usot-card__text">
      <h3 class="usot-card__title">USDt unlock</h3>

      <div class="usot-card__body">
        <p>
          If your inquiry is related to deposit, please mention your transaction
          ID, address, and amount in the body.
        </p>
      </div>

      <ul class="usot-card__types">
        <li>
          <div class="usot-card-type">
            <div class="usot-card-type__label">Unclocked</div>

            <div class="usot-card-type__value">0.00 USDT</div>
          </div>
        </li>

        <li>
          <div class="usot-card-type">
            <div class="usot-card-type__label">locked</div>

            <div class="usot-card-type__value">0.00 USDT</div>
          </div>
        </li>
      </ul>
    </div>

    <img
      src="@/assets/images/bonuses/usot-card.png"
      alt=""
      class="usot-card__img"
    />
  </div>
</template>

<script>
export default {
  name: "UsotCard",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.usot-card {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: rem(6);
  background: #343241 url("@/assets/images/bonuses/refund-card-bg.svg")
    no-repeat top right / auto 100%;

  [class^="col-"] &,
  [class*=" col-"] & {
    min-height: 100%;
  }

  &__text {
    flex: 1 1 auto;
    max-width: 60%;
    min-height: 100%;
    padding: rem(35) rem(64) rem(35) 0;
    background: url("@/assets/images/bonuses/refund-card-text-bg.png") no-repeat
      top left / 100% 100%;

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
    padding: rem(18) rem(28) rem(24) rem(24);
    font-size: rem(15);
    font-weight: 450;
    line-height: 1.3;
    color: $color-black;

    @include respond-below(md) {
      padding: rem(20) 0;
      color: $color-white;
      text-align: center;
    }
  }

  &__types {
    padding: 0 rem(24);
    display: flex;
    justify-content: center;
    color: $color-black;

    @include respond-below(md) {
      color: $color-white;
    }

    > li {
      &:not(:last-child) {
        border-right: rem(1) solid currentColor;
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

.usot-card-type {
  padding: rem(4) rem(12);
  text-align: center;

  &__label {
    display: block;
    margin-bottom: rem(4);
    font-family: $font-family-secondary;
    font-size: rem(14);
    font-weight: 400;
    line-height: 1;
    text-transform: uppercase;
  }

  &__value {
    font-size: rem(15);
    font-weight: 750;
    line-height: 1.3;
    text-transform: uppercase;
  }
}
</style>
