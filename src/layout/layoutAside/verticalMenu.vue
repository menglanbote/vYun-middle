<script setup lang="ts">
import { Menu } from 'ant-design-vue';
import { h, reactive } from 'vue';
import {
  PieChartOutlined,
  MailOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
});
const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: '首页',
    title: '首页'
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: '系统管理',
    title: '系统管理',
    children: [
      {
        key: '5',
        label: '菜单管理',
        title: '菜单管理'
      },
      {
        key: '6',
        label: '角色管理',
        title: '角色管理'
      },
      {
        key: '7',
        label: '用户管理',
        title: '用户管理'
      }
    ]
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: '商品管理',
    title: '商品管理',
    children: [
      {
        key: '9',
        label: '商品列表',
        title: '商品列表'
      },
      {
        key: '10',
        label: '商品分类',
        title: '商品分类'
      },
      {
        key: 'sub3',
        label: '商品字典',
        title: '商品字典',
        children: [
          {
            key: '11',
            label: '库存字典',
            title: '库存字典'
          },
          {
            key: '12',
            label: '物流字典',
            title: '物流字典'
          }
        ]
      }
    ]
  }
]);
const handleMenu = (e: any) => {
  console.log(e);
};
</script>
<template>
  <Menu
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    mode="inline"
    theme="dark"
    @click="handleMenu"
    :inline-collapsed="state.collapsed"
    :items="items"
  />
</template>
<style scoped></style>
