<template lang="html">
  <div>
    <p>Uplifting News</p>
    <button v-on:click="sortByUpvotes">Sort by Most Upvoted</button>
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
      this.upliftingArticles.sort((a, b) => parseFloat(b.data.score) - parseFloat(a.data.score));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
