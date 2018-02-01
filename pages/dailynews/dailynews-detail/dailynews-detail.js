var util = require("../../../utils/util.js");
var WxParse = require('../../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsdetail: [],
    currentTabsIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newsId = options.id
    var url = app.globalData.rbzhihu + "/api/4/news/" + newsId
    util.http(url, this.processNewsData);
  },


  processNewsData: function (newsdetail) {
    //console.log(newsdetail);
    var newsdetail = {
      title: newsdetail.title,
      newsImage: newsdetail.image,
      newsbody: newsdetail.body
    }

    this.setData({
      newsdetail: newsdetail
    })
    
    //处理html数据---wxParse----微信小程序富文本解析
    var newsbody = this.data.newsdetail.newsbody;
    var that = this;
    WxParse.wxParse('newsbody', 'html', newsbody, that, 0);

  },

  //tabs 切换
  onTabsItemTap: function (event) {
    var index = event.currentTarget.dataset.index;
    //console.log(index)
    this.setData({
      currentTabsIndex: index
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