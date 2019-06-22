<template lang="html">
  <div class="item">
    <img v-if="article.data.thumbnail !== 'default'" :src="article.data.thumbnail">
    <li v-on:click="handleClick" v-model="article">{{ article.data.title }}</li>
    <h3>Upvotes: {{ article.data.score}}</h3>
    <button v-on:click="bookmark">Bookmark</button>
    <article-detail v-if="this.click === true" :article="article">
    </article-detail>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import ArticleDetail from './ArticleDetail'
export default {
  name: 'list-item',
  props: ['article', 'bookmarked'],
  computed: {
    isBookmarked: function(){
       this.bookmarked.includes(this.article)
    }
  },
  data(){
    return{
      click: false
    }
  },
  methods: {
    handleClick(){
      if (this.click === false){
        this.click = true
      } else {
        this.click = false
      }
      console.log(this.click);
    },
    bookmark(){
      eventBus.$emit('bookmarked-article', this.article)
    }
  },
  components: {
      'article-detail': ArticleDetail
  }
}
</script>

<style lang="css" scoped>
.item {
  list-style: none;
  border-style: solid;
 border-width: 2px;
 padding: 10px;
 margin-bottom: 20px;
}



</style>
