import {request} from "./request";

// 获取首页数据
export function getIndexUrl() {
  return request({
    url: 'index/appInfo'
  })
}
