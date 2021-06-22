<template>
  <div class="main">
    <div class="main-head">
      <i
        class="el-icon-s-unfold"
        @click="agreeChange(false)"
        v-if="isCollapse"
      ></i>
      <i class="el-icon-s-fold" @click="agreeChange(true)" v-else></i>

      <div class="user">*******有限公司</div>
    </div>
    <div class="main-nav">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        @tab-click="clickTab"
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="(item, index) in editableTabs"
          :key="index"
          :label="item.name"
          :name="getIndex(index)"
        >
          <div class="box" :is="$store.state.view">{{ item.content }}</div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Home from "@/components/content/home/Home";

import ExcavatorManagement from "@/components/content/operateManagement/ExcavatorManagement";
import MonitorManagement from "@/components/content/operateManagement/MonitorManagement";
import ProjectManagement from "@/components/content/operateManagement/ProjectManagement";
import TruckManagement from "@/components/content/operateManagement/TruckManagement";

import InfomationManagement from "@/components/content/infomationManagement/InfomationManagement";

import UserManagement from "@/components/content/systemManagement/UserManagement";
import RoleManagement from "@/components/content/systemManagement/RoleManagement";
import DepartmentManagement from "@/components/content/systemManagement/DepartmentManagement";

export default {
  name: "Main",
  data() {
    return {
      isCollapse: false,
      // tab活跃位置
      editableTabsValue: "1",
      editableTabs: [
        {
          view: "Home",
          name: "首页",
          index: "1",
        },
      ],
    };
  },
  components: {
    Home,
    ExcavatorManagement,
    MonitorManagement,
    ProjectManagement,
    TruckManagement,
    InfomationManagement,
    UserManagement,
    RoleManagement,
    DepartmentManagement,
  },
  methods: {
    // 菜单el-menu的切换
    agreeChange(bool) {
      this.isCollapse = bool;
      // 保存单选按钮状态到vuex
      this.$store.commit("toggleCollapse", this.isCollapse);

      // 发出事件，更改main区域宽度
      this.$bus.$emit("toggleWidth", this.isCollapse);
    },

    /**
     * func removeTab 关闭tab事件
     * params index 被点击元素在editableTabs数组的索引
     */
    removeTab(index) {
      var length = this.editableTabs.length;
      var nextTab;
      var index = parseInt(index);
      // 点击元素为数组最后一个
      if (index == length && length > 1) {
        nextTab = index - 1;
        // 设置tabactive位置
        this.editableTabsValue = String(nextTab);
        // 删除该索引在数组的元素
        this.editableTabs.splice(nextTab, 1);
        // 保存当前活跃的views
        this.$store.commit("saveView", this.editableTabs[nextTab - 1].view);
        // 发出全局事件，让menu改变活跃的index
        this.$bus.$emit("activeIndex", this.editableTabs[nextTab - 1].index);
      } else if (index < length && length > 1) {
        // 点击元素是数组的中间元素
        nextTab = index;
        // 设置tabactive位置
        this.editableTabsValue = String(nextTab);
        // 删除该索引在数组的元素
        this.editableTabs.splice(index - 1, 1);
        // 保存当前活跃的view
        this.$store.commit("saveView", this.editableTabs[nextTab].view);
        // 发出全局事件，让menu改变活跃的index
        this.$bus.$emit("activeIndex", this.editableTabs[nextTab].index);
      }
    },

    /**
     * func clickTab tab被点击事件
     * params e 被点击的tab实例
     */
    clickTab(e) {
      // 保存当前活跃的view
      this.$store.commit("saveView", this.editableTabs[e.index].view);
      // 发出全局事件
      this.$bus.$emit("activeIndex", this.editableTabs[e.index].index);
    },

    changeView() {
      this.view = page;
    },

    // 为实例的index属性设置值
    getIndex(index) {
      return String(index + 1);
    },
  },
  mounted() {
    // 监听全局事件
    this.$bus.$on("activeItem", (item) => {
      var arr = [];
      // 便利tabs数组
      for (var i in this.editableTabs) {
        // 把所有tabs里面数组的index取出来
        arr.push(this.editableTabs[i].index);
      }

      // 判断arr数组里是否存在接收对象的index
      if (arr.indexOf(item.index) == -1) {
        this.editableTabs.push(item);
        // 改变tab的active位置
        this.editableTabsValue = String(this.editableTabs.length);
      } else {
        // 获取该index在tabs数组arr的位置索引
        var index = arr.indexOf(item.index) + 1;
        // 改变tab的active位置
        this.editableTabsValue = String(index);
      }
    });
  },
};
</script>

<style>
.main {
  background: rgb(236, 236, 236);
  height: 100vh;
  position: relative;
  bottom: 0;
}

.main-head {
  padding: 0 10px 0 10px;
  line-height: 80px;
  box-shadow: 0 4px 10px -10px gray;

  background: white;
}

.user {
  float: right;
}

.el-icon-s-unfold,
.el-icon-s-fold {
  font-size: 24px;
}

.main-nav {
  background: white;
  position: absolute;
  top: 85px;
  left: 10px;
  right: 10px;
  bottom: 5px;
}

.box {
  border-top: 5px solid rgb(238, 236, 236);
}

.el-tabs__header {
  margin: 0 !important;
  padding: 5px 2px 0 !important;
}
</style>