<template>
  <div class="columns has-text-left is-multiline">
    <div class="column">
      <h3 class="skill__name" :style="{ color: skill.color }">
        {{ skill.name }}
      </h3>
      <span
        v-for="(star, index) in skill.stars"
        :key="index"
        class="icon is-medium"
      >
        <i class="fa fa-lg fa-star checked" />
      </span>
      <p class="skill__period is-spaced">
        使用期間: <span>{{ skill.period }}</span>
      </p>
      <p class="skill__works is-spaced">
        制作物:
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillDetail',
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
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
    display: inline;
  }

  &__period {
    font-family: YuGo, 'ヒラギノ角ゴ Pro W3', 'メイリオ', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.69;
    letter-spacing: 0.3px;
    text-align: left;
    color: #292929;
    margin-top: 33px;
  }

  &__works {
    font-family: YuGo, 'ヒラギノ角ゴ Pro W3', 'メイリオ', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.69;
    letter-spacing: 0.3px;
    text-align: left;
    color: #292929;
    margin-top: 10px;
  }
}

.checked {
  color: #ffc98b;
}
</style>
