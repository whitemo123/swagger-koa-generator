import axios from "axios";

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

export {
  get
}

export default request
