import {request} from "./request";

// 获取购物车商品件数
export function getCartGoodsCount() {
  return request({
    url: 'cart/goodsCount'
  })
}