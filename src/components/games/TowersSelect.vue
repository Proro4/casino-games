<template>
  <div class="towers-select">
    <div class="towers-select__choice" @click="showSelectList = true">
      <div class="towers-select__choice-label">
        <optionButton>
          <font-awesome-icon
            v-if="selectedItem.icon"
            :icon="['fass', selectedItem.iconValue]"
            color="black"
          />
          <p v-else>{{ selectedItem.iconValue }}</p>
        </optionButton>
        <span>Difficulty</span>
      </div>
      <div class="towers-select__choice-item">
        {{ selectedItem.title }}
        <div class="towers-select__arrow" />
      </div>
    </div>
    <div class="towers-select__list" v-if="showSelectList">
      <div
        class="towers-select__item"
        v-for="(selectItem, index) in selectList"
        :key="index"
        @click="choisenItem(selectItem)"
      >
        <span>
          <optionButton>
            <font-awesome-icon
              v-if="selectItem.icon"
              :icon="['fass', selectItem.iconValue]"
              color="black"
            />
            <p v-else>{{ selectItem.iconValue }}</p>
          </optionButton>
          {{ selectItem.title }}
        </span>
        <div class="towers-select__item-visual">
          <img
            v-for="imgItem in selectItem.type[0]"
            class="img-false"
            :key="imgItem + 'false'"
            src="@/assets/images/games/game/towers-false.png"
            alt="visual-false"
          />
          <img
            v-for="imgItem in selectItem.type[1]"
            class="img-success"
            :key="imgItem + 'succes'"
            src="@/assets/images/games/game/towers-true.png"
            alt="visual-success"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    optionButton: () =>
      import("@/components/games/option-buttons/OptionButton.vue"),
  },
  data() {
    return {
      showSelectList: false,
      selectedItem: {
        id: "MEDIUM",
        title: "MEDIUM",
        icon: true,
        iconValue: "fa-question",
        type: [1, 2],
        count: 3,
      },
      selectList: [
        {
          id: "EASY",
          title: "EASY",
          icon: true,
          iconValue: "fa-bolt",
          type: [1, 3],
          count: 4,
        },
        {
          id: "MEDIUM",
          title: "MEDIUM",
          icon: true,
          iconValue: "fa-question",
          type: [1, 2],
          count: 3,
        },
        {
          id: "HARD",
          title: "HARD",
          icon: true,
          iconValue: "fa-exclamation",
          type: [1, 1],
          count: 2,
        },
        {
          id: "BRUTAL",
          title: "BRUTAL",
          icon: false,
          iconValue: "$",
          type: [3, 1],
          count: 4,
        },
        {
          id: "WICKED",
          title: "WICKED",
          icon: true,
          iconValue: "fa-percent",
          type: [2, 1],
          count: 3,
        },
      ],
    };
  },
  methods: {
    choisenItem(item) {
      this.selectedItem = item;
      this.showSelectList = false;
      this.$emit('towersCount', item)
    },
  },
};
</script>
