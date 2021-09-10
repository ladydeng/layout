<template>
  <div class="layout">
    <!-- banner -->
    <div class="banner">
      <slot name="banner"></slot>
    </div>
    <!-- 内容主体 -->
    <div class="content">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <!-- :style="{ left: width }" -->
      <div class="right" :class="[isSwitch ? 'shrink' : 'open']">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      // width: "",
      isSwitch: false,
    };
  },
  mounted() {
    this.$bus.$on("toggleWidth", (bool) => {
      console.log(bool)
      this.isSwitch = bool;
      // if (bool) {
      //   setTimeout(() => {
      //     this.width = 64 + "px";
      //   }, 200);
      // } else {
      //   setTimeout(() => {
      //     this.width = 200 + "px";
      //   }, 50);
      // }
    });
  },
};
</script>

<style>
.layout {
  width: 100vw;
  height: 100vh;
}
.banner {
  width: inherit;
  height: 130px;
  background: #272e41;
}
.content {
  width: 100vw;
  height: calc(100vh - 130px);
  display: flex;
  position: relative;
}
.left {
  width: 200px;
  height: inherit;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  left: 200px;
}

/* 关键帧 */
/* 展开 */
.open {
  left: 200px;
  animation: mymove1 0.6s;
  -moz-animation: mymove1 0.6s; /* Firefox */
  -webkit-animation: mymove1 0.6s; /* Safari and Chrome */
  -o-animation: mymove1 0.6s; /* Opera */
}
@keyframes mymove1 {
  from {
    left: 64px;
  }
  to {
    left: 200px;
  }
}

/* 收缩 */
.shrink {
  left: 64px;
  animation: mymove2 0.3s;
  -moz-animation: mymove2 0.3s; /* Firefox */
  -webkit-animation: mymove2 0.3s; /* Safari and Chrome */
  -o-animation: mymove2 0.3s; /* Opera */
}
@keyframes mymove2 {
  from {
    left: 200px;
  }
  to {
    left: 64px;
  }
}
</style>