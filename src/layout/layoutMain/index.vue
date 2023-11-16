<script setup lang="ts">
import { CSSProperties } from 'vue';
import { LayoutContent } from 'ant-design-vue';

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9'
};
</script>
<template>
  <LayoutContent :style="contentStyle">Content</LayoutContent>
</template>

<style scoped></style>
