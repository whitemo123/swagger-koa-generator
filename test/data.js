/**
 * @name: data
 * @author: itmobai
 * @date: 2023-06-05 11:42
 * @description：data
 * @update: 2023-06-05 11:42
 */
const schemas = {
  "TourPayDto对象": {
    "type": "object",
    "properties": {
      "tourId": {
        "type": "integer",
        "description": "旅游id",
        "format": "int64"
      },
      "tourSkuId": {
        "type": "integer",
        "description": "旅游sku",
        "format": "int64"
      },
      "payQty": {
        "type": "integer",
        "description": "购买数量",
        "format": "int32"
      },
      "userRemarks": {
        "type": "string",
        "description": "用户备注"
      },
      "shareCode": {
        "type": "string",
        "description": "分享码"
      },
      "payWay": {
        "type": "integer",
        "description": "支付方式: 1=余额 2=微信支付",
        "format": "int32"
      }
    },
    "description": "旅游下单"
  },
  "CommonResultWxPayVo": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/WxPayVo"
      }
    }
  },
  "WxPayVo": {
    "type": "object",
    "properties": {
      "timeStamp": {
        "type": "string"
      },
      "packageValue": {
        "type": "string"
      },
      "paySign": {
        "type": "string"
      },
      "appId": {
        "type": "string"
      },
      "signType": {
        "type": "string"
      },
      "nonceStr": {
        "type": "string"
      },
      "orderId": {
        "type": "string"
      },
      "codeUrl": {
        "type": "string"
      },
      "payWay": {
        "type": "integer",
        "description": "支付方式: 1=余额 2=微信支付",
        "format": "int32"
      }
    }
  },
  "CommonResultBoolean": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "boolean"
      }
    }
  },
  "UserCartDto对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户购物车表id",
        "format": "int64"
      },
      "userId": {
        "type": "integer",
        "description": "用户id",
        "format": "int64"
      },
      "productId": {
        "type": "integer",
        "description": "商品Id",
        "format": "int64"
      },
      "productSkuId": {
        "type": "integer",
        "description": "商品sku表id",
        "format": "int64"
      },
      "cartQty": {
        "type": "integer",
        "description": "购物车数量",
        "format": "int32"
      }
    },
    "description": "用户购物车表"
  },
  "UserAddressDto对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户地址表",
        "format": "int64"
      },
      "userId": {
        "type": "integer",
        "description": "用户id",
        "format": "int64"
      },
      "phone": {
        "type": "string",
        "description": "手机号"
      },
      "receiptName": {
        "type": "string",
        "description": "收货人名称"
      },
      "defaultStatus": {
        "type": "integer",
        "description": "是否为默认: 1-是 2-否",
        "format": "int32"
      },
      "province": {
        "type": "string",
        "description": "省份/直辖市"
      },
      "city": {
        "type": "string",
        "description": "城市"
      },
      "region": {
        "type": "string",
        "description": "区"
      },
      "detailAddress": {
        "type": "string",
        "description": "详细地址(街道)"
      }
    },
    "description": "用户地址表"
  },
  "FrontOrderSettlementDto": {
    "type": "object",
    "properties": {
      "shareCode": {
        "type": "string",
        "description": "分享码"
      },
      "payWay": {
        "type": "integer",
        "description": "支付方式: 1=余额 2=微信支付",
        "format": "int32"
      },
      "receiptName": {
        "type": "string",
        "description": "收货人名称"
      },
      "receiptPhone": {
        "type": "string",
        "description": "收货人手机号"
      },
      "province": {
        "type": "string",
        "description": "省份/直辖市"
      },
      "city": {
        "type": "string",
        "description": "城市"
      },
      "region": {
        "type": "string",
        "description": "区"
      },
      "detailAddress": {
        "type": "string",
        "description": "详细地址(街道)"
      },
      "userRemarks": {
        "type": "string",
        "description": "用户备注"
      },
      "frontUserCartDtoList": {
        "type": "array",
        "description": "购物车商品集合",
        "items": {
          "$ref": "#/components/schemas/FrontUserCartDto"
        }
      }
    },
    "description": "订单表"
  },
  "FrontUserCartDto": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户购物车表id",
        "format": "int64"
      },
      "productId": {
        "type": "integer",
        "description": "商品Id",
        "format": "int64"
      },
      "productSkuId": {
        "type": "integer",
        "description": "商品sku表id",
        "format": "int64"
      },
      "productName": {
        "type": "string",
        "description": "商品名称"
      },
      "spData": {
        "type": "string",
        "description": "商品销售属性，json格式"
      },
      "skuPic": {
        "type": "string",
        "description": "sku图片"
      },
      "skuCode": {
        "type": "string",
        "description": "sku/商品编码"
      },
      "skuPrice": {
        "type": "number",
        "description": "sku价格"
      },
      "cartQty": {
        "type": "integer",
        "description": "购物车数量",
        "format": "int32"
      },
      "isParcel": {
        "type": "integer",
        "description": "是否包邮: 1=是 2=否",
        "format": "int32"
      },
      "freightPrice": {
        "type": "number",
        "description": "运费"
      }
    },
    "description": "用户购物车表"
  },
  "FrontUserDto": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户表id",
        "format": "int64"
      },
      "shareCode": {
        "type": "string",
        "description": "分享码"
      },
      "userName": {
        "type": "string",
        "description": "会员名称"
      },
      "avatarUrl": {
        "type": "string",
        "description": "头像"
      },
      "userAccount": {
        "type": "string",
        "description": "会员账号"
      },
      "phone": {
        "type": "string",
        "description": "手机号"
      },
      "openId": {
        "type": "string",
        "description": "openid"
      },
      "gender": {
        "type": "integer",
        "description": "性别: 1=男 2=女 3=未知",
        "format": "int32"
      },
      "birthday": {
        "type": "string",
        "description": "生日"
      },
      "location": {
        "type": "string",
        "description": "所在地区"
      }
    },
    "description": "用户表"
  },
  "FrontImmediatePaymentDto对象": {
    "type": "object",
    "properties": {
      "payWay": {
        "type": "integer",
        "description": "支付方式: 1=余额 2=微信支付",
        "format": "int32"
      },
      "productId": {
        "type": "integer",
        "description": "商品id",
        "format": "int64"
      },
      "skuId": {
        "type": "integer",
        "description": "skuId",
        "format": "int64"
      },
      "qty": {
        "type": "integer",
        "description": "数量",
        "format": "int32"
      },
      "userAddressId": {
        "type": "integer",
        "description": "地址id",
        "format": "int64"
      },
      "remarks": {
        "type": "string",
        "description": "备注"
      },
      "shareCode": {
        "type": "string",
        "description": "分享码"
      }
    },
    "description": "小程序立即支付入参"
  },
  "AddShoppingCartDto对象": {
    "type": "object",
    "properties": {
      "productId": {
        "type": "integer",
        "description": "商品Id",
        "format": "int64"
      },
      "productSkuId": {
        "type": "integer",
        "description": "商品sku表id",
        "format": "int64"
      },
      "types": {
        "type": "integer",
        "description": "类型:1-加购,2-减",
        "format": "int32"
      },
      "qty": {
        "type": "integer",
        "description": "数量",
        "format": "int32"
      }
    },
    "description": "加购物车入参"
  },
  "ExpertConfirmWithdrawalDto对象": {
    "type": "object",
    "properties": {
      "price": {
        "type": "number",
        "description": "金额"
      }
    },
    "description": "达人端-确认提现入参"
  },
  "CoursePayDto对象": {
    "type": "object",
    "properties": {
      "courseId": {
        "type": "integer",
        "description": "课程id",
        "format": "int64"
      },
      "payQty": {
        "type": "integer",
        "description": "购买数量",
        "format": "int32"
      },
      "userRemarks": {
        "type": "string",
        "description": "用户备注"
      },
      "shareCode": {
        "type": "string",
        "description": "分享码"
      },
      "payWay": {
        "type": "integer",
        "description": "支付方式: 1=余额 2=微信支付",
        "format": "int32"
      }
    },
    "description": "课程下单"
  },
  "ContestPayDto对象": {
    "type": "object",
    "properties": {
      "contestId": {
        "type": "integer",
        "description": "赛事id",
        "format": "int64"
      },
      "payQty": {
        "type": "integer",
        "description": "购买数量",
        "format": "int32"
      },
      "userRemarks": {
        "type": "string",
        "description": "用户备注"
      },
      "shareCode": {
        "type": "string",
        "description": "分享码"
      },
      "payWay": {
        "type": "integer",
        "description": "支付方式: 1=余额 2=微信支付",
        "format": "int32"
      }
    },
    "description": "赛事下单"
  },
  "CoachVerificationCouponCodeDto对象": {
    "type": "object",
    "properties": {
      "ticketCode": {
        "type": "string",
        "description": "券码"
      }
    },
    "description": "核销券码入参"
  },
  "PageParam": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "description": "页码",
        "format": "int32",
        "example": 1
      },
      "limit": {
        "type": "integer",
        "description": "每页数量",
        "format": "int32",
        "example": 20
      }
    },
    "description": "分页对象"
  },
  "FrontTourSearchDto对象": {
    "type": "object",
    "properties": {
      "priceValue": {
        "type": "string",
        "description": "价格高低值： 高-high  低-low"
      },
      "tourName": {
        "type": "string",
        "description": "旅游名称"
      },
      "tourLocationId": {
        "type": "string",
        "description": "旅游地点"
      },
      "tourTypes": {
        "type": "integer",
        "description": "旅游类型: 1=海内 2=海外 3=定制",
        "format": "int32"
      }
    },
    "description": "小程序旅游搜索"
  },
  "CommonPageTourVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/TourVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageTourVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageTourVo对象"
      }
    }
  },
  "TourSkuVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "旅游sku表id",
        "format": "int64"
      },
      "tourId": {
        "type": "integer",
        "description": "旅游id",
        "format": "int64"
      },
      "skuName": {
        "type": "string",
        "description": "sku名称"
      },
      "tourTime": {
        "type": "string",
        "description": "旅游时间",
        "format": "date-time"
      },
      "tourSkuPrice": {
        "type": "number",
        "description": "旅游价格"
      },
      "tourNumber": {
        "type": "integer",
        "description": "旅游名额",
        "format": "int32"
      },
      "spData": {
        "type": "string",
        "description": "旅游销售属性，json格式"
      },
      "addBy": {
        "type": "integer",
        "description": "创建人id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "editBy": {
        "type": "integer",
        "description": "修改人id",
        "format": "int64"
      },
      "editTime": {
        "type": "string",
        "description": "修改时间",
        "format": "date-time"
      }
    },
    "description": "旅游sku表"
  },
  "TourVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "旅游表id",
        "format": "int64"
      },
      "tourTypes": {
        "type": "integer",
        "description": "旅游类型: 1=海内 2=海外 3=定制",
        "format": "int32"
      },
      "tourLocationIds": {
        "type": "string",
        "description": "旅游地点ids（用,分割）"
      },
      "tourName": {
        "type": "string",
        "description": "旅游名称"
      },
      "tourPrice": {
        "type": "number",
        "description": "旅游售价"
      },
      "tourStock": {
        "type": "integer",
        "description": "旅游库存",
        "format": "int32"
      },
      "tourBannerPic": {
        "type": "string",
        "description": "图片轮播图"
      },
      "tourVideo": {
        "type": "string",
        "description": "视频地址"
      },
      "status": {
        "type": "integer",
        "description": "状态: 1=上架 2=下架",
        "format": "int32"
      },
      "sort": {
        "type": "integer",
        "description": "排序",
        "format": "int32"
      },
      "internetCelebrityCommission": {
        "type": "string",
        "description": "网红达人提成"
      },
      "channelCommission": {
        "type": "string",
        "description": "渠道方提成"
      },
      "saleQty": {
        "type": "integer",
        "description": "销量",
        "format": "int32"
      },
      "tourDetails": {
        "type": "string",
        "description": "旅游详情"
      },
      "addBy": {
        "type": "integer",
        "description": "创建人id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "editBy": {
        "type": "integer",
        "description": "修改人id",
        "format": "int64"
      },
      "editTime": {
        "type": "string",
        "description": "修改时间",
        "format": "date-time"
      },
      "tourLocationName": {
        "type": "string",
        "description": "旅游地点"
      },
      "skuVoList": {
        "type": "array",
        "description": "规格列表",
        "items": {
          "$ref": "#/components/schemas/TourSkuVo对象"
        }
      }
    },
    "description": "旅游表"
  },
  "CommonResultTourVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/TourVo对象"
      }
    }
  },
  "CommonResultListTourLocationVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/TourLocationVo对象"
        }
      }
    }
  },
  "TourLocationVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "旅游地点表id",
        "format": "int64"
      },
      "locationName": {
        "type": "string",
        "description": "地点名称"
      },
      "types": {
        "type": "integer",
        "description": "类型: 1=海内 2=海外",
        "format": "int32"
      },
      "sort": {
        "type": "integer",
        "description": "排序",
        "format": "int32"
      },
      "status": {
        "type": "integer",
        "description": "状态: 1=启用 2=禁用",
        "format": "int32"
      },
      "addBy": {
        "type": "integer",
        "description": "创建人id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "editBy": {
        "type": "integer",
        "description": "修改人id",
        "format": "int64"
      },
      "editTime": {
        "type": "string",
        "description": "修改时间",
        "format": "date-time"
      }
    },
    "description": "旅游地点表"
  },
  "CommonPageUserAddressVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/UserAddressVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageUserAddressVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageUserAddressVo对象"
      }
    }
  },
  "UserAddressVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户地址表",
        "format": "int64"
      },
      "userId": {
        "type": "integer",
        "description": "用户id",
        "format": "int64"
      },
      "phone": {
        "type": "string",
        "description": "手机号"
      },
      "receiptName": {
        "type": "string",
        "description": "收货人名称"
      },
      "defaultStatus": {
        "type": "integer",
        "description": "是否为默认: 1-是 2-否",
        "format": "int32"
      },
      "province": {
        "type": "string",
        "description": "省份/直辖市"
      },
      "city": {
        "type": "string",
        "description": "城市"
      },
      "region": {
        "type": "string",
        "description": "区"
      },
      "detailAddress": {
        "type": "string",
        "description": "详细地址(街道)"
      },
      "addBy": {
        "type": "integer",
        "description": "创建人id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "editBy": {
        "type": "integer",
        "description": "修改人id",
        "format": "int64"
      },
      "editTime": {
        "type": "string",
        "description": "修改时间",
        "format": "date-time"
      }
    },
    "description": "用户地址表"
  },
  "CommonResultUserAddressVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/UserAddressVo对象"
      }
    }
  },
  "CommonResultListUserGradeSetupVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/UserGradeSetupVo对象"
        }
      }
    }
  },
  "UserGradeSetupVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "会员等级设置表 id",
        "format": "int64"
      },
      "gradeIcon": {
        "type": "string",
        "description": "等级图标"
      },
      "gradeImg": {
        "type": "string",
        "description": "等级图片"
      },
      "gradeName": {
        "type": "string",
        "description": "等级名称"
      },
      "gradeLevel": {
        "type": "integer",
        "description": "等级级别",
        "format": "int32"
      },
      "integral": {
        "type": "number",
        "description": "积分要求"
      },
      "status": {
        "type": "integer",
        "description": "是否展示: 1=是 2=否",
        "format": "int32"
      },
      "addBy": {
        "type": "integer",
        "description": "创建人id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "editBy": {
        "type": "integer",
        "description": "修改人id",
        "format": "int64"
      },
      "editTime": {
        "type": "string",
        "description": "修改时间",
        "format": "date-time"
      }
    },
    "description": "会员等级设置表"
  },
  "CommonResultListUserWalletSetupVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/UserWalletSetupVo对象"
        }
      }
    }
  },
  "UserWalletSetupVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "会员钱包设置表id",
        "format": "int64"
      },
      "rechargePrice": {
        "type": "number",
        "description": "充值金额"
      },
      "walletPrice": {
        "type": "number",
        "description": "钱包金额"
      }
    },
    "description": "会员钱包设置表"
  },
  "CommonResultListVideoCourseOrderDtlVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/VideoCourseOrderDtlVo对象"
        }
      }
    }
  },
  "VideoCourseOrderDtlVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "视频课程订单详情表id",
        "format": "int64"
      },
      "courseId": {
        "type": "integer",
        "description": "课程id",
        "format": "int64"
      },
      "skuName": {
        "type": "string",
        "description": "sku名称"
      },
      "video": {
        "type": "string",
        "description": "视频地址"
      },
      "sort": {
        "type": "integer",
        "description": "排序",
        "format": "int32"
      },
      "orderId": {
        "type": "integer",
        "description": "订单id",
        "format": "int64"
      },
      "userId": {
        "type": "integer",
        "description": "下单用户id",
        "format": "int64"
      }
    },
    "description": "视频课程订单详情表"
  },
  "CommonResultListFrontLogisticsDetailVo": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/FrontLogisticsDetailVo"
        }
      }
    }
  },
  "FrontLogisticsDetailVo": {
    "type": "object",
    "properties": {
      "time": {
        "type": "string",
        "description": "时间",
        "format": "date-time"
      },
      "context": {
        "type": "string",
        "description": "物流内容"
      },
      "statusCode": {
        "type": "integer",
        "description": "物流状态值",
        "format": "int32"
      }
    },
    "description": "物流信息"
  },
  "DetailDateDto": {
    "type": "object",
    "properties": {
      "createdDate": {
        "type": "string",
        "description": "明细日期"
      },
      "userId": {
        "type": "integer",
        "description": "用户id",
        "format": "int64"
      }
    },
    "description": "明细日期"
  },
  "CommonPageUserIntegralRecordVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/UserIntegralRecordVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageUserIntegralRecordVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageUserIntegralRecordVo对象"
      }
    }
  },
  "UserIntegralRecordVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户积分记录表id",
        "format": "int64"
      },
      "userId": {
        "type": "integer",
        "description": "用户id",
        "format": "int64"
      },
      "types": {
        "type": "integer",
        "description": "类型: 1=消费赠送",
        "format": "int32"
      },
      "integral": {
        "type": "number",
        "description": "积分"
      },
      "residue": {
        "type": "number",
        "description": "剩余"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      }
    },
    "description": "用户积分记录表"
  },
  "CommonResultListFrontUserCartVo": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/FrontUserCartVo"
        }
      }
    }
  },
  "FrontUserCartVo": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户购物车表id",
        "format": "int64"
      },
      "productId": {
        "type": "integer",
        "description": "商品Id",
        "format": "int64"
      },
      "productSkuId": {
        "type": "integer",
        "description": "商品sku表id",
        "format": "int64"
      },
      "productName": {
        "type": "string",
        "description": "商品名称"
      },
      "skuCode": {
        "type": "string",
        "description": "sku/商品编码"
      },
      "spData": {
        "type": "string",
        "description": "商品销售属性，json格式"
      },
      "skuPic": {
        "type": "string",
        "description": "sku图片"
      },
      "skuPrice": {
        "type": "number",
        "description": "sku价格"
      },
      "cartQty": {
        "type": "integer",
        "description": "购物车数量",
        "format": "int32"
      },
      "isParcel": {
        "type": "integer",
        "description": "是否包邮: 1=是 2=否",
        "format": "int32"
      },
      "freightPrice": {
        "type": "number",
        "description": "运费"
      },
      "status": {
        "type": "integer",
        "description": "状态: 1=上架 2=下架",
        "format": "int32"
      },
      "stock": {
        "type": "number",
        "description": "库存"
      }
    },
    "description": "用户购物车表"
  },
  "CommonPageFrontRefundOrderVo": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/FrontRefundOrderVo"
        }
      }
    }
  },
  "CommonResultCommonPageFrontRefundOrderVo": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageFrontRefundOrderVo"
      }
    }
  },
  "FrontProductOrderDtlVo": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "商品订单详情表id",
        "format": "int64"
      },
      "productName": {
        "type": "string",
        "description": "商品名称"
      },
      "spData": {
        "type": "string",
        "description": "商品销售属性"
      },
      "skuPic": {
        "type": "string",
        "description": "sku图片"
      },
      "skuPrice": {
        "type": "number",
        "description": "sku价格"
      },
      "productQty": {
        "type": "integer",
        "description": "商品数量",
        "format": "int32"
      }
    },
    "description": "商品订单详情表"
  },
  "FrontRefundOrderVo": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "订单表id",
        "format": "int64"
      },
      "orderSn": {
        "type": "string",
        "description": "订单编号"
      },
      "refundStatus": {
        "type": "integer",
        "description": "退款状态: 1=未退款 2=退款中 3=已退款",
        "format": "int32"
      },
      "refund": {
        "type": "number",
        "description": "退款"
      },
      "frontProductOrderDtlVoList": {
        "type": "array",
        "description": "商品集合",
        "items": {
          "$ref": "#/components/schemas/FrontProductOrderDtlVo"
        }
      }
    },
    "description": "退款订单表"
  },
  "CommonResultFrontRefundOrderDetailVo": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/FrontRefundOrderDetailVo"
      }
    }
  },
  "FrontRefundOrderDetailVo": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "订单表id",
        "format": "int64"
      },
      "orderSn": {
        "type": "string",
        "description": "订单编号"
      },
      "payWay": {
        "type": "integer",
        "description": "支付方式: 1=余额 2=微信支付",
        "format": "int32"
      },
      "refundSn": {
        "type": "string",
        "description": "退款编号"
      },
      "refundPrice": {
        "type": "number",
        "description": "退款金额"
      },
      "refundTime": {
        "type": "string",
        "description": "退款时间",
        "format": "date-time"
      },
      "refundRemarks": {
        "type": "string",
        "description": "退款备注"
      },
      "frontProductOrderDtlVoList": {
        "type": "array",
        "description": "商品集合",
        "items": {
          "$ref": "#/components/schemas/FrontProductOrderDtlVo"
        }
      }
    },
    "description": "退款订单详情表"
  },
  "CommonResultFrontOrderQuantityVo": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/FrontOrderQuantityVo"
      }
    }
  },
  "FrontOrderQuantityVo": {
    "type": "object",
    "properties": {
      "unpaid": {
        "type": "integer",
        "description": "待付款",
        "format": "int32"
      },
      "pending": {
        "type": "integer",
        "description": "待发货",
        "format": "int32"
      },
      "waitForReceiving": {
        "type": "integer",
        "description": "待收货",
        "format": "int32"
      },
      "readyForUse": {
        "type": "integer",
        "description": "待使用",
        "format": "int32"
      }
    },
    "description": "订数量"
  },
  "FrontOrderDto": {
    "type": "object",
    "properties": {
      "orderSearch": {
        "type": "string",
        "description": "订单搜索"
      },
      "userId": {
        "type": "integer",
        "description": "下单用户id",
        "format": "int64"
      },
      "orderStatus": {
        "type": "integer",
        "description": "订单状态: 1=待付款 2=待发货 3=待收货 4=待使用",
        "format": "int32"
      }
    },
    "description": "订单表"
  },
  "CommonPageFrontOrderVo": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/FrontOrderVo"
        }
      }
    }
  },
  "CommonResultCommonPageFrontOrderVo": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageFrontOrderVo"
      }
    }
  },
  "FrontOrderVo": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "订单表id",
        "format": "int64"
      },
      "orderSn": {
        "type": "string",
        "description": "订单编号"
      },
      "orderTypes": {
        "type": "integer",
        "description": "订单类型: 1=商城订单 2=旅游订单 3=赛事订单 4=1v1课程订单 5=网红订单 6=视频课程订单",
        "format": "int32"
      },
      "productOrderStatus": {
        "type": "integer",
        "description": "商品订单状态: 1=待支付 2=待发货 3=运输中 4=已完成 5=已取消",
        "format": "int32"
      },
      "tourOrderStatus": {
        "type": "integer",
        "description": "旅游订单状态: 1=待支付 2=待使用 3=已完成 4=已取消",
        "format": "int32"
      },
      "contestOrderStatus": {
        "type": "integer",
        "description": "赛事订单状态: 1=待支付 2=已完成 3=已取消",
        "format": "int32"
      },
      "courseOrderStatus": {
        "type": "integer",
        "description": "课程订单状态: 1=待支付 2=待使用 3=使用中 4=已完成 5=已取消",
        "format": "int32"
      },
      "logisticsCompany": {
        "type": "string",
        "description": "物流公司"
      },
      "logisticsSn": {
        "type": "string",
        "description": "物流单号"
      },
      "copies": {
        "type": "integer",
        "description": "份数",
        "format": "int32"
      },
      "actuallyPaid": {
        "type": "number",
        "description": "实付"
      },
      "payTime": {
        "type": "string",
        "description": "付款时间",
        "format": "date-time"
      },
      "frontProductOrderDtlVoList": {
        "type": "array",
        "description": "商品集合",
        "items": {
          "$ref": "#/components/schemas/FrontProductOrderDtlVo"
        }
      }
    },
    "description": "订单表"
  },
  "CommonResultFrontOrderDetailVo": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/FrontOrderDetailVo"
      }
    }
  },
  "FrontOrderDetailVo": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "订单表id",
        "format": "int64"
      },
      "orderSn": {
        "type": "string",
        "description": "订单编号"
      },
      "orderTypes": {
        "type": "integer",
        "description": "订单类型: 1=商城订单 2=旅游订单 3=赛事订单 4=1v1课程订单 5=网红订单 6=视频课程订单",
        "format": "int32"
      },
      "productOrderStatus": {
        "type": "integer",
        "description": "商品订单状态: 1=待支付 2=待发货 3=运输中 4=已完成 5=已取消",
        "format": "int32"
      },
      "tourOrderStatus": {
        "type": "integer",
        "description": "旅游订单状态: 1=待支付 2=待使用 3=已完成 4=已取消",
        "format": "int32"
      },
      "contestOrderStatus": {
        "type": "integer",
        "description": "赛事订单状态: 1=待支付 2=已完成 3=已取消",
        "format": "int32"
      },
      "courseOrderStatus": {
        "type": "integer",
        "description": "课程订单状态: 1=待支付 2=待使用 3=使用中 4=已完成 5=已取消",
        "format": "int32"
      },
      "orderPrice": {
        "type": "number",
        "description": "订单金额"
      },
      "payPrice": {
        "type": "number",
        "description": "支付金额"
      },
      "freightPrice": {
        "type": "number",
        "description": "运费"
      },
      "receiptName": {
        "type": "string",
        "description": "收货人名称"
      },
      "receiptPhone": {
        "type": "string",
        "description": "收货人手机号"
      },
      "province": {
        "type": "string",
        "description": "省份/直辖市"
      },
      "city": {
        "type": "string",
        "description": "城市"
      },
      "region": {
        "type": "string",
        "description": "区"
      },
      "detailAddress": {
        "type": "string",
        "description": "详细地址(街道)"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "payTime": {
        "type": "string",
        "description": "付款时间",
        "format": "date-time"
      },
      "deliverTime": {
        "type": "string",
        "description": "发货时间",
        "format": "date-time"
      },
      "finishTime": {
        "type": "string",
        "description": "完成时间",
        "format": "date-time"
      },
      "logisticsCompany": {
        "type": "string",
        "description": "物流公司"
      },
      "logisticsSn": {
        "type": "string",
        "description": "物流单号"
      },
      "frontProductOrderDtlVoList": {
        "type": "array",
        "description": "商品集合",
        "items": {
          "$ref": "#/components/schemas/FrontProductOrderDtlVo"
        }
      },
      "frontSingleOrderDtlVoList": {
        "type": "array",
        "description": "券码集合",
        "items": {
          "$ref": "#/components/schemas/FrontSingleOrderDtlVo"
        }
      }
    },
    "description": "订单表"
  },
  "FrontSingleOrderDtlVo": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "1v1订单详情表id",
        "format": "int64"
      },
      "ticketCode": {
        "type": "string",
        "description": "券码"
      },
      "status": {
        "type": "integer",
        "description": "状态: 1=未核销 2=已核销",
        "format": "int32"
      },
      "writeOffTime": {
        "type": "string",
        "description": "核销时间",
        "format": "date-time"
      }
    },
    "description": "1v1订单详情表"
  },
  "CommonResultFrontUserAddressVo": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/FrontUserAddressVo"
      }
    }
  },
  "FrontUserAddressVo": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户地址表",
        "format": "int64"
      },
      "phone": {
        "type": "string",
        "description": "手机号"
      },
      "receiptName": {
        "type": "string",
        "description": "收货人名称"
      },
      "defaultStatus": {
        "type": "integer",
        "description": "是否为默认: 1-是 2-否",
        "format": "int32"
      },
      "province": {
        "type": "string",
        "description": "省份/直辖市"
      },
      "city": {
        "type": "string",
        "description": "城市"
      },
      "region": {
        "type": "string",
        "description": "区"
      },
      "detailAddress": {
        "type": "string",
        "description": "详细地址(街道)"
      }
    },
    "description": "用户地址表"
  },
  "CommonPageUserBalanceRecordVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/UserBalanceRecordVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageUserBalanceRecordVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageUserBalanceRecordVo对象"
      }
    }
  },
  "UserBalanceRecordVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户余额记录表id",
        "format": "int64"
      },
      "userId": {
        "type": "integer",
        "description": "用户id",
        "format": "int64"
      },
      "types": {
        "type": "integer",
        "description": "类型: 1=充值赠送 2=充值 3=订单消费 4=订单退款",
        "format": "int32"
      },
      "balancePrice": {
        "type": "number",
        "description": "余额金额"
      },
      "residue": {
        "type": "number",
        "description": "剩余"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      }
    },
    "description": "用户余额记录表"
  },
  "AppletLoginVo对象": {
    "type": "object",
    "properties": {
      "token": {
        "type": "string",
        "description": "token"
      },
      "loginStatus": {
        "type": "integer",
        "description": "登录状态: 1=未注册 2=已注册",
        "format": "int32"
      }
    },
    "description": "小程序登录"
  },
  "CommonResultAppletLoginVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/AppletLoginVo对象"
      }
    }
  },
  "AppletUserInfoVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户表id",
        "format": "int64"
      },
      "shareCode": {
        "type": "string",
        "description": "分享码"
      },
      "userName": {
        "type": "string",
        "description": "会员名称"
      },
      "avatarUrl": {
        "type": "string",
        "description": "头像"
      },
      "userAccount": {
        "type": "string",
        "description": "会员账号"
      },
      "phone": {
        "type": "string",
        "description": "手机号"
      },
      "openId": {
        "type": "string",
        "description": "openid"
      },
      "gender": {
        "type": "integer",
        "description": "性别: 1=男 2=女 3=未知",
        "format": "int32"
      },
      "birthday": {
        "type": "string",
        "description": "生日",
        "format": "date-time"
      },
      "location": {
        "type": "string",
        "description": "所在地区"
      },
      "userTypes": {
        "type": "integer",
        "description": "用户类型: 1=普通用户 2=达人 3=教练 4=渠道方",
        "format": "int32"
      },
      "userSource": {
        "type": "integer",
        "description": "用户来源: 1=达人推荐 2=普通注册 3=渠道方推荐",
        "format": "int32"
      },
      "userGrade": {
        "type": "string",
        "description": "用户等级"
      },
      "balancePrice": {
        "type": "number",
        "description": "余额"
      },
      "integral": {
        "type": "number",
        "description": "积分"
      },
      "registerTime": {
        "type": "string",
        "description": "注册时间",
        "format": "date-time"
      },
      "lastLoginTime": {
        "type": "string",
        "description": "最近登录时间",
        "format": "date-time"
      },
      "accesCount": {
        "type": "integer",
        "description": "访问次数",
        "format": "int32"
      },
      "channelUserId": {
        "type": "integer",
        "description": "绑定的渠道方用户id",
        "format": "int64"
      },
      "abilityStatus": {
        "type": "integer",
        "description": "状态: 1=启用 2=禁用",
        "format": "int32"
      },
      "thisMonthCommission": {
        "type": "number",
        "description": "本月佣金"
      },
      "settlementStatus": {
        "type": "integer",
        "description": "结算佣金状态: 1=未申请 2=申请中 3=审核不通过 4=待发放上月佣金 5=已发放上月佣金",
        "format": "int32"
      },
      "lastMonthCommission": {
        "type": "number",
        "description": "上月佣金"
      },
      "grantTime": {
        "type": "string",
        "description": "发放时间",
        "format": "date-time"
      },
      "withdrawalPrice": {
        "type": "number",
        "description": "提现金额"
      },
      "withdrawnPrice": {
        "type": "number",
        "description": "已提现金额"
      },
      "gradeIcon": {
        "type": "string",
        "description": "等级图标"
      },
      "gradeImg": {
        "type": "string",
        "description": "等级图片"
      },
      "gradeName": {
        "type": "string",
        "description": "等级名称"
      },
      "gradeLevel": {
        "type": "integer",
        "description": "等级级别",
        "format": "int32"
      },
      "gradeIntegral": {
        "type": "number",
        "description": "等级积分要求"
      }
    },
    "description": "小程序用户"
  },
  "CommonResultAppletUserInfoVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/AppletUserInfoVo对象"
      }
    }
  },
  "CommonResultListHomeSpecialActivitiesVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/HomeSpecialActivitiesVo对象"
        }
      }
    }
  },
  "HomeSpecialActivitiesVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "专题活动表id",
        "format": "int64"
      },
      "contestId": {
        "type": "integer",
        "description": "赛事id",
        "format": "int64"
      },
      "coverPic": {
        "type": "string",
        "description": "封面图片"
      }
    },
    "description": "首页-专题活动返回参数"
  },
  "CommonResultListFrontProductSortVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/FrontProductSortVo对象"
        }
      }
    }
  },
  "FrontProductSortVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "商品分类表id",
        "format": "int64"
      },
      "pid": {
        "type": "integer",
        "description": "分类父级id",
        "format": "int64"
      },
      "sortName": {
        "type": "string",
        "description": "分类名称"
      },
      "sortIcon": {
        "type": "string",
        "description": "分类icon"
      },
      "sort": {
        "type": "integer",
        "description": "排序",
        "format": "int32"
      },
      "children": {
        "type": "array",
        "description": "子集",
        "items": {
          "$ref": "#/components/schemas/FrontProductSortVo对象"
        }
      }
    },
    "description": "小程序商品分类返回参数"
  },
  "CommonPageHomePopularProductVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/HomePopularProductVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageHomePopularProductVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageHomePopularProductVo对象"
      }
    }
  },
  "HomePopularProductVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "商品 id",
        "format": "int64"
      },
      "productName": {
        "type": "string",
        "description": "商品名称"
      },
      "productBannerPic": {
        "type": "string",
        "description": "商品轮播图"
      },
      "productPrice": {
        "type": "number",
        "description": "商品价格"
      },
      "stock": {
        "type": "integer",
        "description": "剩余",
        "format": "int32"
      }
    },
    "description": "首页-爆款单品返回参数"
  },
  "CommonResultHomeProductDetailVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/HomeProductDetailVo对象"
      }
    }
  },
  "FrontProductSkuVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "商品sku表id",
        "format": "int64"
      },
      "productId": {
        "type": "integer",
        "description": "商品id",
        "format": "int64"
      },
      "skuCode": {
        "type": "string",
        "description": "sku/商品编码"
      },
      "skuPrice": {
        "type": "number",
        "description": "sku价格"
      },
      "skuPic": {
        "type": "string",
        "description": "sku图片"
      },
      "stock": {
        "type": "number",
        "description": "库存"
      },
      "lockStock": {
        "type": "number",
        "description": "库存锁"
      },
      "saleQty": {
        "type": "number",
        "description": "销量"
      },
      "spData": {
        "type": "string",
        "description": "商品销售属性，json格式"
      }
    },
    "description": "小程序商品规格返回参数"
  },
  "HomeProductDetailVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "商品 id",
        "format": "int64"
      },
      "productName": {
        "type": "string",
        "description": "商品名称"
      },
      "productBannerPic": {
        "type": "string",
        "description": "商品轮播图"
      },
      "productVideo": {
        "type": "string",
        "description": "商品视频"
      },
      "productPrice": {
        "type": "number",
        "description": "商品售价"
      },
      "stock": {
        "type": "integer",
        "description": "剩余",
        "format": "int32"
      },
      "freightPrice": {
        "type": "number",
        "description": "运费"
      },
      "isParcel": {
        "type": "number",
        "description": "是否包邮: 1=是 2=否"
      },
      "cartQty": {
        "type": "integer",
        "description": "购物车数量,求和",
        "format": "int32"
      },
      "productDetails": {
        "type": "string",
        "description": "商品详情"
      },
      "frontProductSkuVoList": {
        "type": "array",
        "description": "商品规格",
        "items": {
          "$ref": "#/components/schemas/FrontProductSkuVo对象"
        }
      }
    },
    "description": "首页-商品详情返回参数"
  },
  "CommonResultListHomePopularProductVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/HomePopularProductVo对象"
        }
      }
    }
  },
  "CommonResultListHomePopularMatchVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/HomePopularMatchVo对象"
        }
      }
    }
  },
  "HomePopularMatchVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "赛事表 id",
        "format": "int64"
      },
      "contestName": {
        "type": "string",
        "description": "赛事名称"
      },
      "enrollQty": {
        "type": "integer",
        "description": "限定人数",
        "format": "int32"
      },
      "endTime": {
        "type": "string",
        "description": "截止时间"
      },
      "reservePrice": {
        "type": "number",
        "description": "预定金额"
      },
      "contestBannerPic": {
        "type": "string",
        "description": "赛事轮播图"
      },
      "subtitle": {
        "type": "string",
        "description": "副标题"
      },
      "icon": {
        "type": "string",
        "description": "图标"
      }
    },
    "description": "首页-热门赛事返回参数"
  },
  "CommonResultListHomePopularCoachVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/HomePopularCoachVo对象"
        }
      }
    }
  },
  "HomePopularCoachVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "课程 id",
        "format": "int64"
      },
      "courseBannerPic": {
        "type": "string",
        "description": "课程轮播图"
      },
      "name": {
        "type": "string",
        "description": "课程名称"
      },
      "courseTypes": {
        "type": "integer",
        "description": "课程类型: 1=视频课程 2=网红陪玩 3=1v1课程",
        "format": "int32"
      },
      "price": {
        "type": "number",
        "description": "课程金额/预定金额"
      },
      "subtitle": {
        "type": "string",
        "description": "副标题"
      }
    },
    "description": "首页-人气教练返回参数"
  },
  "CommonResultListHomeInternetCelebrityTourismVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/HomeInternetCelebrityTourismVo对象"
        }
      }
    }
  },
  "HomeInternetCelebrityTourismVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "旅游表 id",
        "format": "int64"
      },
      "tourBannerPic": {
        "type": "string",
        "description": "图片轮播图"
      },
      "tourTypes": {
        "type": "integer",
        "description": "旅游类型: 1=海内 2=海外 3=定制",
        "format": "int32"
      },
      "tourName": {
        "type": "string",
        "description": "旅游名称"
      },
      "tourPrice": {
        "type": "number",
        "description": "旅游售价"
      }
    },
    "description": "首页-网红旅游返回参数"
  },
  "CommonResultListHomeGolfSuppliesVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/HomeGolfSuppliesVo对象"
        }
      }
    }
  },
  "HomeGolfSuppliesVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "商品分类表id",
        "format": "int64"
      },
      "sortName": {
        "type": "string",
        "description": "分类名称"
      },
      "sortIcon": {
        "type": "string",
        "description": "分类icon"
      }
    },
    "description": "首页-高尔夫用品分类返回参数"
  },
  "CommonResultDictVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/DictVo对象"
      }
    }
  },
  "DictVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "字典表 dict.id",
        "format": "int64"
      },
      "value": {
        "type": "string",
        "description": "值"
      },
      "label": {
        "type": "string",
        "description": "标识"
      },
      "name": {
        "type": "string",
        "description": "意思"
      },
      "addBy": {
        "type": "integer",
        "description": "创建人id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "editBy": {
        "type": "integer",
        "description": "修改人id",
        "format": "int64"
      },
      "editTime": {
        "type": "string",
        "description": "修改时间",
        "format": "date-time"
      }
    },
    "description": "字典表"
  },
  "CommonResultListHomeBannerVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/HomeBannerVo对象"
        }
      }
    }
  },
  "HomeBannerVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "小程序轮播图表 id",
        "format": "int64"
      },
      "bannerPic": {
        "type": "string",
        "description": "轮播图图片"
      },
      "jumpTypes": {
        "type": "integer",
        "description": "跳转类型: 1=商品 2=旅游 3=赛事 4=1v1课程 5=网红 6=视频课程",
        "format": "int32"
      },
      "jumpId": {
        "type": "integer",
        "description": "跳转的id",
        "format": "int64"
      }
    },
    "description": "首页轮播图返回参数"
  },
  "CommonPageExpertWithdrawalRecordsVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ExpertWithdrawalRecordsVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageExpertWithdrawalRecordsVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageExpertWithdrawalRecordsVo对象"
      }
    }
  },
  "ExpertWithdrawalRecordsVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "提现记录id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间"
      },
      "price": {
        "type": "number",
        "description": "金额"
      }
    },
    "description": "达人端-提现记录返回参数"
  },
  "CommonResultExpertMineVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/ExpertMineVo对象"
      }
    }
  },
  "ExpertMineVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户表id",
        "format": "int64"
      },
      "shareCode": {
        "type": "string",
        "description": "分享码"
      },
      "userName": {
        "type": "string",
        "description": "会员名称"
      },
      "avatarUrl": {
        "type": "string",
        "description": "头像"
      },
      "invitedMembers": {
        "type": "integer",
        "description": "邀请成员数",
        "format": "int64"
      },
      "lastMonthCommission": {
        "type": "number",
        "description": "佣金"
      }
    },
    "description": "达人端-我的返回参数"
  },
  "CommonPageExpertMemberVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ExpertMemberVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageExpertMemberVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageExpertMemberVo对象"
      }
    }
  },
  "ExpertMemberVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户表id",
        "format": "int64"
      },
      "userName": {
        "type": "string",
        "description": "会员名称"
      },
      "phone": {
        "type": "string",
        "description": "手机号"
      },
      "bindTime": {
        "type": "string",
        "description": "绑定时间"
      }
    },
    "description": "达人端-成员返回参数"
  },
  "CommonPageExpertRecordsOfConsumptionVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ExpertRecordsOfConsumptionVo对象"
        }
      }
    },
    "description": "订单金额合计"
  },
  "CommonResultRecordsOfConsumptionSumVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/RecordsOfConsumptionSumVo对象"
      }
    }
  },
  "ExpertRecordsOfConsumptionVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "订单id",
        "format": "int64"
      },
      "orderSn": {
        "type": "string",
        "description": "订单编号"
      },
      "orderPrice": {
        "type": "number",
        "description": "订单金额"
      },
      "payTime": {
        "type": "string",
        "description": "下单时间"
      }
    },
    "description": "达人端-成员消费记录列表返回参数"
  },
  "RecordsOfConsumptionSumVo对象": {
    "type": "object",
    "properties": {
      "orderPriceSum": {
        "type": "number",
        "description": "订单金额合计"
      },
      "recordsOfConsumptionVoList": {
        "$ref": "#/components/schemas/CommonPageExpertRecordsOfConsumptionVo对象"
      }
    },
    "description": "达人端-成员消费记录返回参数"
  },
  "CommonResultExpertCommissionVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/ExpertCommissionVo对象"
      }
    }
  },
  "ExpertCommissionVo对象": {
    "type": "object",
    "properties": {
      "withdrawnPrice": {
        "type": "number",
        "description": "已提现金额"
      },
      "withdrawalPrice": {
        "type": "number",
        "description": "提现金额"
      },
      "lastMonthCommission": {
        "type": "number",
        "description": "上月佣金"
      },
      "thisMonthCommission": {
        "type": "number",
        "description": "本月佣金"
      }
    },
    "description": "达人端-佣金返回参数"
  },
  "ApplyCommissionSettlementRecordVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户申请佣金记录表id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间"
      },
      "price": {
        "type": "number",
        "description": "金额"
      }
    },
    "description": "达人端-申请佣金结算记录返回参数"
  },
  "CommonResultPageApplyCommissionSettlementRecordVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/PageApplyCommissionSettlementRecordVo对象"
      }
    }
  },
  "OrderItem": {
    "type": "object",
    "properties": {
      "column": {
        "type": "string"
      },
      "asc": {
        "type": "boolean"
      }
    }
  },
  "PageApplyCommissionSettlementRecordVo对象": {
    "type": "object",
    "properties": {
      "records": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ApplyCommissionSettlementRecordVo对象"
        }
      },
      "total": {
        "type": "integer",
        "format": "int64"
      },
      "size": {
        "type": "integer",
        "format": "int64"
      },
      "current": {
        "type": "integer",
        "format": "int64"
      },
      "orders": {
        "type": "array",
        "deprecated": true,
        "items": {
          "$ref": "#/components/schemas/OrderItem"
        }
      },
      "optimizeCountSql": {
        "type": "boolean",
        "deprecated": true
      },
      "searchCount": {
        "type": "boolean",
        "deprecated": true
      },
      "optimizeJoinOfCountSql": {
        "type": "boolean",
        "writeOnly": true
      },
      "maxLimit": {
        "type": "integer",
        "format": "int64",
        "deprecated": true
      },
      "countId": {
        "type": "string",
        "deprecated": true
      },
      "pages": {
        "type": "integer",
        "format": "int64"
      }
    }
  },
  "FrontCourseSearchDto对象": {
    "type": "object",
    "properties": {
      "courseTypes": {
        "type": "integer",
        "description": "课程类型: 1=视频课程 2=网红陪玩 3=1v1课程",
        "format": "int32"
      },
      "name": {
        "type": "string",
        "description": "课程名称/标题名称"
      },
      "courseLocation": {
        "type": "string",
        "description": "课程地区"
      }
    },
    "description": "小程序课程搜索"
  },
  "CommonPageCourseVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/CourseVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageCourseVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageCourseVo对象"
      }
    }
  },
  "CourseVideoSkuVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "视频课程sku表 id",
        "format": "int64"
      },
      "courseId": {
        "type": "integer",
        "description": "课程id",
        "format": "int64"
      },
      "skuName": {
        "type": "string",
        "description": "sku名称"
      },
      "video": {
        "type": "string",
        "description": "视频地址"
      },
      "sort": {
        "type": "integer",
        "description": "排序",
        "format": "int32"
      },
      "addBy": {
        "type": "integer",
        "description": "创建人id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "editBy": {
        "type": "integer",
        "description": "修改人id",
        "format": "int64"
      },
      "editTime": {
        "type": "string",
        "description": "修改时间",
        "format": "date-time"
      }
    },
    "description": "视频课程sku表"
  },
  "CourseVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "课程表id",
        "format": "int64"
      },
      "courseTypes": {
        "type": "integer",
        "description": "课程类型: 1=视频课程 2=网红陪玩 3=1v1课程",
        "format": "int32"
      },
      "name": {
        "type": "string",
        "description": "课程名称/标题名称"
      },
      "price": {
        "type": "number",
        "description": "课程金额/预定金额"
      },
      "enrollQty": {
        "type": "integer",
        "description": "报名名额（库存）",
        "format": "int32"
      },
      "enrollNumber": {
        "type": "integer",
        "description": "报名人数",
        "format": "int32"
      },
      "courseBannerPic": {
        "type": "string",
        "description": "课程轮播图"
      },
      "courseVideo": {
        "type": "string",
        "description": "课程视频"
      },
      "status": {
        "type": "integer",
        "description": "状态: 1=上架 2=下架",
        "format": "int32"
      },
      "sort": {
        "type": "integer",
        "description": "排序",
        "format": "int32"
      },
      "internetCelebrityCommission": {
        "type": "string",
        "description": "网红达人提成"
      },
      "channelCommission": {
        "type": "string",
        "description": "渠道方提成"
      },
      "courseDetails": {
        "type": "string",
        "description": "课程详情"
      },
      "courseLocation": {
        "type": "string",
        "description": "课程地区"
      },
      "coachUserId": {
        "type": "integer",
        "description": "课程教练用户id",
        "format": "int64"
      },
      "courseCardCount": {
        "type": "integer",
        "description": "课程卡数(库存量)",
        "format": "int32"
      },
      "coachCommission": {
        "type": "string",
        "description": "教练提成"
      },
      "addBy": {
        "type": "integer",
        "description": "创建人id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "editBy": {
        "type": "integer",
        "description": "修改人id",
        "format": "int64"
      },
      "editTime": {
        "type": "string",
        "description": "修改时间",
        "format": "date-time"
      },
      "courseVideoSkuVoList": {
        "type": "array",
        "description": "视频课程规格列表",
        "items": {
          "$ref": "#/components/schemas/CourseVideoSkuVo对象"
        }
      },
      "coachUserName": {
        "type": "string",
        "description": "课程教练名称"
      },
      "ticketCodeNumber": {
        "type": "integer",
        "description": "核销码数量",
        "format": "int32"
      }
    },
    "description": "课程表"
  },
  "CommonResultCourseVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CourseVo对象"
      }
    }
  },
  "FrontContestSearchDto对象": {
    "type": "object",
    "properties": {
      "priceValue": {
        "type": "string",
        "description": "价格高低值： 高-high  低-low"
      },
      "contestName": {
        "type": "string",
        "description": "赛事名称"
      }
    },
    "description": "小程序赛事搜索"
  },
  "CommonPageContestVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ContestVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageContestVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageContestVo对象"
      }
    }
  },
  "ContestVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "赛事表id",
        "format": "int64"
      },
      "contestName": {
        "type": "string",
        "description": "赛事名称"
      },
      "reservePrice": {
        "type": "number",
        "description": "预定金额"
      },
      "enrollQty": {
        "type": "integer",
        "description": "报名名额",
        "format": "int32"
      },
      "enrollNumber": {
        "type": "integer",
        "description": "报名人数",
        "format": "int32"
      },
      "contestBannerPic": {
        "type": "string",
        "description": "赛事轮播图"
      },
      "contestVideo": {
        "type": "string",
        "description": "赛事视频"
      },
      "status": {
        "type": "integer",
        "description": "状态: 1=上架 2=下架 3=过期",
        "format": "int32"
      },
      "sort": {
        "type": "integer",
        "description": "排序",
        "format": "int32"
      },
      "internetCelebrityCommission": {
        "type": "string",
        "description": "网红达人提成"
      },
      "channelCommission": {
        "type": "string",
        "description": "渠道方提成"
      },
      "contestDetails": {
        "type": "string",
        "description": "赛事详情"
      },
      "endTime": {
        "type": "string",
        "description": "截止时间",
        "format": "date-time"
      },
      "addBy": {
        "type": "integer",
        "description": "创建人id",
        "format": "int64"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间",
        "format": "date-time"
      },
      "editBy": {
        "type": "integer",
        "description": "修改人id",
        "format": "int64"
      },
      "editTime": {
        "type": "string",
        "description": "修改时间",
        "format": "date-time"
      }
    },
    "description": "赛事表"
  },
  "CommonResultContestVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/ContestVo对象"
      }
    }
  },
  "CoachWriteOffRecordsVo对象": {
    "type": "object",
    "properties": {
      "totalQty": {
        "type": "integer",
        "description": "合计数量",
        "format": "int64"
      },
      "totalAmount": {
        "type": "number",
        "description": "合计金额"
      },
      "writeOffRecordsVos": {
        "$ref": "#/components/schemas/CommonPageWriteOffRecordsVo对象"
      }
    },
    "description": "教练端-核销记录返回参数"
  },
  "CommonPageWriteOffRecordsVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/WriteOffRecordsVo对象"
        }
      }
    },
    "description": "列表数据"
  },
  "CommonResultCoachWriteOffRecordsVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CoachWriteOffRecordsVo对象"
      }
    }
  },
  "WriteOffRecordsVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "核销id",
        "format": "int64"
      },
      "name": {
        "type": "string",
        "description": "课程名称"
      },
      "ticketCode": {
        "type": "string",
        "description": "券码"
      },
      "price": {
        "type": "number",
        "description": "金额"
      },
      "addTime": {
        "type": "string",
        "description": "创建时间"
      }
    },
    "description": "教练端-核销记录列表返回参数"
  },
  "CoachMineVo对象": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "description": "用户表id",
        "format": "int64"
      },
      "userName": {
        "type": "string",
        "description": "会员名称"
      },
      "avatarUrl": {
        "type": "string",
        "description": "头像"
      },
      "accumulatedWriteOffQuantity": {
        "type": "integer",
        "description": "累计核销数量",
        "format": "int32"
      },
      "quantityToBeWrittenOff": {
        "type": "integer",
        "description": "待核销数量",
        "format": "int32"
      },
      "writtenOffThisMonth": {
        "type": "integer",
        "description": "本月已核销",
        "format": "int32"
      },
      "withdrawalPrice": {
        "type": "number",
        "description": "佣金"
      }
    },
    "description": "教练端-我的返回参数"
  },
  "CommonResultCoachMineVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CoachMineVo对象"
      }
    }
  },
  "CommonPageApplyCommissionSettlementRecordVo对象": {
    "type": "object",
    "properties": {
      "page": {
        "type": "integer",
        "format": "int32"
      },
      "limit": {
        "type": "integer",
        "format": "int32"
      },
      "totalPage": {
        "type": "integer",
        "format": "int32"
      },
      "total": {
        "type": "integer",
        "format": "int32"
      },
      "list": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ApplyCommissionSettlementRecordVo对象"
        }
      }
    }
  },
  "CommonResultCommonPageApplyCommissionSettlementRecordVo对象": {
    "type": "object",
    "properties": {
      "code": {
        "type": "integer",
        "format": "int64"
      },
      "message": {
        "type": "string"
      },
      "data": {
        "$ref": "#/components/schemas/CommonPageApplyCommissionSettlementRecordVo对象"
      }
    }
  }
};
const ref = "#/components/schemas/CommonResultCommonPageCourseVo对象";

module.exports = {
  schemas,
  ref
}
