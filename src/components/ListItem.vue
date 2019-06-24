<template lang="html">
  <div class="item">
    <a class="title">
      <img  v-if="article.data.thumbnail !== 'default' " :src="article.data.thumbnail">
      <li>{{ article.data.title }}</li>

      <button v-if="!isBookmarked" v-on:click="bookmark" onclick="style='display: none;'">Bookmark</button>
      <button v-if="isBookmarked" v-on:click="deleteBookmark">Delete Bookmark</button>

      <button v-on:click="handleClick">Details</button>
    </a>
    <article-detail v-if="this.click === true" :article="article"></article-detail>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import ArticleDetail from './ArticleDetail'
export default {
  name: 'list-item',
  props: ['article', 'bookmarked'],
  // computed: {
  //   isBookmarked: function(){
  //     return this.bookmarked.includes(this.article)
  //   }
  // },
  computed: {
    isBookmarked: function(){
      if(this.bookmarked){
      return this.bookmarked.includes(this.article)}
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
    },
    deleteBookmark(){
      // const index = this.bookmarked.indexOf(this.article);
      // eventBus.$emit('delete-article', this.index)
      console.log("bookmarked", this.bookmarked);
    }
  },
  components: {
      'article-detail': ArticleDetail
  }
}
</script>

<style lang="css" scoped>
.item {
  background-color: white;
  text-align: center;
  list-style: none;
  border-style: solid;
 border-width: 2px;
 padding: 10px;
 margin-bottom: 20px;
}

a.title{
  display: flex;
  justify-content: flex-start;
  align-items:center;
  display: inline-block;
  padding:10px;
}


button {
  background-color: grey;
  margin: 5px;
  border: none;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;

}
button:hover {
  background-color: darkgrey;
  color: white;
}



</style>
