<template>
  <div class="gamescreen creash-screen">
    <div class="crash">
      <div class="crash__trands" :class="trends && 'show'">
        <div class="crash__trands-top">
          <ToggleSellect
            toggleValueOne="Trends"
            :toggleValueStatus="trends"
            @changeToggleValueStatus="(status) => (trends = status)"
          />
        </div>
        <div class="crash__trands-table">
          <div class="crash__trands-bck"></div>
          <div
            class="crash__trands-column"
            v-for="(trandsColumn, trandsColumnIndex) in trendsTableList"
            :key="trandsColumnIndex + 'trandsColumn'"
          >
            <div
              class="crash__trands-item"
              v-for="(trandsItem, trandsItemIndex) in trandsColumn"
              :key="trandsItemIndex + 'trandsItem'"
            >
              <div
                class="crash__trands-status"
                :class="trandsItem.status ? 'win' : 'lose'"
              >
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="crash__game" :class="trends && 'show-trands'">
        <div class="crash__canvas">
          <canvas height="732" width="1054" ref="canvasRef"></canvas>
        </div>
        <div class="crash__content">
          <div class="crash__history">
            <div
              class="crash__history-item"
              v-for="(item, index) in lastGamesHistroy"
              :key="index + 'history'"
              :class="item.crashPoint > 2 ? 'plus' : ''"
            >
              {{ +item.crashPoint }}
            </div>
          </div>
          <div class="crash__content-top">
            <ToggleSellect
              toggleValueOne="Effect"
              :toggleValueStatus="effectStatus"
              @changeToggleValueStatus="(status) => (effectStatus = status)"
            />
            <ToggleSellect
              toggleValueOne="Trends"
              :toggleValueStatus="trends"
              @changeToggleValueStatus="(status) => (trends = status)"
            />
          </div>
          <div class="crash__center">
            <p v-if="newRound.status">Starts in {{ newRound.value }}</p>
            <p
              v-if="updateValue.status"
              :class="effectStatus && updateValue.status ? 'animate' : ''"
            >
              {{ updateValue.value }} <span>x</span>
            </p>
            <p v-if="crashed.status">Crashed @ {{ crashed.value }}x</p>
          </div>
          <div class="crash__option-buttons">
            <OptionButtons 
              @showHotKeysSetting="(e) => toggleHotKeysSetting = e"
              @showSoundSetting="(e) => toggleSoundSetting = e"
              @showLiveStatisticsSetting="(e) => toggleLiveStatisticsSetting = e"
              @showBettingInformation="(e) => toggleBettingInformation = e"
            />
          </div>
          <div class="crash__animate-block">
            <div
              class="crash__rocket"
              :class="effectStatus && userPlayStatus ? 'animate' : ''"
            >
              <span class="crash__rocket-lines" />
              <span class="crash__rocket-lines" />
              <span class="crash__rocket-lines" />
              <span class="crash__rocket-lines" />
              <span class="crash__rocket-lines" />
              <span class="crash__rocket-lines" />
              <div class="crash__fire"></div>
            </div>
          </div>
        </div>
        <div
          class="crash__content-bottom"
          :class="manualAutoStatus ? 'show' : ''"
        >
          <div
            class="gamescreen__form crash__form"
            :class="manualAutoStatus ? 'show' : ''"
          >
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
                v-if="!gameLoad"
                text="Make a bet"
                @click="() => startGame()"
              />
              <template v-else>
                <GameButton
                  :text="!userPlayStatus ? 'Put' : 'Waiting'"
                  @click="() => startGame()"
                  v-if="!userPlayStatus"
                />
                <GameButton
                  text="Bring out"
                  :span="`${(betSize * gameTime).toFixed(6)}`"
                  @click="() => userBringOut()"
                  v-else
                />
              </template>
              <div class="gamescreen__form-selects" />
            </div>
            <div class="gamescreen__form-manual">
              <template v-if="manualAutoStatus">
                <div class="game-label w-50 w-m-100 min-title mb-20">
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
                <div class="game-label w-50 w-m-100 mb-20">
                  <InputValue
                    :value="withdrawAmount"
                    placeholder="withdraw amount"
                    :onlyNumber="true"
                    @changeValue="(e) => (withdrawAmount = e)"
                  />
                </div>
              </template>
              <template v-else>
                <div class="game-label w-53 w-m-100 min-title mb-20">
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
                <div class="game-label w-15 w-m-50 w-s-100 mb-20">
                  <InputValue
                    :onlyRead="true"
                    :value="income.toFixed(6)"
                    :onlyNumber="true"
                    placeholder="Income with winnings "
                    @changeValue="(e) => (income = e)"
                  />
                </div>
                <div class="game-label w-15 w-m-50 w-s-100 mb-20">
                  <InputValue
                    :value="coefficients"
                    :onlyNumber="true"
                    placeholder="Pay"
                    @changeValue="(e) => (coefficients = e)"
                    @onBlurFunc="() => changeCoefficients()"
                  />
                </div>
                <div class="game-label w-15 w-m-100 mb-20">
                  <InputValue
                    :value="chance"
                    :onlyNumber="true"
                    :onlyRead="true"
                    placeholder="Chance"
                    @changeValue="(e) => (chance = e)"
                  >
                    <div class="input-value__content-text">%</div>
                  </InputValue>
                </div>
              </template>
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
                    @changeValue="(e) => (onWin = e)"
                  >
                    <div class="input-value__content-text">%</div>
                  </InputValue>
                </div>
                <div class="game-label w-100 p-false">
                  <RadioButtons
                    :list="radioList"
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
                  value="Change Cashout At:"
                  :activeChecked="changeWithdrawal"
                  @changeChecked="(e) => (changeWithdrawal = e)"
                />
              </div>
              <div
                class="game-label w-50 w-s-100"
                style="marginTop: 20, marginBottom: 10"
              >
                <CheckedButton
                  value="Change Cashout At:"
                  :activeChecked="changeWithdrawalTwo"
                  @changeChecked="(e) => (changeWithdrawalTwo = e)"
                />
              </div>
              <div class="game-label w-50 w-m-100">
                <InputValue
                  :value="changeCashoutLoseAt"
                  placeholder=""
                  @changeValue="(e) => (changeCashoutLoseAt = e)"
                />
              </div>
              <div class="game-label w-50 w-m-100">
                <InputValue
                  :value="changeCashoutWinAt"
                  placeholder=""
                  @changeValue="(e) => (changeCashoutWinAt = e)"
                />
              </div>

              <div class="game-label w-50 w-m-100">
                <InputValue
                  :value="numberOfBets"
                  placeholder="Maximum bet"
                  @changeValue="(e) => (numberOfBets = e)"
                >
                  <OptionButton
                    size="small"
                    @clickEvent="() => console.log('infinity')"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'infinity']"
                      color="black"
                    />
                  </OptionButton>
                </InputValue>
              </div>
              <div class="game-label w-50 w-m-100">
                <InputValue
                  :value="numberOfBets"
                  placeholder="Maximum number of bets"
                  @changeValue="(e) => (numberOfBets = e)"
                >
                  <OptionButton
                    size="small"
                    @clickEvent="() => console.log('infinity')"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'infinity']"
                      color="black"
                    />
                  </OptionButton>
                </InputValue>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="crash-players">
      <div class="crash-players__titles">
        <p>Player</p>
        <p>.</p>
        <p>bio</p>
        <p>income</p>
      </div>
      <div class="crash-players__content">
        <div class="crash-players__list">
          <div
            v-for="(item, index) in players"
            :key="index + 'players'"
            class="crash-players__item"
          >
            <template v-if="item">
              <p>
                {{ item.userName }}
              </p>
              <p>{{ item.at ? item.at : "-" }}</p>
              <p>
                <img
                  :src="getCoinIcon(item.coin.toLowerCase())"
                  alt="coin-icon"
                />{{ item.betAmt }}
              </p>
              <p>
                <img
                  v-if="item.profit"
                  :src="getCoinIcon(item.coin.toLowerCase())"
                  alt="coin-icon"
                />
                {{ item.profit ? item.profit : "-" }}
              </p>
            </template>
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
  import coinIcons from "../../../mixins/coinIcons";
  import OptionButtons from "@/components/games/option-buttons/OptionButtons.vue";
  import OptionButton from "@/components/games/option-buttons/OptionButton.vue";
  import ToggleSellect from "@/components/games/ToggleSellect.vue";
  import GameButton from "@/components/games/buttons/GameButton.vue";
  import InputValue from "@/components/games/InputValue.vue";
  import ButtonSelectList from "@/components/games/ButtonSelectList.vue";
  import CheckedButton from "@/components/games/CheckedButton.vue";
  import RadioButtons from "@/components/games/RadioButtons.vue";
  import PopupHotkeysSetting from '@/components/popups/PopupHotkeysSetting.vue';
  import PopupSoundSettings from '@/components/popups/PopupSoundSettings.vue';
  import PopupLiveStatisticsSetting from '@/components/popups/PopupLiveStatisticsSetting.vue';
  import PopupBettingInformation from '@/components/popups/PopupBettingInformation.vue';
  import Preloader from '@/components/games/Preloader.vue'
  import { useToast } from 'vue-toastification';

  const $toast = useToast();

  const minBetSize = 0.1;
  const maxBetSize = 1000.0;

  const trends = ref(false);
  const effectStatus = ref(true);
  const userPlayStatus = ref(false);
  const betSize = ref(0.1,);
  const radioList = ref([
    { id: 1, value: "Reset to Base bet" },
    { id: 2, value: "Stop betting" },
    { id: 3, value: "Change Ber By (%)" },
  ]);
  const newRound = ref( { status: false, value: 6.0 });
  const updateValue = ref( { status: false, value: 6.0 });
  const crashed = ref( { status: false, value: 6.0 });
  const manualAutoStatus = ref( false);
  const gameLoad = ref( false);
  const betSizeArray = ref([
    { id: 1, value: "MIN" },
    { id: 2, value: "1/2" },
    { id: 3, value: "2x" },
    { id: 4, value: "MAX" },
  ]);
  const activeButtonList = ref( []);
  const income = ref( 0.001);
  const withdrawAmount = ref( 0);
  const coefficients = ref( 1.01);
  const chance = ref( 95.04);
  const stopOnProfit = ref( 1);
  const stopOnLoss = ref( 1);
  const onWin = ref( 1);
  const activeOnWinRadio = ref( 1);
  const onLose = ref( 1);
  const activeOnLoseRadio = ref( 1);
  const changeWithdrawal = ref( false);
  const changeWithdrawalTwo = ref( false);
  const changeCashoutLoseAt = ref( 2);
  const changeCashoutWinAt = ref( 2);
  const numberOfBets = ref( 1);
  const players = ref( []);
  const historyList = ref( []);
  const trendsTableList = ref( []);
  const lastGamesHistroy = ref( []);
  const gameTime = ref( 1);
  const leftLines = ref( { lines: ["1.00", "1.20", "1.40", "1.60", "1.90"] });
  const startTimer = ref(1)
  const toggleHotKeysSetting = ref(false)
  const toggleSoundSetting = ref(false)
  const toggleLiveStatisticsSetting = ref(false)
  const toggleBettingInformation= ref(false)
  
  onMounted(() => {
    createCanvas();
    connectSocket();
  })
  
  const connectSocket = () => {
      let crashSocketUrl = "wss://socket.pasino.com/crash/";
      let ws = new WebSocket(crashSocketUrl);
      let playersList = [];
      let roundList = [];
      const getCurrentGame = [
        JSON.stringify({ type: "get_current_bets" }),
        JSON.stringify({ type: "get_previous_rounds" }),
        JSON.stringify({ type: "get_coin_parameters", coin: "GEM" }),
      ];
      ws.onopen = () => {
        getCurrentGame.map((itemMessage) => ws.send(itemMessage));
      };

      ws.addEventListener("message", (e) => {
        const data = JSON.parse(e.data);
        if (data.method === "current_bets") {
          playersList = addToPlayerList(data.bets);
          players.value = playersList;
        }
        if (data.method === "previous_rounds") {
          roundList = addToHistoryList(data.rounds);
          historyList.values = roundList;
          addToLastGamesHistory(roundList);
          compileTrendList(roundList);
        }
        if (data.method === "new_round") {
          newRound.value = { status: true, value: data.value };
          updateValue.value = { status: false, value: "0:00" };
          crashed.value = { status: false, value: "0:00" };
        } else if (data.method === "update_value") {
          newRound.value = { status: false, value: "0:00" };
          crashed.value = { status: false, value: "0:00" };
          updateValue.value = { status: true, value: data.value };
          userPlayStatus.value = true;
        } else if (data.method === "crashed") {
          crashed.value = { status: true, value: data.value };
          newRound.value = { status: false, value: "0:00" };
          updateValue.value = { status: false, value: "0:00" };
          userPlayStatus.value = false;
          playersList = [];
          players.value = [];

          roundList.push({
            crashPoint: data.value,
            id: data.id,
            seed: data.server_seed,
          });
          historyList.value = roundList;
          addToLastGamesHistory(roundList);
          compileTrendList(roundList);
        } else if (data.method === "new_bet") {
          const newPlayer = {
            userName: data.user_name,
            userId: data.user_id,
            betAmt: data.bet_amt,
            coin: data.coin,
          };
          playersList.push(newPlayer);
          players.value = playersList;
        } else if (data.method === "bet_cashedout_update") {
          betCashedoutUpdate(data, playersList);
        }
      });
  };

  function addToPlayerList(bets) {
      const playersList = [];
      Object.keys(bets).map((bet) => {
        playersList.push({
          userName: bets[bet].user_name,
          userId: bets[bet].user_id,
          betAmt: bets[bet].bet_amt,
          coin: bets[bet].coin,
          profit: bets[bet].profit,
          at: bets[bet].cashed_out_at,
        });
      });
      return playersList;
    };
  
   function addToHistoryList(rounds) {
      const roundList = [];
      Object.keys(rounds).map((round) => {
        return roundList.push({
          crashPoint: rounds[round].crash_point,
          id: rounds[round].id,
          seed: rounds[round].seed,
        });
      });
      return roundList;
    };

    const addToLastGamesHistory = (list) => {
      const width = window.innerWidth;
      const items = width > 1224 ? 10 : width > 992 ? 7 : width > 660 ? 6 : 5;
      list.length > items
        ? (lastGamesHistroy.value = list.slice(-items))
        : (lastGamesHistroy.value = list);
    };


    const compileTrendList = (roundList) => {
      const trandsList = [];
      let trandsListLength = 0;
      let trandsListStatus = false;
      roundList.map((roundItemm, roundIndex) => {
        if (roundIndex === 0) {
          if (+roundItemm.crashPoint > 2) {
            trandsListStatus = true;
          }
          trandsList.push([
            {
              crashPoint: roundItemm.crashPoint,
              id: roundItemm.id,
              seed: roundItemm.seed,
              status: trandsListStatus,
            },
          ]);
        } else {
          if (+roundItemm.crashPoint > 2 && trandsListStatus) {
            trandsList[trandsListLength].push({
              crashPoint: roundItemm.crashPoint,
              id: roundItemm.id,
              seed: roundItemm.seed,
              status: trandsListStatus,
            });
          } else if (+roundItemm.crashPoint > 2 && !trandsListStatus) {
            trandsListStatus = true;
            trandsList.push([
              {
                crashPoint: roundItemm.crashPoint,
                id: roundItemm.id,
                seed: roundItemm.seed,
                status: trandsListStatus,
              },
            ]);
            trandsListLength++;
          } else if (+roundItemm.crashPoint < 2 && !trandsListStatus) {
            trandsList[trandsListLength].push({
              crashPoint: roundItemm.crashPoint,
              id: roundItemm.id,
              seed: roundItemm.seed,
              status: trandsListStatus,
            });
          } else if (+roundItemm.crashPoint < 2 && trandsListStatus) {
            trandsListStatus = false;
            trandsList.push([
              {
                crashPoint: roundItemm.crashPoint,
                id: roundItemm.id,
                seed: roundItemm.seed,
                status: trandsListStatus,
              },
            ]);
            trandsListLength++;
          }
        }
      });
      trendsTableList.value = trandsList;
    };


    const betCashedoutUpdate = (data, playersList) => {
      const player = playersList.filter(
        (item) => item.userId === data.user_id
      )[0];
      const playerIndex = playersList.indexOf(player);
      if (player) {
        player.profit = data.profit;
        player.at = data.at;
      }
      playersList[playerIndex] = player;
      players.value = playersList;
    };

    const startGame = () => {
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

    const getCoinIcon = (icon) => {
      return coinIcons[icon];
    };

    const createCanvas = () => {
      matchCanvasLeftLines(leftLines.value.lines);
    };

    const matchCanvasLeftLines = (lines, time) => {
      const timer = time ? time : gameTime.value;
      const lastTime = +lines.slice(-1);
      if (lastTime < timer) {
        const newLines = lines.slice(-4);
        newLines.push((lastTime + 0.2).toFixed(2).toString());
        canvasLeftLines(newLines);
        leftLines.value.lines = newLines;
        return false;
      }
      canvasLeftLines(lines);
    };

    const canvasLeftLines = (lines) => {
      let canvas = document.querySelector("canvas");
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, 200, 732);
      context.font = "22px Avenir Next";
      context.fillStyle = "white";
      lines.map((item, index) => {
        const itemPosition = 500 / lines.length - 3;
        context.fillText(item, 30, 550 - itemPosition * index);
      });
    };

</script>
