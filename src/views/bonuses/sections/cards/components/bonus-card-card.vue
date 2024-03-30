<template>
  <div class="bonus-code-card">
    <div class="bonus-code-card__text">
      <h3 class="bonus-code-card__title">BONUS CODE</h3>

      <form action="#" class="bonus-code-card__form bonus-code-card-form">
        <h4 class="bonus-code-card-form__title">
          Redeem your bonus codes for great rewards
        </h4>

        <div class="bonus-code-card-form__row">
          <div class="bonus-code-card-form__input input">
            <input type="text" placeholder="Your code" />
          </div>

          <button
            type="submit"
            class="bonus-code-card-form__btn btn btn--sm btn--black"
          >
            Reddem now
          </button>
        </div>
      </form>

      <div class="bonus-code-card__btn-box">
        <a href="#" class="btn btn--black">more info</a>
      </div>
    </div>

    <img
      src="@/assets/images/bonuses/bonus-code-card.png"
      alt=""
      class="bonus-code-card__img"
    />
  </div>
</template>

<script>
export default {
  name: "BonusCodeCard",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.bonus-code-card {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  border-radius: rem(6);
  background: #343241 url("@/assets/images/bonuses/bonus-code-card-bg.jpg")
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
    max-width: 70%;
    padding: rem(42) 0;

    @include respond-below(md) {
      max-width: 100%;
      padding: rem(36) rem(16);
    }
  }

  &__title {
    position: relative;
    z-index: 10;
    padding: rem(8) rem(16);
    font-size: rem(20);
    text-transform: uppercase;

    @include respond-below(md) {
      padding: rem(8) 0;
    }
  }

  &__form {
    position: relative;
    z-index: 10;
    margin-bottom: rem(12);
  }

  &__btn-box {
    padding: 0 rem(12);

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
    top: rem(-16);
    max-width: 55%;
    max-height: 100%;

    @include respond-below(md) {
      display: none;
    }
  }
}

.bonus-code-card-form {
  padding: rem(16) rem(24) rem(16) rem(20);
  background: url("@/assets/images/bonuses/bonus-code-card-form-bg.png")
    no-repeat top right / 100% 100%;
  color: $color-black;

  @include respond-below(md) {
    border-radius: rem(6);
    background: linear-gradient(158deg, #feeb3c 0%, #fe843b 100%);
  }

  &__title {
    margin-bottom: rem(12);
    font-size: rem(14);
    text-transform: uppercase;
  }

  &__row {
    display: flex;
  }

  &__input {
    flex: 1 1 auto;
    margin-right: rem(-28);

    input {
      border-radius: rem(12.5);
      padding: rem(8) rem(12);
      padding-right: rem(36);
      background-color: $color-white;
      font-size: rem(10);
      font-weight: 750;
      color: $color-black;
      text-transform: uppercase;
    }
  }
}
</style>
