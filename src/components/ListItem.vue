<template lang="html">
  <li>{{ article.data.title }}</li>
</template>

<script>
export default {
  name: 'list-item',
  props: ['article']
}
</script>

<style lang="css" scoped>
</style>
