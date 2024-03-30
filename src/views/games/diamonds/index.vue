<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="gamescreen diamonds-screen border">
    <option-buttons
      @showHotKeysSetting="(e) => toggleHotKeysSetting = e"
      @showSoundSetting="(e) => toggleSoundSetting = e"
      @showLiveStatisticsSetting="(e) => toggleLiveStatisticsSetting = e"
      @showBettingInformation="(e) => toggleBettingInformation = e"/>
    <div class="diamonds">
      <div class="diamonds__bck" />
      <div class="diamonds__bloc">
        <div class="diamonds__block-top">
          <div class="row">
            <div class="col-md-5">
              <div class="diamonds__info">
                <div class="diamonds__info-list">
                  <div
                    class="diamonds__info-item"
                    v-for="(infoItem, infoIndex) in diamondsInfo"
                    :ref="'diamond' + infoIndex"
                    :key="infoIndex + 'infoIndex'"
                    v-on:mouseenter="changeActiveItem(infoIndex, infoItem)"
                    v-on:mouseleave="changeActiveItem(winColor.index, infoItem)"
                  >
                    <div class="diamonds__info-diamonds">
                      <div
                        class="diamonds__info-diamond"
                        v-for="(diamondItem, diamondIndex) in 5"
                        :key="diamondIndex + 'diamondIndex'"
                      >
                        <span
                          class="diamonds__diamond-min"
                          :class="[
                            infoItem.activeDiamounds > diamondIndex && 'show',
                            activeList === infoIndex && 'active',
                            infoItem.winShow > diamondIndex &&
                              winColor.id < 0 &&
                              'empty',
                            infoItem.winShow > diamondIndex &&
                              winColor.id >= 0 &&
                              winColor.color,
                          ]"
                        ></span>
                      </div>
                    </div>
                    <div class="diamonds__info-count">
                      {{ infoItem.count.toFixed(2) }} X
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="diamonds__modal">
                <div
                  class="diamonds__modal-block"
                  :style="`top: ${modalPosition}px`"
                >
                  <div class="row">
                    <div class="game-label w-50 w-m-50 w-s-100">
                      <InputValue
                        :onlyRead="true"
                        :value="(diamondsInfoActive.count * betSize).toFixed(6)"
                        :onlyNumber="true"
                        placeholder="Profit"
                      />
                    </div>
                    <div class="game-label w-50 w-m-50 w-s-100">
                      <InputValue
                        :onlyRead="true"
                        :value="diamondsInfoActive.chance"
                        :onlyNumber="true"
                        placeholder="Chance"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="diamonds__game">
              <div class="diamonds__game-list">
                <div
                  class="diamonds__game-item"
                  v-for="gameItem in 5"
                  :key="'game' + gameItem"
                >
                  <div
                    class="diamonds__game-diamond"
                    :class="
                      resultColors.length &&
                      resultColors[gameItem - 1] + ' show'
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="gamescreen__form-top">
                <div class="game-label w-100 w-m-100 min-title mb-20">
                  <input-value
                    :value="betSize"
                    placeholder="BET SIZE"
                    :onlyNumber="true"
                    @onBlurFunc="() => validBetSize()"
                    @changeValue="(e) => (betSize = e)"
                  >
                    <ButtonSelectList
                      :buttonList="betSizeArray"
                      :activeButtonList="activeButtonList"
                      @changeButtonSelect="(e) => changeButtonSelect(e)"
                    />
                  </input-value>
                </div>
            <GameButton
              text="Bet"
              @onClick="() => startGame()"
              style="margin-top: 10px"
            />
            <div class="gamescreen__form-selects">
              <ToggleSellect
                toggleValueOne="MANUAL"
                toggleValueTwo="AUTO"
                :toggleValueStatus="manualAutoStatus"
                @changeToggleValueStatus="
                  (status) => (manualAutoStatus = status)
                "
              />
            </div>
          </div>

          <div class="gamescreen__form-auto" v-if="manualAutoStatus">
            <div class="game-label w-50 w-s-100 mt-10">
              <input-value
                :value="betSize"
                placeholder="BET SIZE"
                :onlyNumber="true"
                @onBlurFunc="() => validBetSize()"
                @changeValue="(e) => (betSize = e)"
              >
                <ButtonSelectList
                  :buttonList="betSizeArray"
                  :activeButtonList="activeButtonList"
                  @changeButtonSelect="(e) => changeButtonSelect(e)"
                />
              </input-value>
            </div>
            <div class="game-label w-50 w-s-100 mt-10">
              <input-value
                :value="betSize"
                placeholder="Number of Bets"
                :onlyNumber="true"
                @changeValue="(e) => (numberOfBets = e)"
              />
            </div>
            <div class="game-label w-50 w-s-100 mt-10">
              <div class="game-label w-100 p-false m-title">
                <InputValue
                  :value="onWin"
                  :onlyNumber="true"
                  placeholder="On Win"
                  :changeValue="(e) => (onWin = e)"
                >
                  <div class="input-value__content-text">%</div>
                </InputValue>
              </div>
              <div class="game-label w-100 p-false">
                <RadioButtons
                  :list="radioList"
                  radioIndex="A"
                  :activeRadio="activeOnWinRadio"
                  @changeRadio="(e) => (activeOnWinRadio = e)"
                />
              </div>
            </div>

            <div class="game-label w-50 w-s-100 mt-10">
              <div class="game-label w-100 p-false m-title">
                <InputValue
                  :value="onLose"
                  :onlyNumber="true"
                  placeholder="On Lose"
                  @changeValue="(e) => (onLose = e)"
                >
                  <div class="input-value__content-text">%</div>
                </InputValue>
              </div>

              <div class="game-label w-100 p-false">
                <RadioButtons
                  :list="radioList"
                  radioIndex="B"
                  :activeRadio="activeOnLoseRadio"
                  @changeRadio="(e) => (activeOnLoseRadio = e)"
                />
              </div>
            </div>

            <div class="game-label w-50 w-s-100 mb-20">
              <InputValue
                :value="stopOnProfit"
                :onlyNumber="true"
                placeholder="Stop on profit"
                @changeValue="(e) => (stopOnProfit = e)"
              >
                <img src="@/assets/images/games/almaz-2-ic.png" alt="almaz" />
              </InputValue>
            </div>

            <div class="game-label w-50 w-s-100 mb-20">
              <InputValue
                :value="stopOnLoss"
                :onlyNumber="true"
                placeholder="Stop on income"
                @changeValue="(e) => (stopOnLoss = e)"
              >
                <img src="@/assets/images/games/almaz-2-ic.png" alt="almaz" />
              </InputValue>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Preloader/>
    <PopupHotkeysSetting 
      v-if="toggleHotKeysSetting"
      @showHotKeysSetting="(e) => toggleHotKeysSetting = e"
    />
    <PopupSoundSettings 
      v-if="toggleSoundSetting"
      @showSoundSetting="(e) => toggleSoundSetting = e"
    />
    <PopupLiveStatisticsSetting
      v-if="toggleLiveStatisticsSetting"
      @showLiveStatisticsSetting="(e) => toggleLiveStatisticsSetting = e"
    />
    <PopupBettingInformation
      v-if="toggleBettingInformation"
      @showBettingInformation="(e) => toggleBettingInformation = e"
    />
  </div>
