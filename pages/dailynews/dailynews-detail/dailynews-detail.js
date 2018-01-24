// pages/dailynews-detail/dailynews-detail.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsdetail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newsId = options.id
    var url = app.globalData.rbzhihu + "/api/4/news/" + newsId
    this.getNewlistData(url)
  },

  getNewlistData: function (url) {
    var that = this
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.processNewsData(res.data)
      }
    })
  },
  processNewsData:function(newsdetail){
     console.log(newsdetail);
    var newsdetail={
      title: newsdetail.title,
      newsImage: newsdetail.image,
      newsbody:newsdetail.body
    }
    console.log(newsdetail.newsbody);
    this.setData({
      newsdetail: newsdetail
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