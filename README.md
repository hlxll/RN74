# 配置环境
react-navigation  6.x需要依赖库react-native-screens和react-native-safe-area-context
然而安装android studio就必须得安装NDK，刚才是安装SDK安装官网配置之后，能正常启动，加了react-navigation就不能启动了，会报错NDK有问题，这个时候就需要到android studio的SDK Tools中安装指定的NDK，具体版本可以在安装前启动项目，会报错找不到指定版本的NDK，然后再去找指定版本的就可以。

# 项目开始
学习网易云音乐手机端模仿开发

# 引入track-player闪退
原生模块未正确链接：在引入 react-native-track-player 后，需要运行 react-native link 命令来链接原生模块。如果未正确链接，可能会导致应用崩溃。
缺少平台特定的设置或配置：不同的操作系统（iOS/Android）有其特定的配置要求。确保按照 react-native-track-player 的文档为两个平台都正确配置了所有必要的原生代码。
版本不兼容：确保你的 react-native 和 react-native-track-player 版本兼容。可能需要升级或降级其中之一以匹配对方。
缺少权限或服务未启动：在 Android 上，确保你的应用有正确的音频播放权限，并且 react-native-track-player 的服务已经正确初始化并启动。
解决方法：
确保使用 react-native link 命令链接了 react-native-track-player。
按照 react-native-track-player 的文档，对 iOS 和 Android 进行适当的配置。
检查 react-native 和 react-native-track-player 的版本，必要时进行升级或降级。
在 Android 设备上，确保已经添加了必要的音频播放权限，并且在应用初始化时正确初始化和启动了 Track Player。

# react-native-svg
只需要配置，不会自动链接，配置metro就行