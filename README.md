# cordova-mobile-app-skeleton

## 安装依赖

```bash
yarn
```

## 调试

### 浏览器-调试

```bash
yarn start
```

> 浏览器调试默认有livereload功能（请区别于hotmodulereplacement），如需关闭，请使用`LIVE_RELOAD=none yarn start`启动程序

### Android-启动调试

- 先安装[Android Studio](https://developer.android.com/studio)

**Android-模拟器-调试**

打开`Android Studio` -> `Tools` -> `AVD Manager`，创建并启动一个你喜欢的模拟器即可

```bash
yarn mock:android
```

**Android-真机-调试**

USB连接上你的手机，在手机上打开 `Developer Options` -> `Enable developer options` 和 `USB debugging`

```bash
yarn real:android
```

### iOS-调试

- 先安装[xcode](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html)

**iOS-模拟器-调试**

```bash
yarn mock:ios
```

在打开的xcode中，选择模拟器，然后点击`Build and then run the current scheme`，打开模拟器.

详情可看[deploying-to-simulator](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#deploying-to-simulator)


## 打包

### Android 

```bash
yarn release:android
```


### iOS 

```bash
open -a Xcode ./platforms/ios/cordova-mobile-app-skeleton.xcworkspace
```

## Q&A

- 针对 >= iPhonex 的刘海屏适配，请参考：[notch-display](https://blog.phonegap.com/displaying-a-phonegap-app-correctly-on-the-iphone-x-c4a85664c493)

