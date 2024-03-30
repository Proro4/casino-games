<template>
  <div class="report-card">
    <div class="report-card__header">
      <div class="report-card__img">
        <img src="@/assets/images/layout/menu-report-card.png" alt="" />
      </div>

      <h3 class="report-card__title">REPORT A BUG</h3>
    </div>

    <div class="report-card__body">
      <p>Up to <strong>$10,000 </strong> affiliate program</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarReportCard",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.report-card {
  position: relative;
  z-index: initial;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem 0.5rem;
  background-color: #343241;

  &::before {
    content: "";
    position: absolute;
    z-index: 20;
    right: -0.125rem;
    top: -0.125rem;
    width: rem(37);
    height: rem(22);
    background: url("@/assets/images/layout/report-card-decor.svg") no-repeat
      top right / 100% 100%;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(
      101.09deg,
      $color-yellow 45.46%,
      $color-orange 107.76%
    );
    inset: -0.125rem;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
    gap: rem(6);
  }

  &__img {
    flex: 0 0 rem(32);
    border: rem(0.65) solid #363646;
    border-radius: rem(5);
    width: rem(32);
    height: rem(32);
    background-color: #292830;
  }

  &__title {
    font-family: $font-family-primary;
    font-size: rem(10);
    font-weight: 750;
    color: rgba($color-white, 0.4);
  }

  &__body {
    font-size: rem(12);

    strong {
      color: $color-primary;
    }
  }
}
</style>
