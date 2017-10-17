import axios from 'axios';

/**
 * 获取主页数据
 */
export function getHomePageData() {
  axios.get('/api/homepage')
    .then((res) => {
      // eslint-disable-next-line
      console.log(res);
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
}

export function Test() {

}
