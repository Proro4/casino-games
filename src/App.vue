
 <template>
  <div id="app" class="wrapper">
    <default-layout />
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default/default.layout.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
