const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
const {assetPlugin, customResolver } = require('./myAssetPlugin')
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);
const config = {
    resolver: {//解析配置
        assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
        //可以包含在bundle中的Asset扩展名列表,静态资源，直接作为资源打包
        sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
        //可以包含在bundle中的source扩展名列表，处理源代码，须经过编译
        extraNodeModules: {
            //当前项目提供额外引入的模块
            '@': path.resolve(__dirname),
        },
        //resolverMainFields: ['react-native', 'browser', 'mian'],
        //如果你的项目中同时使用了多个库，其中可能有重名的模块或导出，
        //你可以通过配置 resolverMainFields 来确保使用特定版本或类型的模块
        resolveRequest: customResolver,
        useWatchman: true,//是否使用watchman
        blacklistRE: '',//通过正则指定打包的黑名单
        hasteImplModulePath: './hasteImpl.js',//处理自定义名称的模块，返回一个正确的模块名称
        platforms: ['io', 'android', 'web'],//指定支持的平台,可以为每个平台提供特定文件
        //例如创建js文件可以创建name.io.js和name.android.js文件,metro会自动选择
    },
    transformer: {//转换配置
        ...defaultConfig.transformer,
        // asyncRequireModulePath: '',
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        transformVariants: {//针对不同平台提供不同的实现，处理和转换不同平台的模块。
            ios: (module) => module.replace('abc', 'xyz'),
            android: (module) => module.replace('abc', '123'),
        },
        postMinifyProcess: (options)=>{
            //在压缩后进行进一步处理，比如加一些注释
            const { code, map } = options;
            const modifiedCode = `${code}\\n//添加一段注释`
            return {
                code: modifiedCode,
                map,
            }
        },
        //minifierPath: '',//默认是使用Metro使用terser作为js代码压缩工具，但是可以设置这个修改压缩工具
        minifierConfig: {
            //添加一些压缩时候的配置，精准控制代码压缩
            mangle: {
                //是否混淆变量名
                keep_fnames: true,//不变
            },
            compress: {
                drop_console: true, // 删除console语句
            },
            output: {
                beautify: false,//是否美化输出
            }
        },
        optimizationSizeLimit: {
            //开发时候设置包的最小体积限制，主要优化包体积，某个包超过限制，会输出警告或进行优化，不对打包
            // 产物限制，便于打包时候优化整体
            //'node_modules/some-package': 1024*10,
        },
        //assetPlugins: [assetPlugin],//处理静态资源都会通过这个自定义的方法
        assetRegistryPath: path.resolve(__dirname, 'customAssetRegistry.js'),
        //所有静态资源的注册和调用都会使用这个方法进行     
    },
    serializer: {
        //序列化配置
    },
    server: {//服务器配置
        ...defaultConfig.server,
        port: 8081,//监听的端口号
        useGlobalHotkey: true, //是否启动CMD+ R热键来刷新bundle
        enhanceMiddleware: (middleware, server) => {
            //自定义中间件添加到Metro服务器的响应链,灵活地调整 Metro 服务器的处理方式
            return (req, res, next) => {
                console.log("请求地址" + req.url);
                return middleware(req, res, next)
            }
        }, 
        rewriteRequestUrl: (url, req) => {
            //自定义修改请求的url
            if(url.startsWith('/api')){
                return url.replace('/api', '/custom-api');
            }
            return url;
        },
        enableVisualizer: true,//接受日志转发到服务器端，服务器再将日志输出到开发环境，对与调试有用
                
    },
    //通用配置
    cacheStores: {
        //存放缓存的地方
        ...defaultConfig.cacheStores
    },
    cacheVersion: defaultConfig.cacheVersion,
    //生成一个将整个Metro缓存失效的key

    projectRoot: path.resolve(__dirname),//项目根目录
    
    watchFolders: [
        //指定要监视的根目录文件夹
        path.resolve(__dirname, './static'),
        path.resolve(__dirname, './pages')
    ],
    reporter: (update)=>{
        //打包过程中记录打包状态
        console.log(update)
    },
    resetCache: false, //构建时是否重置缓存
    stickyWorkers: false, //是否基于文件名创建workers
    maxWorkers: 5, //转换时可以并行的最大值
};
//mergeConfig合并胚子
module.exports = mergeConfig(defaultConfig, config);