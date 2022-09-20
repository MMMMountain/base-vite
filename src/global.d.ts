/*
 * @phone: 18200387136
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-19 17:03:27
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-19 21:18:04
 */
import { ILoc } from "./utils/loc";
import { ICookie } from "./utils/cookie";
import { ILpk } from "./config/i18n";

declare global {
  // 在script中可以直接动态使用
  const loc: ILoc;
  const cookie: ICookie;
  // 在Window中可以直接动态调用
  interface Window {
    loc: ILoc;
    cookie: ICookie;
  }
}

// 在template中可以点出来使用
declare module "vue" {
  interface ComponentCustomProperties {
    loc: ILoc;
    cookie: ICookie;
    lpk: ILpk;
  }
}
