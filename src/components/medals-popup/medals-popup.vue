<template>
  <v-modal
    size="lg"
    :visible="modalVisible"
    @update:visible="modalVisible = $event"
  >
    <transition name="slide-right" mode="out-in">
      <div v-if="!selectedMedal" key="01">
        <h4 class="mb-3">Medals</h4>

        <progress-bar-sectors :progress="20" class="mb-4" />

        <div class="row mb-3">
          <div class="col-md-6">5 Medals = 20 USDT</div>

          <div class="col-md-6">10 Medals = 1000 USDT</div>

          <div class="col-md-6">15 Medals = 2500 USDT</div>

          <div class="col-md-6">20 Medals = 10000 USDT</div>
        </div>

        <div style="max-height: 60vh" class="scroll-container">
          <div class="row">
            <div class="col-md-6 mb-3" v-for="medal in medals" :key="medal.id">
              <medal-card
                :medal="medal"
                class="clickable"
                @click.native="selectMedal(medal)"
              />
            </div>
          </div>
        </div>
      </div>

      <div v-else key="02">
        <h4 class="clickable mb-3" @click="unselectMedal">
          <i class="icon-chevron-left"></i>
          Medals Details
        </h4>

        <medal-card :medal="selectedMedal" size="lg" />
      </div>
    </transition>
  </v-modal>
</template>

<script>
import MedalCard from "./components/medal-card.vue";

import Medal01Img from "@/assets/images/medals-popup/medal-01.png";
import Medal02Img from "@/assets/images/medals-popup/medal-02.png";
import Medal03Img from "@/assets/images/medals-popup/medal-03.png";
import Medal04Img from "@/assets/images/medals-popup/medal-04.png";

export default {
  name: "RainPopup",
  components: {
    MedalCard,
  },
  data() {
    return {
      modalVisible: false,
      selectedMedal: null,
      medals: [
        {
          id: "0",
          img: Medal01Img,
          title: "Social Butterfly",
          body: "Send 10 or more messages every day for 8 weeks!",
          num: 123,
        },
        {
          id: "1",
          img: Medal02Img,
          title: "Fearless and Reckless",
          body: "Have the highest loss for the month!",
          num: 18,
        },
        {
          id: "2",
          img: Medal03Img,
          title: "Robin Hood",
          body: "Rain 10 or more times every day for 6 weeks!",
          num: 43,
        },
        {
          id: "3",
          img: Medal04Img,
          title: "Rain Harvester",
          body: "Collect a total of 600 rains!",
          num: 168,
        },
        {
          id: "4",
          img: Medal01Img,
          title: "Social Butterfly",
          body: "Send 10 or more messages every day for 8 weeks!",
          num: 123,
        },
        {
          id: "5",
          img: Medal02Img,
          title: "Fearless and Reckless",
          body: "Have the highest loss for the month!",
          num: 18,
        },
      ],
    };
  },
  methods: {
    show() {
      this.modalVisible = true;
    },
    hide() {
      this.modalVisible = false;
    },
    selectMedal(medal) {
      this.selectedMedal = medal;
    },
    unselectMedal() {
      this.selectedMedal = null;
    },
  },
};
</script>
