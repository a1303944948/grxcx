//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add: '',
    src: getApp().app_src.src,
    mate: [
      {name: '金牛座001',status: true,scores: 4.1,money: 156,image: 'image/jnz.jpg',add: '浙江省嘉兴市嘉善县城西开发区罗星街道金秀路128号'},
      {name: '金牛座002',status: true,scores: 3.4,money: 72,image: 'image/jnz.jpg',add: '浙江省嘉兴市嘉善县城西开发区罗星街道金秀路9号'},
      {name: '双子座001',status: true,scores: 2.9,money: 53,image: 'image/szz.jpg',add: '浙江省嘉兴市嘉善县城西开发区嘉丰路78号'},
      {name: '双子座002',status: false,scores: 2.2,money: 16,image: 'image/szz.jpg',add: '浙江省嘉兴市嘉善县城西开发区嘉丰路56号'},
      {name: '白羊座001',status: true,scores: 4.9,money: 584,image: 'image/byz.jpg',add: '浙江省嘉兴市嘉善县城西开发区世纪大道十字路口'},
      {name: '白羊座002',status: false,scores: 4.3,money: 258,image: 'image/byz.jpg',add: '浙江省嘉兴市嘉善县城西开发区世纪大道世纪联华'},
    ]
  },


  navMe:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },

  listMe: function(){
    wx.navigateTo({
      url: '../shop/shop',
    })
  },

  addMe:function(){
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.chooseLocation({
          success: function (data) {
            that.setData({
              add: data.name,
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    // 引入SDK核心类
    var QQMapWX = require('../../js/qqmap-wx-jssdk.min.js');

    // 实例化API核心类
    var QQMap = new QQMapWX({
      key: 'ZLKBZ-T5SWW-3UBRW-RY426-PCON3-C4FRQ' // 必填
    });

    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        QQMap.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude,
          },
          success: function(res){
            that.setData({
              add: res.result.formatted_addresses.recommend,
            })
          }
        });
      }
    })


    //初始化评分打星
    var data = this.data.mate;
    for(var i = 0; i < data.length; i++){
      data[i].score = Math.round(data[i].scores);
      data[i].scorex = 5 - Math.round(data[i].scores);
    }
    this.setData({
      mate: data,
    })

    //初始化是否营业排序
    function isoperate(msg){
      var obj = [];
      var operateyes = [];
      var operateno = [];
      var obj_count = 0;
      var operateyes_count = 0;
      var operateno_count = 0;
      for(var i = 0; i < msg.length; i++){
        if(msg[i].status){
          operateyes[operateyes_count] = msg[i];
          operateyes_count++;
        } else {
          operateno[operateno_count] = msg[i];
          operateno_count++;
        }
      }
      for(var i = 0; i < operateyes.length; i++){
        obj[obj_count] = operateyes[i];
        obj_count++;
      }
      for(var i = 0; i < operateno.length; i++){
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
