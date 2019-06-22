<template lang="html">
  <div v-if="article">
    <h3>Website: {{ article.data.domain}}</h3>
    <button><a :href="`https://www.reddit.com${article.data.permalink}`" target="_blank">Go to Reddit Page</a> </button>
    <button v-if="article.data.url !==`https://www.reddit.com${article.data.permalink}`">
      <a :href="article.data.url" target="_blank">Go To {{ article.data.domain}} Article</a>
    </button>
    <h3>Upvotes: {{ article.data.score}}</h3>
    <!-- <iframe :src="`https://www.reddit.com${article.data.permalink}`" height="600" width="500"></iframe> -->
  </div>
</template>

<script>
export default {
  name: 'article-detail',
  props: ['article']
}
</script>

<style lang="css" scoped>

</style>
