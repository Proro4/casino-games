import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";
const token = "bbff7a2f66131cd070aec3f8e6b6cbf8db66c536fabf5e7687d744a2c0d65643";

export default defineStore("towers", {
  state: () => ({
    towersMultipliers: [],
    resultRound: null,
    resultGame: null,
  }),
  actions: {
    async getTowersConfiguration() {
      const result = await fetch(`${API_URL}/towers/get-configuration`, {
        method: "POST",
        body: JSON.stringify({ language: "uk", token: token }),
      })
        .then((result) => result.json())
        .then((data) => data);
      this.towersMultipliers = result.multipliers;
      return result.multipliers;
    },
    async beginTowersPlay({ coin, difficulty, bet_amt, client_seed }) {
      const result = await fetch(`${API_URL}/towers/play`, {
        method: "POST",
        body: JSON.stringify({
          language: "uk",
          token: token,
          coin,
          difficulty,
          bet_amt,
          client_seed,
        }),
      })
        .then((result) => result.json())
        .then((data) => data);
      return result;
    },
    async getTowersSeed() {
      const result = await fetch(`${API_URL}/towers/get-seed`, {
        method: "POST",
        body: JSON.stringify({ language: "uk", token: token }),
      })
        .then((result) => result.json())
        .then((data) => data);
      return result;
    },
    async towersSweep(location) {
      const result = await fetch(`${API_URL}/towers/sweep`, {
        method: "POST",
        body: JSON.stringify({ language: "uk", token: token, location }),
      })
        .then((result) => result.json())
        .then((data) => data);
      this.resultRound = result;
      return result;
    },
    async towersCashout() {
      const result = await fetch(`${API_URL}/towers/cashout`, {
        method: "POST",
        body: JSON.stringify({ language: "uk", token: token }),
      })
        .then((result) => result.json())
        .then((data) => data);
      this.resultGame = result;
      return result;
    },
  },
});
