import {
  request
} from 'network/request.js';

export function getHomeMuliData() {
  return request({
    url: '/home/multidata'
  });
}
