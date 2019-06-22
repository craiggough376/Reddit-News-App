<template lang="html">
  <div>
    <p>Reddit UK News</p>
    <button v-on:click="sortByUpvotes">Sort by Most Upvoted</button>
    <articles-list :articles="articles"></articles-list>
  </div>
</template>

<script>
import ArticlesList from '../components/ArticlesList.vue'
export default {
  name: 'news',
  props: ['articles'],
  components: {
    'articles-list': ArticlesList
  },
  methods: {
    sortByUpvotes: function(){
      this.articles.sort((a, b) => parseFloat(b.data.score) - parseFloat(a.data.score));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
