/*
 * @phone: 18200387136
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-18 11:41:55
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-20 22:15:44
 */
import { createApp } from "vue";
import "normalize.css";
import App from "./App.vue";
import { initTools } from "./utils";
import { initLanguage } from "./config/i18n";
import { initTheme } from "./config/theme";
import "./assets/styles/index.scss";
import "ant-design-vue/es/message/style/css";

// import "./assets/styles/black-theme.scss";
const app = createApp(App);
/*
 *全局系统配置
 *初始化全局工具 tools
 *语言包 lpk()
 *主题
 *加载模块
 *全局注册antdv组件
 */
initTools(app);
initLanguage(app);
initTheme();

app.mount("#app");
