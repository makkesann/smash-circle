<template>
<div id="top">
  <Menubar/>
  <Header title='関西学院大学<br>スマブラ<br class="sp">サークル'></Header>
  <body>
    <div class="waku" id="about">
      <div class="container">
        <div class="title">
          <h2>#ABOUT</h2>
          <h3>紹介</h3>
        </div>
        <div class="row">
          <div class="col-md-6 sp-center">
            <h3>三田から世界へ</h3>
            <p class="text">
              スマブラで強くなりたいという人はもちろんいろんなことで遊びたいという人も歓迎しています！<br>
              <br>
              スマブラを中心としていろいろなことで遊んで仲良くなるサークルです。
            </p>
            <nuxt-link to="/about" type="button" class="read_more">Read more ＞</nuxt-link>
            <!-- <button href="/about" type="button" class="read_more">Read more ＞</button> -->
          </div>
          <div class="col-md-6 mt-md-0 mt-5">
            <picture class="d-block">
              <img :src="require('~/assets/images/header.webp')" class="img-fluid top-about-img" alt="古き良き商店街で多世代向けにイノベーションを起こす！" />
            </picture>
          </div>
        </div>
      </div>
    </div>
    <div class="waku" id="article">
      <div class="container">
        <div class="title">
          <h2>#BLOG</h2>
          <h3>記事</h3>
        </div>
        <div class="row" id="blog-content">
          <div class="col-md-6">
            <nuxt-link :to="'blogs/'+post_newest.fields.slug">
              <picture>
                <img :src="post_newest.fields.images.fields.file.url" class="img-fluid">
              </picture>
            </nuxt-link>
          </div>
          <div class="col-md-6">
            <div class="eventBox">
              <h4>{{ post_newest.fields.title }}</h4>
              <h5>{{ formatDate(post_newest.sys.createdAt) }}</h5>
              <p>{{ post_newest.fields.highlight }}</p>
              <nuxt-link :to="'blogs/'+post_newest.fields.slug" class="read_more">Read more ＞</nuxt-link>
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
import Header from "~/components/Header.vue"
import Menubar from "~/components/Menubar.vue"
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

  components:{
    Header,
    Menubar
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