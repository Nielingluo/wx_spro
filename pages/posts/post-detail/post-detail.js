var postsData = require("../../../data/posts-data.js");
Page({



  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    console.log(postId);
    var postData = postsData.postList[postId];
    //console.log(postData);
    this.setData({
      postData: postData
    })
    
    // var postscollected ={
    //   1:"true",
    //   2:"false",
    //   3:"true"
    // }
    var postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected){
      var postCollected = postsCollected[postId]
      this.setData({
        collected: postCollected
      })
    }else{
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);

    }
    
  },

  onCollectionTap: function(event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    //console.log(this.data.currentPostId);
    // 取反操作，收藏变未收藏  未收藏变收藏
    postCollected != postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
     //更新文章是否收藏得缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    //更新数据绑定绑定变量，从而实现图片切换
    this.setData({
      collected: postCollected
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
