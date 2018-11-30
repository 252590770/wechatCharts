// miniprogram/pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: [{
        id: 'device',
        name: '设备',
        open: false,
      },
      {
        id: 'file',
        name: '文件',
        open: false,
      },
      {
        id: 'interface',
        name: '界面',
        open: false,
      },
      {
        id: 'location',
        name: '位置',
        open: false,
      },
      {
        id: 'media',
        name: '媒体',
        open: false,
      },
      {
        id: 'storage',
        name: '数据缓存',
        url: 'Storage/storage'
      },
      {
        id: 'network',
        name: '网络',
        open: false,
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  kindToggle: function (e) {

   


    var id = e.currentTarget.id, list = this.data.list;

    wx.showToast({
      title: id,
      icon: 'success',
      duration: 2000
    })

    wx.navigateTo({
      url: '../chartindex/index',
    })


    // var id = e.currentTarget.id, list = this.data.list;
    // for (var i = 0, len = list.length; i < len; ++i) {
    //   if (list[i].id == id) {
    //     if (list[i].url) {
    //       wx.navigateTo({
    //         url: 'pages/' + list[i].url
    //       })
    //       return
    //     }
    //     list[i].open = !list[i].open
    //   } else {
    //     list[i].open = false
    //   }
    // }
    // this.setData({
    //   list: list
    // });
  },




})