<template>
  <div class="container">
    <h2 class="profile__heading">About Me</h2>
    <hr class="profile__ruler">
    <div class="columns profile__about">
      <div class="column is-one-third">
        <figure class="image profile__avatar">
          <img src="~/assets/profile.jpg" alt="@cuten77" class="is-rounded">
        </figure>
      </div>
      <div class="column">
        <h2 class="is-2 profile__myname">Daiki Nagaoka</h2>
        <p class="profile__job">Web Engineer</p>
        <div class="columns profile__details">
          <div class="column">
            <h3>Location</h3>
            <div class="profile__info--value">
              <p>Taito-ku Tokyo, Japan</p>
            </div>
          </div>
          <div class="column">
            <h3>Birthday</h3>
            <div class="profile__info--value">
              <p>1994/12/10 (23)</p>
            </div>
          </div>
          <div class="column">
            <h3>Email</h3>
            <div class="profile__info--value">
              <p>dev0zakonekoze1210@gmail.com</p>
            </div>
          </div>
          <div class="column">
            <h3>SNS</h3>
            <div class="profile__info--value">
              <p>Github: <a href="https://github.com/nekoze1210" target="_blank">@nekoze1210</a></p>
              <p>Twitter: <a href="https://twitter.com/cuten77" target="_blank">@cuten77</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="profile__heading">Introduction</h2>
    <hr class="profile__ruler">
    <div class="columns">
      <div class="column">WIP</div>
    </div>

    <h2 class="profile__heading">Skills</h2>
    <hr class="profile__ruler">
    <div class="content">
      <h3>Programming Language</h3>
      <li>Ruby</li>
      <li>Java</li>
      <li>Golang</li>
      <li>Swift</li>
      <li>Node.js</li>
      <h3>Frameworks</h3>
      <li>Ruby on Rails</li>
      <li>Play Framework</li>
      <li>Spring Boot</li>
      <li>Nuxt.js</li>
      <li>Express</li>
    </div>

    <h2 class="profile__heading">Works</h2>
    <hr class="profile__ruler">
    <p>WIP</p>

    <h2 class="profile__heading">Awards</h2>
    <hr class="profile__ruler">
    <p>WIP</p>

  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile__heading {
  margin-top: 1.5em;
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

.profile__ruler {
  border: solid 1px #707070;
}

.profile__about {
  margin: 10% 0;
}

.profile__avatar {
  width: 204px;
  height: 214px;
  margin: 0 auto;

  img {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
    border: solid 1px #707070;
  }
}

.profile__myname {
  font-family: Avenir;
  font-size: 50px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.profile__job {
  font-family: Avenir;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
}

.profile__details {
  h3 {
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    font-style: oblique;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 50px;
  }
}

.profile__info--value {
  font-family: Avenir;

  p:first-child {
    margin-top: 40px;
  }
}
</style>
