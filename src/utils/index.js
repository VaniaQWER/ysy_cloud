import CN from '@/locale/zh_CN';

/**
 * @desc 获取标准信息
 * @param {*} key 传入键
 * @returns message [string];
 */
export function formatMessage(key) {
  const _locale = localStorage.getItem('_locale');
  switch (_locale) {
    case 'zh_EN':
      return;
    default:
      return CN[key];
  }
}

export function getPlainNode(nodeList, parentPath = '') {
  const arr = [];
  nodeList.forEach((node) => {
    const item = node;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}