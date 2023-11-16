<script setup lang="ts">
import { Menu, MenuItem, SubMenu } from 'ant-design-vue';
import { ref } from 'vue';
import { PieChartOutlined } from '@ant-design/icons-vue';
const selectedKeys = ref<string[]>(['1']);
</script>
<template>
  <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <MenuItem key="1">
      <SvgIcon name="ant-AreaChartOutlined"></SvgIcon>
      <span>Option 1</span>
    </MenuItem>
    <MenuItem key="2">
      <SvgIcon name="ant-AreaChartOutlined"></SvgIcon>
      <span>Option 2</span>
    </MenuItem>
    <SubMenu key="sub1">
      <template #title>
        <span>
          <SvgIcon name="ant-AreaChartOutlined"></SvgIcon>
          <span>User</span>
        </span>
      </template>
      <MenuItem key="3">Tom</MenuItem>
      <MenuItem key="4">Bill</MenuItem>
      <MenuItem key="5">Alex</MenuItem>
    </SubMenu>
    <SubMenu key="sub2">
      <template #title>
        <span>
          <SvgIcon name="ant-AreaChartOutlined"></SvgIcon>
          <span>Team</span>
        </span>
      </template>
      <MenuItem key="6">Team 1</MenuItem>
      <MenuItem key="8">Team 2</MenuItem>
    </SubMenu>
    <MenuItem key="9">
      <PieChartOutlined />
      <span>2</span>
    </MenuItem>
  </Menu>
</template>
<style scoped></style>
