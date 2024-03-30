<template>
  <div
    class="game-button"
    :class="disable && 'disable'"
    @click="$emit('onClick')"
  >
    <p>{{ text }}</p>
    <span>{{ span }}</span>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    span: {
      type: String,
      default: "",
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
