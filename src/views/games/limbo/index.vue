<template>
  <div class="gamescreen towers-screen">
    <!-- <div class="border-top"></div> -->
    <option-buttons 
      @showHotKeysSetting="(e) => toggleHotKeysSetting = e"
      @showSoundSetting="(e) => toggleSoundSetting = e"
      @showLiveStatisticsSetting="(e) => toggleLiveStatisticsSetting = e"
      @showBettingInformation="(e) => toggleBettingInformation = e"
    />
    <div class="limbo" :class="crashAnimation && 'crash-animate'">
      <div class="limbo__bck" ></div>
      <div class="limbo__block">
        <div class="limbo__game">
          <div
            class="limbo__game-time"
            :class="statusGame === 1 ? 'win' : statusGame === 0 && 'lose'"
          >
            {{ startTime.toFixed(2) }} <span>x</span>
          </div>
          <div
            class="limbo__game-rocket"
            :class="crashAnimation && 'crash-animate'"
          >
            <div class="limbo__rocket-img">
              <img
                :class="!crashAnimation && 'wait'"
                src="@/assets/images/games/limbo-rocket.png"
                alt="rocket"
              />
            </div>
          </div>
        </div>
        <div class="gamescreen__form">
          <div class="gamescreen__form-top">
            <toggle-sellect
              toggleValueOne="MANUAL"
              toggleValueTwo="AUTO"
              toggleValueName="manualAutoStatus"
              :toggleValueStatus="manualAutoStatus"
              @changeToggleValueStatus="(status) => (manualAutoStatus = status)"
            />
            <GameButton
              text="Make a bet"
              @onClick="() => playGame()"
              :disable="startGame"
            />
          </div>
          <div class="gamescreen__form-manual">
            <div class="game-label w-53 w-m-100 min-title mb-20">
              <input-value
                :value="betSize"
                placeholder="BET SIZE"
                :onlyNumber="true"
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

            <div class="game-label w-15 w-m-50 w-s-100 mb-20">
              <input-value
                :onlyRead="true"
                :value="income.toFixed(6)"
                :onlyNumber="true"
                placeholder="Income with winnings "
                @changeValue="(e) => (income = e)"
              />
            </div>
            <div class="game-label w-15 w-m-50 w-s-100 mb-20">
              <input-value
                :value="coefficients"
                :onlyNumber="true"
                placeholder="Target Multiplier"
                @changeValue="(e) => changeCoefficients(e)"
                @onBlurFunc="() => validCoefficient()"
                :onlyRead="true"
              />
            </div>
            <div class="game-label w-15 w-m-100 mb-20">
              <input-value
                :value="chance"
                :onlyNumber="true"
                placeholder="Chance"
                @changeValue="(e) => changeChance(e)"
                @onBlurFunc="() => validChance()"
                ><div class="input-value__content-text">%</div></input-value
              >
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
  import useLimboStore from "@/store/games/limbo";
  import OptionButtons from "@/components/games/option-buttons/OptionButtons.vue";
  import ToggleSellect from "@/components/games/ToggleSellect.vue";
  import GameButton from "@/components/games/buttons/GameButton.vue";
  import InputValue from "@/components/games/InputValue.vue";
  import ButtonSelectList from "@/components/games/ButtonSelectList.vue";
  import RadioButtons from "@/components/games/RadioButtons.vue";
  import { useToast } from 'vue-toastification';
  import PopupHotkeysSetting from '@/components/popups/PopupHotkeysSetting.vue';
  import PopupSoundSettings from '@/components/popups/PopupSoundSettings.vue';
  import PopupLiveStatisticsSetting from '@/components/popups/PopupLiveStatisticsSetting.vue';
  import PopupBettingInformation from '@/components/popups/PopupBettingInformation.vue';
  import Preloader from '@/components/games/Preloader.vue'

  const $toast = useToast();

  const limboStore = useLimboStore();

  const minBetSize = 0.1;
  const maxBetSize = 1000.0;

  const minChance = 0.01;
  const maxChance = 95;


  const hightShortStatus = ref( false);
  const manualAutoStatus = ref( false);
  const startTime = ref( 1.0);
  const actual_payout = ref( 3.2);
  const betSize = ref( 0.1);
  const betSizeArray = ref([
    { id: 1, value: "MIN" },
    { id: 2, value: "1/2" },
    { id: 3, value: "2x" },
    { id: 4, value: "MAX" },
  ]);
  const activeButtonList = ref( []);
  const income = ref( 0.00001);
  const coefficients = ref( 3);
  const chance = ref( maxChance - 0.01);
  const startGame = ref( false);
  const userSeed = ref( null);
  const statusGame = ref( -1);
  const crashAnimation = ref( false);
  const toggleHotKeysSetting = ref(false)
  const toggleSoundSetting = ref(false)
  const toggleLiveStatisticsSetting = ref(false)
  const toggleBettingInformation= ref(false)

  onMounted(() => {
    limboStore.getLimboSeed().then((res) => {
      if (res.success) {
        limboStore.value = res.seed.current_seed_hashed;
      } else {
        $toast.error("Now you play offline", {
          timeout: 2000,
          position: "top-center",
        });
        $toast.error(res.message, {
          timeout: 2000,
          position: "top-center",
        });
      }
    });
  });


  const playGame = () => {
      actual_payout.value = 7 * Math.random();
      startGame.value = true;
      startTime.value = 1.0;
      startValueTimer();
      setTimeout(() => {
        if (+actual_payout.value > +coefficients.value) {
          statusGame.value = 1;
        } else {
          statusGame.value = 0;
        }
        startGame.value = false;
      }, 1000);
    };
  const startValueTimer = () => {
      let timer = startTime.value;
      setTimeout(() => {
        if (timer < actual_payout.value - 0.01) {
          timer += 0.01;
          startTime.value = timer;
          startValueTimer();
        } else {
          startCrash();
        }
      }, 0.0005);
    };

    const startCrash = () => {
      crashAnimation.value = true;
      setTimeout(() => {
        crashAnimation.value = false;
      }, 1500);
    };
    const validBetSize = () => {
      if (+betSize.value < minBetSize) {
        betSize.value = minBetSize;
      } else if (+betSize.value > maxBetSize) {
        betSize.value = maxBetSize;
      }
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
    }
</script>
<!-- <script src="./index"></script> -->
