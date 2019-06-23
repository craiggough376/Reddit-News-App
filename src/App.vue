<template>
  <div id="app">
    <header class="header">
      <h1>Reddit News API</h1>
    <router-link class="link" :to="{ name: 'news'}"><a> UK News</a></router-link>
    <router-link class="link" :to="{ name: 'uplifting'}">Uplifting News</router-link>

  <h3 class="bookmarked" v-if="countBookmarked === 1">You have {{ countBookmarked }} bookmarked article.
    <router-link :to="{ name: 'bookmarks'}">Go To Bookmarks</router-link></h3>
  <h3 class="bookmarked" v-if="countBookmarked > 1">You have {{ countBookmarked }} bookmarked articles.
    <router-link :to="{ name: 'bookmarks'}">Go To Bookmarks</router-link></h3>
  </header>

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
      bookmarked: []
      // selectedArticle: null
    }
  },
  computed: {
    countBookmarked: function(){
      return this.bookmarked.length
    },
    // articleIndex: function(article){
    //   return this.bookmarked.indexOf(article);
    // },
    // deleteArticle: function(article){
    //   this.bookmarked.splice(articleIndex(article),1)
    // }
    },
  mounted(){
    fetch('https://www.reddit.com/r/unitedkingdom.json')
    .then(response => response.json())
    .then(articles => this.articles = articles.data.children)
    fetch('https://www.reddit.com/r/UpliftingNews.json')
    .then(response => response.json())
    .then(upliftingArticles => this.upliftingArticles = upliftingArticles.data.children)
    eventBus.$on('bookmarked-article', (article) => {
      this.bookmarked.push(article)})
    eventBus.$on('delete-article', (index) => {
      this.bookmarked.splice(index, 1)})
  },
  components: {
    // 'articles-list': ArticlesList,
    // 'article-detail': ArticleDetail
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  list-style: none;
}


.header{
  display: flex;
  justify-content: left;
  align-items:center;
  background: lightblue;
  padding:10px;
}

.link{
  margin: 10px;
  text-decoration: none;
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.link:hover{
  background-color: RoyalBlue;
}


.bookmarked {
  padding: 8px 20px;
  display: inline-block;
  color: red;
  border-style: solid;
 border-width: 2px;
 border-radius: 10px;
}

</style>
