(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{823:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"进程和线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[s._v("#")]),s._v(" 进程和线程")]),s._v(" "),t("p",[s._v("什么是并行处理：计算机中的并行处理就是同一时刻处理多个任务")]),s._v(" "),t("p",[s._v("线程是不能单独存在的，它是由进程来启动和管理的。")]),s._v(" "),t("h3",{attrs:{id:"进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[s._v("#")]),s._v(" 进程")]),s._v(" "),t("p",[s._v("一个进程就是一个程序的运行实例。")]),s._v(" "),t("blockquote",[t("p",[s._v("启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫"),t("code",[s._v("进程")]),s._v("。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201027183641239.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("线程是依附于进程的，而进程中使用多线程并行处理能提升运算效率。")]),s._v(" "),t("h3",{attrs:{id:"进程和线程之间的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程之间的关系"}},[s._v("#")]),s._v(" 进程和线程之间的关系")]),s._v(" "),t("p",[s._v("1、进程中的任意一线程执行出错，都会导致整个进程的崩溃。")]),s._v(" "),t("p",[s._v("2、线程之间共享进程中的数据。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020102718375610.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("3、当一个进程关闭之后，操作系统会回收进程所占用的内存。")]),s._v(" "),t("p",[s._v("4、进程之间的内容相互隔离。")]),s._v(" "),t("h2",{attrs:{id:"单进程浏览器时代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单进程浏览器时代"}},[s._v("#")]),s._v(" 单进程浏览器时代")]),s._v(" "),t("blockquote",[t("p",[s._v("单进程浏览器是指浏览器的所有功能模块都是运行在同一个进程里。")])]),s._v(" "),t("p",[s._v("单进程浏览器的架构如下图所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201027183853395.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("问题：")]),s._v(" "),t("ul",[t("li",[s._v("不稳定")]),s._v(" "),t("li",[s._v("不流畅")]),s._v(" "),t("li",[s._v("不安全")])]),s._v(" "),t("h2",{attrs:{id:"多进程浏览器时代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多进程浏览器时代"}},[s._v("#")]),s._v(" 多进程浏览器时代")]),s._v(" "),t("h3",{attrs:{id:"早期多进程架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#早期多进程架构"}},[s._v("#")]),s._v(" 早期多进程架构")]),s._v(" "),t("p",[s._v("2008 年 Chrome 发布时的进程架构")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201027183917240.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("进程之间是通过 IPC 机制进行通信")]),s._v(" "),t("p",[s._v("进程是相互隔离：解决不稳定的问题。")]),s._v(" "),t("p",[s._v("JavaScript 也是运行在渲染进程中：即使 JavaScript 阻塞了渲染进程，影响到的也只是当前的渲染页面")]),s._v(" "),t("p",[s._v("安全问题：采用多进程架构的额外好处是可以使用安全沙箱")]),s._v(" "),t("h3",{attrs:{id:"目前多进程架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目前多进程架构"}},[s._v("#")]),s._v(" 目前多进程架构")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201027183935830.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("最新的 Chrome 浏览器包括：1 个浏览器（Browser）主进程、1 个 GPU 进程、1 个网络（NetWork）进程、多个渲染进程和多个插件进程。")]),s._v(" "),t("p",[s._v("1、浏览器进程。")]),s._v(" "),t("blockquote",[t("p",[s._v("主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")])]),s._v(" "),t("p",[s._v("2、渲染进程。")]),s._v(" "),t("blockquote",[t("p",[s._v("核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。")])]),s._v(" "),t("p",[s._v("3、GPU 进程。")]),s._v(" "),t("blockquote",[t("p",[s._v("其实，Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。")])]),s._v(" "),t("p",[s._v("4、网络进程。")]),s._v(" "),t("blockquote",[t("p",[s._v("主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。")])]),s._v(" "),t("p",[s._v("5、插件进程。")]),s._v(" "),t("blockquote",[t("p",[s._v("主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。")])]),s._v(" "),t("p",[s._v("打开 1 个页面至少需要 1 个网络进程、1 个浏览器进程、1 个 GPU 进程以及 1 个渲染进程，共 4 个；如果打开的页面有运行插件的话，还需要再加上 1 个插件进程。")]),s._v(" "),t("p",[s._v("多进程模型带来了一些问题：")]),s._v(" "),t("ul",[t("li",[s._v("更高的资源占用")]),s._v(" "),t("li",[s._v("更复杂的体系架构")])]),s._v(" "),t("h2",{attrs:{id:"未来面向服务的架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#未来面向服务的架构"}},[s._v("#")]),s._v(" 未来面向服务的架构")]),s._v(" "),t("p",[s._v("在 2016 年，Chrome 官方团队使用“面向服务的架构”（Services Oriented Architecture，简称 SOA）的思想设计了新的 Chrome 架构。")]),s._v(" "),t("p",[s._v("下面是 Chrome“面向服务的架构”的进程模型图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201027183957713.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("资源受限的设备上")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201027184017378.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2thaW1vMzEz,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结：")]),s._v(" "),t("p",[s._v("早期浏览器：")]),s._v(" "),t("p",[s._v("不稳定（单独进程）\n不流畅（单独进程）\n不安全（沙箱）")]),s._v(" "),t("p",[s._v("早期多进程架构：")]),s._v(" "),t("p",[s._v("主进程 渲染进程 插件进程")]),s._v(" "),t("p",[s._v("现代多进程架构：")]),s._v(" "),t("p",[s._v("主进程 渲染进程 插件进程 GPU进程 网络进程")]),s._v(" "),t("p",[s._v("未来：")]),s._v(" "),t("p",[s._v("面向服务架构")]),s._v(" "),t("h2",{attrs:{id:"问题解答"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题解答"}},[s._v("#")]),s._v(" 问题解答")]),s._v(" "),t("p",[s._v("1、感觉挺好奇的，单进程浏览器开多个页面，渲染线程也只有一个吗？感觉一个页面开一个线程不是更合理吗？")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("作者回复: 之前回答的有点笼统，下面是我整理过后的回答：\n\n首先这个问题提的很好，我们从IE6开始讲起，IE6时代，浏览器是单进程的，所有页面也都是运行在一个主线程中的，当时IE6就是这样设计，而且此时的IE6是单标签，也就是说一个页面一个窗口。\n\n这时候，国内有很多国产浏览器，都是基于IE6来二次开发的，而IE6原生架构就是所有页面跑在单线程里面的，意味着，所有的页面都共享着同一套JavaScript运行环境，同样，对于存储Cookie也都是在一个线程里面操作的。\n而且这些国产浏览器由于需要，都采用多标签的形式，所以其中的一个标签页面的卡顿都会影响到整个浏览器。\n\n基于卡顿的原因，国内浏览器就开始尝试支持页面多线程，也就是让部分页面运行在单独的线程之中，运行在单独的线程之中，意味着每个线程拥有单独的JavaScript执行环境，和Cookie环境，这时候问题就来了：\n比如A站点页面登陆一个网站，保存了一些Cookie数据到磁盘上，再在当前线程环境中保存部分Session数据，由于Session是不需要保存到硬盘上的，所以Session只会保存在当前的线程环境中。这时候再打开另外一个A站点的页面，假设这个页面在另外一个线程中里面，那么它首先读取硬盘上的Cookie信息，但是，由于Session信息是保存在另外一个线程里面的，无法直接读取，这样就要实现一个Session同步的问题，由于IE并没有源代码，所以实现起来非常空难，国内浏览器花了好长一点时间才解决这个问题的。\n\nSession问题解决了，但是假死的问题依然有，因为进程内使用了一个窗口，这个窗口是依附到浏览器主窗口之上的，所以他们公用一套消息循环机制，消息循环我们后面会详细地讲，这也就意味这一个窗口如果卡死了。也会导致整个浏览器的卡死。\n\n国产浏览器又出了一招，就是把页面做成一个单独的弹窗，如果这个页面卡死了，就把这个弹窗给隐藏掉。\n\n这里还要提一下为什么Chrome中的一个页面假死不会影响到主窗口呢？\n这是因为chrome输出的实际上图片，然后浏览器端把图片贴到自己的窗口上去，在Chrome的渲染进程内，并没有一个渲染窗口，输出的只是图片，如果卡住了，顶多图片不更新了。\n\n国产浏览器这一套技术花了四五年时间，等这套技术差不多成熟时，Chrome发布了 :(\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("2、老师好，我有个疑问，Chrome排版引擎现在是blink，这一点从哪里可以看到呢？我在76版本Chrome的navigator属性值里只看到了AppleWebkit，不理解这是为什么？")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('作者回复: 你说的是UserAgent，又称为UA，UA是浏览器的身份证，通常，在发送HTTP请求时，UA会附带在HTTP的请求头中user-agent字段中，这样服务器就会知道浏览器的基础信息，然后服务器会根据不同的UA返回不同的页面内容，比如手机上返回手机的样式，PC就返回PC的样式。\n\n你也可以在浏览器的控制台中输入：\nnavigator.userAgent\n来查看当前浏览器的UA信息。\n\nFireFox中的打印的信息是：\n"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:68.0) Gecko/20100101 Firefox/68.0"\n\nChrome中打印的信息是：\n"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Mobile Safari/537.36"\n\n安卓系统中的Chrome浏览器：\n"Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Mobile Safari/537.36"\n\n\n我们知道了服务器会根据不同的UA来针性的设计不同页面，所以当出了一款新浏览器时，他如果使用自己独一无二的UA，那么之前的很多服务器还需要针对他来做页面适配，这显然是不可能的，比如Chrome发布时他会在他的UA中使用“Mozilla” ，“AppleWebKit”，等关键字段，用来表示他同时支持Mozilla和AppleWebKit，然后再在最后加上他自己的标示，如Chrome/xxx。\n\n这就解释了为什么你查看的信息中含有WebKit字样。\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("3、请问老师，如果打开了 2个页面，会有几个进程呢？是 1 个网络进程、1 个浏览器进程、1 个 GPU 进程以及 2个渲染进程，共 5个吗？这些进程是可以在浏览器开发者中被实际观察到的吗？")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("作者回复: 通常情况下会是五个，但是有很多其他情况：\n1:如果页面里有iframe的话，iframe也会运行在单独的进程中！\n2:如果页面里有插件，同样插件也需要开启一个单独的进程！\n3:如果你装了扩展的话，扩展也会占用进程\n4:如果2个页面属于同一站点的话，并且从a页面中打开的b页面，那么他们会公用一个渲染进程\n\n这些进程都可以通过chrome的任务管理器来查看。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);