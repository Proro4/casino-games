<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="gamescreen diamonds-screen border">
    <option-buttons 
      @showHotKeysSetting="(e) => toggleHotKeysSetting = e"
      @showSoundSetting="(e) => toggleSoundSetting = e"
      @showLiveStatisticsSetting="(e) => toggleLiveStatisticsSetting = e"
      @showBettingInformation="(e) => toggleBettingInformation = e"
    />
    <div class="roulette">
      <div class="roulette__bck" />
      <div class="roulette__bloc">
        <div class="roulette__game">
          <div class="roulette__numbers">
            <div class="roulette__numbers-list">
              <div
                class="roulette__numbers-item"
                v-for="item in 35"
                :key="'roulette-number-' + item"
                :class="outcome === item && 'win-number'"
                @click="
                  () =>
                    addToCheckList({
                      type: 'number',
                      number: item,
                      bet_amt: (
                        clipValue * rouletteActiveCounter.value
                      ).toFixed(8),
                    })
                "
              >
                <p>{{ item }}</p>
                <span
                  v-if="
                    checkedList.find((checkItem) => +checkItem.number === +item)
                  "
                >
                  {{ showItemCount(item, "number") }}
                </span>
              </div>
            </div>
            <div class="roulette__numbers-bottom">
              <div
                class="roulette__numbers-item"
                :class="outcome === 0 && 'win-number'"
                @click="
                  () =>
                    addToCheckList({
                      type: 'number',
                      number: 36,
                      bet_amt: (
                        clipValue * rouletteActiveCounter.value
                      ).toFixed(8),
                    })
                "
              >
                <p>36</p>
                <span v-if="checkedList.find((check) => check.number === 36)">
                  {{ showItemCount(36, "number") }}</span
                >
              </div>
              <div
                class="roulette__numbers-item"
                :class="outcome === 0 && 'win-number'"
                @click="
                  () =>
                    addToCheckList({
                      type: 'number',
                      number: 0,
                      bet_amt: (
                        clipValue * rouletteActiveCounter.value
                      ).toFixed(8),
                    })
                "
              >
                <p>0</p>
                <span v-if="checkedList.find((check) => check.number === 0)">
                  {{ showItemCount(0, "number") }}</span
                >
              </div>
            </div>
          </div>
          <div
            class="roulette__game-roulette"
            :class="[startGame && 'game', endGame && 'end-game']"
          >
            <div
              class="roulette__game-slots"
              :style="`transform: rotate(${rouleteRoundPosition}deg)`"
            >
              <!-- <div class="roulette__game-slot" v-for="item in 35" :key="'slot-'+item">{{ item }}</div>   -->
            </div>
            <div class="roulette__game-arrow"></div>
          </div>
          <div class="roulette__roster-border">
            <div class="roulette__roster">
              <div
                class="roulette__roster-item"
                v-for="item in rosterList"
                :key="'roster-' + item.id"
                @click="
                  () =>
                    addToCheckList({
                      type: 'series',
                      series: item.type,
                      bet_amt: (
                        clipValue * rouletteActiveCounter.value
                      ).toFixed(8),
                    })
                "
              >
                <p>{{ item.value }}</p>
                <span
                  v-if="checkedList.find((check) => check.series === item.type)"
                >
                  {{ showItemCount(item.type, "series") }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="gamescreen__form">
          <div class="w-100">
            <div class="gamescreen__form-top">
              <toggle-sellect
                toggleValueOne="MANUAL"
                toggleValueTwo="AUTO"
                toggleValueName="manualAutoStatus"
                :toggleValueStatus="manualAutoStatus"
                @changeToggleValueStatus="
                  (status) => (manualAutoStatus = status)
                "
              />
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <p>
              clip value({{
                (clipValue * rouletteActiveCounter.value).toFixed(8)
              }})
            </p>
            <p
              v-if="checkedList.length"
              style="cursor: pointer"
              @click="() => clearChips()"
            >
              Clear chips
            </p>
          </div>
          <div class="gamescreen__form-manual between-center">
            <RouletteCounterSlider
              @changeActiveCount="(e) => changeActiveItem(e)"
            />
            <div class="game-label w-15 w-m-100 mb-20">
              <GameButton
                text="Make a bet"
                @onClick="() => beginGame()"
                :disable="startGame"
              />
            </div>

            <div class="game-label w-35 w-m-100 min-title mb-20">
              <input-value
                :value="betSize"
                placeholder="BET SIZE"
                :onlyNumber="true"
                :onlyRead="true"
                @onBlurFunc="() => validBetSize()"
                @changeValue="(e) => (betSize = e)"
              >
                <button-select-list
                  :buttonList="betSizeArray"
                  :activeButtonList="activeButtonList"
                  @changeButtonSelect="(e) => changeButtonSelect(e)"
                />
              </input-value>
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
  import {ref, onMounted} from 'vue';
  import useDiamondsStore from "@/store/games/diamonds";

  const diamondsStore = useDiamondsStore();

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
    import RouletteCounterSlider from "@/components/games/RouletteCounterSlider.vue";
    import { useToast } from 'vue-toastification';
    import PopupHotkeysSetting from '@/components/popups/PopupHotkeysSetting.vue';
    import PopupSoundSettings from '@/components/popups/PopupSoundSettings.vue';
    import PopupLiveStatisticsSetting from '@/components/popups/PopupLiveStatisticsSetting.vue';
    import PopupBettingInformation from '@/components/popups/PopupBettingInformation.vue';
    import Preloader from '@/components/games/Preloader.vue'
    const $toast = useToast();


    const activeList = ref(-1);
    const profit = ref(0);
    const chance = ref(0);
    const modalPosition = ref(350);
    const manualAutoStatus = ref(false);
    const startGame = ref(false);
    const endGame = ref(false);
    const betSize = ref(0);
    const betSizeArray =  ref([
      { id: 2, value: "1/2" },
      { id: 3, value: "2x" },
    ]);
    const radioList =  ref([
      { id: 1, value: "Reset to Base bet" },
      { id: 2, value: "Stop betting" },
      { id: 3, value: "Change Ber By (%)" },
    ]);
    const activeOnWinRadio = ref(1);
    const activeOnLoseRadio = ref(1);
    const activeButtonList = ref([]);
    const resultInfo = ref({});
    const userSeed = ref(null);
    const income = ref(0.00001);
    const coefficients = ref(3);
    const stopOnProfit = ref(1);
    const stopOnLoss = ref(1);
    const onWin = ref(1);
    const onLose = ref(1);
    const rosterList = ref([
      {
        id: 37,
        value: "1 to 12",
        type: "first-12",
      },
      {
        id: 38,
        value: "13 to 24",
        type: "second-12",
      },
      {
        id: 39,
        value: "25 to 36",
        type: "third-12",
      },
      {
        id: 40,
        value: "1 to 18",
        type: "1-18",
      },
      {
        id: 41,
        value: "19 to 36",
        type: "19-36",
      },
      {
        id: 42,
        value: "Even",
        type: "even",
      },
      {
        id: 43,
        value: "Odd",
        type: "odd",
      },
      {
        id: 44,
        value: "",
        type: "all-red",
      },
      {
        id: 45,
        value: "",
        type: "all-black",
      },
    ]);
    const clipValue = ref(0.00000001);
    const rouletteActiveCounter = ref({
      valueCount: 1,
      valueType: "",
      value: 1,
    });
    const checkedList = ref([]);
    const staticGameResult = ref({
      balance: "685.91909987",
      bet_id: "14513435505",
      coin: "GEM",
      lootbox: null,
      message: "",
      outcome: "17",
      payout: "0.00000",
      profit: "-45.72793998",
      success: true,
      win: 0,
    });
    const outcome = ref(-1);
    const roundList = ref([
      179, 322, 123, 235, 142, 0, 85, 226, 28, 283, 197, 47, 207, 66, 303,
      160, 341, 104, 264, 151, 312, 133, 274, 19, 351, 113, 188, 75, 293, 255,
      38, 245, 170, 322, 95, 216, 56,
    ]);
    const rouleteRoundPosition = ref(0);
    const toggleHotKeysSetting = ref(false)
    const toggleSoundSetting = ref(false)
    const toggleLiveStatisticsSetting = ref(false)
    const toggleBettingInformation= ref(false)

    onMounted(()=>{
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
    });

    const beginGame = () => {
      if (betSize.value) {
        $toast.success("start game",{
          position: 'center'
        });
        const bet_table = [...checkedList.value];
        playGame(bet_table);
      } else {
        $toast.error("Bet size can't be 0");
      }
    };
    const playGame = (bet_table) => {
      const randomOutcome = Math.floor(Math.random() * 37);
      rouleteRoundPosition.value = roundList.value[randomOutcome];
      startGame.value = true;
      // setTimeout(() => {
      //   startGame.value = false;
      //   endGame.value = true;
      // }, 3000);
      setTimeout(() => {
        startGame.value = false;
        outcome.value = randomOutcome;
      }, 6000);
    };
    const changeActiveItem = (e) => {
      rouletteActiveCounter.value = e;
    };
    const addToCheckList = (payload) => {
      if (
        checkedList.value.length &&
        payload.type === "number" &&
        checkedList.value.find((item) => item.number === payload.number)
      ) {
        let finderItem = checkedList.value.find(
          (item) => item.number === payload.number
        );
        finderItem.bet_amt = (+finderItem.bet_amt + +payload.bet_amt).toFixed(
          8
        );
      } else if (
        checkedList.value.length &&
        payload.type === "number" &&
        !checkedList.value.find((item) => item.number === payload.number)
      ) {
        checkedList.value.push(payload);
      } else if (
        checkedList.value.length &&
        payload.type === "series" &&
        checkedList.value.find((item) => item.series === payload.series)
      ) {
        let finderItem = checkedList.value.find(
          (item) => item.series === payload.series
        );
        finderItem.bet_amt = (+finderItem.bet_amt + +payload.bet_amt).toFixed(
          8
        );
      } else if (
        checkedList.value.length &&
        payload.type === "series" &&
        !checkedList.value.find((item) => item.series === payload.series)
      ) {
        checkedList.value.push(payload);
      } else {
        checkedList.value.push(payload);
      }

      betSize.value = (Number(betSize.value) + Number(payload.bet_amt)).toFixed(
        8
      );
    };
    const clearChips = () => {
      checkedList.value = [];
      betSize.value = 0;
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
            updateAllCount(false);
          break;
        case 3:
          betSize.value =
            betSize.value * 2 < maxBetSize ? betSize.value * 2 : maxBetSize;
            changeBetSize(betSize.value);
            updateAllCount(true);
          break;
        case 4:
          betSize.value = 1000.0;
          changeBetSize(1000.0);
          break;
      }
    };
    const updateAllCount = (status) => {
      checkedList.value.map((item) => {
        if (!status && item.bet_amt > 0.00000001) {
          item.bet_amt = item.bet_amt / 2;
        } else if (status && item.bet_amt < 100) {
          item.bet_amt = item.bet_amt * 2;
        }
      });
    };
    const showItemCount = (item, type) => {
      let foudItem = {};
      if (type === "number") {
        foudItem = checkedList.value.find(
          (checkItem) => +checkItem[type] === +item
        );
      } else {
        foudItem = checkedList.value.find(
          (checkItem) => checkItem[type] === item
        );
      }
      return getItemCont(foudItem.bet_amt);
    };
    const getItemCont = (betAmt) => {
      const multiplier = 100000000;
      const updateCount = betAmt * multiplier;
      if (updateCount < 1000) {
        return Math.round(updateCount);
      } else if (updateCount >= 1000 && updateCount < 1000000) {
        return Math.round(updateCount / 1000) + "K";
      } else if (updateCount >= 1000000 && updateCount < 1000000000) {
        return Math.round(updateCount / 1000000) + "M";
      } else if (updateCount >= 1000000000 && updateCount < 1000000000000) {
        return Math.round(updateCount / 1000000000) + "B";
      } else if (
        updateCount >= 1000000000000 &&
        updateCount < 100000000000000
      ) {
        return Math.round(updateCount / 1000000000000) + "T";
      }
    };
    const changeBetSize = (e) => {
      income.value = coefficients.value * e - e;
      betSize.value = e;
    };
</script>
