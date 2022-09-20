<!--
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-18 11:41:55
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-20 22:30:46
-->
<template>
  <div>
    {{ lpk("index") }}
    <p class="fz">是否开发环境{{ isDev }}</p>
    <p>是否生产环境{{ isPrd }}</p>
    <p>当前的模式：{{ curEnv }}</p>
    <p>当前的baseUrl：{{ baseUrl }}</p>
    <button @click="changeThe">改变主题</button>
    <a-button type="primary">{{ m1 }}</a-button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { isDev, isPrd, curEnv, baseUrl } from "@/config/sysConfig";
import { changeTheme, getTheme } from "./config/theme";
import { message } from "ant-design-vue";

axios.post("/api/login").then((res) => {
  console.log(res.data.data);
});

const changeThe = () => {
  let cur = getTheme() === "blue" ? "black" : "blue";
  changeTheme(cur);
  message.success("This is a normal message");
};
const m1 = ref("123");
</script>

<style scoped lang="scss">
.fz {
  color: var(--primary-c);
}
</style>
