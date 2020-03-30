import {
  request
} from 'network/request.js';

export function getHomeMuliData() {
  return request({
    url: '/home/multidata'
  });
}

export function getHomeGoods(pageIndex, type) {
  return request({
    url: '/home/data',
    params: {
      type: type,
      page: pageIndex || 0
    }
  })
}
