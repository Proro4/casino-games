<template>
  <form class="chat-input" @submit.prevent="onSubmit($event)">
    <textarea
      v-model="text"
      name="chat-message"
      rows="5"
      placeholder="to write a message ...."
      class="chat-input__input"
    ></textarea>

    <div class="chat-input__btns">
      <button class="chat-input__btn">
        <i class="icon-rain"></i>
      </button>

      <header-chat-gif />

      <button class="chat-input__btn">
        <i class="icon-smile"></i>
      </button>

      <button
        class="chat-input__btn chat-input__btn--highlight"
        :disabled="isSubmitDisabled"
      >
        <i class="icon-plane"></i>
      </button>
    </div>
  </form>
</template>

<script>
import HeaderChatGif from "./header-chat-gif.vue";

export default {
  name: "ChatInput",
  components: {
    HeaderChatGif,
  },
  data() {
    return {
      text: "",
    };
  },
  computed: {
    isSubmitDisabled() {
      return !this.text;
    },
  },
  methods: {
    onSubmit(event) {
      this.$emit("submit", event, this.text);
      this.text = "";
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.chat-input {
  border: rem(2) solid #3a3f50;
  border-radius: rem(6);
  padding: rem(16);
  background-color: #282634;

  &__input {
    display: block;
    margin-bottom: rem(8);
    border: none;
    outline: none;
    width: 100%;
    background: none;
    resize: none;
    font-size: rem(12);
    font-weight: 450;
    line-height: 1.535;
    color: $color-white;

    &::placeholder {
      color: rgba($color-white, 0.5);
    }
  }

  &__btns {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: rem(6);
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: rem(32);
    height: rem(32);
    background: none;
    font-size: rem(24);
    color: #95959c;
    transition: color $transition-duration-primary;

    &:disabled {
      opacity: 0.75;
    }

    &:not(:disabled) {
      cursor: pointer;

      @include hover {
        color: $color-white;
      }
    }

    &--highlight {
      width: rem(48);
      height: rem(48);
      border-radius: rem(8);
      background: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
      color: $color-black;
    }
  }
}
</style>
