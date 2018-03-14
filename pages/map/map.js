// map.js
Page({
  data: {
    markers: [{
      iconPath: "/images/others.png",
      id: 0,
      latitude: 30.568118,
      longitude: 114.314137, 
      width: 30,
      height: 30
    }],
    
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    // console.log(e.markerId)
    wx.openLocation({
      longitude: 113.324520,
      latitude: 23.21229
    });
  },
  controltap(e) {
    console.log(e.controlId)
  },

  onClickTap: function () {
    wx.navigateTo({
      url: '/pages/form/form',
    })
  },

  listenerBtnGetLocation: function() {
    wx.getLocation({
      //定位类型 wgs84, gcj02
      type: 'gcj02',
      success: function(res) {
        console.log(res)
        wx.openLocation({
          //当前经纬度
          latitude: res.latitude,
          longitude: res.longitude,
          //缩放级别默认28
          scale: 28,
          //位置名
          name: '测试地址',
          //详细地址
          address: '火星路24号',
          //成功打印信息
          success: function(res) {
            console.log(res)
          },
          //失败打印信息
          fail: function(err) {
            console.log(err)
          },
          //完成打印信息
          complete: function(info){
            console.log(info)
          },
        })

      },
      fail: function(err) {
        console.log(err)
      },
      complete: function(info) {
        console.log(info)
      },
    })
  },

  jumpMap: function (event) {
    wx.openLocation({
      latitude: 30.568118,
      longitude: 114.314137,
      name: '武汉艺星',
      address: '武汉市武昌区临江大道55号锦江国际城3栋',
    })
  },

})

