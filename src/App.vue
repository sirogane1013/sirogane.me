<template>
  <div id="app">
    <the-menu/>
    <the-logo/>
    <section-wrapper id="about-section" color="red">
      <section-title id="about-section-title">About</section-title>
      <section-contents-wrapper>
        <section-heading>Screen Name</section-heading>
        <section-contents>Sirogane</section-contents>
      </section-contents-wrapper>
      <section-contents-wrapper>
        <section-heading>Education</section-heading>
        <section-contents>
          Tokyo Institute of Technology<br>
          School of Computing
        </section-contents>
      </section-contents-wrapper>
      <section-contents-wrapper>
        <section-heading>Likes</section-heading>
        <section-list :list="[
                    'Web Development',
                    'Web Design',
                    'Software Engineering',
                    'Video Game',
                ]"/>
      </section-contents-wrapper>
    </section-wrapper>
    <section-wrapper id="works-section" color="blue">
      <section-title id="works-section-title">Works</section-title>
      <section-contents-wrapper>
        <section-heading>2018</section-heading>
        <section-contents>
          <section-image :img="require('../public/img/2018_Tokyo-Tech-Fes-official-site.png')"
                         alt="Tokyo Tech Fes. official site"
                         caption="Tokyo Tech Fes.<br>official site">
            <h4>About</h4>
            東工大学園祭「工大祭」の2018年度公式サイトです。
            サイト制作統括として全体の進捗管理を行ったほか、バックエンド・フロントエンドのコーディング等を行いました。
            <h4>Used</h4>
            PHP, JavaScript, FuelPHP, MySQL
            <h4>Link</h4>
            <a href="https://2018.koudaisai.jp">工大祭2018公式サイト</a>
          </section-image>
        </section-contents>
      </section-contents-wrapper>
      <section-contents-wrapper>
        <section-heading>2019</section-heading>
        <section-contents>
          <section-image :img="require('../public/img/2019_JIZI-welcome-site.png')"
                         alt="JIZI welcome site"
                         caption="JIZI<br>welcome site">
            <h4>About</h4>
            工大祭実行委員会"JIZI"の2019年度新入生歓迎サイトです。
            青空と桜の花びらをイメージしてデザインしました。
            Vue.jsで実装したSPAです。
            <h4>Used</h4>
            PHP, JavaScript, Laravel, Vue.js, MySQL
          </section-image>
        </section-contents>
        <section-contents>
          <section-image :img="require('../public/img/2019_JIZI-tsuyuga-site.png')"
                         alt="JIZI tsuyuga site"
                         caption="JIZI<br>tsuyuga site">
            <h4>About</h4>
            工大祭実行委員会"JIZI"の2019年度合宿サイトです。
            青のグラデーションを基調としたスタイリッシュなデザインを目指しました。
            Vue.jsで実装したSPAです。PWAなど、トレンドとなっていた技術の導入を積極的に行いました。
            <h4>Used</h4>
            JavaScript, Vue.js
            <h4>Link</h4>
            <a href="https://sirogane1013.github.io/tsuyuga2019/">つゆがサイト2019</a>
          </section-image>
        </section-contents>
        <section-contents>
          <section-image :img="require('../public/img/2019_Tokyo-Tech-Fes-official-mascot-site.png')"
                         alt="Tokyo Tech Fes. official mascot site"
                         caption="Tokyo Tech Fes.<br>official mascot site">
            <h4>About</h4>
            工大祭公式マスコットキャラクター「テックちゃん」の特設サイトです。
            <h4>Link</h4>
            <a href="https://mascot.koudaisai.jp">工大祭公式マスコットキャラクター特設サイト</a>
          </section-image>
        </section-contents>
      </section-contents-wrapper>
      <section-contents-wrapper>
        <section-heading>2020</section-heading>
        <section-contents>
          <section-image :img="require('../public/img/2020_MovIe-Tech-movie-recommender.png')"
                         alt="MovIe Tech movie recommender"
                         caption="MovIe Tech<br>movie recommender">
            <h4>About</h4>
            チームで制作した映画推薦サービスです。
            ユーザーの入力に対して、事前に学習したデータをもとに、最もおすすめの映画を提案します。
            <h4>Link</h4>
            <a href="http://movietech.shop">movie recommender</a>
          </section-image>
        </section-contents>
        <section-contents>
          <section-image :img="require('../public/img/2020_Personal-Work-blog.png')"
                         alt="Personal Work blog"
                         caption="Personal Work<br>blog">
            <h4>About</h4>
            個人製作のブログアプリケーションです。
            このころのデザイントレンドだった"Neumorphism"を取り入れました。
            Gatsbyで実装し、Netlify CMSに対応しています。
            <h4>Used</h4>
            JavaScript, React
            <h4>Link</h4>
            <a href="https://blog.sirogane.me">Sirogane's Blog</a>
          </section-image>
        </section-contents>
        <section-contents>
          <section-image :img="require('../public/img/2020_Personal-Work-portfolio.png')"
                         alt="Personal Work portfolio"
                         caption="Personal Work<br>portfolio">
            <h4>About</h4>
            このポートフォリオサイトです。
            制作物の遍歴を見せる「タイムライン」としてデザインしました。
            Vue.jsで実装した単一ページ構成のサイトです。
            <h4>Used</h4>
            JavaScript, Vue.js
            <h4>Link</h4>
            <a href="https://sirogane.me">Sirogane's Portfolio</a>
          </section-image>
        </section-contents>
      </section-contents-wrapper>
      <section-contents-wrapper>
        <section-heading>2021</section-heading>
        <section-contents>
          <section-image :img="require('../public/img/2021_Intern-SubManage.png')"
                         alt="Intern SubManage"
                         caption="Intern<br>SubManage">
            <h4>About</h4>
            インターンシップの課題として作成した"サブスクリプションサービス管理アプリ"です。
            利用しているサービスを登録し、支払い状況を可視化します。
            インフラ構築からフロントエンド実装まで行い、秒間60リクエストに対応できる可用性を実現しました。
            <h4>Used</h4>
            PHP, JavaScript, Laravel, Vue.js, MySQL
          </section-image>
        </section-contents>
        <section-contents>
          <section-image :img="require('../public/img/2021_Intern-Push-the-Vote-Out.png')"
                         alt="Push the Vote Out"
                         caption="Intern<br>Push the Vote Out">
            <h4>About</h4>
            ハッカソン形式のインターンシップで作成したアプリケーションです。
            サッカーの試合に賭けをして、同じ予想の人達でチャットを楽しみます。
            ７人のチームで開発を行い、フロントエンドの実装を主に担当しました。
            <h4>Used</h4>
            Python, JavaScript, Django, Vue.js
          </section-image>
        </section-contents>
      </section-contents-wrapper>
    </section-wrapper>
    <section-wrapper id="contact-section" color="green">
      <section-title id="contact-section-title">Contact</section-title>
      <section-contents-wrapper>
        <section-heading>Email</section-heading>
        <section-contents><a href="mailto:contact@sirogane.me">contact@sirogane.me</a>
        </section-contents>
      </section-contents-wrapper>
      <section-contents-wrapper>
        <section-heading>Link</section-heading>
        <section-list :list="[
                        `<a href='https://github.com/sirogane1013'>Github</a>`,
                        `<a href='https://qiita.com/sirogane'>Qiita</a>`,
                        `<a href='https://blog.sirogane.me'>Blog</a>`,
                        `<a href='https://twitter.com/SiroganeTitech'>Twitter</a>`,
                ]"/>
      </section-contents-wrapper>
    </section-wrapper>
  </div>
</template>

<script>
import TheLogo from './components/TheLogo.vue'
import TheMenu from "@/components/TheMenu";
import SectionWrapper from "./components/SectionWrapper";
import SectionTitle from "./components/SectionTitle";
import SectionContentsWrapper from "./components/SectionContentsWrapper";
import SectionHeading from "./components/SectionHeading";
import SectionContents from "./components/SectionContents";
import SectionList from "./components/SectionList";
import SectionImage from "./components/SectionImage";

export default {
  name: 'App',
  components: {
    TheLogo,
    TheMenu,
    SectionWrapper,
    SectionTitle,
    SectionContentsWrapper,
    SectionHeading,
    SectionContents,
    SectionList,
    SectionImage,
  },
}
</script>

<style lang="scss">
@import "./assets/scss/_variables";

#app {
  position: relative;
  overflow: auto;

  & > .section-wrapper:last-child {
    margin-bottom: 0;

    & > .section-line {
      height: calc(100% + 100px);
    }
  }
}

h4 {
  font-weight: normal;
  font-size: $text-s;
  margin: .3em 0 0 0;

  &:first-of-type {
    margin: 0;
  }
}
</style>
