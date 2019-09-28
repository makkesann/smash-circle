asyncData ({ env }) {
  return client.getEntries({
    'content_type': env.CTF_BLOG_POST_TYPE_ID,
    order: '-fields.publishDate',
    'limit': 3
  }).then(entries => {
    return {
      posts: entries.items
    }
  }).catch(console.error)
}