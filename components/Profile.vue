<template>
  <section class="container">
    <div class="columns is-centered">
      <div class="column is-two-thirds">
        <h3 class="is-3 profile__myname">{{ myName }} </h3>
        <h4 class="profile__myjob">{{ myJob }}</h4>
      </div>
      <div class="column">
        <figure class="image profile__avatar">
          <img src="~/assets/profile.jpg" alt="@cuten77" class="is-rounded">
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      myName: 'Daiki Nagaoka',
      myJob: 'Web Developer'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile {
  &__avatar {
    width: 204px;
    height: 214px;
    img {
      box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
      border: solid 1px #707070;
    }
  }
  &__myname {
    font-family: YuGo;
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.7;
    letter-spacing: 3px;
    text-align: left;
    color: #444444;
  }
  &__myjob {
    font-family: Avenir;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: 2px;
    text-align: left;
    color: #707070;
  }
}

.button {
  margin-top: 30px;
  text-align: right;
  font-family: Avenir;
  font-weight: 500;
  font-stretch: normal;
}
</style>
