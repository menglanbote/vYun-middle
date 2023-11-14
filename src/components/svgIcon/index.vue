import type { h } from 'vue'; import type { h } from 'vue';
<script setup lang="ts">
import { h, resolveComponent } from 'vue';

const props = withDefaults(
  defineProps<{
    name?: string; // 图标名称
    size?: number; // 图标颜色
    color?: number | string; // 图标大小
  }>(),
  {
    name: '',
    size: '18px',
  }
);
const render = () => {
  console.log('props', props.size);
  if (props.name?.startsWith('ant-')) {
    return h(resolveComponent(props.name), {
      style: {
        color: props.color,
        fontSize: `${props.size}px` 
      }
    });
  } else {
    return h('i');
  }
};
console.log('render');
</script>
<template>
  <render />
</template>
<style scoped></style>
