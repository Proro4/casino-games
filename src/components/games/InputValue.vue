<template>
  <div class="input-value">
    <span v-if="placeholder">
      {{ placeholder }}
    </span>
    <input
      type="text"
      v-model="inputValue"
      @blur="$emit('onBlurFunc')"
      @input="typeValue()"
      :readonly="onlyRead"
    />
    <div class="input-value__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    onlyNumber: {
      type: Boolean,
      default: false,
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
  watch:{
    value(e){
      this.inputValue = e;
    }
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
