<template>
  <div class="columns has-text-centered">
    <div class="column">
      <a v-scroll-to="'#skills'">
        <span />
      </a>
    </div>
  </div>
</template>

<script>
import VueScrollTo from "~/plugins/vue-scrollto"
export default {
  name: "ScrollDown",
  data() {
    return {
      button: {
        text: "Scroll Down"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.columns {
  padding-top: 70px;
}

a {
  display: block;
  position: relative;
  margin: 0 auto;
  span {
    position: absolute;
    width: 30px;
    height: 30px;
    border-left: 1px solid #333;
    border-bottom: 1px solid #333;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb 2s infinite;
    animation: sdb 2s infinite;
    box-sizing: border-box;
  }
}

@-webkit-keyframes sdb {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
}
@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}
</style>
