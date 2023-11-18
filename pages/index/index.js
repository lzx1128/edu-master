// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    swiperList: [
      { picture: '/static/img/banner.jpg' },
      { picture: '/static/img/banner.jpg' },
      { picture: '/static/img/banner.jpg' },
    ],
    list :[
      {
        num: '1',
        course: '数学',
        condition: 0,
        _id: '1',
        content: '数学辅导内容'
      },
      {
        num: '2',
        course: '英语',
        condition: 1,
        _id: '2',
        content: '英语辅导内容'
      },
      {
        num: '3',
        course: '物理',
        condition: 2,
        _id: '3',
        content: '物理辅导内容'
      }
    ]
  },
  gosearch(){
    wx.navigateTo({
      url: '/pages/search/index',
    })
  },
  goteacherlogin(){
    wx.navigateTo({
      url: '/pages/teacherlogin/index',
    })
  },
  gocategory(){
    wx.switchTab({
      url: '/pages/category/index',
    })
  },
  gofeedback(){
    wx.navigateTo({
      url: '/pages/feedback/index',
    })
  },
  gomore(){
    wx.switchTab({
      url: '/pages/cart/index',
    })
  },
  goteacherlogin(){
    wx.navigateTo({
      url: '/pages/teacherlogin/index',
    })
  },
  gocategory(){
    wx.switchTab({
      url: '/pages/category/index',
    })
  },
  gofeedback(){
    wx.navigateTo({
      url: '/pages/feedback/index',
    })
  },
  gomore(){
    wx.switchTab({
      url: '/pages/cart/index',
    })
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