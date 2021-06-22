<template>
  <div class="home">
    <Layout>
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

</style>