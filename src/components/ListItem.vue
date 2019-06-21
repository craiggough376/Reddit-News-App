<template lang="html">
  <div class="">
    <li v-on:click="handleClick">{{ article.data.title }}</li>
    <button>Bookmark</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  name: 'list-item',
  props: ['article'],
  methods: {
    handleClick(){
      eventBus.$emit('article-selected', this.article)
    }
  }

}
</script>

<style lang="css" scoped>
</style>
