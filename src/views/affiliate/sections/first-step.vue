<template>
  <div class="flow-card">
    <div class="flow-card__header flow-card-header">
      <div class="flow-card-header__row">
        <div class="flow-card-header__num">1</div>

        <div class="flow-card-header__text">
          <h3 class="flow-card-header__title">Share your invitation link</h3>

          <div class="flow-card-header__body">
            <p>Share your invitation link to invite players to Cyber</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flow-card__body">
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="input">
            <input type="text" placeholder="www.google.ua/?gws_rd=ssl&pli=1" />
          </div>
        </div>

        <div class="col-md-6 mb-3">
          <div class="input">
            <input type="text" placeholder="www.google.ua/?gws_rd=ssl&pli=1" />
          </div>
        </div>
      </div>

      <ul class="flow-card__links">
        <li>
          <a href="#" class="icon-copy">Copy link</a>
        </li>
        <li>
          <a href="#" class="icon-twitter">tweet link</a>
        </li>
        <li>
          <a href="#" class="icon-facebook">Share on facebook</a>
        </li>
        <li>
          <a href="#" class="icon-copy">Download banners & card</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstStepSection",
};
</script>
