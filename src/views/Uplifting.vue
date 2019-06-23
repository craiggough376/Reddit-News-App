<template lang="html">
  <div>
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
div {
  background-image: url("../assets/rainbows.jpg")
}

articles-list{
  background-color: white;
}
</style>
