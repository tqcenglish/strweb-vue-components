<template>
  <div id="app">
    <ly-button>测试</ly-button>
      <pagination :total="total" :page.sync="page" :limit.sync="limit" @pagination="getData" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Pagination from '@/components/Pagination'
export default {
  name: 'app',
  data: function () {
    return {
      total:0,
      page:1,
      limit:10,
    }
  },
  components: {
    // HelloWorld
    Pagination
  },
  methods: {
    getData: function () {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
