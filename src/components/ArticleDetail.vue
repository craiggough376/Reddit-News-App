<template lang="html">
  <div v-if="article">
    <h3>{{ article.data.title}}</h3>
    <h3>Website: {{ article.data.domain}}</h3>
    <a :href="article.data.url" target="_blank">Go To Article</a>
    <h3>Upvotes: {{ article.data.score}}</h3>
    <!-- <iframe :src="article.data.url" height="600" width="500"></iframe> -->
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
