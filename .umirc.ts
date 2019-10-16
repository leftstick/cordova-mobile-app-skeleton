import { IConfig } from 'umi-types'

export default {
  outputPath: 'www',
  hash: true,
  treeShaking: true,
  theme: './src/themes/index.js',
  define: {
    'process.env.UMI_ENV': process.env.UMI_ENV,
    'process.env.CORDOVA_BROWSER': process.env.CORDOVA_BROWSER
  },
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: false
        },
        antd: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
            /helpers\//
          ]
        },
        locale: {
          default: 'zh-CN',
          baseNavigator: false,
          antd: true
        },
        library: 'react',
        dynamicImport: {
          webpackChunkName: true,
          level: 2
        },
        title: {
          defaultTitle: 'cordova-mobile-app-skeleton',
          useLocale: true
        },
        hardSource: false,
        pwa: false,
        hd: false,
        fastClick: true
      }
    ]
  ]
} as IConfig
