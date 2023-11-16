<script setup lang="ts">
import { Layout } from 'ant-design-vue';
import { defineAsyncComponent } from 'vue';
// 异步加载组件
const LayoutAside = defineAsyncComponent(() =>
  import('./layoutAside/index.vue')
);
const LayoutHeader = defineAsyncComponent(() =>
  import('./layoutHeader/index.vue')
);
const LayoutMain = defineAsyncComponent(() => import('./layoutMain/index.vue'));
</script>
<template>
  <Layout class="h-full">
    <LayoutAside />
    <Layout>
      <LayoutHeader />
      <LayoutMain />
    </Layout>
  </Layout>
</template>

<style scoped></style>
