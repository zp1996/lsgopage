import axios from 'axios';

function checkStatus(res) {
  const { status } = res;
  if (status >= 200 && status < 300) {
    return res;
  }
  const error = new Error(res.statusText);
  error.code = status;
  error.response = res;
  throw error;
}

function requestGet(path) {
  return axios.get(`/api${path}`)
    .then(checkStatus)
    .then(data => data.data)
    .catch((err = {}) => {
      const { code = 404, message = '请求失败，请稍后再试！' } = err;
      return { code, msg: message };
    });
}

export function get(path, name = '') {
  return new Promise((resolve, reject) => {
    requestGet(path).then((res) => {
      const { code, msg } = res;
      if (code === 200) {
        resolve(msg);
      } else {
        // 数据上报机制待完善
        reject({
          code,
          msg: `${name}数据获取失败，请稍后再试`,
        });
      }
    });
  });
}

export function post() {

}
