<template>
  <div class="header-btn-group">
    <button
      class="header-btn-group__btn header-btn-group__btn--notifications"
      aria-label="Notifications"
      @click="isActive = !isActive"
    ></button>

    <div v-if="quantity" class="header-btn-group__quantity">
      {{ quantity }}
    </div>

    <header-popup :is-active="isActive" @toggle="onPopupToggle">
      <ul class="header-notif-btns mb-3">
        <li v-for="(btn, btnIndex) in tabsBtns" :key="btn.id">
          <button
            :aria-label="btn.label"
            :class="{ _active: btnIndex === activeTab }"
            @click="activateTab(btnIndex)"
          >
            <img :src="btn.img" alt="" />
          </button>
        </li>
      </ul>

      <transition name="fade" mode="out-in">
        <ul v-if="activeTab === 0" :key="activeTab">
          <li v-for="notif in notifications" :key="notif.id" class="mb-1">
            <header-notification-card :notification="notif" />
          </li>
        </ul>

        <ul v-else-if="activeTab === 1" :key="activeTab + 1">
          <li v-for="notif in notifications" :key="notif.id" class="mb-1">
            <header-notification-card :notification="notif" />
          </li>
        </ul>

        <ul v-else :key="activeTab + 2">
          <li v-for="notif in notifications" :key="notif.id" class="mb-1">
            <header-notification-card :notification="notif" />
          </li>
        </ul>
      </transition>
    </header-popup>
  </div>
</template>

<script>
import HeaderPopup from "./header-popup.vue";
import HeaderNotificationCard from "./header-notification-card.vue";

import BellImg from "@/assets/images/layout/header-notif-bell.png";
import CoinImg from "@/assets/images/layout/header-notif-coin.png";
import WalletImg from "@/assets/images/layout/header-notif-wallet.svg";

const tabsBtns = [
  {
    id: "0",
    img: BellImg,
    label: "Bell",
  },
  {
    id: "1",
    img: CoinImg,
    label: "Coin",
  },
  {
    id: "2",
    img: WalletImg,
    label: "Wallet",
  },
];

export default {
  name: "HeaderNotifications",
  components: {
    HeaderPopup,
    HeaderNotificationCard,
  },
  props: {
    quantity: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isActive: false,
      tabsBtns,
      activeTab: 0,
      notifications: [
        {
          id: "0",
          title: "",
          body: "There are no challenges available right now.",
        },
        {
          id: "1",
          title: "",
          body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam .",
        },
        {
          id: "2",
          title: "",
          body: "To take a trivial example, which of us ever undertakes laborious.",
        },
        {
          id: "3",
          title: "",
          body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi .",
        },
      ],
    };
  },
  methods: {
    onPopupToggle(value) {
      this.isActive = value;
    },
    activateTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.header-btn-group {
  position: relative;

  &__btn {
    display: block;
    border: none;
    height: rem(45);
    width: rem(59);
    cursor: pointer;

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

.header-notif-btns {
  display: flex;
  justify-content: center;
  gap: rem(12);

  > li {
    > button {
      display: flex;
      border: rem(2) solid #3a3f50;
      border-radius: rem(4);
      width: rem(92);
      height: rem(70);
      background-color: #282634;
      transform: skew(-10deg);
      cursor: pointer;

      @include hover {
        &::after {
          opacity: 1;
        }
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
        background: linear-gradient(101deg, #feeb3c 45.46%, #fe843b 107.76%);
        opacity: 0;
        transition: opacity $transition-duration-primary;
      }

      img {
        margin: auto;
        max-width: 50%;
        max-height: 50%;
        transform: skew(10deg);
      }

      &._active {
        &::after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
