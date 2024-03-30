<template>
  <div class="roulette-counter">
    <div
      class="roulette-counter__arrow left"
      @click="() => changeSliderPosition(0)"
    ></div>
    <div class="roulette-counter__slider" ref="roulette">
      <div
        class="roulette-counter__slider-list"
        :style="`left:-${sliderPosition}px`"
      >
        <template v-for="(item, index) in rouletteCounter">
          <div
            class="roulette-counter__slider-item"
            :class="[
              index <= 3
                ? 'light'
                : index > 3 && index <= 6
                ? 'medium'
                : 'hight',
              index === activeRoulete && 'active',
            ]"
            :key="'roulete-counter-' + index"
            :style="`z-index: ${rouletteCounter.length - index}`"
            v-if="item"
            @click="() => changeActiveCount(item, index)"
          >
            <p>{{ item.valueCount + item.valueType }}</p>
          </div>
        </template>
      </div>
    </div>
    <div
      class="roulette-counter__arrow right"
      @click="() => changeSliderPosition(1)"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rouletteCounter: [
        {
          valueCount: 1,
          valueType: "",
          value: 1,
        },
        {
          valueCount: 10,
          valueType: "",
          value: 10,
        },
        {
          valueCount: 100,
          valueType: "",
          value: 100,
        },
        {
          valueCount: 1,
          valueType: "K",
          value: 1000,
        },
        {
          valueCount: 10,
          valueType: "K",
          value: 10000,
        },
        {
          valueCount: 100,
          valueType: "K",
          value: 100000,
        },
        {
          valueCount: 1,
          valueType: "M",
          value: 1000000,
        },
        {
          valueCount: 10,
          valueType: "M",
          value: 10000000,
        },
        {
          valueCount: 100,
          valueType: "M",
          value: 100000000,
        },
        {
          valueCount: 1,
          valueType: "B",
          value: 1000000000,
        },
        {
          valueCount: 10,
          valueType: "B",
          value: 10000000000,
        },
        {
          valueCount: 100,
          valueType: "B",
          value: 100000000000,
        },
        {
          valueCount: 1,
          valueType: "T",
          value: 1000000000000,
        },
      ],
      activeRoulete: 0,
      activeCount: {
        valueCount: 1,
        valueType: "",
        value: 1,
      },
      sliderPosition: 0,
    };
  },
  methods: {
    changeActiveCount(item, index) {
      this.activeCount = item;
      this.activeRoulete = index;
      this.$emit("changeActiveCount", item);
    },
    changeSliderPosition(position) {
      const sliderWidth = this.$refs.roulette.offsetWidth;
      const oneSlideWidth = 53;
      const sliderListWidth = this.rouletteCounter.length * oneSlideWidth;
      const offsetLeft = sliderListWidth - sliderWidth; 
      if (position) {
        this.sliderPosition = offsetLeft;
      } else {
        this.sliderPosition = 0;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.roulette-counter {
  border: 2px solid rgba(133, 54, 217, 0.5019607843);
  height: 49px;
  box-sizing: border-box;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1224px) {
    width: 100%;
    margin-bottom: 50px;
  }
  &__arrow {
    width: 35px;
    height: 100%;
    background-color: #252b3a;
    position: relative;
    &:hover {
      background-color: #49536c;
    }
    &:active {
      background-color: #242a39;
    }
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 15px;
      top: 15px;
      height: 10px;
      width: 2px;
      background: white;
    }
    &.left {
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
        top: 20px;
      }
    }
    &.right {
      &::before {
        transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(45deg);
        top: 20px;
      }
    }
  }
  &__slider {
    padding: 30px 0;
    max-width: 25vw;
    @media screen and (max-width: 1224px) {
      max-width: 95vw;
    }
    overflow: hidden;
  }
  &__slider-list {
    display: flex;
    transition: 0.3s all;
    position: relative;
  }
  &__slider-item {
    position: relative;
    height: 50px;
    width: 60px;
    min-width: 50px;
    cursor: pointer;
    transition: 0.3s all;
    &.active {
      transform: scale(1.05) !important;
      z-index: 90 !important;
    }
    &:hover {
      transform: scale(1.03);
      z-index: 100 !important;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 75px;
      width: 76px;
      transition: 0.3s all;
    }
    &.light {
      &::after {
        background-image: url("@/assets/images/games/roulette-counter-l.png");
      }
    }
    &.medium {
      &::after {
        background-image: url("@/assets/images/games/roulette-counter-m.png");
      }
    }
    &.hight {
      &::after {
        background-image: url("@/assets/images/games/roulette-counter-xl.png");
      }
    }
    p {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 63px;
      width: 79px;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Avenir Next";
      font-weight: 700;
      font-size: 13px;
    }
  }
}
</style>
