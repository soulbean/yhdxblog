(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{697:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、dom-api-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、dom-api-介绍"}},[t._v("#")]),t._v(" 一、DOM API 介绍")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("文档对象模型")]),t._v("：用来描述文档，特指 "),a("code",[t._v("HTML 文档")]),t._v("，同时它又是一个"),a("code",[t._v("对象模型")]),t._v("，使用对象这样的概念来描述 "),a("code",[t._v("HTML 文档")]),t._v("。")])]),t._v(" "),a("p",[t._v("DOM API 大致包含 4 个部分")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("节点")]),t._v("：DOM 树形结构中的节点相关 API。")]),t._v(" "),a("li",[a("code",[t._v("事件")]),t._v("：触发和监听事件相关 API。")]),t._v(" "),a("li",[a("code",[t._v("Range")]),t._v("：操作文字范围相关 API。")]),t._v(" "),a("li",[a("code",[t._v("遍历")]),t._v("：遍历 DOM 需要的 API。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("HTML 文档")]),t._v("是一个由标签嵌套而成的树形结构，因此，"),a("code",[t._v("DOM")]),t._v(" 也是使用树形的对象模型来描述一个 "),a("code",[t._v("HTML 文档")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"二、节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、节点"}},[t._v("#")]),t._v(" 二、节点")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("DOM")]),t._v(" 的树形结构所有的节点有统一的接口 "),a("code",[t._v("Node")]),t._v("。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/6e/f6/6e278e450d8cc7122da3616fd18b9cf6.png",alt:"Node类型"}})]),t._v(" "),a("p",[t._v("节点的html写法")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("Element: "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tagname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tagname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nText: text\nComment: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- comments --\x3e")]),t._v("\nDocumentType: "),a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("Doctype")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nProcessingInstruction: "),a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v("<?a 1?>")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"三、node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、node"}},[t._v("#")]),t._v(" 三、Node")]),t._v(" "),a("blockquote",[a("p",[t._v("Node 是 DOM 树继承关系的根节点。")])]),t._v(" "),a("p",[t._v("1、Node 提供了一组属性，来表示它在 DOM 树中的关系")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("parentNode")])]),t._v(" "),a("li",[a("code",[t._v("childNodes")])]),t._v(" "),a("li",[a("code",[t._v("firstChild")])]),t._v(" "),a("li",[a("code",[t._v("lastChild")])]),t._v(" "),a("li",[a("code",[t._v("nextSibling")])]),t._v(" "),a("li",[a("code",[t._v("previousSibling")])])]),t._v(" "),a("p",[t._v("2、Node 中也提供了操作 DOM 树的 API")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("appendChild")])]),t._v(" "),a("li",[a("code",[t._v("insertBefore")])]),t._v(" "),a("li",[a("code",[t._v("removeChild")])]),t._v(" "),a("li",[a("code",[t._v("replaceChild")])])]),t._v(" "),a("p",[t._v("3、Node 还提供了一些高级 API")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("compareDocumentPosition")]),t._v("：是一个用于比较两个节点中关系的函数。")]),t._v(" "),a("li",[a("code",[t._v("contains")]),t._v("：检查一个节点是否包含另一个节点的函数。")]),t._v(" "),a("li",[a("code",[t._v("isEqualNode")]),t._v("：检查两个节点是否完全相同。")]),t._v(" "),a("li",[a("code",[t._v("isSameNode")]),t._v("：检查两个节点是否是同一个节点。")]),t._v(" "),a("li",[a("code",[t._v("cloneNode")]),t._v("：复制一个节点，如果传入参数 true，则会连同子元素做深拷贝。")])]),t._v(" "),a("p",[t._v("4、DOM 标准规定了节点必须从文档的 "),a("code",[t._v("create")]),t._v(" 方法创建出来")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("createElement")])]),t._v(" "),a("li",[a("code",[t._v("createTextNode")])]),t._v(" "),a("li",[a("code",[t._v("createCDATASection")])]),t._v(" "),a("li",[a("code",[t._v("createComment")])]),t._v(" "),a("li",[a("code",[t._v("createProcessingInstruction")])]),t._v(" "),a("li",[a("code",[t._v("createDocumentFragment")])]),t._v(" "),a("li",[a("code",[t._v("createDocumentType")])])]),t._v(" "),a("h2",{attrs:{id:"四、element-与-attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、element-与-attribute"}},[t._v("#")]),t._v(" 四、Element 与 Attribute")]),t._v(" "),a("blockquote",[a("p",[t._v("元素对应了 HTML 中的标签，它既有子节点，又有属性。")])]),t._v(" "),a("p",[t._v("1、把元素的 "),a("code",[t._v("Attribute")]),t._v(" 当作字符串来看，有以下的 API")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("getAttribute")])]),t._v(" "),a("li",[a("code",[t._v("setAttribute")])]),t._v(" "),a("li",[a("code",[t._v("removeAttribute")])]),t._v(" "),a("li",[a("code",[t._v("hasAttribute")])])]),t._v(" "),a("p",[t._v("2、把 "),a("code",[t._v("Attribute")]),t._v(" 当作节点")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("getAttributeNode")])]),t._v(" "),a("li",[a("code",[t._v("setAttributeNode")])])]),t._v(" "),a("h2",{attrs:{id:"五、查找元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、查找元素"}},[t._v("#")]),t._v(" 五、查找元素")]),t._v(" "),a("p",[t._v("1、document 节点提供了查找元素的能力")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("querySelector")])]),t._v(" "),a("li",[a("code",[t._v("querySelectorAll")])]),t._v(" "),a("li",[a("code",[t._v("getElementById")])]),t._v(" "),a("li",[a("code",[t._v("getElementsByName")])]),t._v(" "),a("li",[a("code",[t._v("getElementsByTagName")])]),t._v(" "),a("li",[a("code",[t._v("getElementsByClassName")])])]),t._v(" "),a("p",[t._v("2、"),a("code",[t._v("getElementById、getElementsByName、getElementsByTagName、getElementsByClassName")]),t._v("，这几个 API 的性能高于 "),a("code",[t._v("querySelector")]),t._v("。")]),t._v(" "),a("p",[t._v("3、"),a("code",[t._v("getElementsByName、getElementsByTagName、getElementsByClassName")]),t._v(" 获取的集合并非数组，而是一个能够动态更新的集合。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cxk "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kaimo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cxk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" kaimo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nkaimo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kaimo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kaimo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cxk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("浏览器内部是有高速的索引机制，来动态更新这样的集合的。")]),t._v(" "),a("h2",{attrs:{id:"六、遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、遍历"}},[t._v("#")]),t._v(" 六、遍历")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("DOM API")]),t._v(" 中还提供了 "),a("code",[t._v("NodeIterator 和 TreeWalker")]),t._v(" 来遍历树。并且它们提供了过滤功能，还可以把属性节点也包含在遍历之内。")])]),t._v(" "),a("h3",{attrs:{id:"_6-1、nodeiterator-的基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1、nodeiterator-的基本用法"}},[t._v("#")]),t._v(" 6.1、"),a("code",[t._v("NodeIterator")]),t._v(" 的基本用法")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iterator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createNodeIterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NodeFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHOW_TEXT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" NodeFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHOW_COMMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"_6-2、treewalker-的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2、treewalker-的用法"}},[t._v("#")]),t._v(" 6.2、"),a("code",[t._v("TreeWalker")]),t._v(" 的用法")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" walker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTreeWalker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NodeFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHOW_ELEMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" walker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextSibling")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("建议需要遍历 DOM 的时候，直接使用递归和 Node 的属性。")]),t._v(" "),a("h2",{attrs:{id:"七、range"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、range"}},[t._v("#")]),t._v(" 七、Range")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Range API")]),t._v(" 表示一个 HTML 上的范围，这个范围是以文字为最小单位的。")])]),t._v(" "),a("p",[t._v("1、"),a("strong",[t._v("注意")]),t._v("："),a("code",[t._v("Range API")]),t._v(" 比 "),a("code",[t._v("节点 API")]),t._v(" 更精确操作 "),a("code",[t._v("DOM 树")]),t._v("，并且性能更高，但是使用起来比较麻烦，在实际项目中，并不常用，只有做底层框架和富文本编辑对它有强需求。")]),t._v(" "),a("p",[t._v("2、创建 "),a("code",[t._v("Range")]),t._v(" 一般是通过设置它的"),a("code",[t._v("起止")]),t._v("来实现")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" range "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    firstText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    secondText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild\nrange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do not forget the leading space")]),t._v("\nrange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secondText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("3、通过 Range 也可以从用户选中区域创建")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于处理用户选中区域")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" range "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSelection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRangeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("4、更改 Range 选中区段内容由 "),a("code",[t._v("extractContents（取出） 和 insertNode（插入）")]),t._v(" 来实现。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fragment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extractContents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[t._v("#")]),t._v(" 拓展")]),t._v(" "),a("p",[t._v("一些概念可以参考:")]),t._v(" "),a("p",[t._v("1、"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/API/Document"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("2、"),a("a",{attrs:{href:"https://www.runoob.com/jsref/dom-obj-document.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.runoob.com/jsref/dom-obj-document.html"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);