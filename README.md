# vue-muti-page

> A muti-page project created by vue-cli

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9876/XXXX.html such as localhost:9876/page1.html
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

##项目目录结构说明

```

├── README.md
├── build //webpack 配置
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── src //源代码
│   ├── assets //公共资源
│   │   └── logo.png
│   ├── components //公用组件
│   │   ├── HelloWorld.vue
│   │   └── XXXX.vue
│   └── views //页面文件
│   └── utils //工具类和函数
│       ├── page1
│       │   ├── page1.html  //入口
│       │   ├── page1.js
│       │   └── page1.vue
│       └── test
│           ├── test.html
│           ├── test.js
│           ├── test.vue
│           └── components
│               └── HelloWorld.vue //页面私有组件
│           └── router
│               └── index.js //页面级路由文件
├── test // 测试
├── package.json //包管理
└── static //静态文件


```