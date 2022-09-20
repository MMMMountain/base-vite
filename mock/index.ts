/*
 * @phone: 18200387136
 * @Author: 李登峰 623980474@qq.com
 * @Date: 2022-09-18 18:14:32
 * @LastEditors: 李登峰 623980474@qq.com
 * @LastEditTime: 2022-09-18 23:25:53
 */
import mockjs from "mockjs";

export default [
  {
    url: "/api/login",
    method: "post",
    response: () => ({
      code: 200,
      message: "success",
      data: mockjs.mock({
        id: "@id",
        name: "@cname",
        years: "@increment",
        address: "@county(true)",
        birthday: "@date",
        cardNo: "@natural",
        icon: "@image(100*100)",
        pageContent: "@cparagraph()",
      }),
    }),
  },
];
