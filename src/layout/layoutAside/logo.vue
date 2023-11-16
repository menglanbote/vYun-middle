<script setup lang="ts"></script>
<template>
  <div class="layout-logo">
    <img class="layout-logo-img" src="@/assets/logo.png" />
    <span>云涵后端管理系统</span>
  </div>
</template>
<style scoped lang="less">
.layout-logo {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--el-color-primary);
  font-size: 16px;
  cursor: pointer;
  .layout-logo-img {
    width: 26px;
  }
  span {
    display: inline-block;
    white-space: nowrap;
    margin-left: 5px;
    font-size: 14px;
  }
}
</style>
