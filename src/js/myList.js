import { ItemArray } from "../classes/ItemArray.js";

const { createApp } = window.Vue;

const component = {
  data() {
    return {
      itemList: ItemArray,
    };
  },

  computed: {
    comingSoonList() {
      return this.itemList.filter((item) => {
        return item.comingSoon === true;
      });
    },

    availableList() {
      return this.itemList.filter((item) => {
        return item.comingSoon === false;
      });
    },

    actionList() {
      return this.itemList.filter((item) => {
        return item.genre === "Action";
      });
    },

    comedyList() {
      return this.itemList.filter((item) => {
        return item.genre === "Comedy";
      });
    },

    romanceList() {
      return this.itemList.filter((item) => {
        return item.genre === "Romance";
      });
    },

    horrorList() {
      return this.itemList.filter((item) => {
        return item.genre === "Horror";
      });
    },
  },

  /* html */
  template: `
    <header id="myHeader">
    <a href="./home.html" class="netflix-logo"><img src="/src/images/netflix.png" alt="Netflix logo"/></a>
    <ul class="navigation-list">
      <li><a href="./home.html">Home<a></li>
      <li>My List</li>
    </ul>
    <div class="search">
      <input type="search" placeholder="Titles, people, genres" id="search"/>
      <i class="fa fa-search"></i>
    </div>
  </header>

  <main>

    <section id="content-grid">
      <div class="container-heading">Action</div>
      <div class="container">
        <div class="box" v-for="item in actionList" :id="item.id">
          <img class="bg" :src="item.poster" />
        </div>
      </div> 

      <div class="container-heading">Comedy</div>
      <div class="container">
        <div class="box" v-for="item in comedyList" :id="item.id">
          <img class="bg" :src="item.poster" />
        </div>
      </div>

      <div class="container-heading">Romance</div>
      <div class="container">
        <div class="box" v-for="item in romanceList" :id="item.id">
          <img class="bg" :src="item.poster" />
        </div>
      </div>

      <div class="container-heading">Horror</div>
      <div class="container">
        <div class="box" v-for="item in horrorList" :id="item.id">
          <img class="bg" :src="item.poster" />
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="social-links">
      <a href="https://www.instagram.com/oliver.vermeulen/" class="social-link" target="_blank"><i class="fab fa-instagram icon" alt="Instagram"></i></a>
      <a href="https://github.com/OliverVermeulen" class="social-link" target="_blank"><i class="fab fa-github icon" alt="GitHub"></i></a>
      <a href="https://www.linkedin.com/in/oliver-vermeulen-311221222/" class="social-link" target="_blank"><i class="fab fa-linkedin-in icon" alt="Linkedin"></i></a>
    </div>
    <ul class="footer-grid">
      <li class="footer-grid-wrapper">Audio and Subtitles</li>
      <li class="footer-grid-wrapper">Audio Description</li>
      <li class="footer-grid-wrapper">Help Centre</li>
      <li class="footer-grid-wrapper">Gift Cards</li>

      <li class="footer-grid-wrapper">Media Centre</li>
      <li class="footer-grid-wrapper">Investor Relations</li>
      <li class="footer-grid-wrapper">Jobs</li>
      <li class="footer-grid-wrapper">Terms of Use</li>

      <li class="footer-grid-wrapper">Privacy</li>
      <li class="footer-grid-wrapper">Legal Notices</li>
      <li class="footer-grid-wrapper">Cookie Preferences</li>
      <li class="footer-grid-wrapper">Corporate Information</li>
    </ul>
    <p>© 2022-2022 Viswinkel, Ltd.</p>
  </footer>
  `,
  mounted() {
    console.log(ItemArray);
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const app = createApp(component);
  app.mount("#app");
});