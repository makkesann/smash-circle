<template>
<div>
  <header>
    <div id="top">
      <h1 id="header_title" class="display-1 text-center font-weight-bold">関西学院大学<br>スマブラ<br class="sp">サークル</h1>
    </div>
  </header>
  <body>
    <div id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-6 sp-center">
            <h2>#ABOUT</h2>
            <h3>三田から世界へ</h3>
            <p class="text">
              スマブラで強くなりたいという人はもちろんいろんなことで遊びたいという人も歓迎しています！<br>
              <br>
              スマブラを中心としていろいろなことで遊んで仲良くなるサークルです。
            </p>
            <button href="/about" type="button" class="read_more">Read more ＞</button>
          </div>
          <div class="col-md-6 mt-md-0 mt-5">
          </div>
        </div>
      </div>
    </div>
    <div id="event">
      <div class="container">
        <div class="title">
          <h2>#EVENT</h2>
          <h3>イベント</h3>
        </div>
        <div class="col-md-11 mx-auto">
          <div class="row">
            <div class="col-md-6">
              <nuxt-link :to="'blogs/'+post_newest.fields.slug">

              </nuxt-link>
            </div>
            <div class="col-md-6">
              <div class="eventBox">
                <h4>{{ post_newest.fields.title }}</h4>
                <p>{{ post_newest.fields.highlight }}</p>
                <nuxt-link :to="'blogs/'+post_newest.fields.slug" class="read_more">Read more ＞</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="posts">
      <nuxt-link :to="'blogs/'+post.fields.slug" class="post" v-for="(post, index) in posts" :key="index">
        <div class="post-text">
          <p>{{ formatDate(post.sys.createdAt) }}</p>
          <h2>{{ post.fields.title }}</h2>
        </div>
      </nuxt-link>
    </div>
  </body>
</div>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'blog',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return {
          posts: entries.items,
          post_newest: entries.items[0],
         }
      })
      .catch(e => console.log(e))
  },
  head: {
    title: '関西学院大学スマブラサークル',
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, "0")
      const dd = new String(date.getDate()).padStart(2, "0")
      return `${yyyy}.${mm}.${dd}`
    }
  }
}
</script>