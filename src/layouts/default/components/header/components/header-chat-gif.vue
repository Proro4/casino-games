<template>
  <div class="header-chat-gif">
    <button class="header-chat-gif__btn" @click="togglePopup">
      <i class="icon-gif"></i>
    </button>

    <div class="header-chat-gif__popup" :class="{ _show: isShow }">
      <div class="header-chat-gif__input input">
        <input type="text" placeholder="Search GIF" />
      </div>

      <ul class="header-chat-gif__list">
        <li v-for="gif in gifs" :key="gif.key">
          <div class="header-chat-gif__img">
            <img :src="gif.img" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Gif01 from "@/assets/images/layout/gif-01.jpg";
import Gif02 from "@/assets/images/layout/gif-02.jpg";
import Gif03 from "@/assets/images/layout/gif-03.jpg";
import Gif04 from "@/assets/images/layout/gif-04.jpg";
import Gif05 from "@/assets/images/layout/gif-05.jpg";
import Gif06 from "@/assets/images/layout/gif-06.jpg";
import Gif07 from "@/assets/images/layout/gif-07.jpg";
import Gif08 from "@/assets/images/layout/gif-08.jpg";
import Gif09 from "@/assets/images/layout/gif-09.jpg";

export default {
  name: "HeaderChatGif",
  data() {
    return {
      isShow: false,
      gifs: [
        {
          id: "0",
          img: Gif01,
        },
        {
          id: "0",
          img: Gif02,
        },
        {
          id: "0",
          img: Gif03,
        },
        {
          id: "0",
          img: Gif04,
        },
        {
          id: "0",
          img: Gif05,
        },
        {
          id: "0",
          img: Gif06,
        },
        {
          id: "0",
          img: Gif07,
        },
        {
          id: "0",
          img: Gif08,
        },
        {
          id: "0",
          img: Gif09,
        },
      ],
    };
  },
  methods: {
    togglePopup() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.header-chat-gif {
  position: relative;

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
  }

  &__popup {
    position: absolute;
    z-index: 100;
    left: 50%;
    bottom: calc(100% + 1.125rem);
    transform: translateX(-50%);
    border-radius: rem(6);
    border: rem(2) solid #3a3f50;
    width: rem(280);
    padding: rem(16);
    background-color: #343240;
    visibility: hidden;
    opacity: 0;
    transition: opacity $transition-duration-primary,
      visibility $transition-duration-primary;

    &::before {
      content: "";
      position: absolute;
      z-index: -5;
      bottom: rem(-3);
      left: 0;
      width: 100%;
      height: rem(3);
      border-radius: 0 0 rem(10) rem(10);
      background: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -2;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 92%);
      width: rem(16);
      height: rem(16);
      background: url("@/assets/images/icons/arrow-down-alt.svg") no-repeat
        center top;
    }

    &._show {
      visibility: visible;
      opacity: 1;
    }
  }

  &__input {
    margin-bottom: rem(14);
  }

  &__list {
    display: flex;
    flex-wrap: wrap;

    > li {
      flex: 0 0 calc(100% / 3);
      max-width: calc(100% / 3);
      padding: rem(2);
    }
  }

  &__img {
    position: relative;
    padding-bottom: 100%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
