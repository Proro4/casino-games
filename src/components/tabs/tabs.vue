<template>
  <div>
    <div class="tabs">
      <ul class="tabs__nav">
        <li
          v-for="(tab, tabIndex) in tabs"
          :key="tabIndex"
          :class="{ _active: tab.isActive }"
        >
          <button :class="{ _active: tab.isActive }" @click="selectTab(tab)">
            {{ tab.title }}
          </button>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VTabs",
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.title === selectedTab.title;
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/base/functions";
@import "@/assets/scss/base/mixins";

.tabs {
  &__nav {
    display: flex;
    border-top: rem(1) solid #3a3f50;
    border-bottom: rem(1) solid #3a3f50;
    padding: rem(8) 0;

    > li {
      > button {
        border: none;
        padding: rem(12) rem(30);
        background: none;
        background-position: 0 -100%;
        font-family: $font-family-secondary;
        font-size: rem(18);
        white-space: nowrap;
        text-transform: uppercase;
        color: $color-white;
        cursor: pointer;
        transition: $transition-primary;

        @include respond-below(md) {
          padding: rem(8) rem(16);
          font-size: rem(12);
        }

        @include hover {
          background: url("@/assets/images/layout/tab-btn-bg.png") no-repeat top
            left / 100% 100%;
          color: $color-black;
        }

        &:focus,
        &:active,
        &._active {
          background: url("@/assets/images/layout/tab-btn-bg.png") no-repeat top
            left / 100% 100%;
          color: $color-black;
        }
      }
    }
  }
}

.tabs-details {
  padding-top: 2rem;
}
</style>
