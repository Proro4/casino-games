<template>
  <div class="header-wallet-popup" :class="{ _show: localIsActive }">
    <h3 class="header-wallet-popup__title">Wallet</h3>

    <div style="max-height: 50vh" class="scroll-container mb-3">
      <ul>
        <li v-for="coin in coins" :key="coin.id" class="mb-1">
          <header-coin-card :card="coin" />
        </li>
      </ul>
    </div>

    <div class="d-flex justify-content-between gap-2">
      <div>
        <label class="form-label mb-1">View in USD</label>

        <div class="d-flex align-items-center gap-2">
          <label for="isOn" class="form-label">OFF</label>

          <label class="switch">
            <input type="checkbox" id="isOn" checked />
            <span class="switch__slider"></span>
          </label>

          <label for="isOn" class="form-label">ON</label>
        </div>
      </div>

      <div class="text-right">
        <label class="form-label mb-1">Total amount</label>

        <label class="form-label">0 USD</label>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCoinCard from "./header-coin-card.vue";
import HeaderCoinImg from "@/assets/images/wallet-coin.png";

export default {
  name: "HeaderWalletPopup",
  components: {
    HeaderCoinCard,
  },
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      localIsActive: false,
      coins: [
        {
          id: "0",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "1",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "2",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "3",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "4",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "5",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "6",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "7",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "8",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "9",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "10",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
        {
          id: "11",
          img: HeaderCoinImg,
          title: "Bitcoin",
          value: "0.000000000",
        },
      ],
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
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.header-wallet-popup {
  position: absolute;
  z-index: 100;
  left: 0;
  bottom: 0;
  transform: translateY(calc(100% + 1.75rem));
  border-radius: 0 0 rem(6) rem(6);
  width: rem(540);
  padding: rem(40);
  background-color: #343240;
  opacity: 0;
  visibility: hidden;
  transition: opacity $transition-duration-primary,
    visibility $transition-duration-primary;

  &._show {
    opacity: 1;
    visibility: visible;
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: rem(-4);
    transform: translate(-50%, -100%);
    width: rem(20);
    height: rem(20);
    background: url("@/assets/images/icons/popup-arrow-up.svg") no-repeat bottom
      center / contain;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -9999;
    top: rem(-8);
    left: 0;
    width: 100%;
    height: rem(8);
    border-radius: rem(6) rem(6) 0 0;
    background: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
  }

  &__title {
    margin-bottom: rem(20);
    font-size: rem(32);
    text-transform: uppercase;
    text-align: center;
  }
}
</style>
