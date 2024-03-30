<template>
  <div class="header-user-quick">
    <button class="header-user-quick__btn" @click="isActive = !isActive">
      <img src="@/assets/images/layout/header-user.jpg" alt="" />
    </button>

    <header-popup
      :sm="showAccount"
      :is-active="isActive"
      @toggle="onPopupToggle"
    >
      <template v-if="showProfile">
        <h3 class="header-user-quick-popup__title">Profile</h3>

        <ul class="header-user-quick-popup__metas mb-2">
          <li>
            <img src="@/assets/images/icons/smile.svg" alt="" />

            my status
          </li>

          <li>
            <img src="@/assets/images/icons/heart.svg" alt="" />
            <span class="text-yellow">125</span> likes
          </li>
        </ul>

        <div class="uq-info mb-3">
          <div class="uq-info__img">
            <img src="@/assets/images/layout/header-user.jpg" alt="" />
          </div>

          <div class="uq-info__text">
            <h3 class="uq-info__title">Cyberunk slot game</h3>

            <ul class="uq-info__games">
              <li>
                <a href="#" class="menu-game">
                  <img
                    src="@/assets/images/layout/menu-game-01.png"
                    alt=""
                    class="menu-game__img"
                  />

                  <h3 class="menu-game__title">Roulett</h3>
                </a>
              </li>

              <li>
                <a href="#" class="menu-game">
                  <img
                    src="@/assets/images/layout/menu-game-01.png"
                    alt=""
                    class="menu-game__img"
                  />

                  <h3 class="menu-game__title">Roulett</h3>
                </a>
              </li>

              <li>
                <a href="#" class="menu-game">
                  <img
                    src="@/assets/images/layout/menu-game-01.png"
                    alt=""
                    class="menu-game__img"
                  />

                  <h3 class="menu-game__title">Roulett</h3>
                </a>
              </li>

              <li>
                <a href="#" class="menu-game">
                  <img
                    src="@/assets/images/layout/menu-game-01.png"
                    alt=""
                    class="menu-game__img"
                  />

                  <h3 class="menu-game__title">Roulett</h3>
                </a>
              </li>

              <li>
                <a href="#" class="menu-game">
                  <img
                    src="@/assets/images/layout/menu-game-01.png"
                    alt=""
                    class="menu-game__img"
                  />

                  <h3 class="menu-game__title">Roulett</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="uq-medals-card mb-2">
          <div class="uq-medals-card__header">
            <h3 class="uq-medals-card__title">Medals</h3>

            <button class="uq-medals-card__btn">Details</button>
          </div>

          <div class="uq-medals-card__body">
            <div class="swiper-wrap">
              <div ref="slider" id="swiper-uq-medals" class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="uq-medal">
                      <img
                        src="@/assets/images/medals-popup/medal-01.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="uq-medal">
                      <img
                        src="@/assets/images/medals-popup/medal-01.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="uq-medal">
                      <img
                        src="@/assets/images/medals-popup/medal-01.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="uq-medal">
                      <img
                        src="@/assets/images/medals-popup/medal-01.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="uq-medal">
                      <img
                        src="@/assets/images/medals-popup/medal-01.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="uq-medal">
                      <img
                        src="@/assets/images/medals-popup/medal-01.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="uq-medal">
                      <img
                        src="@/assets/images/medals-popup/medal-01.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="uq-medal">
                      <img
                        src="@/assets/images/medals-popup/medal-01.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="uq-medal">
                      <img
                        src="@/assets/images/medals-popup/medal-01.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>

        <div class="row mb-1">
          <div class="col-md-4 mb-1" v-for="stat in stats" :key="stat.id">
            <div class="uq-stats-card">
              <div class="uq-stats-card__label">{{ stat.label }}</div>

              <div class="uq-stats-card__value">{{ stat.value }}</div>
            </div>
          </div>
        </div>

        <div class="uq-card mb-2">
          <h3 class="uq-card__title">Top 3 Favorite Games</h3>

          <div class="uq-card__body">
            <p>This user has not favourite games.</p>
          </div>
        </div>

        <div class="uq-card mb-3">
          <h3 class="uq-card__title">Contest Win History</h3>

          <div class="uq-card__body">
            <p>This user has not won any wagering contests.</p>
          </div>
        </div>

        <v-tabs>
          <v-tab title="All">
            <table class="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>BEt</th>
                  <th>Payot’ lost</th>
                  <th>Game</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <span class="text-uppercase">6 days ago</span>
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <div class="table-img">
                      <img src="@/assets/images/layout/table-img.png" alt="" />
                    </div>
                  </td>
                </tr>

                <tr class="tr-empty"></tr>

                <tr>
                  <td>
                    <span class="text-uppercase">6 days ago</span>
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <div class="table-img">
                      <img src="@/assets/images/layout/table-img.png" alt="" />
                    </div>
                  </td>
                </tr>

                <tr class="tr-empty"></tr>

                <tr>
                  <td>
                    <span class="text-uppercase">6 days ago</span>
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <div class="table-img">
                      <img src="@/assets/images/layout/table-img.png" alt="" />
                    </div>
                  </td>
                </tr>

                <tr class="tr-empty"></tr>

                <tr>
                  <td>
                    <span class="text-uppercase">6 days ago</span>
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <div class="table-img">
                      <img src="@/assets/images/layout/table-img.png" alt="" />
                    </div>
                  </td>
                </tr>

                <tr class="tr-empty"></tr>

                <tr>
                  <td>
                    <span class="text-uppercase">6 days ago</span>
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <div class="table-img">
                      <img src="@/assets/images/layout/table-img.png" alt="" />
                    </div>
                  </td>
                </tr>

                <tr class="tr-empty"></tr>

                <tr>
                  <td>
                    <span class="text-uppercase">6 days ago</span>
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <coin-view :value="10" :show-img="true" />
                  </td>
                  <td>
                    <div class="table-img">
                      <img src="@/assets/images/layout/table-img.png" alt="" />
                    </div>
                  </td>
                </tr>

                <tr class="tr-empty"></tr>
              </tbody>
            </table>
          </v-tab>

          <v-tab title="bg wins">BG WINS Tab</v-tab>

          <v-tab title="Lucky wins">Lucky wins Tab</v-tab>
        </v-tabs>
      </template>

      <template v-else-if="showSettings">
        <h3 class="header-user-quick-popup__title">Settings</h3>

        <div class="mb-4">
          <h4 class="header-user-quick-popup__subtitle mb-3">Email</h4>

          <label for="profileEmail" class="form-label mb-1">Change Email</label>

          <div class="input mb-3">
            <input
              type="email"
              id="profileEmail"
              name="profileEmail"
              placeholder="Email Adress"
            />
          </div>

          <button type="submit" class="btn w-100">Save</button>
        </div>

        <div
          class="d-flex align-items-center justify-content-between gap-2 mb-4"
        >
          <label for="profileIsPrivate" class="form-label">Stay private?</label>

          <div class="d-flex align-items-center gap-2">
            <label for="profileIsPrivate" class="form-label">OFF</label>

            <label class="switch">
              <input type="checkbox" id="profileIsPrivate" checked />
              <span class="switch__slider"></span>
            </label>

            <label for="profileIsPrivate" class="form-label">ON</label>
          </div>
        </div>

        <!-- AVATAR -->
        <div class="mb-4">
          <h4 class="header-user-quick-popup__subtitle mb-3">AVATAR</h4>

          <div class="text-center">
            <file-input />
          </div>
        </div>

        <!-- Active Sessions -->
        <div class="mb-4">
          <h4 class="header-user-quick-popup__subtitle mb-3">
            Active Sessions
          </h4>

          <table class="table table--sm">
            <thead>
              <tr>
                <th>Browser</th>
                <th>Country</th>
                <th>IP Address</th>
                <th>Last Used</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Windows 10 (Chrome 110)</td>
                <td>UA</td>
                <td>188.163.26.9</td>
                <td>Online</td>
                <td>
                  <button class="action-btn">Active</button>
                </td>
              </tr>

              <tr class="tr-empty"></tr>

              <tr>
                <td>Windows 10 (Chrome 110)</td>
                <td>UA</td>
                <td>188.163.26.9</td>
                <td>Online</td>
                <td>
                  <button class="action-btn action-btn--danger">Logout</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Change Password -->
        <div class="mb-4">
          <h4 class="header-user-quick-popup__subtitle mb-3">
            Change Password
          </h4>

          <div class="input input--toggle mb-1">
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              placeholder="Current password"
            />

            <button class="input__toggle"></button>
          </div>

          <div class="input input--toggle mb-1">
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="New password"
            />

            <button class="input__toggle"></button>
          </div>

          <div class="input input--toggle mb-3">
            <input
              type="password"
              id="repeatNewPassword"
              name="repeatNewPassword"
              placeholder="Repeat new password"
            />

            <button class="input__toggle"></button>
          </div>

          <button class="btn w-100">Save</button>
        </div>

        <!-- TWO FACTOR AUTHENTICATION -->
        <div>
          <h4 class="header-user-quick-popup__subtitle mb-3">
            TWO FACTOR AUTHENTICATION
          </h4>

          <alert-message class="mb-3">
            Two-factor Authentication is not enabled on your account. For
            greater security, please consider enabling 2FA on your account.
          </alert-message>

          <div class="d-flex align-items-center gap-4 mb-3">
            <div class="qr-code qr-code--sm">
              <img src="@/assets/images/wallet-qr-code.png" alt="" />
            </div>

            <div>
              <label for="qrCode" class="form-label mb-1">
                Scan the QR Code and enter the code provided by Authenticator
                below:
              </label>

              <div class="input">
                <input
                  type="text"
                  id="qrCode"
                  name="qrCode"
                  placeholder="Code"
                />
              </div>
            </div>
          </div>

          <div class="input input--copy mb-3">
            <input
              type="text"
              value="LOAIFJD66YLNS7CH"
              placeholder="LOAIFJD66YLNS7CH"
              disabled
            />

            <button class="input__btn"></button>
          </div>

          <button class="btn w-100">enable 2fa</button>
        </div>
      </template>

      <template v-else>
        <h3 class="header-user-quick-popup__title">Account</h3>

        <progress-bar :value="50" class="mb-2" />

        <nav class="header-user-quick-popup__nav mb-3">
          <ul class="header-user-quick-popup__menu">
            <li>
              <a href="#" class="icon-user">Profile</a>
            </li>
            <li>
              <a href="#" class="icon-settings">Setting</a>
            </li>
            <li>
              <a href="#" class="icon-tip">Tip</a>
            </li>
            <li>
              <a href="#" class="icon-briefcase">Inventory</a>
            </li>
            <li>
              <a href="#" class="icon-lightning">Feyrra utilites</a>
            </li>
            <li>
              <a href="#" class="icon-rewards">Referral rewards</a>
            </li>
            <li>
              <a href="#" class="icon-logout">Logout</a>
            </li>
          </ul>
        </nav>

        <div style="margin-left: 0.125rem">
          <report-card />
        </div>
      </template>
    </header-popup>
  </div>
