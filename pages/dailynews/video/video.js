// pages/dailynews/video/video.js
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

  onChooseAddress: function () {
    wx.chooseAddress({
      success: function (res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  },
  // onGetuserInfo:function(){
  //   wx.getUserInfo({
  //     success:function(res){
  //       console.log(res);
  //     }
  //   })
  // },

  onGetuserInfo: function () {
    wx.login({
      success: function (res) {
        wx.getUserInfo({  //先登录然后获取用户信息
          //默认值是true
          withCredentials: true, //：当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
          success: function (res) {
            console.log(res);
          },
          fail: function (res) {
            console.log(res);
          }
        })
      }
    })
  },


  oncheckSession: function () {
    wx.checkSession({
      success: function (res) {
        console.log("success");
        console.log(res);
      },
      fail: function () {
        console.log("fail");
      }
    })
  },


  onOpenSetting: function () {  //用户设置界面 再次获取用户信息
    wx.openSetting({
      success: (res) => console.log(res)
    })
  },

  //录音
  onStarRecord: function () {
    wx.startRecord({
      success: (res) => console.log(res)
    })
  },

  //分享
  onShowShare:function(){
    wx.showShareMenu({
      
    })
  },
  onhideShare:function(){
    wx.hideShareMenu({
      
    })
  },

// 用户登录
  onUserLogin:function(){
    wx.login({
      success:function(res){
        // console.log(res);
        if(res.code){
          wx.request({
            url: 'https://test.com/onLogin',
            data:{
              code:res.code
            }
          })
        }else{
          console.log("failuer"+res.errMsg);
        }
      }
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