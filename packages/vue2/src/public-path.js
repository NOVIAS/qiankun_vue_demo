// 动态修改 publicPath
// 解决 qiankun 引入后基础路径不正确
if (window['__POWERED_BY_QIANKUN__']) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window['__INJECTED_PUBLIC_PATH_BY_QIANKUN__'];
}