</template>

<script>
import Swiper, { Grid } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
Swiper.use[Grid];

import { CoinView, ReportCard } from "@/components";
import HeaderPopup from "./header-popup.vue";

export default {
  name: "HeaderUserQuick",
  components: {
    CoinView,
    HeaderPopup,
    ReportCard,
  },
  data() {
    return {
      isActive: false,
      stats: [
        {
          id: "0",
          label: "Medals",
          value: "$0.00",
        },
        {
          id: "1",
          label: "WAGERED",
          value: "$0.00",
        },
        {
          id: "2",
          label: "PROFIT (ATH)",
          value: "$0.00",
        },
        {
          id: "3",
          label: "PROFIT (ATL)",
          value: "$0.00",
        },
        {
          id: "4",
          label: "BETS",
          value: "0",
        },
        {
          id: "5",
          label: "LEVEL",
          value: "0",
        },
      ],
      showProfile: false,
      showSettings: false,
      showAccount: true,
    };
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      speed: 800,
      spaceBetween: 8,
      slidesPerView: "auto",
    });
  },
  methods: {
    onPopupToggle(value) {
      this.isActive = value;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.header-user-quick {
  &__btn {
    position: relative;
    border: 0.125rem solid #feeb3c;
    border-radius: 50%;
    width: rem(45);
    height: rem(45);
    padding: rem(4);
    background-color: #3a3847;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      width: rem(21);
      height: rem(21);
      background: url("@/assets/images/layout/slot-game-media-img-decor.svg")
        no-repeat center / contain;
      transform: translate(30%, 20%);
    }

    img {
      border-radius: inherit;
    }
  }

  &__title {
    margin-bottom: rem(24);
    font-size: rem(24);
    text-transform: uppercase;
  }

  &__subtitle {
    font-family: $font-family-primary;
    font-size: rem(21);
    font-weight: 700;
    text-transform: uppercase;
    color: rgba($color-white, 0.5);
  }
}
</style>
