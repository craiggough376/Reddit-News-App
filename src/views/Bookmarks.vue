<template lang="html">
  <div>
    <!-- <h2>Bookmarks</h2>
  <articles-list :articles="bookmarked"></articles-list> -->
  <p>Bookmarks</p>
  <articles-list :articles="bookmarked" :bookmarked="bookmarked"></articles-list>
  
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
