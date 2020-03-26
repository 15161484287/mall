import axios from 'axios'
import {
  Toast
} from 'vant';

export function request(config) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000,
    method: 'GET'
  });

  instance.interceptors.response.use(result => {
    if (!result.data.success) {
      Toast.fail(result.statusText + '\n' + 'status:' + result.status);
    }
    return result.data;
  }, err => {
    console.log(err.response)
    Toast.fail(err.response.statusText + '\n' + 'status:' + err.response.status);
    return err;
  });
  return instance(config);
}
