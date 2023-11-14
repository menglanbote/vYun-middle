<script setup lang="ts">
import { ConfigProvider, Button } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ref } from 'vue';

const locale = ref(zhCN);

</script>
<template>
  <ConfigProvider :locale="locale">
    <Button type="primary">按钮</Button>
    <SvgIcon color="red" :size="18" name="ant-ShareAltOutlined" />
    <ant-StepForwardOutlined color="red" />
    <!-- 字符串模板代码 -->
    <div>hello</div>
  </ConfigProvider>
</template>
<style scoped lang="less"></style>
