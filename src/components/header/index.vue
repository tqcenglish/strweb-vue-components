<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
      >功能选择</button>
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
        <li class="nav-item">
          <a class="nav-link">
            主页
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <form class="form-inline mt-2 mt-md-0">
        <span style="color: white;">Admin</span>&nbsp;&nbsp;
        <button class="btn btn-outline-success my-2 my-sm-0" type="button">注销</button>
      </form>
    </div>
  </nav>
</template>
<script>
export default {
  name: "strweb-header",
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
  }
};
</script>
<style>
/*顶部菜单高度 56px*/
main {
  padding-top: 56px;
}

.router-link-active {
  color: white !important;
}
</style>
