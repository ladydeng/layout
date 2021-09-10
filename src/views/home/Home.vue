<template>
  <div class="home">
    <Layout>
      <div slot="banner" class="logo">
        <header>欢迎进入***后台管理系统！</header>
        <p>welcome to **</p>
      </div>
      <div slot="left"><Menu /></div>
      <div slot="right"><Main /></div>
    </Layout>
  </div>
</template>

<script>
import Layout from "../../components/common/Layout.vue"

import Menu from "./childComps/Menu.vue"
import Main from "./childComps/Main.vue"
export default {
  name:"Home",
  components:{
    Layout,
    Menu,
    Main
  },
  destroyed(){
    this.$bus.$of("activeItem","activeIndex")
  }
}
</script>

<style>
.logo{
  width: inherit;
  height: inherit;
  box-sizing: border-box;
  color: white;
  border-bottom: 2px solid rgb(236, 236, 236);
  padding-left: 30px;
}

.logo header{
  font-size: 28px;
  line-height: 40px;
  padding-top: 30px;
}

.logo p{
  margin: 0;
}
</style>