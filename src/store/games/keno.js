import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";
const token = "bbff7a2f66131cd070aec3f8e6b6cbf8db66c536fabf5e7687d744a2c0d65643";

export default defineStore("keno", {
  state: () => ({}),
  actions: {
    async getPayoutTable() {
      const result = await fetch(`${API_URL}/keno/payout-table`)
        .then((result) => result.json())
        .then((data) => data);
      return result.table;
    },
    async playKeno(payload) {
      const result = await fetch(`${API_URL}/keno/play`, {
        method: "POST",
        body: JSON.stringify({
          token,
          coin: "GEM",
          language: "uk",
          risk: payload.risk.toString(),
          client_seed: payload.client_seed.toString(),
          numbers_selected: payload.choiceNumbers,
          bet_amt: payload.betSize.toString(),
        }),
      })
        .then((result) => result.json())
        .then((data) => data);
      return result;
    },
    async getSeed() {
      const result = await fetch(`${API_URL}/keno/get-seed`, {
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
