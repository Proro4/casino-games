import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";
const token = "d9a72f052dbbba0562a03216a49959fdb1549f4d85e9ca09d11a80276974b79c";

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
