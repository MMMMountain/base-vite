/*
 * @phone: 18200387136
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-19 00:52:38
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-20 21:35:40
 */
import { App } from "vue";

interface IToolModule {
  [key: string]: any;
}

// 挂载所有的工具
export const initTools = (app: App<Element>) => {
  const toolsModule: IToolModule = import.meta.glob("./*.ts", { eager: true });
  Object.keys(toolsModule).forEach((item) => {
    const itemName: string = item.split(".")[1].substring(1);
    (window as any)[itemName] = toolsModule[item].default; //挂载到window上 用于script使用
    app.config.globalProperties[itemName] = toolsModule[item].default; //挂载到全局上 用于 template 上使用
  });
};
