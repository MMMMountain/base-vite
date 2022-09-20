/*
 * @phone: 18200387136
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-18 11:41:55
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-20 22:30:20
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig((a) => {
  console.log(a.mode, a);
  return {
    plugins: [
      vue(),
      viteMockServe(),
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "./src/types/auto-api.d.ts",
      }),
      Components({
        resolvers: [AntDesignVueResolver()],
        dts: "./src/types/auto-antd-vue.d.ts",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
