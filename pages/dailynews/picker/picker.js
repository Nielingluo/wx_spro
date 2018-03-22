var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    x: 0,
    y: 0,
    windowWidth:0,
    windowHeight:0
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },

  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },


  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        })
      },
    })

  },



  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  onChange: function (e) {
    console.log(e.detail)
  },
  onScale: function (e) {
    console.log(e.detail)
  },
  // 拨打电话
  callPhone: function (event) {
    wx.makePhoneCall({
      phoneNumber: '13817945190',
    })
  },




})