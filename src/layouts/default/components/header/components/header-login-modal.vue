<template>
  <v-modal :visible="visible" @update:visible="visible = $event">
    <h2 class="text-center mb-3">Welcome to Casino!</h2>

    <v-tabs>
      <v-tab title="Login" selected>
        <div>
          <div class="form-group mb-2">
            <div class="input">
              <input
                type="email"
                placeholder="Your Email"
                v-model="form.user"
              />
            </div>
          </div>

          <div class="form-group mb-2">
            <div class="input input--toggle">
              <input
                type="password"
                placeholder="Your password"
                v-model="form.password"
              />

              <button class="input__toggle"></button>
            </div>
          </div>
          <div class="mb-3 recaptcha">
            <RecaptchaV2
              @widget-id="handleWidgetId"
              @error-callback="handleErrorCalback"
              @expired-callback="handleExpiredCallback"
              @load-callback="handleLoadCallback"
            />
          </div>

          <div class="mb-3">
            <button type="submit" class="btn w-100" @click="userLogin">
              Login
            </button>
          </div>

          <div class="text-throwline mb-3">
            <p>Or continue with</p>
          </div>

          <soc-list />
        </div>
      </v-tab>

      <v-tab title="Sign Up">
        <form action="#">
          <div class="form-group mb-2">
            <div class="input">
              <input type="email" placeholder="Your Email" />
            </div>
          </div>

          <div class="form-group mb-2">
            <div class="input input--toggle">
              <input type="password" placeholder="Your password" />

              <button class="input__toggle"></button>
            </div>
          </div>

          <div class="mb-3">
            <button type="submit" class="btn w-100">Create Account</button>
          </div>

          <div class="text-throwline mb-3">
            <p>Or continue with</p>
          </div>

          <soc-list />
        </form>
      </v-tab>
    </v-tabs>
  </v-modal>
</template>

<script>
import useLoginStore from "@/store/login";
import { mapActions } from "pinia";
import { RecaptchaV2 } from "vue3-recaptcha-v2";

export default {
  name: "HeaderLoginModal",
  components:{RecaptchaV2},
  data() {
    return {
      visible: false,
      form: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin(){
      this.sendLogin(this.form).then(res=>{
        if(res.success){

        }else{
          console.log('res - ', res);
          this.$toast.error(res.message);
        }
      })
    },
    handleLoadCallback(response){
      localStorage.setItem('recaptchaToken', response)
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    ...mapActions(useLoginStore, ['sendLogin'])
  },
};
</script>

<style> 
.recaptcha{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>