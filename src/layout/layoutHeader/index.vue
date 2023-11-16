<script setup lang="ts">
import type { CSSProperties } from 'vue';
import { LayoutHeader } from 'ant-design-vue';

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
</script>
<template>
  <LayoutHeader :style="headerStyle">Header</LayoutHeader>
</template>

<style scoped></style>
