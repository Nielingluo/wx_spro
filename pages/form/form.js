Page({
  sw_chage: function (event) {
    console.log("按钮1状态改变，携带" + event.detail.value);
  },
  sw_chage2: function (event) {
    console.log("按钮2状态改变，携带", event.detail.value);
  },

  OnslideChage: function (event) {
    console.log("被拖动:" + event.detail.value);
  },
  Onslidechaging: function (event) {
    console.log("被拖动中：" + event.detail.value);
  },
  OnRadio: function (event) {
    console.log("radio值：" + event.detail.value);
  },
  checkChage: function (event) {
    console.log(event.detail.value);
  },

  // formSubmit: function (event) {
  //   console.log("提交表单:", event.detail.value)
  //   this.setData({
  //     pro: ""
  //   })
  // },
  formReset: function (event) {
    console.log("表单被重置");
  },


  /**
   * 页面的初始数据
   */
  data: {
    disabled: false
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("Onload");
    wx.setNavigationBarTitle({
      title: '表单也买那',
    })



    var counts = wx.getStorageSync('key')
    this.data.currentcounts = counts
    if (counts) {
      this.setData({
        counts: counts
      })
    } else {
      wx.setStorageSync('key', 9)
    }
    // console.log(counts);
  },


  //自定义自减方法
  self_redution: function (event) {
    var a = wx.getStorageSync('key')
    if (a > 0) {
      var b = a - 1
    } else {
      var b = this.data.currentcounts
    }
    console.log(b);
    a = wx.setStorageSync('key', b)
    this.setData({
      counts: b
    })
  },


    formSubmit: function (event) {
      console.log("提交表单:", event.detail.value)
      this.self_redution() //调用上面自减方法
      // this.setData({
      //   disabled: !this.data.disabled
      // })
    },


  // removcache: function () {
  //   wx.clearStorageSync();
  // },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
    wx.setNavigationBarTitle({
      title: '当前页面'
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