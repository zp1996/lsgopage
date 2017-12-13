import { get } from './base';

/**
 * 获取公司介绍
 */
export function getCompanyData() {
  return get('/introduction/getCompany');
}

export function getConcatData() {

}
