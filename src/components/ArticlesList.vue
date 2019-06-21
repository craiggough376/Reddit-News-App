<template lang="html">
  <div>
    <li v-for="article in articles">{{ article.data.title }}</li>
  </div>
</template>

<script>
export default {
  name: "articles-list",
  props: ['articles']
}
</script>

<style lang="css" scoped>
</style>
