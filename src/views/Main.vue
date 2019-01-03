<template>
  <body id="wrapper" class="toggled">
    <StrWebHeader></StrWebHeader>
    <main role="main">
      <StrWebSidebar id="sidebar-wrapper"></StrWebSidebar>
      <router-view id="page-content-wrapper"></router-view>
    </main>
  </body>
</template>
<script>
import StrWebHeader from '../components/header/index';
import StrWebSidebar from '../components/sidebar/index';

export default {
  name: 'main-layout',
  components: {
    StrWebHeader,
    StrWebSidebar
  },
  data: function() {
		return {
			plugins: [],
		};
  },
  computed: {
  },
  mounted() {
    console.warn('mounted');
  },
  methods: {
  }
}
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

#page-content-wrapper {
  position: relative;
  padding: 15px;
}


/*顶部菜单高度 56px*/
main {
  padding-top: 56px; 
}
</style>