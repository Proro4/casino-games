<template>
  <div class="alert-message">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AlertMessage",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.alert-message {
  border-radius: rem(8);
  padding: rem(16) rem(16) rem(16) rem(56);
  background: #424253 url("@/assets/images/icons/info-circle.svg") no-repeat
    left rem(16) top rem(18) / rem(22) rem(22);
  font-size: rem(13);
  font-weight: 450;
  line-height: 1.355;
}
</style>
