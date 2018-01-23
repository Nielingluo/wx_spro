// map.js
Page({
  data: {
    markers: [{
      iconPath: "/images/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 12,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
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


})

