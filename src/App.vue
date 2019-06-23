<template>
  <div id="app">
<h1>Reddit News API</h1><img src="" alt="">
<h2 v-if="countBookmarked === 1">You have {{ countBookmarked }} bookmarked article</h2>
<h2 v-if="countBookmarked > 1">You have {{ countBookmarked }} bookmarked articles</h2>
  <nav>
    <li><router-link :to="{ name: 'news'}">News</router-link></li>--
    <li><router-link :to="{ name: 'uplifting'}">Uplifting News</router-link></li>--
    <li><router-link :to="{ name: 'bookmarks'}">Bookmarks</router-link></li>
  </nav>
  <router-view :articles="articles" :upliftingArticles="upliftingArticles" :bookmarked="bookmarked" id="view"></router-view>
  <!-- <articles-list :articles="articles"></articles-list> -->
  <!-- <article-detail :article="selectedArticle"></article-detail> -->
  </div>
</template>

<script>
import { eventBus } from './main.js'
// import ArticleDetail from './components/ArticleDetail.vue'

export default {
  name: 'app',
  data(){
    return{
      articles: null,
      upliftingArticles: null,
      bookmarked: [],
      // selectedArticle: null
    }
  },
  computed: {
    countBookmarked: function(){
      return this.bookmarked.length
    }
    },
  mounted(){
    fetch('https://www.reddit.com/r/unitedkingdom.json')
    .then(response => response.json())
    .then(articles => this.articles = articles.data.children)
    fetch('https://www.reddit.com/r/UpliftingNews.json')
    .then(response => response.json())
    .then(upliftingArticles => this.upliftingArticles = upliftingArticles.data.children)
    eventBus.$on('bookmarked-article', (article) => {
      this.bookmarked.push(article)
    })
  },
  components: {
    // 'articles-list': ArticlesList,
    // 'article-detail': ArticleDetail
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  list-style: none;
}
nav {
  display: flex;
  justify-content: center;
  width: 50vw;
  margin: 0 auto;
}
</style>
