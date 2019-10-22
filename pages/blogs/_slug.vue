<template>
  <div id="blogpage">
    <article class="article">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <div id="breadcrumb">
              <ul>
                <li><a href="/"><i class="fas fa-home"></i> HOME</a></li>
                <li>＞</li>
                <li><a href="/blogs">ブログ一覧ページ</a></li>
                <li>＞</li>
                <li>{{ post.fields.title }}</li>
              </ul>
            </div>
            <picture>
              <source :srcset="post.fields.images.fields.file.url" type="image/png" />
              <img :src="post.fields.images.fields.file.url" class="img-fluid my-0 w-100">
            </picture>
            <h1>
              {{ post.fields.title }}<br>
              {{ post.fields.subtitle }}
            </h1>
            <p class="post-created-at">{{ formatDate(post.sys.createdAt) }}</p>
            <div v-html="renderHtml(post.fields.body)"></div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }
    return client
      .getEntries({
        content_type: 'blog',
        'fields.body': params.blog,
      })
      .then(entries => {
        return { post: entries.items[0] }
      })
      .catch(e => console.log(e))
  },
  head() {
    return {
      title: this.post.fields.title,
    }
  },
  mounted() {
    console.log(this.post)
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, "0")
      const dd = new String(date.getDate()).padStart(2, "0")
      return `${yyyy}.${mm}.${dd}`
    },
    renderHtml(obj) {
      const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
                `<picture>
                  <source srcset="${fields.file.url}" type="image/webp" />
                  <source srcset="${fields.file.url}" type="image/jpeg" />
                  <img src="${fields.file.url}" class="img-fluid w-100" />
                </picture>`,
        },
      }
      return documentToHtmlString(obj, options);
    }
  }
}
</script>