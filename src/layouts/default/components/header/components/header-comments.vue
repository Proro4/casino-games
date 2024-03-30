<template>
  <div class="header-btn-group">
    <button
      class="header-btn-group__btn header-btn-group__btn--comments"
      aria-label="Comments"
      @click="isActive = !isActive"
    ></button>

    <div v-if="quantity" class="header-btn-group__quantity">
      {{ quantity }}
    </div>

    <header-popup :is-active="isActive" @toggle="onPopupToggle">
      <div
        style="max-height: calc(100vh - 26rem)"
        class="scroll-container mb-4"
      >
        <ul>
          <li v-for="message in messages" :key="message.id" class="mb-3">
            <header-chat-card />
          </li>
        </ul>
      </div>

      <header-chat-input @submit="onSubmit" />
    </header-popup>
  </div>
</template>

<script>
import HeaderPopup from "./header-popup.vue";
import HeaderChatCard from "./header-chat-message-card.vue";
import HeaderChatInput from "./header-chat-input.vue";

export default {
  name: "HeaderComments",
  components: {
    HeaderPopup,
    HeaderChatCard,
    HeaderChatInput,
  },
  props: {
    quantity: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isActive: false,
      messages: [
        {
          id: "0",
          title: "",
          body: "There are no challenges available right now.",
        },
        {
          id: "1",
          title: "",
          body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam .",
        },
        {
          id: "2",
          title: "",
          body: "To take a trivial example, which of us ever undertakes laborious.",
        },
        {
          id: "3",
          title: "",
          body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi .",
        },
      ],
      user: null,
    };
  },
  methods: {
    onPopupToggle(value) {
      this.isActive = value;
    },
    sendMessage() {},
    onSubmit(event, text) {
      event.preventDefault();

      this.sendMessage({
        text,
        uid: this.user?.id,
        author: this.user?.name,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";

.header-btn-group {
  position: relative;

  &__btn {
    display: block;
    border: none;
    height: rem(45);
    width: rem(59);
    cursor: pointer;

    &--comments {
      background: url("@/assets/images/layout/header-btn-notif.svg") no-repeat
        top left / 100% 100%;
    }

    &--notifications {
      background: url("@/assets/images/layout/header-btn-notif-02.svg")
        no-repeat top left / 100% 100%;
    }
  }

  &__quantity {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    border: rem(2) solid #1a1a22;
    border-radius: rem(21);
    padding: 0 rem(3);
    background: linear-gradient(158deg, #feeb3c 0%, #fe843b 100%);
    text-align: center;
    font-size: rem(10);
    font-style: normal;
    font-weight: 750;
    letter-spacing: -1.05px;
    color: #1f1e25;
  }
}
</style>
