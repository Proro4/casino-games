import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";
const token = "d9a72f052dbbba0562a03216a49959fdb1549f4d85e9ca09d11a80276974b79c";

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
