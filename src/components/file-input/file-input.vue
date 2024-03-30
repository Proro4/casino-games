<template>
  <div class="custom-file-input">
    <input type="file" @change="handleFileChange" ref="fileInput" />

    <button class="custom-file-input__btn" @click="openFileInput">
      Upload Image
    </button>

    <span v-if="selectedFile">{{ selectedFile.name }}</span>
  </div>
</template>

<script>
export default {
  name: "FileInput",
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        this.selectedFile = file;
        this.$emit("file-selected", file);
      }
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.custom-file-input {
  position: relative;
  display: inline-block;

  &__btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: rem(1) dashed $color-white;
    border-radius: rem(8);
    width: rem(164);
    height: rem(164);
    background-color: rgba(#292830, 0.7);
    font-size: rem(14);
    font-weight: 600;
    text-transform: uppercase;
    color: $color-white;
    cursor: pointer;

    &::before {
      content: "";
      display: inline-block;
      margin-bottom: rem(12);
      width: rem(80);
      height: rem(80);
      background: url("@/assets/images/icons/upload-arrow.svg") no-repeat center /
        80%;
    }
  }

  input[type="file"] {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    z-index: -5;
    opacity: 0;
  }
}
</style>
