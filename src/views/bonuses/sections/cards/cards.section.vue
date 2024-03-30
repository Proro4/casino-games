<template>
  <section class="section">
    <div class="section__container container">
      <div class="section__wrap">
        <div class="row">
          <div class="col-md-6 mb-5">
            <refund-card />
          </div>

          <div class="col-md-6 mb-5">
            <usot-card />
          </div>

          <div class="col-md-4 mb-5">
            <bonus-code-card />
          </div>

          <div class="col-md-4 mb-5">
            <medals-card />
          </div>

          <div class="col-md-4 mb-5">
            <rewards-card />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RefundCard from "./components/refund-card.vue";
import UsotCard from "./components/usot-card.vue";
import MedalsCard from "./components/medals-card.vue";
import RewardsCard from "./components/rewards-card.vue";
import BonusCodeCard from "./components/bonus-card-card.vue";

export default {
  name: "CardsSection",
  components: {
    RefundCard,
    UsotCard,
    MedalsCard,
    RewardsCard,
    BonusCodeCard,
  },
};
</script>
