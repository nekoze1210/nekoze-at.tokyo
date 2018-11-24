<template>
  <div class="columns has-text-left">
    <div class="column">
      <h3 class="skill__name" :style="'color: #f82020'">Ruby</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillDetail'
}
</script>

<style lang="scss" scoped>
.skill {
  &__name {
    font-family: Avenir;
    font-size: 25px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: 2.5px;
    text-align: left;
  }
}
</style>
