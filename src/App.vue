<script setup lang="ts">
import { ConfigProvider, Button } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ref } from 'vue';

const locale = ref(zhCN);
</script>
<template>
  <ConfigProvider :locale="locale">
    <!-- 路由组件渲染出品 -->
    <div class="h-full">
      <router-view />
    </div>
  </ConfigProvider>
</template>
<style scoped lang="less"></style>
