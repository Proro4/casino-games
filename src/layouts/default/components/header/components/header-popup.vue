<template>
  <div
    class="header-user-quick-popup"
    :class="{
      _active: localIsActive,
      'header-user-quick-popup--sm': sm,
    }"
  >
    <button
      class="header-user-quick-popup__close-btn"
      @click="toggleIsActive"
    ></button>

    <div style="max-height: calc(100vh - 12rem)" class="scroll-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPopup",
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    sm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localIsActive: false,
    };
  },
  watch: {
    isActive: {
      handler(value) {
        this.localIsActive = value;
      },
      immediate: true,
    },
  },
  methods: {
    toggleIsActive() {
      this.localIsActive = !this.localIsActive;
      this.$emit("toggle", this.localIsActive);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.header-user-quick-popup {
  position: fixed;
  z-index: 100;
  right: 0;
  top: rem(90);
  border: rem(2) solid #3a3f50;
  border-radius: rem(10) 0 0 rem(10);
  max-height: calc(100vh - rem(100));
  width: rem(488);
  padding: rem(40) rem(20) rem(32) rem(32);
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #343240;
  visibility: hidden;
  opacity: 0;
  transition: $transition-primary;

  &.header-user-quick-popup--sm {
    width: rem(280);

    @include respond-above(md) {
      min-width: rem(280);
    }

    @include respond-below(sm) {
      min-width: rem(280);
      width: rem(280);
    }
  }

  @include respond-above(md) {
    min-width: rem(550);
  }

  @include respond-below(sm) {
    min-width: 95%;
    width: 95%;
  }

  &::-webkit-scrollbar {
    width: rem(4);
    height: rem(4);
  }

  &::-webkit-scrollbar-track {
    background-color: #1f1e25;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: rem(4);
    background: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
  }

  &._active {
    visibility: visible;
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 5;
    left: rem(-2);
    right: rem(-2);
    top: rem(-2);
    height: rem(6);
    background: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
  }

  &__close-btn {
    position: absolute;
    right: rem(8);
    top: rem(16);
    border: none;
    width: rem(32);
    height: rem(32);
    background-color: #343240;
    font-size: rem(20);
    color: #55556f;
    cursor: pointer;
    transition: color $transition-duration-primary;

    @include hover {
      color: $color-white;
    }

    &::before {
      content: "\e913";
      font-family: "icomoon";
    }
  }

  &__title {
    margin-bottom: rem(15);
    font-size: rem(24);
    font-weight: 400;
  }

  &__subtitle {
    font-family: $font-family-primary;
    font-size: rem(21);
    font-weight: 600;
    text-transform: uppercase;
    color: rgba($color-white, 0.5);
  }

  &__metas {
    display: flex;
    flex-wrap: wrap;
    gap: rem(4);

    > li {
      display: flex;
      align-items: center;
      gap: rem(6);
      border-radius: rem(4);
      padding: rem(4) rem(12);
      background-color: #1f1e25;
      font-size: rem(12);
      font-weight: 750;
      text-transform: uppercase;
      color: $color-white;

      img {
        width: rem(16);
        height: rem(16);
        object-fit: contain;
      }
    }
  }

  &__menu {
    > li {
      &:not(:last-child) {
        margin-bottom: rem(16);
      }

      > a {
        display: flex;
        align-items: center;
        width: 100%;
        font-size: rem(12);
        font-weight: 700;
        text-transform: uppercase;
        transition: color $transition-duration-primary;

        @include hover {
          color: #feeb3c;

          &::before {
            color: #feeb3c;
          }
        }

        &::before {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: rem(16);
          width: rem(24);
          height: rem(24);
          font-size: rem(18);
          color: rgba($color-white, 0.5);
          transition: color $transition-duration-primary;
        }
      }
    }
  }
}
</style>
