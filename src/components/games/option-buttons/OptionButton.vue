<template>
  <div
    class="option-button"
    :class="size ? size : ''"
    @click="$emit('clickEvent')"
  >
    <div class="option-button__bck" />
    <div class="option-button__shadow" />
    <div class="option-button__icon">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "",
    },
  },
};
</script>
