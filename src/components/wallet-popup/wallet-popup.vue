<template>
  <v-modal
    :visible="modalVisible"
    @update:visible="modalVisible = $event"
    size="lg"
  >
    <v-tabs>
      <v-tab title="Deposit" active>
        <div class="mb-2">
          <v-select :options="options"></v-select>
        </div>

        <div class="deposit-card mb-2">
          <div class="deposit-card__row">
            <div class="deposit-card__col">
              <h3 class="deposit-card__title">Deposit</h3>
            </div>

            <div class="deposit-card__col">
              <div class="deposit-card__body">
                <p>Deposit <strong>$30 or above</strong> + Bonus</p>
              </div>
            </div>

            <div class="deposit-card__col">
              <div class="deposit-card__body">
                <p>
                  <strong>80%</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="input input--copy mb-4">
          <input
            type="text"
            value="TLVff81wpKLk9XZunfXWdF8Bti6N9"
            placeholder="TLVff81wpKLk9XZunfXWdF8Bti6N9"
            disabled
          />

          <button class="input__btn"></button>
        </div>

        <div class="text-block">
          <p class="text-center">
            <span class="qr-code">
              <img src="@/assets/images/wallet-qr-code.png" alt="" />
            </span>
          </p>

          <p>
            GEM is a fictitious cryptocurrency token that is used for testing
            Pasino games. GEM does not have any value and its sole purpose to
            enable users to test Pasino without spending any real
            cryptocurrencies. Deposits and withdrawals are not available for
            GEM!
          </p>
        </div>
      </v-tab>

      <v-tab title="withdraw"></v-tab>

      <v-tab title="record"></v-tab>

      <v-tab title="exchange"></v-tab>

      <v-tab title="vault">
        <div class="text-block">
          <p>
            GEM is a fictitious cryptocurrency token that is used for testing
            Pasino games. GEM does not have any value and its sole purpose to
            enable users to test Pasino without spending any real
            cryptocurrencies. Deposits and withdrawals are not available for
            GEM!
          </p>
        </div>
      </v-tab>
    </v-tabs>
  </v-modal>
</template>

<script>
export default {
  name: "HelpPopup",
  data() {
    return {
      modalVisible: false,
      faqs: [
        {
          id: "0",
          title: "What if forgot my password?",
          body: "If you forget your password, you can reset it with our “forgot password” link. After applying for password reset, please check your email and follow the recovery instructions.",
          open: false,
        },
        {
          id: "1",
          title: "How do I reset my Google authenticator?",
          body: "If you forget your password, you can reset it with our “forgot password” link. After applying for password reset, please check your email and follow the recovery instructions.",
          open: false,
        },
        {
          id: "2",
          title: "How long does it take to withdraw?",
          body: "If you forget your password, you can reset it with our “forgot password” link. After applying for password reset, please check your email and follow the recovery instructions.",
          open: false,
        },
        {
          id: "3",
          title: "What should I do if there was a game bug?",
          body: "If you forget your password, you can reset it with our “forgot password” link. After applying for password reset, please check your email and follow the recovery instructions.",
          open: false,
        },
        {
          id: "4",
          title: "How long does it take to withdraw?",
          body: "If you forget your password, you can reset it with our “forgot password” link. After applying for password reset, please check your email and follow the recovery instructions.",
          open: false,
        },
      ],
      options: ["foo", "bar", "baz"],
    };
  },
  methods: {
    show() {
      this.modalVisible = true;
    },
    hide() {
      this.modalVisible = false;
    },
  },
};
</script>
