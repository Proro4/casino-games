<template>
  <div>
    <v-hero />

    <v-cards-section />

    <v-table-section />
  </div>
</template>

<script>
import { Hero, TableSection, Cards } from "./sections";

export default {
  name: "BonusesView",
  components: {
    VHero: Hero,
    VTableSection: TableSection,
    VCardsSection: Cards,
  },
};
</script>
