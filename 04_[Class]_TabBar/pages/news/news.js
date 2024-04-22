// news.js
const newsData = [
  {
    id: 1,
    title: "Adan学会了TabBar怎么用!!",
    content: "普天同庆，菜鸟Adan学会了微信小程序的TabBar（也许吧",
    date: "2024-04-22"
  },
  {
    id: 2,
    title: "北京语言大学世界文化节要开啦！",
    content: "北京语言大学2024年世界文化节将于4月27日盛大开幕",
    date: "2024-04-21"
  },
  {
    id: 3,
    title: "饿了",
    content: "不写了，吃饭去",
    date: "2024-04-20"
  }
];

Page({
  data: {
    newsList: newsData
  },
  onLoad() {}
});
