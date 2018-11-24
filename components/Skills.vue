<template>
  <div class="column">
    <div class="container has-text-centered">
      <h3>Skills & Works</h3>
      <h4>こんなことできます & しました</h4>
      <skill-list />
      <divider />
      <skill-detail />
    </div>
  </div>
</template>

<script>
import Divider from '~/components/Divider'
import SkillList from '~/components/SkillList'
import SkillDetail from '~/components/SkillDetail'

export default {
  name: 'Skills',
  data() {
    return {}
  },
  components: { SkillList, SkillDetail, Divider }
}
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
  color: #707070;
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
  color: #707070;
  margin-top: 11.1px;
}
</style>
