<template>
  <div class="flow-card">
    <div class="flow-card__header flow-card-header">
      <div class="flow-card-header__row">
        <div class="flow-card-header__num">2</div>

        <div class="flow-card-header__text">
          <h3 class="flow-card-header__title">Earn rewards</h3>

          <div class="flow-card-header__body">
            <p>Earn rewards when your invited users play</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flow-card__body">
      <div class="row">
        <div
          class="col-xs-6 col-md-4 col-lg-2 mb-3"
          v-for="(gameCard, gameCardIndex) in houseGames"
          :key="gameCardIndex"
        >
          <v-game-card :game="gameCard" sm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img01 from "@/assets/images/home/house-game-01.jpg";
import img02 from "@/assets/images/home/house-game-02.jpg";
import img03 from "@/assets/images/home/house-game-03.jpg";
import img04 from "@/assets/images/home/house-game-04.jpg";
import img05 from "@/assets/images/home/house-game-05.jpg";
import img06 from "@/assets/images/home/house-game-06.jpg";
import img07 from "@/assets/images/home/house-game-07.jpg";
import img08 from "@/assets/images/home/house-game-08.jpg";
import img09 from "@/assets/images/home/house-game-09.jpg";
import img10 from "@/assets/images/home/house-game-10.jpg";
import img11 from "@/assets/images/home/house-game-11.jpg";
import img12 from "@/assets/images/home/house-game-12.jpg";

import { GameCard } from "@/components";

export default {
  name: "SecondStepSection",
  components: {
    VGameCard: GameCard,
  },
  data() {
    return {
      houseGames: [
        {
          id: 1,
          img: img01,
          title: "video poker",
          variant: "teal",
        },
        {
          id: 2,
          img: img02,
          title: "mines",
          variant: "teal",
        },
        {
          id: 3,
          img: img03,
          title: "roulett",
          variant: "purple",
        },
        {
          id: 4,
          img: img04,
          title: "diamonds",
          variant: "teal",
        },
        {
          id: 5,
          img: img05,
          title: "plinko",
          variant: "purple",
        },
        {
          id: 6,
          img: img06,
          title: "keno",
          variant: "purple",
        },
        {
          id: 7,
          img: img07,
          title: "fortune quest",
          variant: "purple",
        },
        {
          id: 8,
          img: img08,
          title: "crash",
          variant: "teal",
        },
        {
          id: 9,
          img: img09,
          title: "dice",
          variant: "purple",
        },
        {
          id: 10,
          img: img10,
          title: "limbo",
          variant: "teal",
        },
        {
          id: 11,
          img: img11,
          title: "towers",
          variant: "purple",
        },
        {
          id: 12,
          img: img12,
          title: "black jack",
          variant: "teal",
        },
      ],
    };
  },
};
</script>
