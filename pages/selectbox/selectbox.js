// pages/selectbox/selectbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    display: 'none',

    proShow: false,
    proindex: 0,
    proData: ['全部专业', '计算机科学与技术', '网络工程', '信息管理', '应用数学'],

    claList: [{
      all: '全部班级'
    }, {
      one: '计科一班',
      two: '计科二班',
      three: '计科三班'
    }, {
      one: '网工一班',
      two: '网工二班',
      three: '网工三班'
    }, {
      one: '信管一班',
      two: '信管二班',
      three: '信管三班'
    }, {
      one: '数学一班',
      two: '数学二班',
      three: '数学三班'
    }, ],
    claShow: false,
    claindex: 0,
    claData: ['全部班级', '夏欢的班级', '关注的班级'],
  },

  // 点击下拉专业显示框
  selectCom() {
    var that = this;
    if (that.data.proShow) {
      that.setData({
        display: 'none'
      })
    } else {
      that.setData({
        display: 'block',
      })
    }
    that.setData({
      proShow: !that.data.proShow
    })
  },

  //点击选择专业
  optionCom(e) {
    var that = this;
    var proindex = e.currentTarget.dataset.proindex;

    that.setData({
      proindex: proindex,
      proShow: !that.data.proShow,
      display: 'none',
    })

    // 向后台发送请求，获取数据
    wx.request({
      url: 'www.baidu.com',
      success: function() {
        console.log('成功的回调函数');
      },
      fail: function() {
        console.log('失败的回调函数');
      }
    })
  },

  //点击下拉班级显示框
  selectCla() {
    var that = this;
    if (that.data.claShow) {
      that.setData({
        display: 'none',
      })
    } else {
      that.setData({
        display: 'block',
      })
    }
    that.setData({
      claShow: !that.data.claShow
    })
  },

  optionCla(e) {
    var that = this;
    var claindex = e.currentTarget.dataset.claindex;
    that.setData({
      claindex: claindex,
      claShow: !that.data.claShow,
      display: 'none'
    })


    // 向后台发送请求，获取数据
    wx.request({
      url: 'www.baidu.com',
      success: function() {
        console.log('成功的回调函数');
      },
      fail: function() {
        console.log('失败的回调函数');
      }
    })
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

  }
})