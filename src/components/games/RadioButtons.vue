<template>
  <div class="radio-button">
    <template v-for="(item, index) in list">
      <div
        class="radio-button__item"
        :key="index + radioIndex"
        v-if="item"
        @click="$emit('changeRadio', item.id)"
      >
        <span
          class="radio-button__button"
          :class="activeRadio === item.id ? 'active' : ''"
        />
        <p className="radio-button__text">{{ item.value }}</p>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
    },
    activeRadio: {
      type: Number,
      default: 0,
    },
    radioIndex: {
      type: [Number, String],
      default: "0",
    },
  },
};
</script>
