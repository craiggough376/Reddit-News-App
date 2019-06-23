<template lang="html">
  <div>
    <p>Bookmarks</p>
  <articles-list :articles="bookmarked"></articles-list>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import ArticlesList from '../components/ArticlesList.vue'
export default {
  name: 'bookmarks',
  props: ['bookmarked'],
  data(){
    return{
    }
  },
  components: {
    'articles-list': ArticlesList
  },

}
</script>

<style lang="css" scoped>
</style>
