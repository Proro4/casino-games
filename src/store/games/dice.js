import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";
const token = "bbff7a2f66131cd070aec3f8e6b6cbf8db66c536fabf5e7687d744a2c0d65643";

export default defineStore("dice", {
  state: () => ({
    gameResult: [],
    seed: [],
  }),
  actions: {
    async playDice({
      hightShortStatus,
      betSize,
      coefficients,
      chance,
      income,
      currentSeed,
    }) {
        const result = await fetch(`${API_URL}/dice/play`, {
        method: "POST",
        body: JSON.stringify({
          token,
          language: "uk",
          bet_amt: betSize.toString(),
          coin: "GEM",
          type: !hightShortStatus ? "2" : "1",
          payout: coefficients.toString(),
          winning_chance: chance.toString(),
          profit: income.toFixed(6).toString(),
          client_seed: currentSeed.toString(),
        }),
      })
        .then((res) => res.json())
        .then((data) => data);
      this.gameResult = result;
      return result;
    },
    async getSeed() {
      const result = await fetch(`${API_URL}/dice/get-seed`, {
        method: "POST",
        body: JSON.stringify({ language: "uk", token: token }),
      })
        .then((res) => res.json())
        .then((data) => data);
      this.seed = result.seed;
      return result.seed;
    },
  },
});
