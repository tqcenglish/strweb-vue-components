<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="fold btn" @click="toggleMenu">
      <i class="el-icon-s-unfold"></i>
    </div>
    &nbsp;
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li v-if="homeDisplay" class="nav-item">
          <a class="nav-link" href="/">
            {{ homeDisplay }}
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "strweb-header",
  props: [
    "name",
    "functionDisplay",
    "homeDisplay",
    "rebootDisplay",
    "logoutDisplay"
  ],
  data() {
    return {
    };
  },
  methods: {
    logout: function() {
      this.$emit("logout");
    },
    reboot: function() {
      this.$emit("reboot");
    },
    toggleMenu: function() {
      this.$emit("toggleMenu");
    }
  }
};
</script>
<style>
/*顶部菜单高度 54px*/
main {
  padding-top: 54px;
}

.fold {
  color: #606266;
  margin: 0 20px;
  font-size: 1.5em;
  vertical-align: middle;
}
.router-link-active {
  color: white !important;
}
</style>
