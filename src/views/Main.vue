<template>
  <body id="wrapper" :class="{toggled}">
    <StrWebHeader
      v-bind:logoutDisplay="'注销'"
      v-bind:functionDisplay="true"
      v-bind:rebootDisplay="'重启'"
      v-on:toggleMenu="toggleMenu"
      v-on:logout="logout"
      v-on:reboot="reboot"
    ></StrWebHeader>
    <main role="main">
      <StrWebSidebar v-bind:menus="menus" id="sidebar-wrapper" class="sidebar-wrapper-hide"></StrWebSidebar>
      <router-view id="page-content-wrapper"></router-view>
    </main>
  </body>
</template>
<script>
import StrWebHeader from "../components/header/index";
import StrWebSidebar from "../components/sidebar/index";

export default {
  name: "main-layout",
  components: {
    StrWebHeader,
    StrWebSidebar
  },
  data: function() {
    return {
      toggled: true,
      plugins: [],
      menus: [
        {
          name: "表单",
          path: "/form"
        },
        {
          name: "关于",
          path: "/about"
        }
      ]
    };
  },
  computed: {},
  mounted() {
    console.warn("mounted");
  },
  methods: {
    reboot() {},
    logout() {},
    toggleMenu() {
      this.toggled = !this.toggled;
    }
  }
};
</script>
<style>
#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #000;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#wrapper #sidebar-wrapper {
  width: 0px;
}

#page-content-wrapper {
  position: relative;
  padding: 15px;
}

/*顶部菜单高度 54px*/
main {
  padding-top: 54px;
}
</style>