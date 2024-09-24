function getHasteName(filename) {
    // 自定义逻辑来确定模块的 Haste 名称
    if (filename.includes('custom')) {
      return 'CustomModule';
    }
    return undefined; // 使用默认行为
  }
  
  module.exports = {
    getHasteName,
  };