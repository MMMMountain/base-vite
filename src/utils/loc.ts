/*
 * @phone: 18200387136
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-18 17:29:18
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-19 17:53:01
 */
const loc = {
  setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  clearLocalStorage(key: string) {
    localStorage.removeItem(key);
  },
  getLocalStorage(key: string) {
    const result = localStorage.getItem(key);
    // safari 隐藏模式会报错
    try {
      return JSON.parse(result as string);
    } catch (error) {
      return result;
    }
  },
};

export type ILoc = typeof loc;
export default loc;
