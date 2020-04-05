<template>
  <div id="menubar">
    <div class="container" id="menu-waku">
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand to="/#" id="logo-waku"><img src="~assets/images/smash-circle.png" alt="" class="header-logo"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="bg-white" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/#">Top</b-nav-item>
            <b-nav-item to="#">About</b-nav-item>
            <b-nav-item to="#">Bing</b-nav-item>
            <b-nav-item to="#">Link</b-nav-item>
            <b-nav-item to="#">Link</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <div class="ml-auto nav-icon">
            <div class="d-inline-block">
              <nuxt-link to="#"><img src="~assets/images/footer-twitter.png" alt=""></nuxt-link>
            </div>
            <div class="d-inline-block">

              <nuxt-link to="#"><img src="~assets/images/footer-line.png" alt=""></nuxt-link>
            </div>
          </div>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>