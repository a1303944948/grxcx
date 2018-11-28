Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: getApp().app_src.src,
    mate: [
      {name: '金牛座001',add: '浙江嘉丰机电大门口',status: 1,time: '00:00-24:00',money: '10',image: 'image/jnz.jpg'},
      {name: '金牛座002',add: '浙江嘉丰机电食堂门口',status: 0,time: '00:00-24:00',money: '10',image: 'image/jnz.jpg'},
      {name: '金牛座003',add: '浙江嘉丰机电宿舍门口',status: 1,time: '00:00-24:00',money: '10',image: 'image/jnz.jpg'},
      {name: '双子座001',add: '浙江嘉丰机电大门口',status: 1,time: '10:00-16:00',money: '20',image: 'image/szz.jpg'},
      {name: '双子座002',add: '浙江嘉丰机电食堂门口',status: 1,time: '10:00-16:00',money: '20',image: 'image/szz.jpg'},
      {name: '双子座003',add: '浙江嘉丰机电宿舍门口',status: 0,time: '10:00-16:00',money: '20',image: 'image/szz.jpg'},
      {name: '白羊座001',add: '浙江嘉丰机电大门口',status: 0,time: '06:00-22:00',money: '30',image: 'image/byz.jpg'},
      {name: '白羊座002',add: '浙江嘉丰机电食堂门口',status: 1,time: '06:00-22:00',money: '30',image: 'image/byz.jpg'},
      {name: '白羊座003',add: '浙江嘉丰机电宿舍门口',status: 1,time: '06:00-22:00',money: '30',image: 'image/byz.jpg'},
    ],
  },

  navMe: function(e){
    wx.navigateTo({
      url: '../shop/shop',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var data = that.data.mate;
    //初始化是否营业排序
    function isoperate(msg) {
      var obj = [];
      var operateyes = [];
      var operateno = [];
      var obj_count = 0;
      var operateyes_count = 0;
      var operateno_count = 0;
      for (var i = 0; i < msg.length; i++) {
        if (msg[i].status == 1) {
          operateyes[operateyes_count] = msg[i];
          operateyes_count++;
        } else {
          operateno[operateno_count] = msg[i];
          operateno_count++;
        }
      }
      for (var i = 0; i < operateyes.length; i++) {
        obj[obj_count] = operateyes[i];
        obj_count++;
      }
      for (var i = 0; i < operateno.length; i++) {
        obj[obj_count] = operateno[i];
        obj_count++;
      }
      that.setData({
        mate: obj
      })
    }
    isoperate(data);
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