import coinIcons from "../../../mixins/coinIcons";

const minBetSize = 0.1;
const maxBetSize = 1000.0;

export default {
  components: {
    OptionButtons: () =>
      import("@/components/games/option-buttons/OptionButtons.vue"),
    OptionButton: () =>
      import("@/components/games/option-buttons/OptionButton.vue"),
    ToggleSellect: () => import("@/components/games/ToggleSellect.vue"),
    GameButton: () => import("@/components/games/buttons/GameButton.vue"),
    InputValue: () => import("@/components/games/InputValue.vue"),
    ButtonSelectList: () => import("@/components/games/ButtonSelectList.vue"),
    CheckedButton: () => import("@/components/games/CheckedButton.vue"),
    RadioButtons: () => import("@/components/games/RadioButtons.vue"),
  },
  data() {
    return {
      trends: false,
      effectStatus: true,
      userPlayStatus: false,
      betSize: 0.1, 
      radioList: [
        { id: 1, value: "Reset to Base bet" },
        { id: 2, value: "Stop betting" },
        { id: 3, value: "Change Ber By (%)" },
      ],
      newRound: { status: false, value: 6.0 },
      updateValue: { status: false, value: 6.0 },
      crashed: { status: false, value: 6.0 },
      manualAutoStatus: false,
      gameLoad: false,
      betSizeArray: [
        { id: 1, value: "MIN" },
        { id: 2, value: "1/2" },
        { id: 3, value: "2x" },
        { id: 4, value: "MAX" },
      ],
      activeButtonList: [],
      income: 0.001,
      withdrawAmount: 0,
      coefficients: 1.01,
      chance: 95.04,
      stopOnProfit: 1,
      stopOnLoss: 1,
      onWin: 1,
      activeOnWinRadio: 1,
      onLose: 1,
      activeOnLoseRadio: 1,
      changeWithdrawal: false,
      changeWithdrawalTwo: false,
      changeCashoutLoseAt: 2,
      changeCashoutWinAt: 2,
      numberOfBets: 1,
      players: [],
      historyList: [],
      trendsTableList: [],
      lastGamesHistroy: [],
      gameTime: 1,
      leftLines: { lines: ["1.00", "1.20", "1.40", "1.60", "1.90"] },
    };
  },
  mounted: function () {
    this.createCanvas();
  },
  created() {
    this.connectSocket();
  },
  methods: {
    connectSocket() {
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
          playersList = this.addToPlayerList(data.bets);
          this.players = playersList;
        }
        if (data.method === "previous_rounds") {
          roundList = this.addToHistoryList(data.rounds);
          this.historyList = roundList;
          this.addToLastGamesHistory(roundList);
          this.compileTrendList(roundList);
        }
        if (data.method === "new_round") {
          this.newRound = { status: true, value: data.value };
          this.updateValue = { status: false, value: "0:00" };
          this.crashed = { status: false, value: "0:00" };
        } else if (data.method === "update_value") {
          this.newRound = { status: false, value: "0:00" };
          this.crashed = { status: false, value: "0:00" };
          this.updateValue = { status: true, value: data.value };
          this.userPlayStatus = true;
        } else if (data.method === "crashed") {
          this.crashed = { status: true, value: data.value };
          this.newRound = { status: false, value: "0:00" };
          this.updateValue = { status: false, value: "0:00" };
          this.userPlayStatus = false;
          playersList = [];
          this.players = [];

          roundList.push({
            crashPoint: data.value,
            id: data.id,
            seed: data.server_seed,
          });
          this.historyList = roundList;
          this.addToLastGamesHistory(roundList);
          this.compileTrendList(roundList);
        } else if (data.method === "new_bet") {
          const newPlayer = {
            userName: data.user_name,
            userId: data.user_id,
            betAmt: data.bet_amt,
            coin: data.coin,
          };
          playersList.push(newPlayer);
          this.players = playersList;
        } else if (data.method === "bet_cashedout_update") {
          this.betCashedoutUpdate(data, playersList);
        }
      });
    },

    addToPlayerList(bets) {
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
    },

    addToHistoryList(rounds) {
      const roundList = [];
      Object.keys(rounds).map((round) => {
        return roundList.push({
          crashPoint: rounds[round].crash_point,
          id: rounds[round].id,
          seed: rounds[round].seed,
        });
      });
      return roundList;
    },

    addToLastGamesHistory(list) {
      const width = window.innerWidth;
      const items = width > 1224 ? 10 : width > 992 ? 7 : width > 660 ? 6 : 5;
      list.length > items
        ? (this.lastGamesHistroy = list.slice(-items))
        : (this.lastGamesHistroy = list);
    },

    compileTrendList(roundList) {
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
      this.trendsTableList = trandsList;
    },

    betCashedoutUpdate(data, playersList) {
      const player = playersList.filter(
        (item) => item.userId === data.user_id
      )[0];
      const playerIndex = playersList.indexOf(player);
      if (player) {
        player.profit = data.profit;
        player.at = data.at;
      }
      playersList[playerIndex] = player;
      this.players = playersList;
    },

    startGame() {
      setSrartTimer(2) 
      setEndGame(false)
      beginStartTimer(startTimer) 
      setGameLoad(true)
    };
    changeButtonSelect(e) {
      switch (e) {
        case 1:
          this.betSize = 0.1;
          this.changeBetSize(0.1);
          break;
        case 2:
          this.betSize =
            this.betSize / 2 > minBetSize ? this.betSize / 2 : minBetSize;
          this.changeBetSize(this.betSize);
          break;
        case 3:
          this.betSize =
            this.betSize * 2 < maxBetSize ? this.betSize * 2 : maxBetSize;
          this.changeBetSize(this.betSize);
          break;
        case 4:
          this.betSize = 1000.0;
          this.changeBetSize(1000.0);
          break;
      }
    },
    changeBetSize(e) {
      this.income = this.coefficients * e - e;
      this.betSize = e;
    },
    getCoinIcon(icon) {
      return coinIcons[icon];
    },
    createCanvas() {
      this.matchCanvasLeftLines(this.leftLines.lines);
    },

    matchCanvasLeftLines(lines, time) {
      const timer = time ? time : this.gameTime;
      const lastTime = +lines.slice(-1);
      if (lastTime < timer) {
        const newLines = lines.slice(-4);
        newLines.push((lastTime + 0.2).toFixed(2).toString());
        this.canvasLeftLines(newLines);
        this.leftLines.lines = newLines;
        return false;
      }
      this.canvasLeftLines(lines);
    },
    canvasLeftLines(lines) {
      let canvas = document.querySelector("canvas");
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, 200, 732);
      context.font = "22px Avenir Next";
      context.fillStyle = "white";
      lines.map((item, index) => {
        const itemPosition = 500 / lines.length - 3;
        context.fillText(item, 30, 550 - itemPosition * index);
      });
    },
  },
};
