import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";
const token = "d9a72f052dbbba0562a03216a49959fdb1549f4d85e9ca09d11a80276974b79c";

export default defineStore("diamonds", {
  state: () => ({
    towersMultipliers: [],
    resultRound: null,
    resultGame: null,
  }),
  actions: {
    async beginDiamondsPlay({ coin, bet_amt, client_seed }) {
      const result = await fetch(`${API_URL}/diamonds/play`, {
        method: "POST",
        body: JSON.stringify({
          language: "uk",
          token: token,
          client_seed,
          bet_amt,
          coin,
        }),
      })
        .then((result) => result.json())
        .then((data) => data);
      return result;
    },
    async getDiamondsSeed() {
      const result = await fetch(`${API_URL}/diamonds/get-seed`, {
        method: "POST",
        body: JSON.stringify({ language: "uk", token: token }),
      })
        .then((result) => result.json())
        .then((data) => data);
      return result;
    },
  },
});
