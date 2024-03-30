<template>
  <div>
    <div class="row">
      <div class="col-lg-2"></div>

      <div class="col-lg-10">
        <footer class="footer">
          <div class="footer__container container">
            <div class="footer__wrap">
              <nav class="footer__nav">
                <ul class="footer__menu">
                  <li>
                    <router-link to="#">Home</router-link>
                  </li>
                  <li>
                    <router-link to="#">Games</router-link>
                  </li>
                  <li>
                    <router-link to="#">Bonuses</router-link>
                  </li>
                  <li>
                    <router-link to="#">Tournaments</router-link>
                  </li>
                  <li>
                    <a href="#" @click.prevent="showHelpPopup">Help center</a>
                  </li>
                  <li>
                    <router-link to="#">Blog</router-link>
                  </li>
                  <li>
                    <router-link to="#">Request a feature</router-link>
                  </li>
                </ul>
              </nav>

              <ul class="footer__coins">
                <li v-for="(coin, coinIndex) in coins" :key="coinIndex">
                  <div class="coin-card">
                    <div class="coin-card__img">
                      <img :src="coin.img" :alt="coin.title" />
                    </div>

                    <h3 class="coin-card__title">{{ coin.title }}</h3>
                  </div>
                </li>
              </ul>

              <div class="footer__copyright">
                copyright &copy; {{ new Date().getFullYear() }}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>

    <help-popup ref="helpPopup" />
  </div>
</template>

<script>
import Img1 from "@/assets/images/layout/coin-01.jpg";
import Img2 from "@/assets/images/layout/coin-02.jpg";
import Img3 from "@/assets/images/layout/coin-03.jpg";
import Img4 from "@/assets/images/layout/coin-04.jpg";
import Img5 from "@/assets/images/layout/coin-05.jpg";
import Img6 from "@/assets/images/layout/coin-06.jpg";
import Img7 from "@/assets/images/layout/coin-07.jpg";
import Img8 from "@/assets/images/layout/coin-08.jpg";
import Img9 from "@/assets/images/layout/coin-09.jpg";
import Img10 from "@/assets/images/layout/coin-10.jpg";
import Img11 from "@/assets/images/layout/coin-11.jpg";
import Img12 from "@/assets/images/layout/coin-12.jpg";
import Img13 from "@/assets/images/layout/coin-13.jpg";
import Img14 from "@/assets/images/layout/coin-14.jpg";
import Img15 from "@/assets/images/layout/coin-15.jpg";
import Img16 from "@/assets/images/layout/coin-16.jpg";

import { HelpPopup } from "@/components";

export default {
  name: "FooterLayout",
  components: {
    HelpPopup,
  },
  data() {
    return {
      coins: [
        {
          img: Img1,
          title: "Bitcoin",
        },
        {
          img: Img2,
          title: "BitcoinLightning",
        },
        {
          img: Img3,
          title: "Ethereum",
        },
        {
          img: Img4,
          title: "XRP",
        },
        {
          img: Img5,
          title: "USDCoin",
        },
        {
          img: Img6,
          title: "Dogecoin",
        },
        {
          img: Img7,
          title: "Litecoin",
        },
        {
          img: Img8,
          title: "Dash",
        },
        {
          img: Img9,
          title: "BinanceUSD",
        },
        {
          img: Img10,
          title: "DAI",
        },
        {
          img: Img11,
          title: "PancakeSwap",
        },
        {
          img: Img12,
          title: "SHIBA",
        },
        {
          img: Img13,
          title: "Sushi",
        },
        {
          img: Img14,
          title: "Uniswap",
        },
        {
          img: Img15,
          title: "Polygon",
        },
        {
          img: Img16,
          title: "TetherUSD",
        },
      ],
    };
  },
  methods: {
    showHelpPopup() {
      this.$refs.helpPopup.show();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.footer {
  width: 100%;
  background-color: #292830;

  @include respond-above(lg) {
    margin-left: rem(-$mar * 2);
    width: calc(100% + rem($mar * 2));
  }

  &__container {
    max-width: px(1340) !important;
  }

  &__wrap {
    padding: rem(72) 0 0;

    @include respond-below(md) {
      padding: rem(48) 0 0;
    }
  }

  &__nav {
    @include respond-below(xs) {
      display: none;
    }
  }

  &__menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: -0.5rem -2rem;
    margin-bottom: rem(48);

    @include respond-below(sm) {
      justify-content: flex-start;
    }

    > li {
      padding: 0.5rem 2rem;

      @include respond-below(sm) {
        flex: 1 0 50%;
      }

      > a {
        font-size: rem(13);
        font-weight: 600;
        text-transform: uppercase;
        transition: color $transition-duration-primary;

        @include respond-below(md) {
          font-size: rem(18);
        }

        @include hover {
          color: $color-primary;
        }
      }
    }
  }

  &__coins {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: rem(-16) rem(-20);
    margin-bottom: rem(32);

    @include respond-below(md) {
      margin: rem(-6) rem(-5);
      margin-bottom: rem(32);
    }

    > li {
      padding: rem(16) rem(20);

      @include respond-below(xs) {
        padding: rem(6) rem(5);
      }
    }
  }

  &__copyright {
    border-top: rem(1) solid rgba($color-white, 0.2);
    padding: rem(18) 0;
    font-size: rem(13);
    font-weight: 450;
    text-align: center;
    color: rgba($color-white, 0.5);
  }
}
</style>
