import { get } from './base';

/**
 * 获取主页数据
 */
export function getHomePageData() {
  return get('/home');
}
/**
 * 获取新闻媒体页数据
 */
export function getNewsPageData(page = 1) {
  return get(`/news/${page}`);
}
/**
 * 获取导航数据
 */
export function getMenu() {
  return get('/menus');
}
