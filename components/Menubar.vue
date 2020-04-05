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
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item to="#">Profile</b-dropdown-item>
              <b-dropdown-item to="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>