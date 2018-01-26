var util = require("../../../utils/util.js");
var app = getApp();
Page({

  /**
   * 知乎日报：https://daily.zhihu.com/
   * 知乎日报 API 分析:https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90
   * 页面的初始数据
   */
  data: {
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var Latest = app.globalData.rbzhihu + "/api/4/news/latest";
    //var Messcon = app.globalData.rbzhihu +"/api/4/news/3892357";
    //this.getNewlistData(Latest);  //发起http请求
    // this.getNewlistData(Messcon);
    util.http(Latest, this.processNewsData)
  },


  // getNewlistData: function (url) {
  //   var that = this
  //   wx.request({
  //     url: url,
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       that.processNewsData(res.data) //处理得到的数据
  //     }
  //   })
  // }, 

  processNewsData: function (newslist) {
    //console.log(newslist);
    var news = [];
    for (var idx in newslist.stories) {
      var stories = newslist.stories[idx];
      var title = stories.title;
      if (title.length > 20) {
        title = title.substring(0, 20) + "...."
      }
      //console.log(title);
      var temp={
        title:title,
        newsId :stories.id,
        newsimages:stories.images
      }
      news.push(temp);
      this.setData({
        news:news
      })
    }
  },

  onClickTap:function(event){
    var newsId = event.currentTarget.dataset.newsid
   // console.log(newsId);
    wx.navigateTo({
      url: '../dailynews-detail/dailynews-detail?id=' + newsId
    })
  },

  onOpenHtml: function (event){
    wx.navigateTo({
      url: '../video/video'
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})