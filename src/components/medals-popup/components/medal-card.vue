<template>
  <div class="medal-card" :class="{ 'medal-card--lg': isLg }">
    <div class="medal-card__img">
      <img :src="medal.img" alt="" />
    </div>

    <h3 class="medal-card__title">{{ medal.title }}</h3>

    <div class="medal-card__body">
      <p>
        {{ medal.body }}
      </p>
    </div>

    <div v-if="isLg" class="medal-card__progress">0<span>/20</span></div>

    <div class="medal-card__num">
      {{ medal.num }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MedalCard",
  props: {
    medal: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    isLg() {
      return this.size === "lg";
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.medal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: rem(10);
  padding: rem(40);
  background-color: #1f1e25;
  text-align: center;

  @include respond-below(md) {
    padding: rem(24);
  }

  &--lg {
    .medal-card__img {
      @include respond-above(md) {
        margin-bottom: rem(48);
        width: rem(320);
        height: rem(320);
      }
    }

    .medal-card__title {
      @include respond-above(md) {
        margin-bottom: rem(32);
        font-size: rem(60);
      }
    }

    .medal-card__body {
      @include respond-above(md) {
        margin-bottom: rem(32);
        font-size: rem(42);
      }
    }

    .medal-card__progress {
      @include respond-above(md) {
        margin-bottom: rem(32);
        font-size: rem(40);
        font-weight: 600;
      }
    }

    .medal-card__num {
      @include respond-above(md) {
        min-width: rem(420);
        min-height: rem(64);
        font-size: rem(30);
      }
    }
  }

  [class^="col-"] &,
  [class*=" col-"] & {
    min-height: 100%;
  }

  &__img {
    display: inline-flex;
    margin-bottom: rem(28);
    border: rem(3) solid #3a3f50;
    border-radius: 50%;
    width: rem(188);
    height: rem(188);
    background-color: #292830;

    @include respond-below(md) {
      width: rem(164);
      height: rem(164);
    }

    img {
      margin: auto;
      max-width: 75%;
      max-height: 75%;
    }
  }

  &__title {
    margin-bottom: rem(16);
    font-family: $font-family-primary;
    font-size: rem(32);
    font-weight: 600;
    text-transform: initial;

    @include respond-below(md) {
      font-size: rem(24);
    }
  }

  &__body {
    flex: 1 1 auto;
    margin-bottom: rem(16);
    font-size: rem(20);
    font-weight: 600;
    line-height: 1.5;
    color: rgba($color-white, 0.7);

    @include respond-below(md) {
      font-size: rem(18);
    }
  }

  &__progress {
    margin-bottom: rem(16);
    font-size: rem(20);
    text-transform: uppercase;

    @include respond-below(md) {
      font-size: rem(18);
    }

    span {
      color: rgba($color-white, 0.3);
    }
  }

  &__num {
    display: inline-block;
    margin-top: auto;
    min-width: rem(220);
    min-height: rem(38);
    padding-top: rem(4);
    background: url("@/assets/images/medals-popup/medal-num-bg.svg") no-repeat
      center / contain;
    font-family: $font-family-secondary;
    font-size: rem(16);
    text-transform: uppercase;
    color: $color-black;
  }
}
</style>
