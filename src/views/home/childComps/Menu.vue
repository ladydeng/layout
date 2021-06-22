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
      <div class="system-name">
        <i class="el-icon-my-statistic"></i>
        <span slot="title" class="logo">****后台管理系统</span>
      </div>
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
    </el-menu>
    <!-- 
    <el-menu
      :default-active="$route.name"
      class="el-menu-vertical-demo"
      background-color="#272e41"
      text-color="white"
      active-text-color="#ffd04b"
    >
      <el-submenu
        :index="`${index}`"
        v-for="(menu, index) in menuList"
        :key="index"
      >
        <template slot="title">
          <i :class="menu.icont"></i>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="item.routeName"
            v-for="item in menu.menuItem"
            :key="item.index"
            @click="clickItem(item)"
            >{{ item.name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu> -->
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
  height: 100vh;
  background: #272e41 !important;
}

.system-name {
  height: 80px;
  line-height: 80px;
  background: #272e41;
  color: white;
  text-align: center;
  border-bottom: 2px solid white;
}

.logo {
  font-size: 14px;
  line-height: 40px;
  font-family: "宋体";
  font-weight: bold;
  white-space: nowrap;
  margin-left: 5px;
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