//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    toggle_con: "一个实际开发项目可以通过哪些解决方案实现，各有什.....",
    toggle_font:"[点击展开]",
    toggle_status:true,
    i:true,
    flag:false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  // 内容展开与收起——方式一：
  onClickTap:function(event){
    if (this.data.toggle_status){
       this.setData({
         toggle_con: "一个实际开发项目可以通过哪些解决方案实现，各有什么特点又该怎样权衡利弊？如何制定规范，才能让团队成员在协作中浑然一体？本课程带你掌握设计页面整体架构的核心要义。",
         toggle_font:"[点击收起]"
       })
       this.data.toggle_status = false;
    }else{
      this.setData({
        toggle_con: "一个实际开发项目可以通过哪些解决方案实现，各有什么特点又该怎样权衡利弊？如何制定规.....",
        toggle_font: "[点击展开]"
      })
       this.data.toggle_status = true;
    }

  //  wx.showToast({
  //    title: this.data.toggle_status ? "收起成功" : "展开成功",
  //    duration:1000
  //  })

  // wx.showModal({
  //   title: '内容展开与收缩',
  //   content: 'KKK',
  // })
      
  },

// 内容展开与收起——方式二：
  onClickTap_i:function(event){
    if(this.data.i){
      this.setData({
          i:false,
          toggle_font: "[点击收起]"
      })
      console.log(this.data.i );
    }else{
      this.setData({
        i: true,
        toggle_font: "[点击展开]"
      })
      console.log(this.data.i);
    }
  },






  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
