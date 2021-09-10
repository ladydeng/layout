<template>
  <div class="menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="this.$store.state.isCollapse"
      background-color="#272e41"
      text-color="white"
    >
      <el-menu-item
        index="1"
        @click="clickItem({ view: 'Home', index: '1', name: '首页' })"
      >
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">运营管理</span>
        </template>
        <el-menu-item
          index="2-1"
          @click="
            clickItem({
              view: 'ProjectManagement',
              index: '2-1',
              name: '项目管理',
            })
          "
          >项目管理</el-menu-item
        >
        <el-menu-item
          index="2-2"
          @click="
            clickItem({
              view: 'TruckManagement',
              index: '2-2',
              name: '货车管理',
            })
          "
          >货车管理</el-menu-item
        >
        <el-menu-item
          index="2-3"
          @click="
            clickItem({
              view: 'ExcavatorManagement',
              index: '2-3',
              name: '钩机管理',
            })
          "
          >钩机管理</el-menu-item
        >
        <el-menu-item
          index="2-4"
          @click="
            clickItem({
              view: 'MonitorManagement',
              index: '2-4',
              name: '监控管理',
            })
          "
          >监控管理</el-menu-item
        >
      </el-submenu>
      <el-menu-item
        index="3"
        @click="
          clickItem({
            view: 'InfomationManagement',
            index: '3',
            name: '资讯管理',
          })
        "
      >
        <i class="el-icon-menu"></i>
        <span slot="title">资讯管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item
          index="4-1"
          @click="
            clickItem({
              view: 'UserManagement',
              index: '4-1',
              name: '用户管理',
            })
          "
          >用户管理</el-menu-item
        >
        <el-menu-item
          index="4-2"
          @click="
            clickItem({
              view: 'RoleManagement',
              index: '4-2',
              name: '角色管理',
            })
          "
          >角色管理</el-menu-item
        >
        <el-menu-item
          index="4-3"
          @click="
            clickItem({
              view: 'DepartmentManagement',
              index: '4-3',
              name: '部门管理',
            })
          "
          >部门管理</el-menu-item
        >
      </el-submenu>
      <ul>
        <li>内容1</li>
        <li>内容2</li>
        <li>内容3</li>
        <li>内容4</li>
        <li>内容5</li>
        <li>内容6</li>
        <li>内容7</li>
        <li>内容8</li>
        <li>内容9</li>
        <li>内容10</li>
        <li>内容11</li>
        <li>内容12</li>
        <li>内容13</li>
        <li>内容14</li>
        <li>内容15</li>
        <li>内容16</li>
        <li>内容17</li>
        <li>内容18</li>
        <li>内容19</li>
        <li>内容20</li>
        <li>内容21</li>
        <li>内容22</li>
        <li>内容23</li>
        <li>内容24</li>
        <li>内容25</li>
        <li>内容26</li>
        <li>内容27</li>
        <li>内容28</li>
        <li>内容29</li>
        <li>内容30</li>
        <li>内容31</li>
        <li>内容32</li>
        <li>内容33</li>
        <li>内容34</li>
        <li>内容35</li>
        <li>内容36</li>
        <li>内容37</li>
        <li>内容38</li>
        <li>内容39</li>
        <li>内容40</li>
        <li>内容41</li>
        <li>内容42</li>
        <li>内容43</li>
        <li>内容44</li>
        <li>内容45</li>
        <li>内容46</li>
        <li>内容47</li>
        <li>内容48</li>
        <li>内容49</li>
        <li>内容50</li>
        <li>内容51</li>
        <li>内容52</li>
        <li>内容53</li>
        <li>内容54</li>
        <li>内容55</li>
        <li>内容56</li>
        <li>内容57</li>
        <li>内容58</li>
        <li>内容59</li>
        <li>内容60</li>
        <li>内容61</li>
        <li>内容62</li>
        <li>内容63</li>
        <li>内容64</li>
        <li>内容65</li>
        <li>内容66</li>
        <li>内容67</li>
        <li>内容68</li>
        <li>内容69</li>
        <li>内容70</li>
        <li>内容71</li>
        <li>内容72</li>
        <li>内容73</li>
        <li>内容74</li>
        <li>内容75</li>
        <li>内容76</li>
        <li>内容77</li>
        <li>内容78</li>
        <li>内容79</li>
        <li>内容80</li>
        <li>内容81</li>
        <li>内容82</li>
        <li>内容83</li>
        <li>内容84</li>
        <li>内容85</li>
        <li>内容86</li>
        <li>内容87</li>
        <li>内容88</li>
        <li>内容89</li>
        <li>内容90</li>
        <li>内容91</li>
        <li>内容92</li>
        <li>内容93</li>
        <li>内容94</li>
        <li>内容95</li>
        <li>内容96</li>
        <li>内容97</li>
        <li>内容98</li>
        <li>内容99</li>
        <li>内容100</li>
      </ul>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      // menu活跃位置
      activeIndex: "1",
    };
  },
  methods: {
    // 下拉菜单打开
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    // 下拉菜单关闭
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },

    // 菜单点击
    clickItem(item) {
      // 保存当前活跃的view
      this.$store.commit("saveView", item.view);

      // 发出全局事件
      this.$bus.$emit("activeItem", item);
    },
  },
  mounted() {
    // 监听全局事件
    this.$bus.$on("activeIndex", index => {
      // 改变当前活跃item
      this.activeIndex = index;
    });
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.menu {
  height: calc(100vh - 130px);
  background: #272e41 !important;

  overflow: scroll;
}

.menu::-webkit-scrollbar {
    display: none;
}

/* 自定义图标 */
.el-icon-my-statistic {
  background: url("../../../assets/logo.png") center no-repeat;
  background-size: 20px 20px;
}

/* content中是中文的Unicode编码； font-size:图标大小； visibility: hidden;来隐藏文字 */
.el-icon-my-statistic:before {
  content: "\8d3a";
  font-size: 20px;
  visibility: hidden;
}

/* 改变点击时的背景颜色 */
.el-menu-item.is-active {
  background-color: #e6a23c !important;
  color: #fff !important;
}

</style>