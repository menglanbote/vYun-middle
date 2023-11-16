<script setup lang="ts">
import  { LayoutSider } from 'ant-design-vue';
import type { CSSProperties } from 'vue';
import { defineAsyncComponent, ref } from 'vue'
const Logo = defineAsyncComponent(() => import('@/layout/layoutAside/logo.vue'));
const VerticalMenu = defineAsyncComponent(() => import('@/layout/layoutAside/verticalMenu.vue'));

const collapsed = ref<boolean>(false);
const siderStyle: CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
};
</script>
<template>
    <LayoutSider :style="siderStyle" v-model:collapsed="collapsed" collapsible>
      <!-- LOGO -->
      <Logo />
      <!-- 菜单 -->
      <VerticalMenu />
    </LayoutSider>
</template>

<style scoped></style>
