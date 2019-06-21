<template lang="html">
  <div>
    <ul>
      <list-item v-for="article in articles" :article="article">{{ article.data.title }}</list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  name: "articles-list",
  props: ['articles'],
  components: {
    "list-item": ListItem
  }
}
</script>

<style lang="css" scoped>
</style>
