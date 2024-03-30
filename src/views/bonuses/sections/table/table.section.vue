<template>
  <section class="section">
    <div class="section__container">
      <div class="section__wrap">
        <table class="table pc-only">
          <thead>
            <tr>
              <th>Player</th>
              <th>Bet</th>
              <th>Payout</th>
              <th>multiplayer</th>
              <th>Game</th>
            </tr>
          </thead>

          <tbody>
            <template v-for="(item, index) in items" :key="`table-row-01-${item.id + index}`">
              <tr>
                <td>
                  <div class="table-game">
                    <div class="table-game__img">
                      <img src="@/assets/images/layout/table-game.jpg" alt="" />
                    </div>

                    <div class="table-game__text">
                      <h3 class="table-game__name">
                        {{ item.title }}
                      </h3>

                      <div class="table-game__type">
                        {{ item.type }}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <coin-view :value="+item.bet" />
                </td>

                <td>
                  <coin-view :value="+item.payout" />
                </td>

                <td>
                  <span
                    :class="[
                      item.multiplayer > 0 ? 'text-success' : 'text-danger',
                    ]"
                  >
                    x{{ item.multiplayer }}
                  </span>
                </td>

                <td>
                  <div class="table-img">
                    <img src="@/assets/images/layout/table-img.png" alt="" />
                  </div>
                </td>
              </tr>

              <tr
                class="tr-empty"
              ></tr>
            </template>
          </tbody>
        </table>

        <table class="table mobile-only">
          <thead class="sr-only">
            <tr>
              <th>Player</th>
              <th>Bet / Payout</th>
              <th>Coins</th>
            </tr>
          </thead>

          <tbody>
            <template v-for="(item, index) in items" :key="`table-row-02-${item.id + index}`">
              <tr>
                <td>
                  <div class="table-game">
                    <div class="table-game__text">
                      <div class="table-game__dice">Dice</div>

                      <h3 class="table-game__name">
                        {{ item.title }}
                      </h3>

                      <div class="table-game__type">
                        {{ item.type }}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div>BET</div>
                  <div>
                    PAYOUT <multiplayer-view :value="item.multiplayer" />
                  </div>
                </td>

                <td>
                  <div>
                    <coin-view
                      :value="+item.bet"
                      :show-img="true"
                      variant="success"
                    />
                  </div>

                  <coin-view
                    :value="+item.payout"
                    :show-img="false"
                    variant="danger"
                  />
                </td>
              </tr>

              <tr
                class="tr-empty"
              ></tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { CoinView, MultiplayerView } from "@/components";
export default {
  name: "BonusesTableSection",
  components: {
    CoinView,
    MultiplayerView,
  },
  data() {
    return {
      activeTab: 0,
      items: [
        {
          img: "path/to/image1.jpg",
          title: "WildPapa441",
          id: 1,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 1",
        },
        {
          img: "path/to/image2.jpg",
          title: "WildPapa442",
          id: 2,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 2",
        },
        {
          img: "path/to/image1.jpg",
          title: "WildPapa441",
          id: 3,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 1",
        },
        {
          img: "path/to/image2.jpg",
          title: "WildPapa442",
          id: 4,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 2",
        },
        {
          img: "path/to/image1.jpg",
          title: "WildPapa441",
          id: 5,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 1",
        },
        {
          img: "path/to/image2.jpg",
          title: "WildPapa442",
          id: 6,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 2",
        },
        {
          img: "path/to/image1.jpg",
          title: "WildPapa441",
          id: 7,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 1",
        },
        {
          img: "path/to/image2.jpg",
          title: "WildPapa442",
          id: 8,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 2",
        },
        {
          img: "path/to/image1.jpg",
          title: "WildPapa441",
          id: 9,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 1",
        },
        {
          img: "path/to/image2.jpg",
          title: "WildPapa442",
          id: 10,
          type: "Advenrurer - LV3",
          bet: "0.00000500",
          payout: "0.00000500",
          multiplayer: "0.00000500",
          game: "Game 2",
        },
      ],
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
