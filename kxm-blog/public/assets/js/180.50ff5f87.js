(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{739:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[s._v("其实实现这个预览代码量很少，核心代码就一行，接下来我介绍一下这个实现过程")]),s._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("p",[s._v("你首先得准备一个 pdf 插件包，比如：我这边的项目包里的 src 文件夹的 static 文件夹下面就有一个 pdf 的插件包，里面包含 build 以及 web 两个文件夹。")]),s._v(" "),a("p",[s._v("自己去 "),a("a",{attrs:{href:"http://mozilla.github.io/pdf.js/getting_started/#download",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://mozilla.github.io/pdf.js/getting_started/#download"),a("OutboundLink")],1),s._v(" 下载一个稳定版本的就行，目录大致如下")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("├── build/\n│   ├── pdf.js                             - display layer\n│   ├── pdf.js.map                         - display layer's source map\n│   ├── pdf.worker.js                      - core layer\n│   └── pdf.worker.js.map                  - core layer's source map\n├── web/\n│   ├── cmaps/                             - character maps (required by core)\n│   ├── compressed.tracemonkey-pldi-09.pdf - PDF file for testing purposes\n│   ├── debugger.js                        - helpful debugging features\n│   ├── images/                            - images for the viewer and annotation icons\n│   ├── locale/                            - translation files\n│   ├── viewer.css                         - viewer style sheet\n│   ├── viewer.html                        - viewer layout\n│   ├── viewer.js                          - viewer layer\n│   └── viewer.js.map                      - viewer layer's source map\n└── LICENSE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200910203420885.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"核心代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心代码实现"}},[s._v("#")]),s._v(" 核心代码实现")]),s._v(" "),a("p",[s._v("1、我们在上面的基础上 用vscode 的 live server 启动一个服务，打开浏览器访问 "),a("code",[s._v("viewer.html")]),s._v(" 文件")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("http://127.0.0.1:5500/apprcontrolweb/src/static/pdfjs/web/viewer.html")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200910203546869.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("页面预览的 pdf 文件正是 "),a("code",[s._v("compressed.tracemonkey-pldi-09.pdf")])]),s._v(" "),a("p",[s._v("我们打开 viewer.js，大概在 "),a("code",[s._v("4242")]),s._v(" 行的样子，有个默认的配置项")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020091020362227.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("通过这个 defaultUrl 参数，我们可以快速找到 1818 行")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200910203637544.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("从而确定链接的参数 file 参数就是我们需要的 pdf 文件路径参数")]),s._v(" "),a("p",[s._v("2、通过上面的分析基本确定写法")]),s._v(" "),a("p",[s._v("比如：我这边的写法就是下面的样子，这个就是预览的核心代码")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("iframe")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("`../../..${baseUrl}static/pdfjs/web/viewer.html?file=${encodeURIComponent(previewUrl)}`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("iframe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这里有几个地方解释一下")]),s._v(" "),a("p",[s._v("第一个："),a("code",[s._v("../../..${baseUrl}")])]),s._v(" "),a("p",[s._v("这里的 "),a("code",[s._v("../")]),s._v(" 是跟你写 iframe 标签的文件位置决定的，baseUrl 跟你 vue 打包有关，就是 "),a("code",[s._v("vue.config.js")]),s._v(" 配置的 publicPath（规定服务器开始解析的目录）有关。")]),s._v(" "),a("p",[s._v("比如我的就可以直接写成 "),a("code",[s._v("../../../ApprControlWeb/static/pdfjs/web/viewer.html?file=${encodeURIComponent(previewUrl)}")]),s._v("，因为我规定的解析的目录不管生产还是开发都是 "),a("code",[s._v("ApprControlWeb")]),s._v("，如果你那边生产的时候才配置解析的目录 "),a("code",[s._v("ApprControlWeb")]),s._v("，那这个 baseUrl 就需要你根据开发环境参数去配置了")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    baseUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/ApprControlWeb/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("第二个："),a("code",[s._v("encodeURIComponent(previewUrl)")])]),s._v(" "),a("p",[s._v("encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。")]),s._v(" "),a("p",[s._v("至于里面的 previewUrl 这个参数，就是后端的下载 pdf 的 api")]),s._v(" "),a("p",[s._v("看下我这边的效果如下：")]),s._v(" "),a("p",[s._v("大致链接：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200910203710530.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("pdf 预览效果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200910203748913.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("3、关于打包问题，我们访问的是 ApprControlWeb/static 说明我们打包的时候需要将 static\n文件打包进入 ApprControlWeb 包里，不然就没有这个资源可以访问")]),s._v(" "),a("p",[s._v("这个功能的实现需要 "),a("a",{attrs:{href:"https://www.webpackjs.com/plugins/copy-webpack-plugin/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("copy-webpack-plugin")]),a("OutboundLink")],1),s._v(" 插件处理，这里建议跟我的版本一样，因为不同版本可以写法不一样")]),s._v(" "),a("blockquote",[a("p",[s._v("npm i copy-webpack-plugin@^5.1.0 -D")])]),s._v(" "),a("p",[s._v("安装好依赖之后")]),s._v(" "),a("p",[s._v("我们需要在 vue.config.js 文件里面配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CopyWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'copy-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将单个文件或整个目录复制到构建目录。")]),s._v("\n        config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CopyWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/static'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            to"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'static'")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("code",[s._v("npm run build")]),s._v(" 之后你会发现，static 打包到 ApprControlWeb 包里了")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200910203804369.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"方法二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[s._v("#")]),s._v(" 方法二")]),s._v(" "),a("p",[s._v("如果以上的还是有问题，比如访问静态资源跳转首页，不妨看看第二种做法，更简单一点，我目前就是采用这种的，自己用 nginx 部署项目测试没问题")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("iframe")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("`${baseUrl}/static/pdfjs/web/viewer.html?file=${encodeURIComponent(previewUrl)}`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("iframe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        baseUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'production'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/ApprControlWeb'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 基础路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("不同之处就是 pdfjs 放置的位置不同，直接将下载的包放到 public 目录下就行")]),s._v(" "),a("p",[s._v("如图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200922201657604.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("以上就是我的总结，希望对你有所帮助，如有错误欢迎指出")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mozilla/pdf.js/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【pdfjs资源链接-https://github.com/mozilla/pdf.js/】"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);