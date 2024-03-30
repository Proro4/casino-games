import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";
const token = "bbff7a2f66131cd070aec3f8e6b6cbf8db66c536fabf5e7687d744a2c0d65643";

export default defineStore("mines", {
  state: () => ({}),
  actions: {
    async playMines(payload) {
      const result = await fetch(`${API_URL}/mines/play`, {
        method: "POST",
        body: JSON.stringify({
          token,
          language: "uk",
          coin: "GEM",
          bet_amt: payload.bet_amt.toString(),
          client_seed: payload.client_seed,
          mines: payload.mines.toString(),
        }),
      })
        .then((result) => result.json())
        .then((data) => data);
      return result;
    },
    async sweepMines({ location }) {
      const result = await fetch(`${API_URL}/mines/sweep`, {
        method: "POST",
        body: JSON.stringify({
          token,
          language: "uk",
          location: location,
        }),
      })
        .then((result) => result.json())
        .then((data) => data);
      return result;
    },
    async cashoutMines() {
      const result = await fetch(`${API_URL}/mines/cashout`, {
        method: "POST",
        body: JSON.stringify({
          token,
          language: "uk"
        }),
      })
        .then((result) => result.json())
        .then((data) => data);
      return result;
    },
    async getSeed() {
      const result = await fetch(`${API_URL}/mines/get-seed`, {
        method: "POST",
        body: JSON.stringify({ language: "uk", token: token }),
      })
        .then((res) => res.json())
        .then((data) => data);
      this.seed = result.seed;
      return result.seed;
    },
    async getSession() {
      const result = await fetch(`${API_URL}/mines/session`, {
        method: "POST",
        body: JSON.stringify({ language: "uk", token: token }),
      })
        .then((res) => res.json())
        .then((data) => data);
      return result;
    },
  },
});
