<template>
  <div class="container">
    <h2 class="profile__heading">
      About Me
    </h2>
    <hr class="profile__ruler" />
    <div class="columns profile__about">
      <div class="column is-one-third">
        <figure class="image profile__avatar">
          <img src="~/assets/profile.jpg" alt="@cuten77" class="is-rounded" />
        </figure>
      </div>
      <div class="column">
        <h2 class="is-2 profile__myname">
          Daiki Nagaoka
        </h2>
        <p class="profile__job">
          Web Engineer
        </p>
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
              <p>
                Github:
                <a href="https://github.com/nekoze1210" target="_blank">
                  @nekoze1210
                </a>
              </p>
              <p>
                Twitter:
                <a href="https://twitter.com/cuten77" target="_blank">
                  @cuten77
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="profile__heading">
      Introduction
    </h2>
    <hr class="profile__ruler" />
    <div class="columns">
      <div class="column">
        <div class="content">
          <p>
            はじめまして。長岡 大樹(ながおか だいき) と申します。<br />
            新卒で大手飲食系WEBサービスを開発する企業へ入社し、会員向けの基盤システムを開発してきました。<br />
            1年半の業務経験を経て、モダンな開発やユーザー目線でのサービスの開発がしたく、2018年9月に自動車関連のベンチャー企業に転職します。<br />
            プログラミング言語は Java
            が業務経験上最も多く開発していますが、プライベートではRuby, PHP,
            Vue.js, React
            など流行っている＆興味のある分野にとことん取り組んでいます。
          </p>
        </div>
      </div>
    </div>

    <h2 class="profile__heading">
      Skills
    </h2>
    <hr class="profile__ruler" />
    <div class="columns">
      <div class="column is-half">
        <div class="content">
          <h3 class="subtitle">
            Programming Language
          </h3>
          <li>Ruby</li>
          <li>Java</li>
          <li>Golang</li>
          <li>Swift</li>
          <li>Node.js</li>
        </div>
      </div>
      <div class="column is-half">
        <div class="content">
          <h3 class="subtitle">
            Framework
          </h3>
          <li>Ruby on Rails</li>
          <li>Play Framework</li>
          <li>Spring Boot</li>
          <li>Nuxt.js</li>
          <li>Express</li>
        </div>
      </div>
    </div>

    <h2 class="profile__heading">
      Works
    </h2>
    <hr class="profile__ruler" />
    <p>WIP</p>

    <h2 class="profile__heading">
      Awards
    </h2>
    <hr class="profile__ruler" />
    <p>WIP</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile__heading {
  margin: 1.5em 10px 0;

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
  margin-right: 10px;
  margin-left: 10px;
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
  @media screen and (min-width: 200px) and (max-width: 1000px) {
    p:first-child {
      margin-top: 20px;
    }
  }
}
.content {
  padding: 12px;
  font-family: Arial, Avenir;
  line-height: 1.5em;
}
</style>
