<template>
  <div class="flow-card">
    <div class="flow-card__header flow-card-header">
      <div class="flow-card-header__row">
        <div class="flow-card-header__num">3</div>

        <div class="flow-card-header__text">
          <h3 class="flow-card-header__title">Redeem Rewards</h3>

          <div class="flow-card-header__body">
            <p>
              Transfer your referral rewards balance to your main account
              balance
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flow-card__body mb-3">
      <table class="table">
        <tbody>
          <tr>
            <td>
              <coin-view :value="'Bitcoin'" :show-img="true" variant="" />
            </td>

            <td>000000000000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flow-card__btn-box">
      <a href="#" class="btn">Withdraw</a>

      <a href="#" class="btn btn--black">Alll</a>
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
