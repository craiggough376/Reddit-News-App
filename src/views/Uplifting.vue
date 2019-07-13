<template lang="html">
  <div>
    <h2>Uplifting News</h2>
    <div class="body">
      <articles-list :articles="upliftingArticles"></articles-list>
    </div>
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
