// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/qcloud-weapp-client-sdk/index');

// 引入配置
var config = require('../../config');
var app = getApp();
Page({
    data: {
        windowHeight:0,
        windowWidth:0,
        imgInfo: []
    },
    onShow: function(){
        wx.getSystemInfo({
          success: (res) => {
              this.setData({
                  windowHeight: res.windowHeight,
                  windowWidth: res.windowWidth
              });
                var value = [{
                    src: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLtFGMwhmeyIvZGIVleLVicC4z6eAZ2qviay0OMglzukbIppAWVDJ6VsVzDKRYQVtH1TiaiavlvjKvxhg/0',
                    name: 'img1'
                },{
                    src: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLtFGMwhmeyIvZGIVleLVicC4z6eAZ2qviay0OMglzukbIppAWVDJ6VsVzDKRYQVtH1TiaiavlvjKvxhg/0',
                    name: 'img2'
                },{
                    src: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLtFGMwhmeyIvZGIVleLVicC4z6eAZ2qviay0OMglzukbIppAWVDJ6VsVzDKRYQVtH1TiaiavlvjKvxhg/0',
                    name: 'img3'
                },{
                    src: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLtFGMwhmeyIvZGIVleLVicC4z6eAZ2qviay0OMglzukbIppAWVDJ6VsVzDKRYQVtH1TiaiavlvjKvxhg/0',
                    name: 'img4'
                },{
                    src: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLtFGMwhmeyIvZGIVleLVicC4z6eAZ2qviay0OMglzukbIppAWVDJ6VsVzDKRYQVtH1TiaiavlvjKvxhg/0',
                    name: 'img5'
                },{
                    src: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLtFGMwhmeyIvZGIVleLVicC4z6eAZ2qviay0OMglzukbIppAWVDJ6VsVzDKRYQVtH1TiaiavlvjKvxhg/0',
                    name: 'img6'
                },{
                    src: 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLtFGMwhmeyIvZGIVleLVicC4z6eAZ2qviay0OMglzukbIppAWVDJ6VsVzDKRYQVtH1TiaiavlvjKvxhg/0',
                    name: 'img7'
                }];
                this.setData({
                    imgInfo: value
                });
          }
        })
    },
    down: function(){

    },
    up: function(){

    },
    scroll: function(){

    },
    onLoad: function(){
        console.log('uploadImg loaded.');
    }
});