<template lang="html">
  <div>
    <h2>UK News</h2>
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
}
</script>

<style lang="css" scoped>

</style>
