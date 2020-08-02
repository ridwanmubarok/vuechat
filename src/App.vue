<template>
  <div id="app">
    <div id="nav">
    <vs-navbar class="nabarx">
      <div slot="title">
        <router-link to="/">
          <vs-navbar-title>
              MEET SEKOLAHSMART
          </vs-navbar-title>
        </router-link>
      </div>
    </vs-navbar>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  .vs-navbar{
    height:50px;
  }
</style>
