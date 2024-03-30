<template>
  <div class="game-select">
    <div class="game-select__choice" @click="showSelectList = true">
      <div class="game-select__choice-label">
        {{ selectedItem.title }}
      </div>
      <div class="game-select__arrow" />
    </div>
    <div class="game-select__list" v-if="showSelectList">
      <div
        class="game-select__item"
        v-for="(selectItem, index) in selectList"
        :key="index"
        @click="choisenItem(selectItem)"
      >
        {{ selectItem.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSelectList: false,
      selectedItem: {
        id: "low",
        title: "low",
      },
      selectList: [
        {
          id: "low",
          title: "low",
        },
        {
          id: "medium",
          title: "medium",
        },
        {
          id: "high",
          title: "high",
        },
      ],
    };
  },
  methods: {
    choisenItem(item) {
      this.selectedItem = item;
      this.showSelectList = false;
      this.$emit("choicedRisk", item);
    },
  },
};
</script>
