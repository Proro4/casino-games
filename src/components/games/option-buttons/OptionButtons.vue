<template>
  <div class="gamescreen__option-buttons">
    <option-button @click="emit('showBettingInformation', true)">
      <font-awesome-icon :icon="['fas', 'fa-question']" color="black" />
    </option-button>
    <option-button @click="emit('showLiveStatisticsSetting', true)">
      <font-awesome-icon :icon="['fas', 'fa-line-chart']" color="black" />
    </option-button>
    <option-button @click="emit('showHotKeysSetting', true)">
      <font-awesome-icon :icon="['fas', 'fa-keyboard']" color="black" />
    </option-button>
    <option-button @click="emit('showSoundSetting', true)">
      <font-awesome-icon :icon="['fas', 'fa-volume-up']" color="black" />
    </option-button>
  </div>
</template>
<script setup>
  const emit = defineEmits(['showHotKeysSetting', 'showSoundSetting', 'showLiveStatisticsSetting', 'showBettingInformation'])
  import optionButton from './OptionButton.vue'
</script>
