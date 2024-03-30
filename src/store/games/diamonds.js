import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";
const token = "bbff7a2f66131cd070aec3f8e6b6cbf8db66c536fabf5e7687d744a2c0d65643";

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
