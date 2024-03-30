<template>
  <div class="chat-card" :class="{ 'chat-card--reversed': reversed }">
    <div class="chat-card__header">
      <div class="chat-card__img">
        <img src="@/assets/images/header-chat-user.jpg" alt="" />
      </div>

      <div class="chat-card__info">
        <div class="chat-card__name">WildPapa442</div>

        <time class="chat-card__time">14:42</time>
      </div>
    </div>

    <div class="chat-card__body">
      <p>
        Hey friends, I'm very sad to tell you I'm leaving this community. I will
        miss you very much, but you will be in good hands! @Aws will stay at my
        place. Please give her a warm welcome!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatMessageCard",
  props: {
    message: {
      type: Object,
      default: () => ({}),
    },
    reversed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.chat-card {
  &--reversed {
    .chat-card__header {
      flex-direction: row-reverse;
      text-align: right;
    }

    .chat-card__img {
      margin-left: rem(8);
      margin-right: 0;
      background: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
    }

    .chat-card__body {
      margin-left: 0;
      border-radius: rem(4) 0 rem(4) rem(4);
      background: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
      color: $color-black;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: rem(8);
  }

  &__img {
    margin-right: rem(8);
    flex: 0 0 rem(48);
    height: rem(48);
    border-radius: 50%;
    padding: rem(2);
    background-color: #3d3d4e;

    img {
      border-radius: inherit;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    margin-bottom: rem(2);
    font-size: rem(14);
    font-weight: 600;
    line-height: 1.2;
    color: $color-white;
  }

  &__time {
    display: block;
    font-size: rem(10);
    font-weight: 600;
    text-transform: uppercase;
    color: #feeb3c;
  }

  &__body {
    margin-left: auto;
    border-radius: 0 rem(4) rem(4) rem(4);
    width: calc(100% - rem(24));
    padding: rem(14) rem(16);
    background-color: #282634;
    font-size: rem(12);
    font-weight: 450;
    line-height: 1.535;
  }
}
</style>
