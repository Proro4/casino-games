<template>
  <div class="sidebar" :class="{ _scrolled: isScrolled, _show: isActive }">
    <div class="sidebar__nav mb-5">
      <ul class="sidebar__menu">
        <li>
          <router-link
            :to="{
              name: 'home.index',
            }"
            class="sidebar-link"
          >
            <div class="sidebar-link__card">
              <div class="sidebar-link__img">
                <img src="@/assets/images/layout/menu-item-01.png" alt="" />
              </div>

              <span class="sidebar-link__text">Home</span>
            </div>
          </router-link>
        </li>

        <li>
          <router-link to="/affiliate" class="sidebar-link">
            <div class="sidebar-link__card" @click="toggleAccordion(1)">
              <div class="sidebar-link__img">
                <img src="@/assets/images/layout/menu-item-02.png" alt="" />
              </div>
              <span class="sidebar-link__text">affiliate</span>
            </div>

            <div
              class="sidebar-link__extra"
              :class="{ _show: accordionOpen[1] }"
            >
              <div class="row">
                <div
                  class="col-xxs-3"
                  v-for="menuGame in menuGames"
                  :key="menuGame.id"
                >
                  <v-menu-game :game="menuGame" />
                </div>
              </div>
            </div>
          </router-link>
        </li>

        <li>
          <div class="sidebar-link">
            <router-link to="/bonuses" class="sidebar-link__card" @click="toggleAccordion(2)">
              <div class="sidebar-link__img">
                <img src="@/assets/images/layout/menu-item-03.png" alt="" />
              </div>

              <span class="sidebar-link__text">Bonuses</span>
            </router-link>

            <div
              class="sidebar-link__extra"
              :class="{ _show: accordionOpen[2] }"
            >
              <ul class="sidebar-bonuses-list">
                <li>
                  <a href="#" class="menu-bonus">
                    <img
                      src="@/assets/images/layout/menu-bonus-01.png"
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a href="#" class="menu-bonus">
                    <img
                      src="@/assets/images/layout/menu-bonus-02.png"
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a href="#" class="menu-bonus">
                    <img
                      src="@/assets/images/layout/menu-bonus-03.png"
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a href="#" class="menu-bonus">
                    <img
                      src="@/assets/images/layout/menu-bonus-04.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
<!-- 
        <li>
          <router-link to="#" class="sidebar-link">
            <div class="sidebar-link__card">
              <div class="sidebar-link__img">
                <img src="@/assets/images/layout/menu-item-04.png" alt="" />
              </div>

              <span class="sidebar-link__text">Tournaments</span>
            </div>
          </router-link>
        </li> -->

        <li>
          <router-link to="/rules" class="sidebar-link">
            <div class="sidebar-link__card">
              <div class="sidebar-link__img">
                <img src="@/assets/images/layout/menu-item-05.png" alt="" />
              </div>

              <span class="sidebar-link__text">rules</span>
            </div>
          </router-link>
        </li>

        <li>
          <router-link to="/contact-us" class="sidebar-link">
            <div class="sidebar-link__card">
              <div class="sidebar-link__img">
                <img src="@/assets/images/layout/menu-item-06.png" alt="" />
              </div>

              <span class="sidebar-link__text">contact us</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <v-report-card class="sidebar__report-card mb-1" />

    <div class="sidebar__nav mb-6">
      <ul class="sidebar__menus">
        <li>
          <router-link to="#" class="sidebar-link">
            <div class="sidebar-link__card">
              <div class="sidebar-link__img">
                <img src="@/assets/images/layout/menu-item-07.png" alt="" />
              </div>

              <span class="sidebar-link__text">Request a feature</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <v-bonus-card class="sidebar__bonus-card" />
  </div>
</template>

<script>
import { BonusCard, ReportCard, MenuGame } from "./components";
import { scrollManager } from "@/mixins";

import menuGameImg01 from "@/assets/images/layout/menu-game-01.png";
import menuGameImg02 from "@/assets/images/layout/menu-game-02.png";
import menuGameImg03 from "@/assets/images/layout/menu-game-03.png";
import menuGameImg04 from "@/assets/images/layout/menu-game-04.png";
import menuGameImg05 from "@/assets/images/layout/menu-game-05.png";
import menuGameImg06 from "@/assets/images/layout/menu-game-06.png";
import menuGameImg07 from "@/assets/images/layout/menu-game-07.png";
import menuGameImg08 from "@/assets/images/layout/menu-game-08.png";
import menuGameImg09 from "@/assets/images/layout/menu-game-09.png";
import menuGameImg10 from "@/assets/images/layout/menu-game-10.png";
import menuGameImg11 from "@/assets/images/layout/menu-game-11.png";
import menuGameImg12 from "@/assets/images/layout/menu-game-12.png";

