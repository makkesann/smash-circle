<template>
  <div class="posts">
    <div v-for="(post, index) in posts" :key="index" class="post">
      {{ post.fields.title }}
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return { posts: entries.items }
      })
      .catch(e => console.log(e))
  },
}
</script>