/*
 * @phone: 18200387136
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-18 23:44:24
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-20 18:20:33
 */

/**
 * @description:初始化主题
 * @return {*}
 */
export const initTheme = () => {
  const curTheme = getTheme();
  document.documentElement.setAttribute("data-theme", curTheme);
};

export const getTheme = () => {
  return loc.getLocalStorage("theme") || "blue";
};

export const changeTheme = (stTheme: string) => {
  loc.setLocalStorage("theme", stTheme);
  document.documentElement.setAttribute("data-theme", stTheme);
};
