<template>
  <div class="flow-card">
    <div class="flow-card__header flow-card-header">
      <div class="flow-card-header__row">
        <div class="flow-card-header__text">
          <h3 class="flow-card-header__title">Total Earned</h3>
        </div>
      </div>
    </div>

    <div class="flow-card__body mb-3">
      <div class="total-earned mb-3">
        <div class="total-earned__value">0.0000..</div>

        <div class="total-earned__label">USD</div>
      </div>

      <v-tabs>
        <v-tab title="Coin">
          <table class="table">
            <tbody>
              <tr>
                <td>
                  <coin-view
                    :value="'0000'"
                    :show-img="true"
                    variant="danger"
                  />
                </td>
                <td>
                  <coin-view
                    :value="'0000'"
                    :show-img="true"
                    variant="danger"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </v-tab>

        <v-tab title="You earned">
          <table class="table"></table>
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import { CoinView } from "@/components";

export default {
  name: "ThirdStepSection",
  components: {
    CoinView,
  },
};
</script>
