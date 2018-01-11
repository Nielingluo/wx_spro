Page({
  onTap:function(){
    // console.log("tap");
    
    // wx.navigateTo({
    //   url: '../posts/post',
    // })

    // wx.redirectTo({
    //   url: '../posts/post',
    // })

    wx.switchTab({
      url: '../posts/post',
    })

 

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("onUnload");
  }
})