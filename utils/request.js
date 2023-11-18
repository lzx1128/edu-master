
export const rqBaseUrl = "http://localhost:8080/"

export const rq = (params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      success: (result) => {
        resolve(result);
      },
      fail: (err) => {
        reject(err);
      }
    });
  })
}


export const login = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        resolve(res)
      },
      fail: error => {
        reject(error)
      }
    })
  })
}


export const getSetting = () => {
  return new Promise((resolve, reject) => {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        resolve(res)
      },
      fail: error => {
        reject(error)
      }

    })
  })
}


export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    // 获取用户信息
    wx.getUserInfo({
      success: res => {
        resolve(res)
      },
      fail: error => {
        reject(error)
      }
    })
  })
}



