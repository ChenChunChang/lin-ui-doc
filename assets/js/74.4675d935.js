(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{447:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v("快速上手")],1),t._v(" "),a("p",[t._v("Lin UI 致力于给小程序开发者提供愉悦的开发体验。")]),t._v(" "),a("blockquote",[a("p",[t._v("在开始之前，推荐先学习微信官方的"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/index.html?t=18101612",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序开发文档"),a("OutboundLink")],1),t._v("，并正确安装和配置了 Node.js v8或以上。 同时，我们假设你已了解关于 HTML、CSS 和 JavaScript 的初级知识，并且已经熟悉并阅读了"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序自定义组件"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("Lin UI提供两种安装方法，满足不同开发者的需求。如果您需要使用"),a("code",[t._v("npm")]),t._v("安装，请确保您已经在本机安装了"),a("code",[t._v("npm")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("strong",[t._v("使用 Lin UI 务必勾选"),a("code",[t._v("增强编译")]),t._v("、"),a("code",[t._v("Es6 转 ES5")]),t._v("以及"),a("code",[t._v("使用 npm 模块")]),t._v("选项")]),t._v("，"),a("a",{attrs:{href:"https://cdn.talelin.com/20210128165243.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考图片"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"方式一-使用npm安装-推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一-使用npm安装-推荐"}},[t._v("#")]),t._v(" 方式一： 使用npm安装 （推荐）")]),t._v(" "),a("p",[t._v("打开小程序的项目根目录，执行下面的命令（如果使用了云开发，需要进入miniprogram文件夹下执行下面的命令）。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init\n")])])]),a("p",[t._v("此时，会生成一个package.json文件，命令行里会以交互的形式让你填一些项目的介绍信息，你可以耐心填完，当然也可以忽略，全部按回车键来快速完成项目初始化。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),a("ul",[a("li",[t._v("1.执行npm init进行初始化，此时会生成一个package.json文件，如果不进行npm init，在构建npm的时候会报一个错误："),a("code",[t._v("没有找到 node_modules 目录")])]),t._v(" "),a("li",[t._v("2.不建议使用cnpm，这样会带来一些未知的错误。如果网络情况不佳，可以使用下面的命令行更换为淘宝源。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org \n")])])])]),t._v(" "),a("p",[t._v("接着，继续执行下面的命令。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lin-ui\n")])])]),a("p",[t._v("执行成功后，会在根目录里生成项目依赖文件夹 "),a("code",[t._v("node_modules/lin-ui")]),t._v(" （小程序IDE的目录结构里不会显示此文件夹）。\n"),a("br"),t._v("\n然后用小程序官方IDE打开我们的小程序项目，找到 "),a("code",[t._v("工具")]),t._v(" 选项，点击下拉选中 "),a("code",[t._v("构建npm")]),t._v(" ，等待构建完成即可。\n"),a("img-wrapper",[a("img",{attrs:{src:"/screenshots/start/YUdIR2E3ME5weEZEa3ErKzdJRGVNckFIWUZrS0ZKeWNOUnpxSXh5MlRKQU9Jakh6WnRXenVRPT0.png"}})]),t._v("\n出现上图所示的结果后，可以看到小程序IDE工具的目录结构里多出了一个文件夹 "),a("code",[t._v("miniprogram_npm")]),t._v("（之后所有通过 "),a("code",[t._v("npm")]),t._v(" 引入的组件和 "),a("code",[t._v("js")]),t._v(" 库都会出现在这里），打开后可以看到 "),a("code",[t._v("lin-ui")]),t._v(" 文件夹，也就是我们所需要的组件。\n"),a("img-wrapper",[a("img",{attrs:{src:"/screenshots/start/YUdIR2E3ME5weEVCVEZMbkRGRHZaRWdTWE9UMzd1Y3ZkN2dHUjBHY2xSS1daZjl0QTkvOVVBPT0.png"}})])],1),t._v(" "),a("h3",{attrs:{id:"方式二-下载代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二-下载代码"}},[t._v("#")]),t._v(" 方式二：下载代码")]),t._v(" "),a("p",[t._v("直接通过git下载  "),a("code",[t._v("Lin UI")]),t._v("  源代码，并将 "),a("code",[t._v("dist")]),t._v(" 目录（Lin-UI 组件库）拷贝到自己的项目中。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/TaleLin/lin-ui.git\n")])])]),a("h2",{attrs:{id:"使用组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用组件"}},[t._v("#")]),t._v(" 使用组件")]),t._v(" "),a("blockquote",[a("p",[t._v("下文会简单介绍一个"),a("code",[t._v("Lin UI")]),t._v(" 组件的引入和使用。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("配置微信开发者工具")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("要正确使用 Lin UI，需将微信开发者工具的 "),a("code",[t._v("Es6 转 ES5")]),t._v(" 和 "),a("code",[t._v("增强编译")]),t._v(" 选项勾选上")]),t._v(" "),a("blockquote",[a("p",[t._v("设置路径：微信开发者工具右上角 -> 详情 -> 本地设置")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("将基础库版本设置到 "),a("code",[t._v(">=2.8.2")])])])])])]),t._v(" "),a("li",[a("p",[t._v("在页面中引入")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l-button"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/miniprogram_npm/lin-ui/button/index"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在页面中使用")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("默认按钮"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("我们建议你在引入 Lin UI 组件时，都统一命名为 "),a("code",[t._v("l-{组件名}")]),t._v(" 格式，遵循此规范将使你的项目代码更加清晰")])]),t._v(" "),a("p",[a("strong",[t._v("至此，Lin UI 已成功引入至你的项目中了！")])])])]),t._v(" "),a("h2",{attrs:{id:"自定义配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置"}},[t._v("#")]),t._v(" 自定义配置")]),t._v(" "),a("blockquote",[a("p",[t._v("考虑到开发者在面临不同到项目时，需求和行业的不同。Lin UI 设计规范上支持一定程度上的样式定制，以满足业务和品牌上多样化的视觉需求。")])]),t._v(" "),a("p",[t._v("同时，可以通过对 "),a("code",[t._v("components.json")]),t._v(" 进行配置，来编译生成相对应的组件。\n"),a("br"),t._v("\n为满足自定义的需求，首先我们要去下载 "),a("code",[t._v("Lin UI")]),t._v(" 源码。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/TaleLin/lin-ui.git\n")])])]),a("p",[t._v("安装相关依赖")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("完成以上两步是对 "),a("code",[t._v("Lin UI")]),t._v(" 进行自定义配置的基础要求。")]),t._v(" "),a("h3",{attrs:{id:"全局样式更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局样式更改"}},[t._v("#")]),t._v(" 全局样式更改")]),t._v(" "),a("blockquote",[a("p",[t._v("Lin UI 的样式使用了 Less 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。")])]),t._v(" "),a("p",[t._v("以下是一些最常用的通用变量，所有样式变量可以在这里找到。")]),t._v(" "),a("ul",[a("li",[t._v("组件样式变量\n找到根目录，打开"),a("code",[t._v("config/style/_base.less")]),t._v("文件")])]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Color ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@default-color          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@theme-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@success-color          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #34BFA3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@warning-color          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #FFE57F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@error-color            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #F4516C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@disabled-color         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #DEE2E6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@selected-color         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@default-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 90%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@tooltip-color          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@subsidiary-color       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #80848f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@rate-star-color        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #f5a623"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Text")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@title-color            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #0e0e0e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@text-color             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #888"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("主题色更改")])]),t._v(" "),a("p",[t._v("同样打开根目录，打开"),a("code",[t._v("config/style/_theme.less")]),t._v("文件，看到文件中定义了一个变量 "),a("code",[t._v("@theme-color")]),t._v(" ，如果有主题色修改的需求，更改它即可。")]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主题色")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@theme-color            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #2c61b4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主题色")]),t._v("\n\n")])])]),a("p",[t._v("其他\n更改完成后，在Lin UI下的根目录里打开终端执行如下所示命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("p",[t._v("根目录下的 "),a("code",[t._v("dist")]),t._v(" 文件夹即是编译后的自定义组件。")]),t._v(" "),a("h3",{attrs:{id:"按需加载组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按需加载组件"}},[t._v("#")]),t._v(" 按需加载组件")]),t._v(" "),a("blockquote",[a("p",[t._v("按需加载组件需要您配置config文件下的component.json文件")])]),t._v(" "),a("p",[t._v("例如只需要 "),a("code",[t._v("button")]),t._v(" 和 "),a("code",[t._v("loading")]),t._v(" 两个组件，在"),a("code",[t._v("component.json")]),t._v("填入需要的组件名，如下所示代码：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"components"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"loading"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("配置完成后，在 "),a("code",[t._v("Lin UI")]),t._v(" 下的根目录里打开终端执行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("p",[t._v("此时dist文件夹下面会生成button和loading两个组件及其所依赖的组件。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── dist\n│   └── button.                             // button组件\n│    ├── index.wxml                         // 组件wxml文件\n│    ├── index.wxss                         // 组件wxss文件\n│    ├── index.json                         // 组件json文件\n│    └── index.js                           // 组件js文件\n│   └── loading                             // loading组件\n")])])]),a("p",[t._v("根目录下的 "),a("code",[t._v("dist")]),t._v(" 文件即是编译后的自定义组件，使用时将他拷贝到自己的项目里即可。")]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=e.exports}}]);