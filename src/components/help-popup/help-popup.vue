<template>
  <v-modal
    :visible="modalVisible"
    @update:visible="modalVisible = $event"
    size="lg"
  >
    <h2 class="text-center mb-3">FREQUENTLY ASKED QUESTIONS</h2>

    <v-accordion :items="faqs" />
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
