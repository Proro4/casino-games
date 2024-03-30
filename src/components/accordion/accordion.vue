<template>
  <ul class="accordion">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="accordion__item mb-1"
    >
      <button
        class="accordion__btn"
        :class="{
          _active: item.open,
        }"
        @click="toggleItem(index)"
      >
        {{ item.title }}
      </button>

      <div
        class="accordion__content"
        :class="{
          _show: item.open,
        }"
      >
        <div class="accordion__content-inner">
          {{ item.body }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleItem(index) {
      // eslint-disable-next-line vue/no-mutating-props
      this.items[index].open = !this.items[index].open;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.accordion {
  &__btn {
    display: block;
    border: none;
    border-radius: rem(8);
    width: 100%;
    padding: rem(20) rem(32);
    background: linear-gradient(158deg, #feeb3c 0%, #fe843b 100%);
    font-size: rem(22);
    font-weight: 500;
    line-height: 1.5;
    text-align: left;
    color: #1f1e25;
    cursor: pointer;
  }

  &__content {
    border-radius: rem(8);
    max-height: 0;
    padding: 0 rem(2);
    background: linear-gradient(158deg, #feeb3c 0%, #fe843b 100%);
    overflow: hidden;
    transition: all 0.5s ease-in-out;

    &-inner {
      border-radius: inherit;
      padding: 0 rem(30);
      background-color: #292830;
      font-size: rem(22);
      font-weight: 400;
      line-height: 1.5;
      transition: all 0.5s ease-in-out;
    }

    &._show {
      margin-top: rem(20);
      max-height: 100vh;
      padding: rem(2);

      .accordion__content-inner {
        padding: rem(30);
      }
    }
  }
}
</style>
