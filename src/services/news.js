import { get } from './base';

/**
 * 获取新闻详情
 */
export function getContent(id) {
  return get(`/news/getContent/${id}`);
}
/**
 * 获取新闻列表
 */
export function getList(page = 1) {
  return get(`/news/getList/${page}`);
}
