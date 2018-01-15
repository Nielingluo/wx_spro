var util = require('../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: {},
    comingSoon: {},
    top250: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
    var inTheatersUrl = app.globalData.doubanbase + "/v2/movie/in_theaters" + "?star=0&count=3";
    var comingSoonUrl = app.globalData.doubanbase + "/v2/movie/coming_soon" + "?star=0&count=3";
    var top250Url = app.globalData.doubanbase + "/v2/movie/top250" + "?star=0&count=3";

    this.getMovieListData(inTheatersUrl, "inTheaters", "正在上映");
    this.getMovieListData(comingSoonUrl, "comingSoon", "即将上映");
    this.getMovieListData(top250Url, "top250", "豆瓣电影Top250");

  },

  getMovieListData: function (url, settedkey, categoryTitle) {
    var that = this;
    wx.request({
      url: url,
      header: {
        'content-type': 'application/xml'
      },
      success: function (res) {
        console.log(res.data);
        that.processDoubanData(res.data, settedkey, categoryTitle);
      },
      fail: function (error) {
        console.log(error);
      }
    })
  },

  // 星星[1,1,1,0,0]

  processDoubanData: function (moviesDouban, settedkey, categoryTitle) {
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      var temp = {
        // stars: util.convertToStarsArray(subject.rating.stars),
        stars: util.convertToStarsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp);
    }

    var readyData = {};
    readyData[settedkey] = {
      categoryTitle: categoryTitle,
      movies: movies
    };

    this.setData(readyData);
  },


  OnMoreTap: function (event) {
    var category = event.currentTarget.dataset.category;
    wx.navigateTo({
      url: 'more-movie/more-movie?category=' + category
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