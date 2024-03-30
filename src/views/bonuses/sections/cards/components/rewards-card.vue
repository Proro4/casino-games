<template>
  <div class="rewards-card">
    <div class="rewards-card__text">
      <h3 class="rewards-card__title">Level up rewards</h3>

      <div class="rewards-card__body">
        <p>
          If your inquiry is related to deposit, please mention your transaction
          ID, address, and amount in the body.
        </p>
      </div>

      <div class="rewards-card__btn-box">
        <a href="#" class="btn btn--black">more info</a>
      </div>
    </div>

    <img
      src="@/assets/images/bonuses/rewards-card.png"
      alt=""
      class="rewards-card__img"
    />
  </div>
</template>

<script>
export default {
  name: "RewardsCard",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.rewards-card {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  border-radius: rem(6);
  background: #343241 url("@/assets/images/bonuses/rewards-card-bg.jpg")
    no-repeat top right / 100% 100%;

  [class^="col-"] &,
  [class*=" col-"] & {
    min-height: 100%;
  }

  &__text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 61%;
    padding: rem(48) rem(24);

    @include respond-below(md) {
      max-width: 80%;
      padding: rem(36) rem(24);
    }
  }

  &__title {
    position: relative;
    z-index: 10;
    margin-bottom: rem(12);
    font-size: rem(18);
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
    right: 0;
    bottom: 0;
    max-width: 47%;
    max-height: 100%;

    @include respond-below(md) {
      max-width: 35%;
    }
  }
}
</style>
