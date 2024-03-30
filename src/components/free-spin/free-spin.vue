<template>
  <div class="free-spin">
    <div class="free-spin__container">
      <div
        class="free-spin__wheel"
        :class="{ _spinning: selectedItem !== null }"
        :style="wheelVars"
        @click="selectItem"
      >
        <div
          v-for="(item, index) in items"
          :key="item.id"
          class="free-spin__wheel-item"
          :style="{
            '--item-nb': index,
            '--item-bg': item.color,
          }"
        >
          {{ item.value }}

          <img src="@/assets/images/free-spin-sector-img.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    onSelectItem: {
      type: Function,
      default: () => ({}),
    },
  },
  data() {
    return {
      counter: 0,
      selectedItem: null,
    };
  },
  methods: {
    async selectItem() {
      if (!this.selectedItem) {
        const selectedItem = Math.floor(Math.random() * this.items.length);

        if (this.onSelectItem) {
          this.onSelectItem(selectedItem);
        }

        this.selectedItem = selectedItem;
        this.counter += 1;
      } else {
        this.selectedItem = null;
        setTimeout(this.selectItem, 400);
      }
    },
  },
  computed: {
    wheelVars() {
      return {
        "--nb-item": this.items.length,
        "--selected-item": this.selectedItem,
      };
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.free-spin {
  --wheel-font: "Lato", "Quicksand", sans-serif;
  --wheel-size: 50vw;
  --wheel-slice-spacing: 1.67vw;
  --wheel-border-size: 0.5rem;
  --wheel-color: #1b1b23;
  --neutral-color: white;
  --PI: 3.14159265358979;
  --nb-item: 0;
  --item-nb: 0;
  --selected-item: 0;
  --nb-turn: 5;
  --spinning-duration: 4s;
  --reset-duration: 0.25s;

  position: relative;

  &__container {
    display: block;
    position: relative;
    box-sizing: content-box;
    border-radius: 50%;
    width: calc(var(--wheel-size) + 2 * var(--wheel-border-size));
    height: calc(var(--wheel-size) + 2 * var(--wheel-border-size));
    padding: 4vw;
    margin: auto;
    background: url("@/assets/images/free-spin-bg.png") no-repeat center /
      contain;
    user-select: none;

    &::after {
      content: "";
      display: block;
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(206deg);
      width: 10vw;
      height: 10vw;
      background: url("@/assets/images/free-spin-btn-bg.png") no-repeat top
        right / 100% auto;
      pointer-events: none;
    }
  }

  &__wheel {
    display: block;
    position: relative;
    box-sizing: content-box;
    margin: auto;
    width: var(--wheel-size);
    height: var(--wheel-size);
    overflow: hidden;
    border-radius: 50%;
    border: solid var(--wheel-color) var(--wheel-border-size);
    background-color: var(--wheel-color);
    box-shadow: 0 0 10rem rgba($color-purple, 0.75);
    transition: transform var(--reset-duration);
    transform: rotate(0deg);
    cursor: pointer;

    &._spinning {
      transform: rotate(
        calc(
          var(--nb-turn) * 360deg +
            (-360deg * var(--selected-item) / var(--nb-item, 1))
        )
      );
      transition: transform var(--spinning-duration);
    }
  }

  &__wheel-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: rem(4);
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center left;
    transform: translateY(-50%)
      rotate(calc(var(--item-nb) * (360deg / var(--nb-item, 1))));

    width: 50%;
    padding: 0 1.5rem 0 6.25vw;

    font-family: $font-family-secondary;
    font-size: rem(10);
    font-weight: 400;
    text-align: right;
    text-transform: uppercase;
    color: $color-white;

    @include respond-above(md) {
      font-size: rem(24);
    }

    &:before {
      --slice-max-width: calc(
        var(--PI) * var(--wheel-size) + var(--wheel-size) / 2
      );
      --slice-width: calc(
        (var(--slice-max-width) / var(--nb-item)) - var(--wheel-slice-spacing)
      );

      content: " ";
      box-sizing: border-box;
      display: block;
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      padding-left: 0;
      border: solid transparent calc(var(--slice-width) / 2);
      border-left: solid transparent 0;
      border-right: solid var(--item-bg) calc(var(--wheel-size) / 2);
      opacity: 0.25;
    }

    img {
      width: 5.8vw;
      height: 5.8vw;
      object-fit: contain;
    }
  }
}
</style>
