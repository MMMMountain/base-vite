/*
 * @phone: 18200387136
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-18 17:30:21
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-19 21:53:14
 */
import cookie from "js-cookie";

const cook = {
  setCookie(key: string, value: any) {
    cookie.set(key, JSON.stringify(value), { expires: 30 });
  },
  getCookie(key: string) {
    const result = cookie.get(key);
    try {
      return JSON.parse(result as string);
    } catch (error) {
      return result;
    }
  },
  delCookie(key: string) {
    cookie.remove(key);
  },
};
export type ICookie = typeof cook;
export default cook;
