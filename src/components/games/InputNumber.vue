<template>
  <div class="input-number">
    <span v-if="placeholder">
      {{ placeholder }}
    </span>
    <span
      class="input-number__minus"
      @click="() => $emit('reduceNumber')"
      :class="value <= 1 && 'block'"
    ></span>
    <span
      class="input-number__plus"
      @click="() => $emit('increaseNumber')"
      :class="value >= 24 && 'block'"
    ></span>
    <input
      type="text"
      v-model="inputValue"
      @blur="$emit('onBlurFunc')"
      @input="typeValue()"
      :readonly="true"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1,
    },
    placeholder: {
      type: String,
      default: "",
    },
    onlyRead: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    value(e) {
      this.inputValue = e;
    },
  },
  created() {
    this.inputValue = this.value;
  },
  methods: {
    typeValue() {
      if (
        this.onlyNumber &&
        this.inputValue &&
        !/[0-9.]/.test(this.inputValue)
      ) {
        return false;
      } else {
        this.$emit("changeValue", this.inputValue);
      }
    },
  },
};
</script>
