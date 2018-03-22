var app = getApp();
// var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    prodsArr: ['全部', '眼部', '玻尿酸', '瘦脸针', '鼻部', '胸部', '皮肤美容', '吸脂瘦身', '其他'],
    currenttabsIndex: 0,
    toView: 'red',
    right: 104,
    bottom: 80,
    windowWidth: 0,
    windowHeight: 0
  },

  onLoad: function (options) {
    var that = this;
    // 获取屏幕宽高
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth);
        console.log(res.windowHeight);
        that.setData({
          windowWidth: res.windowWidth,  //414
          windowHeight: res.windowHeight //624
        })
      },
    })
  },


  //购物车
  OnMoveCart: function (event) {
    console.log(event);
    var pageX = event.touches[0].pageX;
    var pageY = event.touches[0].pageY;
    console.log('pageX: ' + pageX);
    console.log('pageY: ' + pageY);
    //防止坐标越界,view宽高的一般 
    if (pageX < 46) return;
    if (pageX > this.data.windowWidth) return; 
    if (this.data.windowHeight - pageY <= 46) return;
    if (pageY <= 46) return;


    //这里用right和bottom.所以需要将pageX pageY转换 
    var x = this.data.windowWidth - pageX;
    var y = this.data.windowHeight - pageY;
    console.log(this.data.windowWidth);
    console.log(this.data.windowHeight);
    console.log('x: ' + x)
    console.log('y: ' + y)
    this.setData({
      right: x,
      bottom: y
    })
  },




  // tap: function (e) {
  //   for (var i = 0; i < order.length; ++i) {
  //     if (order[i] === this.data.toView) {
  //       this.setData({
  //         toView: order[i + 1]
  //       })
  //       break
  //     }
  //   }
  // },


  // 商品列表切换
  onTabsItemTap: function (event) {
    var index = event.currentTarget.dataset.index;
    this.setData({
      currenttabsIndex: index
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
    var index = app.globalData.xmIndex;
    this.setData({
      currenttabsIndex: index
    })
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