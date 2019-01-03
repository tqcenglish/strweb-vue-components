<template>
  <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li>
                <router-link class="nav-link" to="/form">表单</router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/dialog">弹框</router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/about">关于</router-link>
            </li>
        </ul>
      </div>
</template>
<style>
/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  text-indent: 20px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #999999;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav li a:active, .sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav>.sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav>.sidebar-brand a {
  color: #999999;
}

.sidebar-nav>.sidebar-brand a:hover {
  color: #fff;
  background: none;
}

.router-link-active {
  color: white !important;
}
</style>
