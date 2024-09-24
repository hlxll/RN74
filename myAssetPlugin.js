function assetPlugin (asset) {
    // 在这里处理 asset 并返回修改后的结果
    return {
      ...asset,
      // 可以自定义属性，例如给文件名加上特定的前缀
      fileName: `my_prefix_${asset.fileName}`,
    };
};
function customResolver(context, realModuleName, platform, moduleName) {
    // 你的自定义逻辑，可以根据需要修改
    // if (moduleName === 'special-module') {
    //   return {
    //     type: 'sourceFile',
    //     filePath: '/path/to/your/module.js',
    //   };
    // }
  
    // 默认情况下，继续使用默认解析器
    return context.resolveRequest(context, realModuleName, platform, moduleName);
}

module.exports ={
    customResolver,
    assetPlugin
}