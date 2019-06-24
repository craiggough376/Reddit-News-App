<template lang="html">
  <div class="body">
    <h2>Uplifting News</h2>
    <articles-list :articles="upliftingArticles"></articles-list>
  </div>
</template>

<script>
import ArticlesList from '../components/ArticlesList.vue'
export default {
  name: 'uplifting-news',
  props: ['upliftingArticles'],
  components: {
    'articles-list': ArticlesList
  }
}
</script>

<style lang="css" scoped>
.body {
  background-image: url("../assets/rainbows.jpg")
}

articles-list{
  background-color: white;
}
</style>