export default {
  name: "SidebarLayout",
  mixins: [scrollManager],
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VBonusCard: BonusCard,
    VReportCard: ReportCard,
    VMenuGame: MenuGame,
  },
  data() {
    return {
      accordionOpen: [],
      menuGames: [
        {
          id: 0,
          img: menuGameImg01,
          title: "roulette",
          link: "roulette",
        },
        {
          id: 1,
          img: menuGameImg02,
          title: "limbo",
          link: "limbo",
        },
        {
          id: 2,
          img: menuGameImg03,
          title: "dice",
          link: "dice",
        },
        {
          id: 3,
          img: menuGameImg04,
          title: "towers",
          link: "towers",
        },
        {
          id: 4,
          img: menuGameImg05,
          title: "mines",
          link: "mines",
        },
        {
          id: 5,
          img: menuGameImg06,
          title: "diamonds",
          link: "diamonds",
        },
        {
          id: 7,
          img: menuGameImg08,
          title: "keno",
          link: "keno",
        },
        {
          id: 10,
          img: menuGameImg11,
          title: "crash",
          link: "crash",
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.accordionOpen[index] = !this.accordionOpen[index];
    },
  },
};
</script>

<style lang="scss">
$border-width: 0.125rem;

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/base/_functions.scss";
@import "@/assets/scss/base/_mixins.scss";

.sidebar {
  position: relative;
  z-index: 90;
  height: calc(100vh - rem(77));
  width: rem(268);
  padding: rem(20) rem(20) 0;
  background-color: #292830;
  overflow-x: hidden;
  overflow-y: auto;
  transition: transform 0.5s;

  &::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background-color: $color-grey;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $color-primary;
  }

  &._scrolled {
    @include respond-above(lg) {
      position: fixed;
      top: rem(77);
      width: rem(268);
    }
  }

  &._show {
    @include respond-below(lg) {
      transform: none;
    }
  }

  @include respond-below(lg) {
    position: fixed;
    left: 0;
    top: rem(72);
    width: 100%;
    transform: translateX(-100%);
  }

  &__menu {
    > li {
      &:not(:last-child) {
        margin-bottom: 0.25rem;
      }
    }
  }

  &__bonus-card {
    margin: 0 rem(-20);
  }
}

.sidebar-link {
  display: block;

  &__card {
    position: relative;
    z-index: initial;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border: $border-width solid transparent;
    border-radius: 0.25rem;
    background-clip: padding-box;
    background-color: #343241;
    transition: background-color $transition-duration-primary;
    gap: rem(12);

    @include hover {
      background: linear-gradient(
        101.09deg,
        $color-yellow 45.46%,
        $color-orange 107.76%
      );
      color: $color-black;

      &::before {
        background: linear-gradient(
          101.09deg,
          $color-yellow 45.46%,
          $color-orange 107.76%
        );
      }

      .sidebar-link__img {
        &::before {
          background: linear-gradient(
            101.09deg,
            $color-yellow 45.46%,
            $color-orange 107.76%
          );
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      margin: -$border-width;
      border-radius: inherit;
      background-color: #3a3f50;
      inset: 0;
    }
  }

  &__img {
    position: relative;
    z-index: initial;
    display: flex;
    flex: 0 0 rem(45);
    border: $border-width solid transparent;
    border-radius: 0.25rem;
    width: rem(45);
    height: rem(45);
    background-clip: padding-box;
    background-color: #292830;

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      margin: -$border-width;
      border-radius: inherit;
      background-color: #3a3f50;
      inset: 0;
    }

    img {
      margin: auto;
      min-width: 65%;
      max-width: 90%;
      max-height: 90%;
    }
  }

  &__text {
    font-size: rem(13);
    font-weight: 750;
    text-transform: uppercase;
  }

  &__extra {
    position: relative;
    z-index: 5;
    overflow: hidden;
    margin-top: 0.25rem;
    border: 0 solid #3a3f50;
    border-radius: 0.25rem;
    max-height: 0;
    padding: 0 0.5rem;
    background-color: #343241;
    transition: all 0.5s;

    &._show {
      border-width: $border-width;
      max-height: 100vh;
      padding: 0.5rem;
    }
  }
}

.sidebar-bonuses-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: rem(6);
}

.menu-bonus {
  position: relative;
  z-index: initial;
  display: flex;
  border: $border-width solid transparent;
  border-radius: 50%;
  width: rem(48);
  height: rem(48);
  background-clip: padding-box;
  background-color: #292830;

  @include hover {
    &::before {
      background: linear-gradient(
        101.09deg,
        $color-yellow 45.46%,
        $color-orange 107.76%
      );
    }
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    margin: -$border-width;
    border-radius: inherit;
    background-color: #3a3f50;
    inset: 0;
  }

  img {
    margin: auto;
    min-height: 64%;
    max-width: 90%;
    max-height: 90%;
  }
}
</style>
