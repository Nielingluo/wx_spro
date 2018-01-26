import {Movie} from 'class/Movie.js';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var movieId = options.id;
    // console.log(movieId);
    // https://api.douban.com/v2/movie/subject/1295644 请求数据
    var url = app.globalData.doubanbase + "/v2/movie/subject/" + movieId;
    var movie = new Movie(url);


    // var that = this;
    // movie.getMovieData(function (movie){
    //   that.setData({
    //     movie: movie
    //   })
    // })

   // ES6箭头函数改写
    movie.getMovieData( (movie) =>{
      this.setData({  //this指代的就是上面的page   this指代的环境就是你当前定义箭头函数的环境，而不是调用方的环境。
        movie: movie
      })
    })
  },


  

  /*查看图片*/
  viewMoviePostImg: function (e) {
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [src] // 需要预览的图片http链接列表
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