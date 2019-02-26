<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="dropdown">
      <button
        v-if="functionDisplay"
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >{{functionDisplay}}</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a
          class="dropdown-item"
          v-for="link in links"
          v-bind:key="link.name"
          :href="link.path"
        >{{link.name}}</a>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li v-if="homeDisplay" class="nav-item">
          <a class="nav-link" href="/">
            {{homeDisplay}}
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <form class="form-inline mt-2 mt-md-0">
        <span style="color: white;">{{name}}</span>&nbsp;&nbsp;
        <button v-if="rebootDisplay" class="btn btn-outline-danger my-2 my-sm-0" type="button" @click="reboot">{{rebootDisplay}}</button>
        &nbsp;
        <button v-if="logoutDisplay" class="btn btn-outline-success my-2 my-sm-0" type="button" @click="logout">{{logoutDisplay}}</button>
      </form>
    </div>
  </nav>
</template>
<script>
export default {
  name: "strweb-header",
  props: ['name', 'functionDisplay', 'homeDisplay', 'rebootDisplay', 'logoutDisplay'],
  data() {
    return {
      links: [
        {
          name: "官网介绍",
          path: "https://cc.zycoo.com/website-web"
        },
        {
          name: "接口文档",
          path: "https://zycoo.gitbook.io/coocenter/"
        }
      ]
    };
  },
  methods: {
    logout: function () {
      this.$emit('logout');
    },
    reboot: function () {
      this.$emit('reboot');
    }
  },
};
</script>
<style>
/*顶部菜单高度 54px*/
main {
  padding-top: 54px;
}

.router-link-active {
  color: white !important;
}
</style>
