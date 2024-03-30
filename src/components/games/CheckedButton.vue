<template>
  <div class="checked-button">
    <div
      class="checked-button__item"
      @click="$emit('changeChecked', !activeChecked)"
    >
      <span
        class="checked-button__button"
        :class="activeChecked ? 'active' : ''"
      />
      <p class="checked-button__text">{{ value }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: "",
    },
    activeChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
