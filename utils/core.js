const faker = require("faker")
const moment = require("moment")

// const { schemas, ref } = require("../test/data.js")
// console.log(JSON.stringify(getResponse(ref, schemas)))

/**
 * 获取响应内容
 * @param {*} ref 对象key
 * @param {*} schemas 对象集合
 */
function getResponse(ref, schemas) {
  if (!ref || !schemas) {
    return null
  }
  function mockData(obj) {
    let result = {}
    for (const key in obj) {
      const item = obj[key];
      if (item.$ref) {
        // 外链
        result[key] = getResponse(item.$ref, schemas)
      } else if (item.type === 'array') {
        if (item.items.$ref) {
          result[key] = getArrayResponse(item.items.$ref, schemas)
        } else if (item.items.type === 'string') {
          result[key] = ['1']
        } else if (item.items.type === 'integer') {
          result[key] = [1]
        }
      } else {
        result[key] = mockCommonData(key, item)
      }
    }
    return result
  }

  const refArr = ref.split('/')
  const key = refArr[refArr.length - 1]
  let obj = JSON.parse(JSON.stringify(schemas[key]))
  if (!obj) {
    return null
  }
  if (obj.type === 'object') {
    obj = mockData(obj.properties)
  }
  return obj
}

/**
 * mock普通类型数据
 * @param {string} key 字段名
 * @param {*} obj 对象
 * @returns
 */
function mockCommonData(key, obj) {
  if ((obj.type === 'integer' && key !== 'id') || obj.type === 'number') {
    // ==分页参数==
    if (key === 'page') {
      return 1
    }
    if (key === 'limit') {
      return 10
    }
    if (key === 'totalPage') {
      return 1
    }
    if (key === 'total') {
      return 1
    }
    // ==========
    return 0
  } else if (obj.type === 'boolean') {
    return true
  } else if (obj.type === 'string' || key === 'id') {
    // 时间格式字符串
    if (obj.format === 'date-time') {
      return moment(faker.datatype.datetime()).format('YYYY-MM-DD kk:mm:SS');
    }
    if (key.indexOf('Name') != -1 || key === 'name') {
      return faker.commerce.productName()
    }
    if (key === 'id') {
      return "1655757911382560770"
    }
    return '1'
  } else if (obj.type === 'object' && obj.additionalProperties) {
    return {}
  }
}

/**
 * 转换数组类型结果
 * @param {string} ref 索引
 * @param {object} schemas schemas
 * @returns
 */
function getArrayResponse(ref, schemas) {
  const refArr = ref.split('/')
  const key = refArr[refArr.length - 1]
  let obj = JSON.parse(JSON.stringify(schemas[key]))
  if (!obj) {
    return null
  }
  const result = {}
  for (const key in obj.properties) {
    let item = obj.properties[key]
    // 如果类型是数组
    if (item.type === 'array') {
      if (item.items.$ref) {
        result[key] = getArrayResponse(item.items.$ref, schemas)
      }
    } else {
      result[key] = mockCommonData(key, item)
    }
  }
  return [result]
}

module.exports = {
  getResponse,
  mockCommonData,
  getArrayResponse
}
