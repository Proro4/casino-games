import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { install } from "vue3-recaptcha-v2";
import router from './router';
import Toaster from '@meforma/vue-toaster';


const app = createApp(App)



// fontAwesome begin
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faQuestion,
  faLineChart,
  faKeyboard,
  faVolumeUp,
  faInfinity,
  faBolt,
  faExclamation,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faQuestion,
  faLineChart,
  faKeyboard,
  faVolumeUp,
  faInfinity,
  faBolt,
  faExclamation,
  faPercent
);
app.component("font-awesome-icon", FontAwesomeIcon);


import {
  ContactForm,
  VTabs,
  VTab,
  VModal,
  SocList,
  Accordion,
  AlertMessage,
  FileInput,
  ProgressBar,
  ProgressBarSectors,
} from "./components";



import vSelect from "vue-select";
import Slider from '@vueform/slider'
import "vue-select/dist/vue-select.css";
import "@vueform/slider/themes/default.css";

app.component("v-select", vSelect);
app.component("ContactForm", ContactForm);
app.component("VTabs", VTabs);
app.component("VTab", VTab);
app.component("VModal", VModal);
app.component("SocList", SocList);
app.component("VAccordion", Accordion);
app.component("AlertMessage", AlertMessage);
app.component("FileInput", FileInput);
app.component("ProgressBar", ProgressBar);
app.component("ProgressBarSectors", ProgressBarSectors);
app.component("Slider", Slider)
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

app.config.productionTip = false;

app.use(createPinia())
app.use(install, {
    sitekey: "6LeRB5EaAAAAAGu9MAOQyjFicZItGH7B_r59Ysyf",
    cnDomains: false, // Optional, If you use in China, set this value true
  })
  app.use(Toast, {
    position: POSITION.BOTTOM_RIGHT,
  });

app.use(router);
app.use(Toaster);

app.mount('#app')
