//login.js
//获取应用实例
var app = getApp();
Page({
  //
  data: {
    remind: '加载中',
    angle: 0,
    avatarUrl: './user-unlogin.png',
    userInfo: {}
  },



  //绑定一个按钮事件
  goToIndex: function() {

    wx.redirectTo({
      url: '/pages/main/main',
      // url: '/pages/chartindex/index'
    });

  },

  //onLoad : 页面加载    生命周期函数
  //一个页面只会调用一次。
  onLoad: function() {

    var that = this

    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }


    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })



    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })


  },


 



  //onShow: 页面显示    生命周期函数 
  // 每次打开页面都会调用一次。
  onShow: function() {


    setNavigationBarColor();
    Countdown();

 

  
    
  
  },


  //onReady: 页面初次渲染完成    生命周期函数
  // 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  onReady: function() {
    var that = this;
    setTimeout(function() {
      that.setData({
        remind: ''
      });
    }, 1000);

    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) {
        angle = 14;
      } else if (angle < -14) {
        angle = -14;
      }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
  },


  onHide: function() {



  },


  onUnload: function() {



  },



  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      });
      wx.redirectTo({
        url: '/pages/main/main',
        // url: '/pages/chartindex/index'
      });
    }
  },


  


  

});

var timer;

// 倒计时
function Countdown() {
  timer = setTimeout(function () {
    console.log("----倒计时----");
    
    if (wx.getStorageSync('openid') === '') {

    } else {
      wx.redirectTo({
        url: '/pages/main/main',
        // url: '/pages/chartindex/index'
      });
    }


  }, 5000);
};

 

function  setNavigationBarColor () {
  wx.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#69c3aa',
    animation: {
      duration: 0,
      timingFunc: 'linear'
    }
  })
};