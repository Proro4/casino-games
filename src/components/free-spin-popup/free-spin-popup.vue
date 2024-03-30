<template>
  <v-modal
    decored
    :visible="modalVisible"
    @update:visible="modalVisible = $event"
  >
    <div class="free-spin-content">
      <div class="free-spin-content__wheel-wrap">
        <free-spin ref="freeSpinEl" :items="items" />

        <img
          src="@/assets/images/free-spin-popup-animal.png"
          alt=""
          class="free-spin-content__img"
        />
      </div>

      <h3 class="free-spin-content__title">Daily <strong>win</strong></h3>

      <div class="free-spin-content__body">
        <p>Spin the Wheel WIN FREE CRYPTO!</p>
      </div>

      <button class="free-spin-content__btn" @click="spinWheel">
        Spin now
      </button>
    </div>
  </v-modal>
</template>

<script>
import FreeSpin from "../free-spin/free-spin.vue";

export default {
  name: "FreeSpinPopup",
  components: {
    FreeSpin,
  },
  data() {
    return {
      modalVisible: false,
      items: [
        { id: "0", value: "1,000.00", img: "", color: "#d605fb" },
        { id: "1", value: "1,000.00", img: "", color: "#4a019e" },
        { id: "2", value: "1,000.00", img: "", color: "#94019f" },
        { id: "3", value: "1,000.00", img: "", color: "#d605fb" },
        { id: "4", value: "1,000.00", img: "", color: "#4a019e" },
        { id: "5", value: "1,000.00", img: "", color: "#94019f" },
        { id: "6", value: "1,000.00", img: "", color: "#d605fb" },
        { id: "7", value: "1,000.00", img: "", color: "#4a019e" },
        { id: "8", value: "1,000.00", img: "", color: "#94019f" },
        { id: "9", value: "1,000.00", img: "", color: "#d605fb" },
        { id: "10", value: "1,000.00", img: "", color: "#4a019e" },
        { id: "11", value: "1,000.00", img: "", color: "#94019f" },
      ],
    };
  },
  methods: {
    show() {
      this.modalVisible = true;
    },
    hide() {
      this.modalVisible = false;
    },
    spinWheel() {
      this.$refs.freeSpinEl.selectItem();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.free-spin-content {
  text-align: center;

  &__wheel-wrap {
    position: relative;
    display: flex;
    margin-bottom: rem(48);
  }

  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 36%;
    min-width: 30%;
  }

  &__title {
    margin-bottom: rem(36);
    font-family: $font-family-secondary;
    font-size: 6.875vw;
    text-transform: uppercase;
    text-shadow: rem(-18) rem(18) 0 rgba($color-black, 0.25);

    @include respond-below(md) {
      margin-bottom: rem(20);
      text-shadow: rem(-4) rem(4) 0 rgba($color-black, 0.25);
    }

    strong {
      background: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: rem(-24) rem(24) 0 rgba($color-black, 0.25);

      @include respond-below(md) {
        text-shadow: rem(-4) rem(4) 0 rgba($color-black, 0.25);
      }
    }
  }

  &__body {
    margin-bottom: rem(48);
    font-family: $font-family-secondary;
    font-size: rem(36);
    text-transform: uppercase;

    @include respond-below(md) {
      margin-bottom: rem(28);
      font-size: rem(20);
    }
  }

  &__btn {
    border: none;
    padding: rem(64);
    font-size: rem(36);
    font-weight: 750;
    line-height: 1.5;
    text-transform: uppercase;
    background: url("@/assets/images/free-spin-popup-btn.png") no-repeat top
      left / 100% 100%;
    color: $color-white;
    cursor: pointer;

    @include respond-below(md) {
      padding: rem(20) rem(36);
      font-size: rem(20);
    }

    @include respond-above(md) {
      min-width: 52%;
    }
  }
}
</style>
