<template>
  <div class="flow-card">
    <div class="flow-card__header flow-card-header">
      <div class="flow-card-header__row">
        <div class="flow-card-header__num">4</div>

        <div class="flow-card-header__text">
          <h3 class="flow-card-header__title">Your invites</h3>

          <div class="flow-card-header__body">
            <p>Track the status of your invitations</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flow-card__body">
      <div class="flow-card__connection flow-card-connection">
        <div class="flow-card-connection__left">You</div>

        <div class="flow-card-connection__right">
          <div class="d-flex align-item-center gap-2">
            <div>
              <div class="flow-card-connection__title">Referrals</div>

              <div class="flow-card-connection__body">
                <p>0 Players</p>
              </div>
            </div>

            <a href="#" class="btn">View</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdStepSection",
};
</script>
