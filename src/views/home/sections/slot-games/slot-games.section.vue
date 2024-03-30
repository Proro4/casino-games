<template>
  <section class="section-slots">
    <div class="section-slots__container">
      <div class="section-slots__wrap">
        <div class="section-slots__row">
          <div class="section-slots__col">
            <div class="section-slots__header">
              <h2 class="section-slots__title">Popular slot games</h2>
            </div>

            <div class="section-slots__body">
              <ul>
                <li
                  v-for="(popularGame, popularGameIndex) in popularGames"
                  :key="popularGameIndex"
                  class="mb-2"
                >
                  <v-slot-card
                    :game="popularGame"
                    :is-active="popularGameIndex === 0"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div class="section-slots__col">
            <div class="section-slots__header">
              <h2 class="section-slots__title">Top rising</h2>
            </div>

            <div class="section-slots__body">
              <ul>
                <li
                  v-for="(risingGame, risingGameIndex) in risingGames"
                  :key="risingGameIndex"
                  class="mb-2"
                >
                  <v-slot-card :game="risingGame" />
                </li>
              </ul>
            </div>
          </div>

          <div class="section-slots__col">
            <div class="section-slots__header">
              <h2 class="section-slots__title">Highroller stars</h2>
            </div>

            <div class="section-slots__body">
              <ul>
                <li
                  v-for="(game, gameIndex) in starsGames"
                  :key="gameIndex"
                  class="mb-2"
                >
                  <v-slot-card :game="game" size="sm" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SlotCard from "./components/slot-game.vue";

export default {
  name: "HomeSlotGamesSection",
  components: {
    VSlotCard: SlotCard,
  },
  data() {
    return {
      popularGames: [
        {
          imgSrc: "@/assets/images/home/slot-game-01.png",
          coinsValue: "42,004562341",
          coinsCount: "x47,04",
          title: "Cyberunk slot game",
          rtt: "99%RTT",
          hiddenTitle: "hidden",
        },
        {
          imgSrc: "@/assets/images/home/slot-game-01.png",
          coinsValue: "39,234",
          coinsCount: "x22,01",
          title: "Space Adventures",
          rtt: "95%RTT",
          hiddenTitle: "hidden",
        },
      ],
      risingGames: [
        {
          imgSrc: "@/assets/images/home/slot-game-01.png",
          coinsValue: "42,004562341",
          coinsCount: "x47,04",
          title: "Cyberunk slot game",
          rtt: "99%RTT",
          hiddenTitle: "hidden",
        },
        {
          imgSrc: "@/assets/images/home/slot-game-01.png",
          coinsValue: "39,234",
          coinsCount: "x22,01",
          title: "Space Adventures",
          rtt: "95%RTT",
          hiddenTitle: "hidden",
        },
      ],
      starsGames: [
        {
          order: 1,
          imgSrc: "@/assets/images/home/slot-game-01.png",
          coinsValue: "42,004562341",
          coinsCount: "x47,04",
          title: "Cyberunk slot game",
          rtt: "99%RTT",
          hiddenTitle: "hidden",
        },
        {
          order: 2,
          imgSrc: "@/assets/images/home/slot-game-01.png",
          coinsValue: "39,234",
          coinsCount: "x22,01",
          title: "Space Adventures",
          rtt: "95%RTT",
          hiddenTitle: "hidden",
        },
        {
          order: 3,
          imgSrc: "@/assets/images/home/slot-game-01.png",
          coinsValue: "39,234",
          coinsCount: "x22,01",
          title: "Space Adventures",
          rtt: "95%RTT",
          hiddenTitle: "hidden",
        },
      ],
    };
  },
};
</script>
