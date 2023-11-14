

import * as AntDesignIconsVue from '@ant-design/icons-vue';
import {type App } from 'vue';

// 自定义图标组件
import SvgIcon from '@/components/svgIcon/index.vue';

/**
 * 全局注册ElementPlus图标
 * <ele-Plus />
 * @param app App
 */
export function useElIcon(app: App) {
  // 全局注册ElementPlus图标
  for (const [key, component] of Object.entries(AntDesignIconsVue)) {
    app.component(`ant-${key}`, component);
  }
  app.component('SvgIcon', SvgIcon); // <svg-icon /> <SvgIcon/>;
}
