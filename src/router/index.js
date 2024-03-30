import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/home/home.view.vue";
import AffiliateView from "@/views/affiliate/affiliate.view.vue";
import BonussesView from "@/views/bonuses/bonuses.view.vue"
import RulesView from "@/views/rules/rules.view.vue"
import ContactUsView from "@/views/contact/contact.view.vue"
import CrashGameView from "@/views/games/crash/index.vue"
import DiamondsGameView from "@/views/games/diamonds/index.vue"
import DiceGameView from "@/views/games/dice/index.vue"
import TowersGameView from "@/views/games/towers/index.vue"
import KenoGameView from "@/views/games/keno/index.vue"
import MinesGameView from "@/views/games/mines/index.vue"
import LimboGameView from "@/views/games/limbo/index.vue"
import RouletteGameView from "@/views/games/roulette/index.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home.index",
      component: HomeView,
    },
    {
      path: "/affiliate",
      name: "affiliate.index",
      component: AffiliateView
    },
    {
      path: "/bonuses",
      name: "bonuses.index",
      component: BonussesView
    },
    {
      path: "/contact-us",
      name: "contact-us.index",
      component: ContactUsView
    },
    {
      path: "/rules",
      name: "rules.index",
      component: RulesView
    },
    {
      path: "/crash",
      name: "crash",
      component: CrashGameView
    },
    {
      path: "/diamonds",
      name: "diamonds",
      component: DiamondsGameView
    },
    {
      path: "/dice",
      name: "dice",
      component: DiceGameView,
    },
    {
      path: "/towers",
      name: "towers",
      component: TowersGameView,
    },
    {
      path: "/keno",
      name: "keno",
      component: KenoGameView,
    },
    {
      path: "/mines",
      name: "mines",
      component: MinesGameView,
    },
    {
      path: "/limbo",
      name: "limbo",
      component: LimboGameView
    },
    {
      path: "/roulette",
      name: "roulette",
      component: RouletteGameView,
    },
  ]
})


export default router;
