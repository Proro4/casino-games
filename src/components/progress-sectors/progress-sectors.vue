<template>
  <div class="progress-sectors">
    <div class="progress-sectors__labels">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="progress-sectors__label"
        :class="{ _active: isActive(index + 1) }"
      >
        {{ item.label }}
      </div>
    </div>

    <div class="progress-sectors__track">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        class="progress-sectors__track-empty"
        :class="{ _active: isActive(index + 1) }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressSectors",
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      items: [
        {
          id: "0",
          label: "Start",
        },
        {
          id: "1",
          label: "5 Medals",
        },
        {
          id: "2",
          label: "10 Medals",
        },
        {
          id: "3",
          label: "15 Medals",
        },
        {
          id: "4",
          label: "20 Medals",
        },
      ],
      sector: 20,
    };
  },
  computed: {
    formattedProgress() {
      return Math.floor(this.progress / this.sector);
    },
  },
  methods: {
    isActive(index) {
      return index === this.formattedProgress;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.progress-sectors {
  &__labels {
    display: flex;
    align-items: flex-end;
    margin-bottom: rem(8);
  }

  &__label {
    flex: 0 0 20%;
    max-width: 20%;
    font-family: $font-family-secondary;
    font-size: rem(14);
    font-weight: 400;
    line-height: 1.2;
    text-transform: uppercase;
    color: rgba($color-white, 0.7);
    text-align: center;

    @include respond-below(md) {
      font-size: rem(8);
    }

    &._active {
      color: $color-white;
    }
  }

  &__track {
    display: flex;
  }

  &__track-empty {
    position: relative;
    flex: 0 0 20%;
    max-width: 20%;
    height: rem(7);
    background: url("@/assets/images/progress-sectors-bg.svg") no-repeat top
      left / contain;

    &._active {
      &::after {
        opacity: 1;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("@/assets/images/progress-sectors-bg-active.svg")
        no-repeat top left / contain;
      opacity: 0;
    }
  }
}
</style>
