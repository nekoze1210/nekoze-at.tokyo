<template>
  <div class="column">
    <div class="container has-text-centered">
      <h3>Contacts</h3>
      <h4>お仕事相談したい方・会いたい方、ぜひ</h4>
      <script src="https://sdk.form.run/js/v2/embed.js" />
      <div class="form-run">
        <div
          class="formrun-embed"
          data-formrun-form="@nekoze-at-tokyo"
          data-formrun-redirect="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h3 {
  font-family: Avenir;
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: 2.5px;
  text-align: center;
  color: #292929;
  margin-top: 60px;
}

h4 {
  font-family: Avenir;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 1.5px;
  text-align: center;
  color: #292929;
  margin-top: 11.1px;
}

.form-run {
  border: 1px solid #4444;
  margin-top: 30px;
}
</style>
