<template>
  <div class="button-select">
    <template v-for="(item, index) in buttonList">
      <div
        class="button-select__item"
        :class="activeButtonList.includes(item.id) ? 'active' : ''"
        v-if="item"
        :key="index"
        @click="$emit('changeButtonSelect', item.id)"
      >
        {{ item.value }}
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    buttonList: {
      type: Array,
    },
    activeButtonList: {
      type: Array,
    },
  },
};
</script>
