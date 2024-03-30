<template>
  <div class="progress-bar">
    <div class="progress-bar__labels">
      <div class="progress-bar__label">1 lvl</div>

      <div class="progress-bar__label">2 lvl</div>
    </div>

    <div class="progress-bar__track">
      <div class="progress-bar__progress" :style="{ width: value + '%' }">
        <div class="progress-bar__progress-star">
          <div class="progress-bar__progress-value">{{ value }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.progress-bar {
  padding: 0 rem(12) rem(24);

  &__labels {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(8);
    margin-bottom: rem(8);
  }

  &__label {
    font-size: rem(10);
    font-weight: 700;
    text-transform: uppercase;
  }

  &__track {
    position: relative;
    border-radius: rem(2);
    width: 100%;
    height: rem(6);
    background-color: #262433;
  }

  &__progress {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    height: 100%;
    width: 25%;
    background-image: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
  }

  &__progress-star {
    position: absolute;
    z-index: 20;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    border-radius: 50%;
    width: rem(24);
    height: rem(24);
    background: url("@/assets/images/icons/progress-star.svg") no-repeat center /
      contain;
  }

  &__progress-value {
    position: absolute;
    left: 0;
    width: 100%;
    transform: translateY(150%);
    font-size: rem(10);
    font-weight: 700;
    line-height: 1.75;
    text-transform: uppercase;
    text-align: center;
    color: rgba($color-white, 0.5);
  }
}
</style>
