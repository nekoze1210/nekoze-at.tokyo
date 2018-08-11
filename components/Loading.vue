<template>
<div v-if="loading" class="loading__bg">
  <div class="square-spin">
    <div></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Loading',
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style>
.loading__bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: #fff;
  z-index: 1;
}

.square-spin {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: -100px;
  text-align: center;
  color: #fff;
  z-index: 2;
}

.square-spin div {
  width: 150px !important;
  height: 150px !important;
  border-color: #fff !important;
  background-color: #97ddb7 !important;
}
</style>
