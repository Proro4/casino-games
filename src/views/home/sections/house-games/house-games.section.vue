<template>
  <section class="section-games">
    <div class="section-games__container">
      <div class="section-games__wrap">
        <div class="section-games__header">
          <h2 class="section-games__title section-title">House Games</h2>
        </div>

        <div class="section-games__body">
          <div class="swiper" ref="slider">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(gameCard, gameCardIndex) in houseGames"
                :key="gameCardIndex"
              >
                <v-game-card :game="gameCard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper, { Grid } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/grid";
Swiper.use[Grid];

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

import GameCard from "./components/house-game-card.vue";

export default {
  name: "HomeHouseGamesSection",
  components: {
    VGameCard: GameCard,
  },
  data() {
    return {
      houseGames: [
        {
          id: 2,
          img: img02,
          title: "mines",
          variant: "teal",
          link:'/mines',
        },
        {
          id: 3,
          img: img03,
          title: "roulette",
          variant: "purple",
          link:'/roulette',
        },
        {
          id: 4,
          img: img04,
          title: "diamonds",
          variant: "teal",
          link:'/diamonds',
        },
        {
          id: 6,
          img: img06,
          title: "keno",
          variant: "purple",
          link:'/keno',
        },
        {
          id: 8,
          img: img08,
          title: "crash",
          variant: "teal",
          link:'/crash',
        },
        {
          id: 9,
          img: img09,
          title: "dice",
          variant: "purple",
          link:'/dice',
        },
        {
          id: 10,
          img: img10,
          title: "limbo",
          variant: "teal",
          link:'/limbo',
        },
        {
          id: 11,
          img: img11,
          title: "towers",
          variant: "purple",
          link:'/towers',
        },
      ],
    };
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      speed: 800,
      slidesPerView: 2,
      spaceBetween: 20,
      breakpoints: {
        480: {
          slidesPerView: 2.5,
        },
        760: {
          slidesPerView: 4.5,
        },
        980: {
          slidesPerView: 5,
        },
        1280: {
          spaceBetween: 30,
          slidesPerView: 6,
        },
      },
    });
  },
};
</script>
