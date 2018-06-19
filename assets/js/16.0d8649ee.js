(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("如果是单页面应用，那么可能入口只有一个；如果是多个页面的项目，那么经常是一个页面会对应一个构建入口。")]),t._m(3),t._m(4),t._m(5),a("p",[t._v("webpack 中提供一种处理多种文件格式的机制，便是使用 loader。我们可以把 loader 理解为是一个转换器，负责把某种文件格式的内容转换成 webpack 可以支持打包的模块。")]),t._m(6),t._m(7),a("p",[t._v("在 webpack 的构建流程中，plugin 用于处理更多其他的一些构建任务。通过添加我们需要的 plugin，可以满足更多构建中特殊的需求。")]),t._m(8),t._m(9),t._m(10),t._m(11),a("p",[t._v("webpack 的配置其实是一个 Node.js 的脚本，这个脚本对外暴露一个配置对象，webpack 通过这个对象来读取相关的一些配置。")]),t._m(12),t._m(13),a("p",[t._v("通常一个前端项目从一个 HTML 页面出发，引用 css 和 js 文件，但是我们构建出来的文件一般都会用 "),a("code",[t._v("[hash]")]),t._v(" 命名，所以需要用到 "),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fdoc.webpack-china.org%2Fplugins%2Fhtml-webpack-plugin%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-webpack-plugin"),a("OutboundLink")],1),t._v(" 将路径和我们的构建结果关联起来。")]),t._m(14),t._m(15),a("p",[t._v("我们编写 CSS，并且希望使用 webpack 来进行构建，为此，需要在配置中引入 loader 来解析和处理 CSS 文件。")]),t._m(16),a("p",[t._v("style-loader：将 css-loader 解析的结果转变成 js 代码，动态插入 style 标签。")]),a("p",[t._v("如果需要单独把 css 文件分离出来，需要使用 "),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fdoc.webpack-china.org%2Fplugins%2Fextract-text-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("extract-text-webpack-plugin"),a("OutboundLink")],1),t._v(" 。")]),t._m(17),t._m(18),t._m(19),a("p",[t._v("file-loader")]),t._m(20),a("p",[t._v("babel-loader")]),t._m(21),a("p",[a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fwebpack%2Fwebpack-dev-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-dev-server"),a("OutboundLink")],1)]),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),a("p",[t._v("如果需要进行精确匹配可以使用：")]),t._m(31),t._m(32),t._m(33),a("p",[t._v("例如有了上述的配置，当你在 src/utils/ 目录下有一个 common.js 文件时，就可以这样来引用：")]),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),a("p",[t._v("懒得写。。。")]),t._m(41),a("p",[t._v("更多的插件可以在这里查找："),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fwebpack-contrib%2Fawesome-webpack%23webpack-plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("plugins in awesome-webpack"),a("OutboundLink")],1),t._v("。")]),t._m(42),t._m(43),t._m(44),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49),t._m(50),t._m(51),a("p",[t._v("然后在我们任意源码中：")]),t._m(52),t._m(53),t._m(54)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"使用-webpack-定制前端开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack-定制前端开发环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 webpack 定制前端开发环境")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack-一些基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-一些基本概念","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack 一些基本概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"入口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入口","aria-hidden":"true"}},[this._v("#")]),this._v(" 入口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("入口可以使用 "),s("code",[this._v("entry")]),this._v(" 字段来进行配置，webpack 支持配置多个入口来进行构建：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/index.js'")]),t._v(" \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 上述配置等同于")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    main"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/index.js'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 或者配置多个入口")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/page-foo.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/page-bar.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用数组来对多个文件进行打包")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    main"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'./src/foo.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'./src/bar.js'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loader","aria-hidden":"true"}},[this._v("#")]),this._v(" loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 "),s("code",[this._v("module.rules")]),this._v(" 字段下来配置相关的规则。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" plugin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("例如，要使用压缩 JS 代码的 uglifyjs-webpack-plugin 插件，只需在配置中通过 "),s("code",[this._v("plugins")]),this._v(" 字段添加新的 plugin 即可。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出","aria-hidden":"true"}},[this._v("#")]),this._v(" 输出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("webpack 的输出即指 webpack 最终构建出来的静态文件，使用 "),s("code",[this._v("output")]),this._v(" 字段配置。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bundle.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 或者多个入口生成不同文件")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/foo.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./src/bar.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'[name].js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" __dirname "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 路径中使用 hash，每次构建时会有一个不同 hash 值，避免发布新版本时线上使用浏览器缓存")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  output"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'[name].js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" __dirname "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/dist/[hash]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"搭建基本的前端开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建基本的前端开发环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 搭建基本的前端开发环境")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"关联-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关联-html","aria-hidden":"true"}},[this._v("#")]),this._v(" 关联 HTML")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" project"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paths"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("client")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'index.html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 文件模板")]),t._v("\n    hash     "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 是否需要 hash 命名")]),t._v("\n    favicon  "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" project"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paths"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'logo.png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// favicon 图表路径")]),t._v("\n    filename "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'index.html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 配置输出文件名和路径")]),t._v("\n    inject   "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'body'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 构件后的 js 在 body 底部引用")]),t._v("\n    minify   "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      collapseWhitespace "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 压缩 html")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"构建-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建-css","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建 CSS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("css-loader：负责解析 css 代码，处理 css 中的依赖如 "),s("em",[this._v("@import")]),this._v(" 和 "),s("em",[this._v("url()")]),this._v(" 等。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  module"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.less$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader")]),t._v("\n        use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ExtractTextPlugin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("extract")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n          fallback"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'style-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          use"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'less-loader'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("loader 的加载顺序是从右往左，从下往上。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"处理图片文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理图片文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 处理图片文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用-babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-babel","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 Babel")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"启动静态服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动静态服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动静态服务")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('"scripts": {\n+  "start": "webpack-dev-server --mode development"\n}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"webpack-如何解析代码模块路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-如何解析代码模块路径","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack 如何解析代码模块路径")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模块解析规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块解析规则","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块解析规则")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("解析相对路径")]),a("ol",[a("li",[t._v("查找相对当前模块的路径下是否有对应文件或文件夹")]),a("li",[t._v("是文件则直接加载")]),a("li",[t._v("是文件夹则继续查找文件夹下的 package.json 文件")]),a("li",[t._v("有 package.json 文件则按照文件中 main 字段的文件名来查找文件")]),a("li",[t._v("无 package.json 或者无 main 字段则查找 index.js 文件")])])]),a("li",[a("p",[t._v("解析模块名")]),a("p",[t._v("查找当前文件目录下，父级目录及以上目录下的 node_modules 文件夹，看是否有对应名称的模块")])]),a("li",[a("p",[t._v("解析绝对路径（不建议使用）")]),a("p",[t._v("直接查找对应路径的文件")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"常用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在 webpack 配置中，和模块路径解析相关的配置都在 "),s("code",[this._v("resolve")]),this._v(" 字段下。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"resolve-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-alias","aria-hidden":"true"}},[this._v("#")]),this._v(" resolve.alias")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("假设我们有个 "),s("code",[this._v("utils")]),this._v(" 模块极其常用，经常编写相对路径很麻烦，希望可以直接 "),s("code",[this._v("import 'utils'")]),this._v(" 来引用，那么我们可以配置某个模块的别名，如：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("alias"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  utils"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'src/utils'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 这里使用 path.resolve 和 __dirname 来获取绝对路径")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("alias: {\n  utils$: path.resolve(__dirname, 'src/utils') // 只会匹配 import 'utils'\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"resolve-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-extensions","aria-hidden":"true"}},[this._v("#")]),this._v(" resolve.extensions")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("extensions"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'.wasm'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.mjs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.json'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.jsx'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("import * as common from './src/utils/common'\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"resolve-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" resolve.modules")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于直接声明依赖名的模块（如 "),s("code",[this._v("react")]),this._v(" ），webpack 会类似 Node.js 一样进行路径搜索，搜索 node_modules 目录，这个目录就是使用 "),s("em",[this._v("resolve.modules")]),this._v(" 字段进行配置的，默认就是：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'node_modules'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你想要添加一个目录到模块搜索目录，此目录优先于 "),s("code",[this._v("node_modules/")]),this._v(" 搜索：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('modules: [path.resolve(__dirname, "src"), "node_modules"]\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 plugin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"defineplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defineplugin","aria-hidden":"true"}},[this._v("#")]),this._v(" DefinePlugin")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("DefinePlugin")]),t._v(" 允许创建一个在"),a("strong",[t._v("编译")]),t._v("时可以配置的全局常量，社区中使用最多的方式是定义环境变量，例如 "),a("code",[t._v("PRODUCTION = true")]),t._v(" 或者 "),a("code",[t._v("__DEV__ = true")]),t._v(" 等。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefinePlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v("'process.env'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"NODE_ENV"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"production"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，\n          "),a("span",{attrs:{class:"token string"}},[t._v("'__IWIND_API__'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"http://10.1.20.37:8080/iwind/api/v1/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v("'VERSION'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'5fa3b9'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("注意，因为这个插件直接执行文本替换，给定的值必须包含字符串本身内的"),s("strong",[this._v("实际引号")]),this._v("。通常，有两种方式来达到这个效果，使用 "),s("code",[this._v("'\"production\"'")]),this._v(", 或者使用 "),s("code",[this._v("JSON.stringify('production')")]),this._v("。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"copy-webpack-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-webpack-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" copy-webpack-plugin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"extract-text-webpack-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extract-text-webpack-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" extract-text-webpack-plugin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"provideplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provideplugin","aria-hidden":"true"}},[this._v("#")]),this._v(" ProvidePlugin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("自动加载模块，而不必到处 "),s("code",[this._v("import")]),this._v(" 或 "),s("code",[this._v("require")]),this._v(" 。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("要自动加载 "),s("code",[this._v("jquery")]),this._v("，我们可以将两个变量都指向对应的 node 模块：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("new webpack.ProvidePlugin({\n  $: 'jquery',\n  jQuery: 'jquery'\n})\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// in a module\n$('#item'); // <= 起作用\njQuery('#item'); // <= 起作用\n// $ 自动被设置为 \"jquery\" 输出的内容\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("对于 ES2015 模块的 default export，必须指定模块的 default 属性。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"更好地使用-webpack-dev-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更好地使用-webpack-dev-server","aria-hidden":"true"}},[this._v("#")]),this._v(" 更好地使用 webpack-dev-server")])}],!1,null,null,null);s.default=e.exports}}]);