<template>
  <div class="medals-card">
    <div class="medals-card__text">
      <h3 class="medals-card__title">Medals</h3>

      <div class="medals-card__body">
        <p>
          If your inquiry is related to deposit, please mention your transaction
          ID, address, and amount in the body.
        </p>
      </div>

      <div class="medals-card__btn-box">
        <a href="#" class="btn btn--black">more info</a>
      </div>
    </div>

    <img
      src="@/assets/images/bonuses/medals-card.png"
      alt=""
      class="medals-card__img"
    />
  </div>
</template>

<script>
export default {
  name: "MedalsCard",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.medals-card {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  border-radius: rem(6);
  background: #343241 url("@/assets/images/bonuses/refund-card-bg.svg")
    no-repeat top right / auto 100%;

  [class^="col-"] &,
  [class*=" col-"] & {
    min-height: 100%;
  }

  &__text {
    flex: 1 1 auto;
    max-width: 75%;
    min-height: 100%;
    padding: rem(48) rem(64) rem(48) rem(28);
    background: url("@/assets/images/bonuses/refund-card-text-bg.png") no-repeat
      top left / 100% 100%;
    color: $color-black;

    @include respond-below(md) {
      max-width: 90%;
      padding: rem(48) rem(64) rem(48) rem(20);
    }
  }

  &__title {
    position: relative;
    z-index: 10;
    margin-bottom: rem(12);
    font-size: rem(44);
    text-transform: uppercase;
  }

  &__body {
    position: relative;
    z-index: 10;
    margin-bottom: rem(16);
    font-size: rem(15);
    font-weight: 450;
    line-height: 1.3;
  }

  &__img {
    position: absolute;
    right: rem(-64);
    bottom: 0;
    max-width: 72%;
    max-height: 110%;

    @include respond-below(md) {
      right: rem(-48);
      max-width: 60%;
    }
  }
}
</style>
