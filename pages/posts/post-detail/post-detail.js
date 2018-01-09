var postsData = require("../../../data/posts-data.js");
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    //console.log(postId);
    var postData = postsData.postList[postId]
    this.setData({
      postData: postData
    })

    // var postscollected ={
    //   1:"true",
    //   2:"false",
    //   3:"true"
    // }
    var postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected) {
      var postCollected = postsCollected[postId]
      this.setData({
        collected: postCollected
      })
    }
    else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected)
    }

    if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicPostId === postId){
      this.setData({
        isPlayingMusic:true
      })
    }
    this.setmusciMonitor();

  },

  setmusciMonitor: function () {
    // 监听音乐状态 放在Onload中
    var that = this;
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        isPlayingMusic: true
      })
      app.globalData.g_isPlayingMusic=true;
      app.globalData.g_currentMusicPostId = that.data.currentPostId;
      // console.log("音乐播放中");
    });
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlayingMusic: false
      })
      // console.log("音乐暂停中");
      app.globalData.g_isPlayingMusic = false;
      app.globalData.g_currentMusicPostId =null;
    })
  },



  onCollectionTap: function (event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    //console.log(this.data.currentPostId);
    // 取反操作，收藏变未收藏  未收藏变收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    //更新文章是否收藏得缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    //更新数据绑定绑定变量，从而实现图片切换
    this.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? "收藏成功" : "取消收藏",
      duration: 1000,
      icon: "success"
    })



  },


  OnShareTap: function (event) {
    var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#405f80",
      success: function (res) {
        wx.showModal({
          title: '用户点击:' + itemList[res.tapIndex],
          content: "用户是否取消?" + res.cancel + "取消掉"
        })
      }
    })
  },




  OnMusicTap: function (event) {
    var currentPostId = this.data.currentPostId;
    var postData = postsData.postList[currentPostId];
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: postData.music.url,
        title: postData.music.title,
        coverImgUrl: postData.music.coverImg,
      })
      this.setData({
        isPlayingMusic: true
      })
    }

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
