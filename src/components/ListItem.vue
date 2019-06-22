<template lang="html">
  <div class="item">
    <img v-if="article.data.thumbnail !== 'default'" :src="article.data.thumbnail">
    <li v-on:click="handleClick" v-model="article">{{ article.data.title }}</li>
    <button>Bookmark</button>
    <article-detail v-if="this.click === true" :article="article"></article-detail>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import ArticleDetail from './ArticleDetail'
export default {
  name: 'list-item',
  props: ['article'],
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
 border-width: 5px;
 padding: 3px;
}



</style>
