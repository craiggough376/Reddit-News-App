<template lang="html">
  <div v-if="article">
    <h3>{{ article.data.title}}</h3>
    <h3>Website: {{ article.data.domain}}</h3>
    <h3>Upvotes: {{ article.data.score}}</h3>
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
