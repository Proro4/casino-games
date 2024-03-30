<template>
  <section class="section">
    <div class="section__container">
      <div class="section__wrap">
        <div class="row">
          <div class="col-md-4 mb-6">
            <div class="tourn-card">
              <div class="tourn-card__value">10.000</div>

              <h3 class="tourn-card__title"><span>weekly</span> tournaments</h3>

              <img
                src="@/assets/images/layout/tourn-card-01-img-01.png"
                alt=""
                class="tourn-card__img tourn-card__img--01"
              />

              <img
                src="@/assets/images/layout/tourn-card-01-img-02.png"
                alt=""
                class="tourn-card__img tourn-card__img--02"
              />
            </div>
          </div>

          <div class="col-md-4 mb-6">
            <div class="earn-card">
              <div class="earn-card__content">
                <h3 class="earn-card__title">Earn UP to</h3>

                <h4 class="earn-card__value">50</h4>

                <h4 class="earn-card__subtitle">Revenue share</h4>

                <ul class="earn-card__list">
                  <li>Instatnt withdrawals</li>
                  <li>Detailed stats</li>
                </ul>
              </div>

              <img
                src="@/assets/images/layout/earn-card-01.png"
                alt=""
                class="earn-card__img"
              />
            </div>
          </div>

          <div class="col-md-4 mb-6">
            <div class="invite-card">
              <div class="invite-card__content">
                <h3 class="invite-card__title">Invite friends</h3>

                <h4 class="invite-card__subtitle">Earn money</h4>

                <div class="invite-card__btn-box">
                  <button class="invite-card__btn"></button>
                </div>
              </div>

              <img
                src="@/assets/images/layout/invite-card-img.png"
                alt=""
                class="invite-card__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeTournamentsSection",
};
</script>
