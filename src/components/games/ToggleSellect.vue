<template>
  <div
    class="toggle-select"
    @click="$emit('changeToggleValueStatus', !toggleValueStatus)"
  >
    <p v-if="toggleValueOne" :class="!toggleValueStatus ? 'active' : ''">
      {{ toggleValueOne }}
    </p>
    <span :class="toggleValueStatus ? 'active' : ''"></span>
    <p v-if="toggleValueTwo" :class="toggleValueStatus ? 'active' : ''">
      {{ toggleValueTwo }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    toggleValueOne: {
      type: [String, Number],
      default: "",
    },
    toggleValueTwo: {
      type: [String, Number],
      default: "",
    },
    toggleValueName: {
      type: String,
      default: "",
    },
    toggleValueStatus: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
