<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="gamescreen mines-screen border">
    <OptionButtons
      @showHotKeysSetting="(e) => toggleHotKeysSetting = e"
      @showSoundSetting="(e) => toggleSoundSetting = e"
      @showLiveStatisticsSetting="(e) => toggleLiveStatisticsSetting = e"
      @showBettingInformation="(e) => toggleBettingInformation = e"
    /> 
    <div class="mines">
      <div class="mines__bck" />
      <div class="mines__block">
        <div class="row-reverse">
          <div class="col-md-6">
            <div class="mines__table" :class="playStatus && 'play'">
              <div
                class="mines__win"
                v-if="win.status && Number(win.profit) > 0 && win.payout"
              >
                <p>{{ win.payout }} х</p>
                <span>
                  {{ win.profit }}
                  <img
                    :src="getCoinIcon(win.coin.toLowerCase())"
                    alt="coin-icon"
                  />
                </span>
              </div>
              <div
                v-for="item in 25"
                :key="item - 1 + 'mines'"
                class="mines__table-item"
                @click="() => toogleChoiceNumber(item - 1)"
                :class="[
                  choiceNumbers.includes(item - 1) && 'win',
                  mineNumber === item - 1 && 'lose',
                  gameEnd &&
                  !choiceNumbers.includes(item - 1) &&
                  !mineLocations.includes((item - 1).toString())
                    ? 'win show'
                    : gameEnd &&
                      !choiceNumbers.includes(item - 1) &&
                      mineLocations.includes((item - 1).toString()) &&
                      mineNumber != item - 1
                    ? 'lose show'
                    : '',
                ]"
              ></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="gamescreen__form">
              <div class="gamescreen__form-top">
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
                <GameButton
                  text="Bet"
                  @onClick="() => startGame()"
                  :disable="playStatus"
                />
              </div>
              <div class="gamescreen__form-manual">
                <div class="game-label w-100 w-m-100 mb-20" v-if="!playStatus">
                  <InputNumber
                    :value="mines"
                    @reduceNumber="() => removeFromMines()"
                    @increaseNumber="() => addToMines()"
                  />
                </div>
                <div class="game-label w-50 w-m-100 mb-20" v-if="playStatus">
                  <input-value
                    :placeholder="'Mines'"
                    :value="mines"
                    :onlyNumber="true"
                    :onlyRead="true"
                  />
                </div>
                <div class="game-label w-50 w-m-100 mb-20" v-if="playStatus">
                  <input-value
                    :placeholder="'Gems'"
                    :value="25 - mines"
                    :onlyNumber="true"
                    :onlyRead="true"
                  />
                </div>
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
          <div class="gamescreen__form-auto" style="padding: 0;" v-if="manualAutoStatus">
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
                <div class="game-label w-10 mines__buttons" v-if="playStatus">
                  <div class="col-md-6">
                    <div class="mines-btn auto" @click="() => pickRandomTile()">
                      pick random tile
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="mines-btn"
                      @click="() => cashoutGame()"
                      v-if="Boolean(choiceNumbers.length)"
                    >
                      Cashout
                    </div>
                  </div>
                </div>
              </div>
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
  import {  onMounted, ref } from 'vue';
  import coinIcons from "../../../mixins/coinIcons";
  import useMinesStore from "@/store/games/mines";
  import OptionButtons from "@/components/games/option-buttons/OptionButtons.vue";
  import ToggleSellect from "@/components/games/ToggleSellect.vue";
  import GameButton from "@/components/games/buttons/GameButton.vue";
  import InputValue from "@/components/games/InputValue.vue";
  import ButtonSelectList from "@/components/games/ButtonSelectList.vue";
  import InputNumber from "@/components/games/InputNumber.vue";
  import { useToast } from 'vue-toastification';
  import PopupHotkeysSetting from '@/components/popups/PopupHotkeysSetting.vue';
  import PopupSoundSettings from '@/components/popups/PopupSoundSettings.vue';
  import PopupLiveStatisticsSetting from '@/components/popups/PopupLiveStatisticsSetting.vue';
  import PopupBettingInformation from '@/components/popups/PopupBettingInformation.vue';
  import Preloader from '@/components/games/Preloader.vue'
  const $toast = useToast();
  const minBetSize = 0.1;
  const maxBetSize = 1000.0;

    const minesStore = useMinesStore()
      const manualAutoStatus =  ref(false);
      const betSize =  ref(0.01);
      const mines =  ref(1);
      const betSizeArray = ref([
        { id: 1, value: "MIN" },
        { id: 2, value: "1/2" },
        { id: 3, value: "2x" },
        { id: 4, value: "MAX" },
      ]);
      const activeButtonList =  ref([]);
      const income = ref(0.001);
      const coefficients =  ref(1.0001);
      const choiceNumbers =  ref([]);
      const dificultList =  ref({});
      const chancesArray = ref([
        [75, 25],
        [55.7693077, 38.46153846, 5.76923077],
        [41.09311741, 44.02834008, 13.66396761, 1.2145749],
        [29.98686946, 44.42499179, 21.41919247, 3.93916183, 0.22978444],
        [
          21.6571835, 41.64842981, 27.76561987, 7.93303425, 0.95743517,
          0.03829741,
        ],
        [
          15.46941679, 37.12660028, 32.12878871, 12.6928548, 2.37991027,
          0.19695809, 0.00547106,
        ],
        [
          10.91958832, 31.84879926, 34.39670302, 17.63933498, 4.57316092,
          0.58797783, 0.03379183, 0.00064365,
        ],
        [
          7.61062216, 26.47172926, 34.74414465, 22.23625258, 7.48335423,
          1.33037409, 0.1187834, 0.00468112, 0.00005851,
        ],
        [
          5.23230274, 21.40487483, 33.50328234, 26.05810849, 10.94440956,
          2.52563205, 0.31180643, 0.01909019, 0.00049371, 0.00000366,
        ],
        [
          3.54446314,
          16.87839592,
          31.07159249,
          28.82002782,
          14.71022253,
          4.23654409,
          0.67893335,
          0.05747584,
          0.0023093,
          0.00003539,
          "0.00000012",
        ],
      ]);
      const win = ref({
        status: 0,
        payout: 0,
        profit: 0,
        coin: "GEM",
      });
      const mineNumber =  ref(-1);
      const mineLocations =  ref([]);
      const playStatus =  ref(false);
      const gameEnd =  ref(false);
      const currentSeed =  ref("");
      const toggleHotKeysSetting = ref(false)
      const toggleSoundSetting = ref(false)
      const toggleLiveStatisticsSetting = ref(false)
      const toggleBettingInformation= ref(false)

  onMounted(() => {
    minesStore.getSeed().then((res) => {
      currentSeed.value = res.current_seed_hashed;
    });
    minesStore.getSession().then((res) => {
      if (res && res.sweeped_locations) {
        res.sweeped_locations.map((item) => {
          choiceNumbers.value.push(Number(item));
        });
        win.value.status = 0;
        playStatus.value = true;
      }
    });
  });
 
  const startGame = () => {
      mineNumber.value = -1;
      choiceNumbers.value = [];
      gameEnd.value = false;
      const payload = {
        mines: mines.value,
        bet_amt: betSize.value,
        client_seed: currentSeed.value,
      };
      minesStore.playMines(payload).then((res) => {
        if (res.success) {
          win.value.status = 0;
          playStatus.value = true;
        } else {
          $toast.error(res.message, {
            timeout: 2000,
            position: "top-center",
          });
        }
      });
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
    const toogleChoiceNumber = (number) => {
      if (choiceNumbers.value.includes(number)) {
        const numberNumbersArray = choiceNumbers.value.filter(
          (item) => item !== number
        );
        choiceNumbers.value = numberNumbersArray;
      } else {
        choiceNumbers.value.push(number);
        sendSweep(number);
      }
    };
    const pickRandomTile = () => {
      const newNumber = Math.floor(25 * Math.random());
      if (!choiceNumbers.value.includes(newNumber)) {
        choiceNumbers.value.push(newNumber);
        sendSweep(newNumber);
      } else {
        pickRandomTile();
      }
    };
    const sendSweep = (number) => {
      minesStore.sweepMines({ location: number }).then((res) => {
        if (res.success) {
          updateStatusGame(res);
        } else {
          $toast.error(res.message, {
            timeout: 2000,
            position: "top-center",
          });
        }
      });
    };
    const updateStatusGame = (res) => {
      if (res.status === "IN_PROGRESS") {
        console.log("res - ", res);
      } else if (res.status === "BUSTED") {
        const bustedNumber = choiceNumbers.value[choiceNumbers.value.length - 1];
        choiceNumbers.value = choiceNumbers.value.filter(
          (item) => item != bustedNumber
        );
        mineNumber.value = bustedNumber;
        gameEnd.value = true;
        playStatus.value = false;
        mineLocations.value = res.mine_locations;
      }
    };
    const cashoutGame = () => {
      minesStore.cashoutMines().then((res) => {
        if (res.success) {
          gameEnd.value = true;
          playStatus.value = false;
          win.value.status = 1;
          win.value.payout = res.payout;
          win.value.profit = res.profit;
          win.value.coin = res.coin;
          mineLocations.value = res.mine_locations;
        } else {
          $toast.error(res.message, {
            timeout: 2000,
            position: "top-center",
          });
        }
      });
    };
    const getCoinIcon = (icon) => {
      return coinIcons[icon];
    };
    const removeFromMines = ()  =>{
      if (mines.value > 1) {
        mines.value--;
      }
    };
    const addToMines = ()  =>{
      if (mines.value < 25) {
        mines.value++;
      }
    };

</script>
<!-- <script src="./index"></script> -->
