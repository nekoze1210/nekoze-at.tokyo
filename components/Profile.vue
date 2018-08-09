<template>
  <div class="profile">
    <h2 class="profile__heading">Profile</h2>
    <hr class="profile__ruler">
    <figure class="image profile__avatar">
      <img src="~/assets/profile.jpg" alt="@cuten77" class="is-rounded">
    </figure>
    <h3 class="is-3 profile__myname">Daiki Nagaoka</h3>
    <p>Web Engineer</p>
    <!-- <button>Profile</button> -->
  </div>
</template>

<style lang="scss">
.profile {
  margin-top: 3.5em;

  &__heading {
    width: 177px;
    height: 68px;
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
</style>
