const axios = require("axios");

const instance = axios.create({

})

const request = (config) => {
  return new Promise((resolve, reject) => {
    instance.request(config).then(e => {
      resolve(e.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const get = (url, params) => request({url, params})

module.exports = {
  get
}
