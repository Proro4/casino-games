<template>
  <header class="header" :class="{ _scrolled: isScrolled }">
    <div class="header__container">
      <div class="header__wrap">
        <div class="header__row">
          <button
            class="header__burger"
            style="opacity: 0;"
            :class="{ _active: isActive }"
            @click="handleBurgerClick"
          >
            <span aria-hidden="true"></span>
          </button>

          <template v-if="isLogin">
            <div class="header__search-block">
              <div class="search-form">
                <div class="search-form__input">
                  <div class="search-form__input-img">
                    <img src="@/assets/images/layout/coin-18.png" alt="" />
                  </div>

                  <input type="number" />
                </div>

                <select name="" class="search-form__select">
                  <option value="0">option</option>
                  <option value="1">option2</option>
                </select>

                <button
                  type="submit"
                  class="search-form__btn"
                  @click.prevent="showWalletPopup"
                >
                  Wallet
                </button>

                <header-wallet-popup :is-active="isShowWalletPopup" />
              </div>
            </div>
          </template>
          <div class="header__btn-box">
            <template v-if="!isAuthorized">
              <router-link
                to="#"
                class="btn-icon btn-icon--wallet mobile-only"
                aria-label="Login"
              ></router-link>

              <button
                class="btn btn--third pc-only"
                aria-label="Login"
                @click="showLoginModal"
              >
                Login
              </button>

              <router-link
                to="#"
                class="btn btn--secondary pc-only"
                aria-label="Sign in"
                @click="showLoginModal"
              >
                Sign in
              </router-link>
            </template>

            <template v-else>
              <header-comments />

              <header-notifications :quantity="12" />

              <header-user-quick class="header__user-quick" />
            </template>
          </div>
        </div>
      </div>
    </div>

    <header-login-modal ref="loginModal" />

    <wallet-popup ref="walletPopup" />

    <rain-popup ref="rainPopup" />
  </header>
</template>

<script>
import { mapState } from "pinia";
import useLoginStore from "@/store/login";
import { scrollManager } from "@/mixins";
import HeaderUserQuick from "./components/header-user-quick.vue";
import HeaderNotifications from "./components/header-notifications.vue";
import HeaderComments from "./components/header-comments.vue";
import HeaderWalletPopup from "./components/header-wallet-popup.vue";
import HeaderLoginModal from "./components/header-login-modal.vue";
import { WalletPopup, RainPopup } from "@/components";

export default {
  name: "HeaderLayout",
  mixins: [scrollManager],
  components: {
    HeaderUserQuick,
    WalletPopup,
    RainPopup,
    HeaderNotifications,
    HeaderComments,
    HeaderWalletPopup,
    HeaderLoginModal,
  },
  data() {
    return {
      isActive: false,
      isAuthorized: false,
      isShowWalletPopup: false,
    };
  },
  computed: {
    ...mapState(useLoginStore, ["isLogin"]),
  },
  methods: {
    handleBurgerClick() {
      this.isActive = !this.isActive;
      this.$emit("burger-clicked", this.isActive);
    },
    showLoginModal() {
      this.$refs.loginModal.show();
    },
    showWalletPopup() {
      this.isShowWalletPopup = !this.isShowWalletPopup;
    },
    showRainPopup() {
      this.$refs.rainPopup.show();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.header {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  background-color: transparent;
  transition: $transition-primary;

  &._scrolled {
    background-color: $color-black;
  }

  &__container {
    padding: 0 rem($mar);

    @include respond-above(xxl) {
      padding: 0 rem(50) 0 rem(20);
    }
  }

  &__wrap {
    padding: 1rem 0;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__burger {
    position: relative;
    flex: 0 0 rem(59);
    border: none;
    border-radius: 0.25rem;
    width: rem(59);
    height: rem(45);
    background: url("@/assets/images/layout/header-burger.svg") no-repeat top
      left / 100% 100%;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity $transition-duration-primary;

    @include hover {
      opacity: 1;
    }

    &::before,
    &::after {
      content: "";
    }

    &::before,
    &::after,
    span {
      position: absolute;
      left: px(13);
      border-radius: px(2.5);
      height: px(2.5);
      background-color: #1f1e25;
      transition: $transition-primary;
    }

    &::before {
      transform-origin: left bottom;
      top: px(11);
      width: px(32);
    }

    &::after {
      transform-origin: left top;
      left: px(23);
      bottom: px(13);
      width: px(13);
    }

    span {
      top: px(21);
      width: px(23);
    }

    &:focus,
    &:active,
    &._active {
      opacity: 1;
    }

    &._active {
      &::before {
        transform: rotate(35deg);
      }

      span {
        opacity: 0;
      }

      &::after {
        transform: rotate(-35deg);
        left: px(13);
        width: px(32);
      }
    }
  }

  &__btn-box {
    position: relative;
    z-index: 20;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: rem(4);
  }

  &__user-quick {
    margin-left: rem(10);
  }

  &__search-block {
    position: relative;
  }
}

.header-btn-group {
  position: relative;

  &__btn {
    display: block;
    height: rem(45);
    width: rem(59);

    &--comments {
      background: url("@/assets/images/layout/header-btn-notif.svg") no-repeat
        top left / 100% 100%;
    }

    &--notifications {
      background: url("@/assets/images/layout/header-btn-notif-02.svg")
        no-repeat top left / 100% 100%;
    }
  }

  &__quantity {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    border: rem(2) solid #1a1a22;
    border-radius: rem(21);
    padding: 0 rem(3);
    background: linear-gradient(158deg, #feeb3c 0%, #fe843b 100%);
    text-align: center;
    font-size: rem(10);
    font-style: normal;
    font-weight: 750;
    letter-spacing: -1.05px;
    color: #1f1e25;
  }
}
</style>
