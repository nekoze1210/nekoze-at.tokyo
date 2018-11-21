<template>
  <div>
    <div class="wrap">
      <section class="container">
        <div class="columns is-centered">
          <div class="column is-half profile">
            <h3 class="profile__myname">{{ myName }}</h3>
            <h4 class="profile__myjob">{{ myJob }}</h4>
          </div>
          <div class="column is-half">
            <figure class="image profile__avatar">
              <img src="~/assets/profile.jpg" alt="@cuten77" class="is-rounded">
            </figure>
          </div>
        </div>
      </section>
    </div>
    <div class="columns is-centered">
      <scroll-down />
    </div>
  </div>
</template>

<script>
import ScrollDown from '~/components/ScrollDown'

export default {
  name: 'Profile',
  data() {
    return {
      myName: 'Daiki Nagaoka',
      myJob: 'Web Developer'
    }
  },
  components: { ScrollDown }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 90vh;
}

.profile {
  padding: 25% 0;
  &__avatar {
    width: 204px;
    height: 204px;
    padding: 40% 0 25% 0;
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
    padding-left: 50%;
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
    padding-left: 50%;
  }
}
</style>
