<template>
  <div id="app">
<h1>Reddit</h1>
  <nav>
    <router-link :to="{ name: 'news'}">News</router-link>
    <router-link :to="{ name: 'uplifting'}">Uplifting News</router-link>
    <router-link :to="{ name: 'bookmarks'}">Bookmarks</router-link>
  </nav>
  <router-view id="view"></router-view>
  <!-- <articles-list :articles="articles"></articles-list> -->
  <!-- <article-detail :article="selectedArticle"></article-detail> -->
  </div>
</template>

<script>
import { eventBus } from './main.js'
import ArticlesList from './components/ArticlesList.vue'
import ArticleDetail from './components/ArticleDetail.vue'

export default {
  name: 'app',
  data(){
    return{
      articles: null,
      // selectedArticle: null
    }
  },
  mounted(){
    fetch('https://www.reddit.com/r/unitedkingdom.json')
    .then(response => response.json())
    .then(articles => this.articles = articles.data.children)
    // eventBus.$on('article-selected', (article) => {
    //   this.selectedArticle = article;
    // })
  },
  components: {
    'articles-list': ArticlesList,
    'article-detail': ArticleDetail
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
}
nav {
  display: flex;
  justify-content: center;
  width: 50vw;
  margin: 0 auto;
}
</style>
