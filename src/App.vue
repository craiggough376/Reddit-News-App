<template>
  <div id="app">

    <header class="header">
      
      <img src="@/assets/reddit-logo.jpg" height="80">
    <router-link class="link" :to="{ name: 'news'}"><a> UK News</a></router-link>
    <router-link class="link" :to="{ name: 'uplifting'}">Uplifting News</router-link>
    <router-link class="link" :to="{ name: 'bookmarks'}">Bookmarks</router-link>

    <div class="bookmarked-box">
      <h3 class="bookmarked" v-if="countBookmarked === 1">You have {{ countBookmarked }} bookmarked article.</h3>
      <h3 class="bookmarked" v-if="countBookmarked > 1">You have {{ countBookmarked }} bookmarked articles.</h3>
    </div>


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
    eventBus.$on('delete-article', (article) => {
      let index = this.bookmarked.indexOf(article)
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
  align-items:center;
  background: #f2f3f5;
  padding:10px;
}

.link{
  margin: 10px;
  text-decoration: none;
  background-color: DodgerBlue;
  border-radius: 8px;
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

.bookmarked-box{
  align-content:
}

</style>
