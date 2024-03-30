<template>
  <section class="section-contact">
    <div class="section-contact__container container">
      <div class="section-contact__wrap">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-6 mb-5">
            <div class="text-block">
              <h1>CONTACT US</h1>

              <p>
                If your inquiry is related to deposit, please mention your
                transaction ID, address, and amount in the body. If you did not
                receive your withdrawal, please contact your receiving wallet
                (and provide the transaction ID shown at the withdrawal page)
                before you contact us. The transaction ID we show you at the
                withdrawals page contains all of the information related to find
                and track your withdrawal. Please don't create more than one
                tickets per issue. Creating multiple tickets will only result in
                delays. Also, please ensure that you write your message in
                English as our staff is only English speaking.
              </p>

              <p>
                We request you to be detailed while sending us your query. Due
                to a large number of queries we receive daily, we can only
                respond to a few which meet the listed criteria. We will
                endeavor to respond to your email in 4 to 8 hours or less.
              </p>
            </div>
          </div>

          <div class="col-md-5 mb-5">
            <contact-form />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>
