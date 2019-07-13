<template lang="html">
  <div>
    <label for="">Sort By</label>
    <select @change="sortArticles" v-model="selectedInput">
      <option :value='"score"' >Most Upvoted</option>
      <option :value='"num_comments"' >Most Commented</option>
      <option :value='"created_utc"' >Most Recent</option>
    </select>
    <ul class="body">
      <!-- <list-item v-for="article in articles" :article="article">{{ article.data.title }}</list-item> -->
      <list-item v-for="(article, index) in articles" :key="index" :index="index" :article="article" :articles="articles" :bookmarked="bookmarked">
      {{ article.data.title }}</list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  name: "articles-list",
  props: ['articles', 'bookmarked'],
  data(){
    return{
      selectedInput: null
    }
  },
  components: {
    "list-item": ListItem
  },
    methods: {
      sortArticles: function(selectedInput){
        this.articles.sort((a, b) => (b.data[this.selectedInput]) - (a.data[this.selectedInput]));
        console.log("hello");
      }
    }
}
</script>

<style lang="css" scoped>
.body{
  height: 70vh;
  overflow: scroll;
}
</style>
