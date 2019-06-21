<template lang="html">
  <div class="">
    <li v-on:click="handleClick" v-model="article">{{ article.data.title }}</li>
    <article-detail v-if="this.click === true" :article="article"></article-detail>
    <button>Bookmark</button>
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

</style>
