import Mock from "mockjs";

Mock.mock("https://www.demo.com/user", "get", () => {
  return {
    code: 200,
    message: "请求成功",
    data: [
      {
        username: "dylan",
        gender: "male",
      },
    ],
  };
});
