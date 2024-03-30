import { defineStore } from "pinia";

const API_URL = "https://api.pasino.com";

export default defineStore("login", {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    async sendLogin(payload) {
      payload.re_response = localStorage.getItem('recaptchaToken')
      payload.token = ''
      payload.language = 'uk'
      const payloadString = JSON.stringify(payload);
      console.log('payload - ', payloadString);
        const result = await fetch(`${API_URL}/account/login`, {
        method: "POST",
        body: payloadString,
      })
        .then((res) => res.json())
        .then((data) => data);
      this.gameResult = result;
      return result;
    },
  },
});
