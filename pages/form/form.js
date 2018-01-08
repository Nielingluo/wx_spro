Page({
  sw_chage: function (event) {
    console.log("按钮1状态改变，携带" + event.detail.value);
  },
  sw_chage2:function(event){
    console.log("按钮2状态改变，携带",event.detail.value);
  },

  OnslideChage:function(event){
    console.log("被拖动:"+event.detail.value);
  },
  Onslidechaging:function(event){
    console.log("被拖动中："+event.detail.value);
  },
  OnRadio:function(event){
    console.log("radio值："+event.detail.value);
  },
  checkChage: function (event){
    console.log(event.detail.value);
  },

  formSubmit:function(event){
    console.log("提交表单:",event.detail.value)
  },
  formReset:function(event){
    console.log("表单被重置");
  },


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