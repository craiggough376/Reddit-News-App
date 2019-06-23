<template lang="html">
  <div>
    <p>Uplifting News</p>
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
  },
  methods: {
    sortByUpvotes: function(){
      this.upliftingArticles.sort((a, b) => (b.data.score) - (a.data.score));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
