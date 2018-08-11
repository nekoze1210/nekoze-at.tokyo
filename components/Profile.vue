<template>
  <div class="profile">
    <h2 class="profile__heading">Profile</h2>
    <hr class="profile__ruler">
    <figure class="image profile__avatar">
      <img src="~/assets/profile.jpg" alt="@cuten77" class="is-rounded">
    </figure>
    <h3 class="is-3 profile__myname">Daiki Nagaoka</h3>
    <p>Web Engineer</p>
    <nuxt-link to="/profile" class="button is-fullwidth">more...</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 3.5em;

  &__heading {
    width: 177px;
    font-family: Avenir;
    font-size: 50px;
    font-weight: 900;
    font-style: oblique;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #434040;
  }

  &__ruler {
    border: solid 1px #707070;
  }

  &__avatar {
    width: 204px;
    height: 214px;
    margin: 0 auto;
    img {
      box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
      border: solid 1px #707070;
    }
  }
  &__myname {
    font-family: Avenir;
    font-size: 25px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
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
