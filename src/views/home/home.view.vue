<template>
  <div>
    <v-hero />

    <v-house-games />

    <v-slot-games /> 

    <v-tournaments />

    <v-table-section />

    <!-- Popups -->
    <section class="section">
      <div class="section__container container">
        <div class="section__wrap">
          <button class="btn" @click="showMedalsPopup">
            Show Medals Popup
          </button>
        </div>
      </div>
    </section>

    <medals-popup ref="medalsPopup" />

    <free-spin-popup ref="freeSpinPopup" />
  </div>
</template>

<script>
import {
  Hero,
  HouseGames,
  SlotGames,
  Tournaments,
  TableSection,
} from "./sections";

import { MedalsPopup, FreeSpinPopup } from "@/components";

export default {
  name: "HomeView",
  components: {
    VHero: Hero,
    VHouseGames: HouseGames,
    VSlotGames: SlotGames,
    VTournaments: Tournaments,
    VTableSection: TableSection,
    MedalsPopup,
    FreeSpinPopup,
  },
  methods: {
    showMedalsPopup() {
      this.$refs.medalsPopup.show();
    },
    showFreeSpinPopup() {
      this.$refs.freeSpinPopup.show();
    },
  },
};
</script>
