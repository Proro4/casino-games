<template>
  <div class="notification-card">
    <div class="notification-card__body">
      {{ notification.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNotificationCard",
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.notification-card {
  border: rem(2) solid #3a3f50;
  border-radius: rem(6);
  padding: rem(20);
  background-color: #282634;

  &__body {
    font-size: rem(20);
    font-weight: 600;
  }
}
</style>
