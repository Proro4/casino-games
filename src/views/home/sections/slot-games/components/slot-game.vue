<template>
  <div
    class="slot-game"
    :class="{
      _active: isActive,
      _sm: isSm,
    }"
  >
    <div class="slot-game__row">
      <div v-if="!isSm" class="slot-game__img">
        <img src="@/assets/images/home/slot-game-01.png" :alt="game.title" />
      </div>

      <div v-if="isSm" class="slot-game__media">
        <div class="slot-game__num">1</div>

        <div class="slot-game__media-img">
          <img src="@/assets/images/layout/table-game.jpg" :alt="game.title" />
        </div>
      </div>

      <div class="slot-game__text">
        <div class="slot-game__header">
          <div class="slot-game__coins slot-game-coins">
            <img
              src="@/assets/images/layout/coin-17.png"
              alt=""
              class="lost-game-coins__img"
            />

            <div class="slot-game-coins__value">{{ game.coinsValue }}</div>
          </div>

          <div class="slot-game__coins-count">{{ game.coinsCount }}</div>
        </div>

        <div class="slot-game__body">
          <h3 class="slot-game__title">
            {{ game.title }}
          </h3>

          <div v-if="!isSm" class="slot-game__rtt">
            {{ game.rtt }}
          </div>

          <h3 v-if="!isSm" class="slot-game__title">
            {{ game.hiddenTitle }}
          </h3>

          <h3 v-if="isSm" class="slot-game__legend">
            {{ game.hiddenTitle }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlotGameCard",
  props: {
    game: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    isSm() {
      return this.size === "sm";
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.slot-game {
  overflow: hidden;
  border: rem(2) solid #292830;
  border-radius: rem(6);
  padding: rem(10);
  background: #292830 url("@/assets/images/layout/slot-game-bg.svg") no-repeat
    top right / auto 100%;
  transition: border-color $transition-duration-primary;

  @include hover {
    border-color: $color-yellow;
  }

  &._active {
    border-color: $color-yellow;
  }

  &._sm {
    min-height: rem(116);

    .slot-game__header {
      margin-bottom: rem(8);
    }

    .slot-game__title {
      margin-bottom: rem(4);
      font-size: rem(13);
    }

    .slot-game__text {
      flex: 0 0 58%;
      max-width: 58%;
    }
  }

  &__row {
    display: flex;
  }

  &__img {
    display: flex;
    flex: 0 0 40%;
    max-width: 40%;
    padding: rem(10) rem(20) rem(10) rem(10);
    background: #292830 url("@/assets/images/layout/slot-game-img-bg.png")
      no-repeat left top / 100% 100%;

    img {
      margin: auto;
    }
  }

  &__text {
    flex: 0 0 60%;
    max-width: 60%;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: rem(24);
    border-radius: rem(4);
    padding: rem(6) rem(12) rem(6) rem(16);
    background: #292830 url("@/assets/images/layout/slot-game-header-bg.png")
      no-repeat left top / 100% 100%;
    gap: 1rem;
  }

  &__coins-count {
    font-size: rem(10);
    font-weight: 750;
    text-transform: uppercase;
    color: $color-yellow;
  }

  &__title {
    margin-left: 1rem;
    font-size: rem(14.9);

    &:last-child {
      margin-left: 1.75rem;
    }

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &__rtt {
    display: inline-block;
    margin-bottom: 1.25rem;
    margin-left: 1.25rem;
    padding: rem(4) rem(18);
    background: url("@/assets/images/layout/slot-game-rtt-bg.png") no-repeat
      left top / 100% 100%;
    font-size: rem(14);
    font-weight: 750;
    text-transform: uppercase;
    color: $color-yellow;
  }

  &__legend {
    margin-left: 1.25rem;
    font-size: rem(10);
    text-transform: uppercase;
    color: $color-primary;
  }

  &__media {
    display: flex;
    flex: 0 0 42%;
    align-items: center;
    max-width: 42%;
    gap: px(12);

    &-img {
      position: relative;
      flex: 0 0 rem(85);
      border: 0.125rem solid $color-yellow;
      border-radius: 50%;
      width: rem(85);
      height: rem(85);
      padding: rem(10);
      background-color: #3a3847;

      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        width: px(36);
        height: px(36);
        background: url("@/assets/images/layout/slot-game-media-img-decor.svg")
          no-repeat center / contain;
        transform: translate(30%, 20%);
      }

      img {
        border-radius: inherit;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &__num {
    position: relative;
    z-index: 10;
    display: flex;
    flex: 0 0 px(55);
    align-items: center;
    justify-content: center;
    border: 0.25rem solid #464454;
    border-radius: 50%;
    width: px(55);
    height: px(55);
    font-family: $font-family-secondary;
    font-size: px(21);
    text-transform: uppercase;
    color: $color-black;

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 50%;
      border-radius: 50%;
      width: px(32);
      height: px(32);
      background: linear-gradient(
        101.09deg,
        $color-yellow 45.46%,
        $color-orange 107.76%
      );
      filter: blur(5.5px);
      transform: translate(-50%, -50%);
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0;
      width: px(15);
      height: px(21);
      background: url("@/assets/images/layout/slot-game-num-decor.svg")
        no-repeat top center / contain;
      transform: translate(-50%, 100%);
    }
  }
}

.slot-game-coins {
  display: flex;
  align-items: center;
  gap: rem(8);

  &__img {
    border-radius: 50%;
    width: px(32);
    height: px(32);
  }

  &__value {
    font-size: rem(14);
    font-weight: 750;
    text-transform: uppercase;
  }
}
</style>
