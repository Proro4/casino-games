<template>
  <form action="#" class="contact-form">
    <div class="contact-form__group">
      <label for="fullNameInput" class="contact-form__label">Full Name</label>

      <div class="contact-form__input input input--dark">
        <input
          v-model="model.name"
          type="text"
          id="fullNameInput"
          name="fullName"
          placeholder="What’s your name?"
        />
      </div>
    </div>

    <div class="contact-form__group">
      <label for="emailInput" class="contact-form__label">
        Email Address
      </label>

      <div class="contact-form__input input input--dark">
        <input
          v-model="model.email"
          type="text"
          id="emailInput"
          name="email"
          placeholder="What’s your email?"
        />
      </div>
    </div>

    <div class="contact-form__group">
      <label for="typeInput" class="contact-form__label">Type</label>

      <div class="select">
        <select name="type" id="typeInput">
          <option value="0" selected disabled>Type</option>
          <option value="1">Type 1</option>
          <option value="1">Type 2</option>
        </select>
      </div>
    </div>

    <div class="contact-form__group">
      <label for="messageInput" class="contact-form__label">Message</label>

      <div class="contact-form__input input input--dark">
        <input
          v-model="model.message"
          type="text"
          id="messageInput"
          name="message"
          placeholder="What would you like to ask?"
        />
      </div>
    </div>

    <button type="submit" class="contact-form__btn btn">CONTACT US</button>
  </form>
</template>

<script>
function getDefaultModel() {
  return {
    name: "",
    email: "",
    type: "",
    message: "",
  };
}

export default {
  name: "ContactForm",
  data() {
    return {
      model: getDefaultModel(),
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/base/_functions";
@import "@/assets/scss/base/_mixins";
@import "@/assets/scss/_variables";

.contact-form {
  border-radius: rem(6);
  padding: rem(32) rem(48) rem(48);
  background-color: $color-purple;

  @include respond-below(md) {
    padding: rem(32) rem(20);
  }

  &__group {
    margin-bottom: rem(24);

    @include respond-below(md) {
      margin-bottom: rem(20);
    }
  }

  &__label {
    display: block;
    margin-bottom: rem(12);
    font-size: rem(16);
    font-weight: 500;

    @include respond-below(md) {
      margin-bottom: rem(8);
    }
  }

  &__btn {
    width: 100%;
  }
}
</style>
