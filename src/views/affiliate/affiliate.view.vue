<template>
  <div>
    <banner-card-section />

    <section class="section">
      <div class="section__container container">
        <div class="section__wrap pt-3">
          <div class="row">
            <div class="col-md-8 mb-4">
              <first-step-section />
            </div>

            <div class="col-md-12 mb-4">
              <second-step-section />
            </div>

            <div class="col-md-6 mb-4">
              <third-step-section />
            </div>

            <div class="col-md-6 mb-4">
              <fourth-step-section />
            </div>

            <div class="col-md-6 mb-4">
              <total-step-section />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BannerCardSection from "./sections/banner-card.vue";
import FirstStepSection from "./sections/first-step.vue";
import SecondStepSection from "./sections/second-step.vue";
import ThirdStepSection from "./sections/third-step.vue";
import FourthStepSection from "./sections/fourth-step.vue";
import TotalStepSection from "./sections/total-step.vue";

export default {
  name: "AffiliatePage",
  components: {
    BannerCardSection,
    FirstStepSection,
    SecondStepSection,
    ThirdStepSection,
    FourthStepSection,
    TotalStepSection,
  },
};
</script>
