import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";
const token = "d9a72f052dbbba0562a03216a49959fdb1549f4d85e9ca09d11a80276974b79c";

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
