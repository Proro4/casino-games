<template>
  <div class="gamescreen dice-screen border">
    <OptionButtons
      @showHotKeysSetting="(e) => toggleHotKeysSetting = e"
      @showSoundSetting="(e) => toggleSoundSetting = e"
      @showLiveStatisticsSetting="(e) => toggleLiveStatisticsSetting = e"
      @showBettingInformation="(e) => toggleBettingInformation = e"
    /> 
    <div class="dice">
      <div class="dice__bck" />
      <div class="dice__block">
        <div class="dice__block-game">
          <div class="dice__block-numbers">
            <template v-for="(itemList, indexList) in selectNumber">
              <div
                class="dice__numbers-list"
                v-if="itemList"
                :key="indexList"
                :style="`transition: .${
                  isActiveAnimation ? itemList.length * 8 : 0
                }s; transform: translateY(${isActiveAnimation ? `-${211 * (itemList.length - 1)}` : 0}px)`"
              >
                <template v-for="(itemImg, indexImg) in itemList">
                  <img
                    v-if="winStatus"
                    :key="indexImg + itemImg"
                    :src='imgRequest(itemImg)'
                    alt="item"
                  />
                  <img
                    v-else
                    :key="indexImg + itemImg + 1"
                    :src="imgRequest(+itemImg+9)"
                    alt="item"
                  />
                </template>
              </div>
            </template>
          </div>
          <div class="dice__block-hight" v-if="!hightShortStatus">
            {{ `${Number(heightValue).toFixed(0)}` }}
            <span />
          </div>
          <div class="dice__block-short" v-else>
            <span />
            {{ `${Number(shortValue).toFixed(0)}` }}
          </div>
        </div>
      </div>
      <div class="gamescreen__form dice__form">
        <div class="gamescreen__form-top">
          <span class="desktop">
            <toggle-sellect
              toggleValueOne="HIGHT"
              toggleValueTwo="SHORT"
              toggleValueName="hightShortStatus"
              :toggleValueStatus="hightShortStatus"
              @changeToggleValueStatus="(status) => (hightShortStatus = status)"
            />
          </span>
          <GameButton text="Make a bet" @onClick="() => randomDice()" />

          <div class="gamescreen__form-selects">
            <span class="mobile">
              <toggle-sellect
                toggleValueOne="HIGHT"
                toggleValueTwo="SHORT"
                toggleValueName="hightShortStatus"
                :toggleValueStbetSizeArrayatus="hightShortStatus"
                @changeToggleValueStatus="(status) => (hightShortStatus = status)"
              />
            </span>
            <toggle-sellect
              toggleValueOne="MANUAL"
              toggleValueTwo="AUTO"
              toggleValueName="manualAutoStatus"
              :toggleValueStatus="manualAutoStatus"
              @changeToggleValueStatus="(status) => (manualAutoStatus = status)"
            />
          </div>
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
              placeholder="Coefficients"
              @changeValue="(e) => changeCoefficients(e)"
              @onBlurFunc="() => validCoefficient()"
              
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
          <div class="game-label w-50 w-s-100 mb-20">
            <InputValue
              :value="stopOnProfit"
              :onlyNumber="true"
              placeholder="Stop on profit"
              @changeValue="(e) => (stopOnProfit = e)"
            />
          </div>

          <div class="game-label w-50 w-s-100 mb-20">
            <InputValue
              :value="stopOnLoss"
              :onlyNumber="true"
              placeholder="Stop on income"
              @changeValue="(e) => (stopOnLoss = e)"
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
          <div
            class="game-label w-50 w-s-100"
            style="marginTop: 20, marginBottom: 10"
          >
            <CheckedButton
              value="change withdrawal amount/chance"
              :activeChecked="changeWithdrawal"
              @changeChecked="(e) => (changeWithdrawal = e)"
            />
          </div>
          <div
            class="game-label w-50 w-s-100"
            style="marginTop: 20, marginBottom: 10"
          >
            <CheckedButton
              value="change withdrawal amount/chance"
              :activeChecked="changeWithdrawalTwo"
              @changeChecked="(e) => (setChangeWithdrawalTwo = e)"
            />
          </div>
          <div class="game-label w-25 w-s-50 mb-20">
            <InputValue
              :value="changeWithdrawalInputOne"
              :onlyNumber="true"
              placeholder=""
              @changeValue="(e) => (changeWithdrawalInputOne = e)"
            />
          </div>
          <div class="game-label w-25 w-s-50 mb-20">
            <InputValue
              :value="changeWithdrawalInputTwo"
              :onlyNumber="true"
              placeholder=""
              @changeValue="(e) => (changeWithdrawalInputTwo = e)"
            >
              <div class="input-value__content-text">%</div>
            </InputValue>
          </div>
          <div class="game-label w-25 w-s-50 mb-20">
            <InputValue
              :value="changeWithdrawalTwoInputOne"
              :onlyNumber="true"
              placeholder=""
              @changeValue="(e) => (changeWithdrawalTwoInputOne = e)"
            />
          </div>
          <div class="game-label w-25 w-s-50 mb-20">
            <InputValue
              :value="changeWithdrawalTwoInputTwo"
              :onlyNumber="true"
              placeholder=""
              @changeValue="(e) => (changeWithdrawalTwoInputTwo = e)"
            >
              <div class="input-value__content-text">%</div>
            </InputValue>
          </div>

          <div class="game-label w-50 w-m-100">
            <div class="game-label__name">Mode selection</div>
            <RadioButtons
              :list="radioListTwo"
              radioIndex="C"
              :activeRadio="activeOnRadioTwo"
              @changeRadio="(e) => (activeOnRadioTwo = e)"
            />
          </div>
          <div class="game-label w-50 w-m-100">
            <InputValue
              :value="numberOfBets"
              placeholder="Number of Bets"
              @changeValue="(e) => (numberOfBets = e)"
            >
              <OptionButton
                size="small"
                @clickEvent="() => console.log('infinity')"
              >
                <font-awesome-icon :icon="['fas', 'infinity']" color="black" />
              </OptionButton>
            </InputValue>
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
import useDiceStore from "@/store/games/dice";
import Numbers from "./numbers";
import PopupHotkeysSetting from '@/components/popups/PopupHotkeysSetting.vue';
import PopupSoundSettings from '@/components/popups/PopupSoundSettings.vue';
import PopupLiveStatisticsSetting from '@/components/popups/PopupLiveStatisticsSetting.vue';
import PopupBettingInformation from '@/components/popups/PopupBettingInformation.vue';
import OptionButtons from "@/components/games/option-buttons/OptionButtons.vue";
import OptionButton from "@/components/games/option-buttons/OptionButton.vue";
import ToggleSellect from "@/components/games/ToggleSellect.vue";
import GameButton from "@/components/games/buttons/GameButton.vue";
import InputValue from "@/components/games/InputValue.vue";
import ButtonSelectList from "@/components/games/ButtonSelectList.vue";
import RadioButtons from "@/components/games/RadioButtons.vue";
import CheckedButton from "@/components/games/CheckedButton.vue";
import Preloader from '@/components/games/Preloader.vue'
import { useToast } from 'vue-toastification';

const $toast = useToast();

const diceStore = useDiceStore();


const minBetSize = 0.1;
const maxBetSize = 1000.0;

const minCoefficient = 1.0001;
const maxCoefficient = 9500;

const minChance = 0.01;
const maxChance = 95;

const betSizeArray = ref([
        { id: 1, value: "MIN" },
        { id: 2, value: "1/2" },
        { id: 3, value: "2x" },
        { id: 4, value: "MAX" },
      ])
const radioList = ref([
        { id: 1, value: "Stop betting" },
        { id: 2, value: "Return to base rate" },
        { id: 3, value: "Raise your bid by (%)" },
      ])

const radioListTwo = ref([
        { id: 1, value: "Toggle on win" },
        { id: 2, value: "Switch on loss" },
        { id: 3, value: "Toggle after every bet" },
        { id: 4, value: "Do not switch" },
      ]);
const hightShortStatus =  ref(false);
const manualAutoStatus =  ref(false);
const selectNumber =  ref([[1], [1], [1], [1]]);
const betSize =  ref(0.1);
const income =  ref(0.00001);
const coefficients =  ref(1.0001);
const chance =  ref(maxChance - 0.01);
const stopOnProfit =  ref(1);
const stopOnLoss =  ref(1);
const onWin =  ref(1);
const onLose =  ref(1);
const activeButtonList =  ref([]);
const activeOnWinRadio =  ref(1);
const activeOnLoseRadio = ref(1);
const changeWithdrawal = ref(false);
const changeWithdrawalTwo = ref(false);
const changeWithdrawalInputOne = ref(1.9);
const changeWithdrawalInputTwo = ref(50);
const changeWithdrawalTwoInputOne = ref(1.9);
const changeWithdrawalTwoInputTwo = ref(50);
const activeOnRadioTwo = ref(1);
const numberOfBets = ref(1);
const isActiveAnimation = ref(false);
const isLoadGame = ref(false);
const currentSeed = ref("");
const winStatus = ref(1);
const heightValue = ref("500");
const shortValue = ref("9500");
const toggleHotKeysSetting = ref(false)
const toggleSoundSetting = ref(false)
const toggleLiveStatisticsSetting = ref(false)
const toggleBettingInformation= ref(false)


onMounted(()=>{
  diceStore.getSeed().then((res) => {
    currentSeed.value = res.current_seed_hashed;
    });
})



const imgRequest = (numb) => {
  return Numbers[numb];
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
function changeBetSize(e) {
    income.value = coefficients.value * e - e;
    betSize.value = e;
  };
function validBetSize() {
  if (+betSize.value < minBetSize) {
    betSize.value = minBetSize;
  } else if (+betSize.value > maxBetSize) {
    betSize.value = maxBetSize;
  };
}

function randomDice(){
    let code = "";
    if (isLoadGame.value) {
      return false;
    }

    diceStore.playDice({
      hightShortStatus: hightShortStatus.value,
      betSize: betSize.value,
      coefficients: coefficients.value,
      chance: chance.value,
      income: income.value,
      currentSeed: currentSeed.value,
    }).then((res) => {
      if (!res.success) {
        $toast.error("user is not logged", {
          timeout: 2000,
          position: "top-center",
        });
        return false;
      }

      isActiveAnimation.value = false;
      isLoadGame.value = true;
      const newSelectNumber = [];
      code = res.roll_number;
      for (let i = 0; i <= 3; i++) {
        const numberList = [];
        const prevLastElement = selectNumber.value[i].at(-1);
        const newNumber = +code.toString().slice(i, i + 1);
        if (prevLastElement <= newNumber) {
          for (let j = prevLastElement; j <= newNumber; j++) {
            numberList.push(j);
          }
        } else {
          for (let j = prevLastElement; j <= 9 + newNumber; j++) {
            if (j < 10) {
              numberList.push(j);
            } else {
              numberList.push(j - 9);
            }
          }
        }
        newSelectNumber.push(numberList);
      }
      selectNumber.value = newSelectNumber;

      setTimeout(() => {
        isActiveAnimation.value = true;
        winStatus.value = res.win;
      }, 300);
      setTimeout(() => {
        checkedGameStatus(winStatus.value);
      }, 1000);
    });
  };


function checkedGameStatus() {
  if (winStatus.value) {
    $toast.success("Congratulations you win", {
      timeout: 2000,
      position: "top-center",
    });
  } else {
    $toast.error("Unfortunately you lose", {
      timeout: 2000,
      position: "top-center",
    });
  }

  isLoadGame.value = false;
};
function changeCoefficients(e) {
  income.value = e * betSize.value - betSize.value;
  const coefficientsValue =
    e < minCoefficient
      ? minCoefficient
      : e > maxCoefficient
      ? maxCoefficient
      : e;
  const result = maxChance / coefficientsValue;
  changeChance(+result.toFixed(2));
  coefficients.value = e;
};



function changeChance(e) {
  const stepChange =
    e * 100 < minChance * 100 ? minChance : e > maxChance ? maxChance : e;
  let leftValue = 10000 - stepChange * 100 - 1;
  heightValue.value = leftValue;
  shortValue.value = e * 100;
  const result = maxChance / e;
  validCoefficient(+result.toFixed(6));
  chance.value = e;
};
function validCoefficient() {
  const count = maxChance / chance.value;
  const coefficientsValue =
    count * 100000 < minCoefficient * 100000
      ? minCoefficient
      : count > maxCoefficient
      ? maxCoefficient
      : count;
  income.value = +coefficientsValue.toFixed(4) * betSize.value - betSize.value;

  coefficients.value = +coefficientsValue.toFixed(4);
};

function validChance() {
  const result =
  chance.value < minChance
      ? minChance
      : chance.value > maxChance - 0.01
      ? maxChance - 0.1
      : chance.value;
  changeChance(result);
  chance.value = result;
};


</script>