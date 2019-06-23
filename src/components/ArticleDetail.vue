<template lang="html">
  <div v-if="article">
    <h3>Website: {{ article.data.domain}}</h3>
    <h3>Upvotes: {{ article.data.score}}</h3>
    <h3>Created: {{ convertTimestamp(article.data.created_utc)}}</h3>
    <h3 v-if="article.data.gilded > 0">Reddit Gold: {{ article.data.gilded}}</h3>
    <h3>Created By: {{ article.data.author}}</h3>
    <h3>Comments: {{ article.data.num_comments}}</h3>
    <button><a :href="`https://www.reddit.com${article.data.permalink}`" target="_blank">Go to Reddit Page</a> </button>
    <button v-if="article.data.url !==`https://www.reddit.com${article.data.permalink}`">
      <a :href="article.data.url" target="_blank">Go To {{ article.data.domain}} Article</a>
    </button>
    <!-- <iframe :src="`https://www.reddit.com${article.data.permalink}`" height="600" width="500"></iframe> -->
  </div>
</template>

<script>
export default {
  name: 'article-detail',
  props: ['article'],
  methods: {
  convertTimestamp: function(timestamp){
    const date = new Date(timestamp*1000);
    return date
    }
  }
}
</script>

<style lang="css" scoped>

</style>
