//app.js
import { login, getSetting } from './utils/request.js'
import { rq } from './utils/request'
import { getGradeList } from './utils/grade'
import { getRoleList } from './utils/role'
import { getSubjectList } from './utils/subject'
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    login().then((res) => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      if (res.code) {
        //发起网络请求
        rq({
          url: this.globalData.baseUrl + 'wx_gateway/openId/' + res.code
        }).then(res => {
          if (res.data.info.code == 2000) {
            //登陆成功,保存openId到本地
            let { openId } = res.data.result
            wx.setStorageSync(this.globalData.storageKey.openId, openId)
          }
        })
      }
    }, (error) => {
      console.log("登陆失败");
    })


    // 获取用户信息
    getSetting().then(res => {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        this.globalData.user.userInfoPermission = true
        wx.getUserInfo({
          success: res => {
            // console.log("用户信息获取成功");
            console.log(res);
            // 可以将 res 发送给后台解码出 unionId
            this.globalData.userInfo = res.userInfo
            this.globalData.user.hasUserInfo = true
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })
      } else {
        console.log("拒绝获取用户信息，结束小程序");
        return;
      }
    }, error => {
      console.log("获取用户信息失败");
    })


    // 获取年级信息
    getGradeList().then(res => {
      if (res.data.info.code == 2000 && res.data.result.length > 0) {
        this.globalData.grade.hasData = true
        this.globalData.grade.list = res.data.result
      }
    })

    // // 获取角色信息
    getRoleList().then(res => {
      if (res.data.info.code == 2000 && res.data.result.length > 0) {
        this.globalData.role.hasData = true
        this.globalData.role.list = res.data.result
      }
    })

    // 获取科目信息
    getSubjectList().then(res => {
      if (res.data.info.code == 2000 && res.data.result.length > 0) {
        this.globalData.subject.hasData = true
        this.globalData.subject.list = res.data.result
      }
    })

  },
  globalData: {
    storageKey: {
      openId: "openId",
      userInfo: "userInfo"

    },
    userInfo: null,
    baseUrl: "http://localhost:8080/",
    user: {
      userInfoPermission: false,
      hasUserInfo: false
    },
    grade: {
      hasData: false,
      list: null
    },
    role: {
      hasData: false,
      list: null
    },
    subject: {
      hasData: false,
      list: null
    }
  }
})