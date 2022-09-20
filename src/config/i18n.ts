/*
 * @phone: 18200387136
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-18 23:46:23
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-19 21:45:17
 */
import { linkProps } from "ant-design-vue/lib/typography/Link";
import { App } from "vue";
import { LOCALE, ZH_CN } from "./const.js";

//当前的所有语言存储对象
interface ICurlanguageData {
  [key: string]: string;
}
let curlanguageData: ICurlanguageData[];

/**
 * @description:初始化语言包的翻译对象
 * @return {*}
 */
export const initLanguage = (app: App<Element>) => {
  const curLang = getCurLanguage();
  setCurLanguageData(curLang);
  app.config.globalProperties.lpk = lpk;
};

/**
 * @description:获取当前的语言设置
 * @return {*}
 */
export const getCurLanguage = () => {
  // const curLang = loc.getLocalStorage(LOCALE);
  // 这里的loc报错;
  const curLang = localStorage.getItem(LOCALE);
  return curLang || ZH_CN;
};

/**
 * @description:设置当前的语言包字典
 * @param {string} stLang
 * @return {*}
 */
export const setCurLanguageData = (stLang: string) => {
  let allLanguageData: Record<string, any> = import.meta.glob(
    "../locale/*.js",
    {
      eager: true,
    }
  );
  curlanguageData = allLanguageData[`../locale/${stLang}.js`].default;
};

/**
 * @description: 切换语言
 * @return {*}
 */
export const changeLanguage = (stLanguage: string) => {
  setCurLanguageData(stLanguage);
  location.reload();
};

/**
 * @description:提供一个全局根据key的翻译对象，由于全局使用频次高将挂载到全局
 * @param {string} txt
 * @return {*} string
 */
export const lpk = (txt: string) => {
  for (const key in curlanguageData) {
    if (txt === key) {
      return curlanguageData[key];
    }
  }
  return txt;
};

export type ILpk = typeof lpk;
