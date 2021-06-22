<template>
  <div class="layout">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right" :style="{ left: width }">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      width: "",
    };
  },
  mounted() {
    this.$bus.$on("toggleWidth", (bool) => {
      if (bool) {
        setTimeout(() => {
          this.width = 64 + "px";
        }, 200);
      } else {
        setTimeout(() => {
          this.width = 200 + "px";
        }, 50);
      }
    });
  },
};
</script>

<style>
.layout {
  position: relative;
}

.left {
  position: fixed;
  left: 0;
  top: 0;

  /* background: red; */
}

.right {
  position: fixed;
  right: 0;
  top: 0;
  left: 200px;

  /* background: green; */
}
</style>