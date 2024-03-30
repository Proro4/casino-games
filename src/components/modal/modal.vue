<template>
  <transition name="modal-fade">
    <div
      v-if="visible"
      class="modal"
      :class="{
        'modal--lg': isSizeLg,
        'modal--decored': decored,
      }"
    >
      <div class="modal-overlay" @click="closeModal"></div>

      <div class="modal-content">
        <button class="modal-close" @click="closeModal"></button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    decored: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isSizeLg() {
      return this.size === "lg";
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(#0f0f14, 0.9);
  text-align: center;
  transition: opacity 0.3s ease;

  &--lg {
    .modal-content {
      width: rem(840);

      @include respond-below(md) {
        width: calc(100% - rem(32));
      }
    }
  }

  &--decored {
    .modal-content {
      position: relative;
      z-index: initial;
      width: calc(100% - rem(180));

      @include respond-below(md) {
        width: calc(100% - rem(32));
      }

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        border-radius: inherit;
        width: 100%;
        height: 100%;
        transform: rotate(1.16deg);
        background-color: #8a2bd5;
      }
    }
  }

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  &.enter-active,
  &.leave-active {
    opacity: 1;
  }

  &.enter-from,
  &.leave-to {
    opacity: 0;
  }

  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-content {
    display: inline-block;
    position: relative;
    z-index: 999;
    margin: rem(92) auto;
    border-radius: rem(6);
    width: rem(560);
    padding: rem(80) rem(60) rem(56);
    background-color: #343240;
    text-align: left;

    @include respond-below(md) {
      margin: rem(80) 0;
      width: calc(100% - rem(32));
      padding: rem(64) rem(20) rem(20);
    }
  }

  &-close {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border: rem(6) solid #221f24;
    border-radius: 50%;
    width: rem(76);
    height: rem(76);
    background-color: #343240;
    color: #55556f;
    cursor: pointer;
    transition: color $transition-duration-primary;

    @include hover {
      color: $color-white;
    }

    &::before {
      content: "\e913";
      font-family: "icomoon";
      font-size: rem(24);
    }
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  transition: opacity 0.3s ease;
  opacity: 0;
}
</style>