</template>
<script setup>
  import { ref, onMounted } from "vue";
  import useDiamondsStore from "@/store/games/diamonds";

  const diamondsStore = useDiamondsStore()

  const minBetSize = 0.1;
  const maxBetSize = 1000.0;
  import OptionButtons from "@/components/games/option-buttons/OptionButtons.vue";
  import OptionButton from "@/components/games/option-buttons/OptionButton.vue";
  import ToggleSellect from "@/components/games/ToggleSellect.vue";
  import GameButton from "@/components/games/buttons/GameButton.vue";
  import InputValue from "@/components/games/InputValue.vue";
  import ButtonSelectList from "@/components/games/ButtonSelectList.vue";
  import CheckedButton from "@/components/games/CheckedButton.vue";
  import RadioButtons from "@/components/games/RadioButtons.vue";
  import GameSelect from "@/components/games/GameSelect.vue";
  import InputNumber from "@/components/games/InputNumber.vue";
  import { useToast } from 'vue-toastification';
  import PopupHotkeysSetting from '@/components/popups/PopupHotkeysSetting.vue';
  import PopupSoundSettings from '@/components/popups/PopupSoundSettings.vue';
  import PopupLiveStatisticsSetting from '@/components/popups/PopupLiveStatisticsSetting.vue';
  import PopupBettingInformation from '@/components/popups/PopupBettingInformation.vue';
  import Preloader from '@/components/games/Preloader.vue'

  const $toast = useToast();


  const numberOfBets = ref(0);
  const radioList = ref([
    { id: 1, value: "Reset to Base bet" },
    { id: 2, value: "Stop betting" },
    { id: 3, value: "Change Ber By (%)" },
  ]);
  const activeOnWinRadio = ref(1);
  const activeOnLoseRadio = ref(1);
  const stopOnProfit = ref(1);
  const stopOnLoss = ref(1);
  const onWin = ref(1);
  const onLose = ref(1);
  const winColor = ref({
    id: 0,
    index: 6,
    color: "green",
  });
  const activeList = ref(-1);
  const profit = ref(0);
  const chance = ref(0);
  const modalPosition = ref(350);
  const manualAutoStatus = ref(false);
  const colorList = ref([
    {
      id: 0,
      color: "green",
    },
    {
      id: 1,
      color: "purple",
    },
    {
      id: 2,
      color: "yellow",
    },
    {
      id: 3,
      color: "red",
    },
    {
      id: 4,
      color: "blue",
    },
    {
      id: 5,
      color: "pink",
    },
    {
      id: 6,
      color: "orange",
    },
  ]);
  const diamondsInfo = ref([
    {
      count: 50.0,
      chance: 0.04,
      activeDiamounds: 5,
      winShow: 5,
      id: 7,
    },
    {
      count: 5.0,
      chance: 1.25,
      activeDiamounds: 4,
      winShow: 4,
      id: 6,
    },
    {
      count: 4.0,
      chance: 2.5,
      activeDiamounds: 5,
      winShow: 3,
      id: 5,
    },
    {
      count: 3.0,
      chance: 12.49,
      activeDiamounds: 3,
      winShow: 3,
      id: 4,
    },
    {
      count: 2.0,
      chance: 18.74,
      activeDiamounds: 4,
      winShow: 2,
      id: 3,
    },
    {
      count: 0.1,
      chance: 49.98,
      activeDiamounds: 2,
      winShow: 2,
      id: 2,
    },
    {
      count: 0.0,
      chance: 14.99,
      activeDiamounds: 0,
      id: 1,
    },
  ]);
  const diamondsInfoActive = ref({
    count: 0.0,
    chance: 14.99,
    activeDiamounds: 0,
    id: 1,
  });
  const response = ref({
    balance: "928.90803985",
    bet_id: "13766392245",
    coin: "GEM",
    lootbox: null,
    message: "",
    outcome: "NOTHING",
    payout: 0,
    profit: "-0.01000000",
    roll_numbers: [0, 1, 0, 5, 0],
    success: true,
    win: 0,
  });
  const resultColors = ref([]);
  const betSize = ref(0.01);
  const betSizeArray = ref([
    { id: 1, value: "MIN" },
    { id: 2, value: "1/2" },
    { id: 3, value: "2x" },
    { id: 4, value: "MAX" },
  ]);
  const activeButtonList = ref([]);
  const resultInfo = ref({});
  const userSeed = ref(null);
  const toggleHotKeysSetting = ref(false)
  const toggleSoundSetting = ref(false)
  const toggleLiveStatisticsSetting = ref(false)
  const toggleBettingInformation= ref(false)
  const income = ref(0)

  onMounted(() => {
    diamondsStore.getDiamondsSeed().then((res) => {
      if (res.success) {
        userSeed.value = res.seed.current_seed_hashed;
      } else {
        $toast.error(res.message, {
          timeout: 2000,
          position: "top-center",
        });
      }
    });
  })


  const startGame = () => {
    resultColors.value = [];
    diamondsStore.beginDiamondsPlay({
      coin: "GEM",
      bet_amt: betSize.value.toString(),
      client_seed: betSize.value,
    }).then((res) => {
      if (res.success) {
        returnDiamondColor(res.roll_numbers);
        countDuplicates(res.roll_numbers);
      } else {
        $toast.error(res.message, {
          timeout: 2000,
          position: "top-center",
        });
      }
    });
  };
  const changeActiveItem = (infoIndex, infoItem) => {
    const blockHeight = 55;
    const topPoisition = infoIndex * blockHeight;
    modalPosition.value = topPoisition + 25;
    activeList.value = infoIndex;
    diamondsInfoActive.value = infoItem;
  };
  const returnDiamondColor = (rollNumbers) => {
    setTimeout(() => {
      rollNumbers.map((rollItem) => {
        const diamodColor = colorList.value.filter(
          (colorItem) => +colorItem.id === rollItem
        )[0];
        resultColors.value.push(diamodColor.color);
      });
    }, 100);
  };
  const changeButtonSelect = (e) => {
    switch (e) {
      case 1:
          betSize.value = 0.1;
          changeBetSize(0.1);
        break;
      case 2:
          betSize.value =
          betSize.value / 2 > minBetSize ? betSize.value / 2 : minBetSize;
          changeBetSize(betSize.value);
        break;
      case 3:
          betSize.value =
          betSize.value * 2 < maxBetSize ? betSize.value * 2 : maxBetSize;
          changeBetSize(betSize.value);
        break;
      case 4:
          betSize.value = 1000.0;
          changeBetSize(1000.0);
        break;
    }
  };
  const changeBetSize = (e) => {
    income.value = coefficients.value * e - e;
    betSize.value = e;
  };
  const countDuplicates = (arr) => {
    const numCount = {};
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      numCount[num] ? numCount[num]++ : (numCount[num] = 1);
    }
    const result = {};
    for (const num in numCount) {
      if (numCount[num] > 1) {
        result[num] = numCount[num];
      }
    }
    if(Object.keys(result).length > 0){
      checkWinResult(result)
    }else{ 
      resultInfo.value = result;
      winColor.value = { id: 0, index: 6, color: 'green' };
      changeActiveItem(
        winColor.value.index,
        diamondsInfo.value[winColor.value.index]
      );
    };
  };
  const checkWinResult = (result) => {
      let winDiamond = { 0: -1 };
      Object.keys(result).map((item) => {
        if (Object.values(winDiamond)[0] < result[item]) {
          winDiamond = { [item]: result[item] };
        }
      });
      const winColorFilter = colorList.value.filter(
        (colorItem) => +colorItem.id === +Object.keys(winDiamond)[0]
      )[0].color;
      if (
        Object.values(winDiamond)[0] === 2 &&
        Object.keys(result).length === 1
      ) {
        winColor.value = { id: 1, index: 5, color: winColorFilter };
      } else if (
        Object.values(winDiamond)[0] === 2 &&
        Object.keys(result).length === 2
      ) {
        winColor.value = { id: 2, index: 4, color: winColorFilter };
      } else if (
        Object.values(winDiamond)[0] === 3 &&
        Object.keys(result).length === 1
      ) {
        winColor.value = { id: 3, index: 3, color: winColorFilter };
      } else if (
        Object.values(winDiamond)[0] === 3 &&
        Object.keys(result).length === 2
      ) {
        winColor.value = { id: 4, index: 2, color: winColorFilter };
      } else if (Object.values(winDiamond)[0] === 4) {
        winColor.value = { id: 5, index: 1, color: winColorFilter };
      } else if (Object.values(winDiamond)[0] === 5) {
        winColor.value = { id: 6, index: 0, color: winColorFilter };
      }
      changeActiveItem(
        winColor.value.index,
        diamondsInfo.value[winColor.value.index]
      );
    };
</script>
<!-- <script src="./index.js"></script> -->

<style lang="scss" scoped>
  .w-33{
    width: 33%;
  }
</style>