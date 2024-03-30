import { mapActions } from "pinia"; 
import useDiamondsStore from "@/store/games/diamonds";

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
    GameSelect: () => import("@/components/games/GameSelect.vue"),
    InputNumber: () => import("@/components/games/InputNumber.vue"),
  },
  data() {
    return {
      numberOfBets: 0,
      radioList: [
        { id: 1, value: "Reset to Base bet" },
        { id: 2, value: "Stop betting" },
        { id: 3, value: "Change Ber By (%)" },
      ],
      activeOnWinRadio: 1,
      activeOnLoseRadio: 1,
      stopOnProfit: 1,
      stopOnLoss: 1,
      onWin: 1,
      onLose: 1,
      winColor: {
        id: 0,
        index: 6,
        color: "green",
      },
      activeList: -1,
      profit: 0,
      chance: 0,
      modalPosition: 350,
      manualAutoStatus: false,
      colorList: [
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
      ],
      diamondsInfo: [
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
      ],
      diamondsInfoActive: {
        count: 0.0,
        chance: 14.99,
        activeDiamounds: 0,
        id: 1,
      },
      response: {
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
      },
      resultColors: [],
      betSize: 0.01,
      betSizeArray: [
        { id: 1, value: "MIN" },
        { id: 2, value: "1/2" },
        { id: 3, value: "2x" },
        { id: 4, value: "MAX" },
      ],
      activeButtonList: [],
      resultInfo: {},
      userSeed: null,
    };
  },
  created(){
    this.getDiamondsSeed().then((res) => {
      if (res.success) {
        this.userSeed = res.seed.current_seed_hashed;
      } else {
        this.$toast.error(res.message, {
          timeout: 2000,
          position: "top-center",
        });
      }
    });
  },
  methods: {
    startGame() {
      this.resultColors = [];
      this.beginDiamondsPlay({
        coin: "GEM",
        bet_amt: this.betSize.toString(),
        client_seed: this.userSeed,
      }).then((res) => {
        if (res.success) {
          this.returnDiamondColor(res.roll_numbers);
          this.countDuplicates(res.roll_numbers);
        } else {
          this.$toast.error(res.message, {
            timeout: 2000,
            position: "top-center",
          });
        }
      });
    },
    changeActiveItem(infoIndex, infoItem) {
      const blockHeight = 55;
      const topPoisition = infoIndex * blockHeight;
      this.modalPosition = topPoisition + 25;
      this.activeList = infoIndex;
      this.diamondsInfoActive = infoItem;
    },
    returnDiamondColor(rollNumbers) {
      setTimeout(() => {
        rollNumbers.map((rollItem) => {
          const diamodColor = this.colorList.filter(
            (colorItem) => +colorItem.id === rollItem
          )[0];
          this.resultColors.push(diamodColor.color);
        });
      }, 100);
    },

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
    countDuplicates(arr) {
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
        this.checkWinResult(result)
      }else{
        console.log('ready')
        this.resultInfo = result;
        this.winColor = { id: 0, index: 6, color: 'green' };
        this.changeActiveItem(
          this.winColor.index,
          this.diamondsInfo[this.winColor.index]
        );
      };
    },
    checkWinResult(result) {
      let winDiamond = { 0: -1 };
      Object.keys(result).map((item) => {
        if (Object.values(winDiamond)[0] < result[item]) {
          winDiamond = { [item]: result[item] };
        }
      });
      const winColor = this.colorList.filter(
        (colorItem) => +colorItem.id === +Object.keys(winDiamond)[0]
      )[0].color;
      if (
        Object.values(winDiamond)[0] === 2 &&
        Object.keys(result).length === 1
      ) {
        this.winColor = { id: 1, index: 5, color: winColor };
      } else if (
        Object.values(winDiamond)[0] === 2 &&
        Object.keys(result).length === 2
      ) {
        this.winColor = { id: 2, index: 4, color: winColor };
      } else if (
        Object.values(winDiamond)[0] === 3 &&
        Object.keys(result).length === 1
      ) {
        this.winColor = { id: 3, index: 3, color: winColor };
      } else if (
        Object.values(winDiamond)[0] === 3 &&
        Object.keys(result).length === 2
      ) {
        this.winColor = { id: 4, index: 2, color: winColor };
      } else if (Object.values(winDiamond)[0] === 4) {
        this.winColor = { id: 5, index: 1, color: winColor };
      } else if (Object.values(winDiamond)[0] === 5) {
        this.winColor = { id: 6, index: 0, color: winColor };
      }
      this.changeActiveItem(
        this.winColor.index,
        this.diamondsInfo[this.winColor.index]
      );
    },
    ...mapActions(useDiamondsStore, ["beginDiamondsPlay", "getDiamondsSeed"]),
  },
};
