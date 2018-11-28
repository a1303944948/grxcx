var cout = 50; //专为footsBottom打造的变量
var coutShadow = 50;
var coutTab = 0; //专为footsBottom切换打造的变量
var shopDH = 0;   //专为商品导航打造的变量
var shopIDX = 0;  //专为商品导航打造的索引值
var shopARRAY = [];  //专为商品导航打造的记录值

//专为购物车打造的方法
function gouwuche(that){
  that.data.jiage = 0;
  that.data.geshu = 0;
  for (var k = 0; k < that.data.mates.length; k++) {
    that.data.jiage += that.data.mates[k].money*that.data.mates[k].selected;
    that.data.geshu += that.data.mates[k].selected;
  }
  that.data.jiage = Math.round(that.data.jiage * 100) / 100;
  that.setData({
    jiage: that.data.jiage,
    geshu: that.data.geshu,
  })
};
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shop_head_hover: 'shop_head_chil',
    shop_head_hovers: 'shop_head_chils',
    shop_body: 'shop_body',
    height: '',
    paddingBottom: 0,
    tab: 1,
    flyDisplay: 'none',
    flyTop: '',
    flyLeft: '',
    toView: '',
    jiage: 0,
    geshu: 0,
    footsBottom: 50,
    transition: '0s',
    footsMaskBlack: 'none',
    tome: 1,
    times: 1,
    sys: 1,
    src: getApp().app_src.src,
    mate: [
      {name: '热销',image: 'image/hot.png',color: '#ffffff',array: [
        {image: 'image/shop001.jpg',title: '香飘飘奶茶',month: 52,praise: 32,money: 2.3,selected: 0,block: 'none'},
        {image: 'image/shop002.jpg',title: '你好世界',month: 23,praise: 18,money: 30,selected: 0,block: 'none'},
        {image: 'image/shop003.jpg',title: '牛肉面',month: 125,praise: 78,money: 10,selected: 0,block: 'none'}
      ]},
      {name: '饮品',color: '#f0f0f0',array: [
        {image: 'image/shop001.jpg',title: '香飘飘奶茶',month: 52,praise: 32,money: 2.3,selected: 0,block: 'none'},
        {image: 'image/shop002.jpg',title: '你好世界',month: 23,praise: 18,money: 30,selected: 0,block: 'none'},
        {image: 'image/shop003.jpg',title: '牛肉面',month: 125,praise: 78,money: 10,selected: 0,block: 'none'}
      ]},
      {name: '零食',color: '#f0f0f0',array: [
        {image: 'image/shop001.jpg',title: '香飘飘奶茶',month: 52,praise: 32,money: 2.3,selected: 0,block: 'none'},
        {image: 'image/shop002.jpg',title: '你好世界',month: 23,praise: 18,money: 30,selected: 0,block: 'none'},
        {image: 'image/shop003.jpg',title: '牛肉面',month: 125,praise: 78,money: 10,selected: 0,block: 'none'}
      ]},
      {name: '百货',color: '#f0f0f0',array: [
        {image: 'image/shop001.jpg',title: '香飘飘奶茶',month: 52,praise: 32,money: 2.3,selected: 0,block: 'none'},
        {image: 'image/shop002.jpg',title: '你好世界',month: 23,praise: 18,money: 30,selected: 0,block: 'none'},
        {image: 'image/shop003.jpg',title: '牛肉面',month: 125,praise: 78,money: 10,selected: 0,block: 'none'}
      ]},
      {name: '糖果',color: '#f0f0f0',array: [
        {image: 'image/shop001.jpg',title: '香飘飘奶茶',month: 52,praise: 32,money: 2.3,selected: 0,block: 'none'},
        {image: 'image/shop002.jpg',title: '你好世界',month: 23,praise: 18,money: 30,selected: 0,block: 'none'},
        {image: 'image/shop003.jpg',title: '牛肉面',month: 125,praise: 78,money: 10,selected: 0,block: 'none'}
      ]},
      {name: '盖浇饭',color: '#f0f0f0',height: 'auto',array: [
        {image: 'image/shop001.jpg',title: '香飘飘奶茶',month: 52,praise: 32,money: 2.3,selected: 0,block: 'none'},
        {image: 'image/shop002.jpg',title: '你好世界',month: 23,praise: 18,money: 30,selected: 0,block: 'none'},
        {image: 'image/shop003.jpg',title: '牛肉面',month: 125,praise: 78,money: 10,selected: 0,block: 'none'}
      ]}
    ],
    mates: [],
    shoppy: [
      {image: 'image/dh.png',text: '13654564545 (8:00-11:30|13:10-17:00)'},
      {image: 'image/dd.png',text: '浙江嘉丰机电有限公司大门口'},
      {image: 'image/gs.png',text: '浙江嘉丰机电有限公司'},
    ],
  },
  tabMe: function(){
    if(this.data.tab != 1){
      this.setData({
        shop_head_hover: 'shop_head_chil',
        shop_head_hovers: 'shop_head_chils',
        shop_body: 'shop_body',
        tab: 1,
      })
    }
  },
  tabsMe: function(){
    if(this.data.tab == 1){
      this.setData({
        shop_head_hover: 'shop_head_chils',
        shop_head_hovers: 'shop_head_chil',
        shop_body: 'shop_bodys',
        tab: 0,
      })
    }
  },
  tabListMe: function(e){
    var that = this;
    if(that.data.times == 1){
      var count = e.currentTarget.dataset.list;
      that.data.toView = 'To' + count;
      for(var i = 0; i < that.data.mate.length; i++){
        that.data.mate[i].color = '#f0f0f0';
      }
      that.data.mate[count].color = '#ffffff';

      /*var jishu = 0;
      for(var i = 0; i < count; i++){
        jishu += 30;
        for(var j = 0; j < that.data.mate[i].array.length; j++){
          jishu += 95;
        }
      }*/
      that.setData({
        mate: that.data.mate,
        tabListColor: '#f0f0f0',
        toView: that.data.toView,
        tome: 0,
      })
      var timer;
      that.data.times = 0;
      clearTimeout(timer);
      timer = setTimeout(function(){
        that.data.times = 1;
        that.setData({
          tome: 1,
        })
      },400);
    }else{
      clearTimeout(timer);
    }
  },

  toMe: function(e){
    var that = this;
    if(that.data.tome == 1){
      for(var i = 0; i < shopARRAY.length; i++){
        shopDH = i;
        if(e.detail.scrollTop < shopARRAY[i]){
          for(var i = 0; i < that.data.mate.length; i++){
            that.data.mate[i].color = '#f0f0f0';
          }
          that.data.mate[shopDH].color = '#ffffff';
          that.setData({
            mate: that.data.mate,
            tabListColor: '#f0f0f0',
          })
          return false;
        }
      }
    }
  },

  cutMe: function(e){
    var id = e.currentTarget.dataset.id;
    var mark = e.currentTarget.dataset.mark;
    var that = this;
    var count = that.data.mate[id].array[mark].selected;
    count --;
    that.data.mate[id].array[mark].selected = count;
    if(count <= 0){
      that.data.mate[id].array[mark].block = 'none';
      that.setData({
        mate: that.data.mate,
      })
    }
    that.setData({
      mate: that.data.mate,
    })


    //购物车浮窗数据同步
    function gwcs(msg) {
      var sum = msg[id].array[mark].money * msg[id].array[mark].selected;
      msg[id].array[mark].sum = Math.round(sum * 100) / 100;
      msg[id].array[mark].id = id;
      msg[id].array[mark].mark = mark;
      for (var i = 0; i < that.data.mates.length; i++) {
        if (that.data.mates[i].id == id && that.data.mates[i].mark == mark) {
          that.data.mates[i] = msg[id].array[mark];
          if(that.data.mates[i].selected == 0){
            that.data.mates.splice(i, 1);
            gouwuche(that);
            cout += 100;
            coutShadow += 100;
            if(coutShadow <= -550){
              cout = -550;
            }
          }
          that.setData({
            mates: that.data.mates,
            footsBottom: cout,
          })
          return false;
        }
        // (that.data.mates[i].id != id&&that.data.mates[i].mark == mark)||(that.data.mates[i].id == id&&that.data.mates[i].mark != mark)||(that.data.mates[i].id != id&&that.data.mates[i].mark != mark)
      }
      that.data.mates.push(msg[id].array[mark]);
      that.setData({
        mates: that.data.mates,
      })
    }
    gwcs(that.data.mate);
  },
  addMe: function (e) {
    var that = this;
    if(that.data.sys == 1){
      that.data.sys = 0;
      var id = e.currentTarget.dataset.id;
      var mark = e.currentTarget.dataset.mark;
      var that = this;
      var count = that.data.mate[id].array[mark].selected;
      count++;
      that.data.mate[id].array[mark].selected = count;
      that.data.mate[id].array[mark].block = 'block';
      that.setData({
        mate: that.data.mate,
      })

      var vx = e.changedTouches[0].clientX;
      var vy = e.changedTouches[0].clientY;
      var ox = 35;
      none();
      var oy;
      wx.getSystemInfo({
        success: function (res) {
          oy = res.windowHeight - 70;
        }
      })
      function none() {
        that.setData({
          flyDisplay: 'none',
        })
      }
      that.data.flyLeft = vx + 'px';
      that.data.flyTop = vy + 'px';
      that.setData({
        flyLeft: that.data.flyLeft,
        flyTop: that.data.flyTop,
        flyDisplay: 'block',
      })
      that.data.flyLeft = ox + 'px';
      that.data.flyTop = oy + 'px';
      that.setData({
        flyLeft: that.data.flyLeft,
        flyTop: that.data.flyTop,
      })
      var time = setTimeout(function () {
        that.data.sys = 1;
        none();
      }, 450)
      
      //购物车浮窗数据同步
      function gwc(msg){
        var sum = msg[id].array[mark].money * msg[id].array[mark].selected;
        msg[id].array[mark].sum = Math.round(sum * 100) / 100;
        msg[id].array[mark].id = id;
        msg[id].array[mark].mark = mark;
        for (var i = 0; i < that.data.mates.length; i++){
          if(that.data.mates[i].id == id&&that.data.mates[i].mark == mark){
            that.data.mates[i] = msg[id].array[mark];
            gouwuche(that);
            that.setData({
              mates: that.data.mates,
            })
            return false;
          }
          // (that.data.mates[i].id != id&&that.data.mates[i].mark == mark)||(that.data.mates[i].id == id&&that.data.mates[i].mark != mark)||(that.data.mates[i].id != id&&that.data.mates[i].mark != mark)
        }
        that.data.mates.push(msg[id].array[mark]);
        gouwuche(that);
        cout -= 100;
        coutShadow -= 100;
        if(coutShadow <= -550){
          cout = -550;
        }
        that.setData({
          mates: that.data.mates,
          footsBottom: cout,
        })
      }
      gwc(that.data.mate);
    }
  },
  gwcCutMe: function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var mark = e.currentTarget.dataset.mark;
    for(var i = 0; i < that.data.mates.length;i++){
      if(that.data.mates[i].id == id&&that.data.mates[i].mark == mark){
        that.data.mates[i].selected -= 1;
        var sum = that.data.mates[i].money * that.data.mates[i].selected;
        that.data.mates[i].sum = Math.round(sum * 100) / 100;
        if(that.data.mates[i].selected <= 0){
          that.data.mates.splice(i, 1);
          cout += 100;
          coutShadow += 100;
          if(coutShadow <= -550){
            cout = -550;
          }
        }
      }
    }
    gouwuche(that);
    that.data.mate[id].array[mark].selected -= 1;
    var sum = that.data.mate[id].array[mark].money * that.data.mate[id].array[mark].selected;
    that.data.mate[id].array[mark].sum = Math.round(sum * 100) / 100;
    if(that.data.mate[id].array[mark].selected <= 0){
      that.data.mate[id].array[mark].block = 'none';
    }
    if(that.data.mates.length == 0){
      coutTab = 0;
      that.setData({
        mate: that.data.mate,
        mates: that.data.mates,
        footsBottom: 50,
        footsMaskBlack: 'none',
      })
      return false;
    }
    wx.getSystemInfo({
      success: function(res){
        if(res.model == 'iPhone X (GSM+CDMA)<iPhone10,3>'){
          that.setData({
            mate: that.data.mate,
            mates: that.data.mates,
            footsBottom: 160,
          })
        }else{
          that.setData({
            mate: that.data.mate,
            mates: that.data.mates,
            footsBottom: 130,
          })
        }
      }
    })
  },
  gwcAddMe: function(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    var mark = e.currentTarget.dataset.mark;
    for(var i = 0; i < that.data.mates.length;i++){
      if(that.data.mates[i].id == id&&that.data.mates[i].mark == mark){
        that.data.mates[i].selected += 1;
        var sum = that.data.mates[i].money * that.data.mates[i].selected;
        that.data.mates[i].sum = Math.round(sum * 100) / 100;
      }
    }
    gouwuche(that);
    that.data.mate[id].array[mark].selected += 1;
    var sum = that.data.mate[id].array[mark].money * that.data.mate[id].array[mark].selected;
    that.data.mate[id].array[mark].sum = Math.round(sum * 100) / 100;
    that.setData({
      mate: that.data.mate,
      mates: that.data.mates,
    })
  },
  footMe: function(){
    var that = this;
    if(that.data.mates.length != 0){
      that.setData({
        transition: '0.5s',
      })
      if(coutTab == 0){
        coutTab = 1;
        wx.getSystemInfo({
          success: function(res){
            if(res.model == 'iPhone X (GSM+CDMA)<iPhone10,3>'){
              that.data.footsBottom = 160; 
            }else{
              that.data.footsBottom = 130;
            }
          }
        })
        that.data.footsMaskBlack = 'block';
        setTimeout(function () {
          that.setData({
            transition: '0s',
          })
        }, 500)
      }else{
        coutTab = 0;
        that.data.footsBottom = cout;
        that.data.footsMaskBlack = 'none';
        setTimeout(function () {
          that.setData({
            transition: '0s',
          })
        }, 500)
      }
      that.setData({
        footsBottom: that.data.footsBottom,
        footsMaskBlack: that.data.footsMaskBlack,
      })
    }
  },
  footsMaskMe: function () {
    var that = this;
    that.setData({
      footsMaskBlack: 'none',
      footsBottom: cout,
    })
  },
  clearMe: function(){
    var that = this;
    that.data.mates = [];
    that.data.jiage = 0;
    that.data.geshu = 0;
    that.data.footsMaskBlack = 'none',
    that.data.footsBottom = 50;
    that.data.sys = 1;
    cout = 50;
    coutShadow = 50;
    coutTab = 0;

    for(var i = 0; i < that.data.mate.length; i++){
      for(var j = 0; j < that.data.mate[i].array.length; j++){
        that.data.mate[i].array[j].selected = 0;
        that.data.mate[i].array[j].block = 'none';
      }
    }

    that.setData({
      mate: that.data.mate,
      mates: that.data.mates,
      jiage: that.data.jiage,
      geshu: that.data.geshu,
      footsMaskBlack: that.data.footsMaskBlack,
      footsBottom: that.data.footsBottom,
      sys: that.data.sys
    })
  },

  // addMe: function (e) {
  //   var that = this;
  //   if (that.data.sys == 1) {
  //     that.data.sys = 0;
  //     var id = e.currentTarget.dataset.id;
  //     var mark = e.currentTarget.dataset.mark;
  //     var that = this;
  //     var count = that.data.mate[id].array[mark].selected;
  //     count++;
  //     that.data.mate[id].array[mark].selected = count;
  //     that.data.mate[id].array[mark].block = 'block';
  //     that.setData({
  //       mate: that.data.mate,
  //     })

  //     var vx = e.changedTouches[0].clientX;
  //     var vy = e.changedTouches[0].clientY;
  //     var ox = 35;
  //     var oy;
  //     wx.getSystemInfo({
  //       success: function (res) {
  //         oy = res.windowHeight - 70;
  //       }
  //     })
  //     that.data.flyLeft = vx + 'px';
  //     that.data.flyTop = vy + 'px';
  //     that.setData({
  //       flyLeft: that.data.flyLeft,
  //       flyTop: that.data.flyTop,
  //       flyDisplay: 'block',
  //     })
  //     var tx = ox - vx;
  //     var ty = oy - vy;
  //     var kx = 0;
  //     var ky = 0;
  //     var ii = 0;
  //     var jj = 0;
  //     var kk = -10;
  //     var time = setInterval(function(){
  //       if(ii <= 10){
  //         jj += 0.2;
  //         kk += 1;
  //         vx += tx / 50 - jj;
  //         vy += kk;
  //         kx = ox - vx;
  //         ky = oy - vy;
  //       }else if(ii > 10){
  //         jj -= 0.1;
  //         vx += tx / 50 + jj;
  //         vy += ky / 40;
  //       }
  //       // vx += tx / 50;
  //       // vy += ty / 50;
  //       ii ++;
  //       if(ii < 50){
  //         that.data.flyLeft = vx + 'px';
  //         that.data.flyTop = vy + 'px';
  //         that.setData({
  //           flyLeft: that.data.flyLeft,
  //           flyTop: that.data.flyTop,
  //           flyDisplay: 'block',
  //         })
  //       }
  //     },20);
  //     setTimeout(function () {
  //       that.data.sys = 1;
  //       clearInterval(time);
  //     }, 20*50);
  //   }
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //给index高度调整为合适大小
    for(var i = 0; i < that.data.mate.length; i++){
      shopIDX += 30;
      for(var j = 0; j < that.data.mate[i].array.length; j++){
        shopIDX += 95;
      }
      shopARRAY.push(shopIDX);
    }
    var footHeight = shopARRAY[shopARRAY.length - 1] - shopARRAY[shopARRAY.length - 2];
    wx.getSystemInfo({
      success: function(res){
        if(res.model == 'iPhone X (GSM+CDMA)<iPhone10,3>'){
          if(footHeight < res.windowHeight){
            that.data.mate[that.data.mate.length - 1].height = res.windowHeight-105 + 'px';
          }
          that.setData({
            mate: that.data.mate,
            paddingBottom: 30,
            height: 'calc(100% - 242rpx)',
            footsBottom: '160rpx',
          })
        }else{
          if(footHeight < res.windowHeight){
            that.data.mate[that.data.mate.length - 1].height = res.windowHeight-105 + 'px';
          }
          that.setData({
            mate: that.data.mate,
            height: 'calc(100% - 212rpx)',
          })
        }
      }
    })
    shopIDX = 0;
    shopARRAY = [];
    for(var i = 0; i < that.data.mate.length; i++){
      shopIDX += 30;
      for(var j = 0; j < that.data.mate[i].array.length; j++){
        shopIDX += 95;
      }
      shopARRAY.push(shopIDX);
    };
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