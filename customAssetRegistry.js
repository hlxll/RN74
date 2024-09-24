const AssetRegistry = {};

AssetRegistry.registerAsset = (asset) => {
  // 在这里处理资产注册的逻辑
  console.log(`Registering asset: ${asset.uri}`);
};

AssetRegistry.getAsset = (uri) => {
  // 在这里处理获取资产的逻辑
  return { uri }; // 只是简单示例
};

export default AssetRegistry;