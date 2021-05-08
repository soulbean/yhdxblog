(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{674:function(e,v,t){"use strict";t.r(v);var _=t(6),r=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[e._v("#")]),e._v(" 说明")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://time.geekbang.org/column/intro/189",target:"_blank",rel:"noopener noreferrer"}},[e._v("《透视HTTP协议》"),t("OutboundLink")],1),e._v("是 "),t("code",[e._v("罗剑锋")]),e._v(" （奇虎360技术专家）在极客时间开的一门专栏课，笔者记录一下学习笔记，仅供参考。")])]),e._v(" "),t("h2",{attrs:{id:"域名的形式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名的形式"}},[e._v("#")]),e._v(" 域名的形式")]),e._v(" "),t("p",[e._v("1、域名是一个有层次的结构，是一串用"),t("code",[e._v(".")]),e._v("分隔的多个单词，最右边的被称为"),t("code",[e._v("顶级域名")]),e._v("，然后是"),t("code",[e._v("二级域名")]),e._v("，层级关系向左依次降低。")]),e._v(" "),t("p",[e._v("2、域名本质上还是个名字空间系统，使用多级域名就可以划分出不同的国家、地区、组织、公司、部门，每个域名都是独一无二的，可以作为一种身份的标识。")]),e._v(" "),t("p",[e._v("比如：极客时间的域名"),t("code",[e._v("time.geekbang.org")]),e._v("，"),t("code",[e._v("org")]),e._v("就是顶级域名，"),t("code",[e._v("geekbang")]),e._v("是二级域名，"),t("code",[e._v("time")]),e._v("则是主机名。")]),e._v(" "),t("p",[e._v("3、域名的总长度限制在253个字符以内，而每一级域名长度不能超过63个字符。")]),e._v(" "),t("p",[e._v("4、域名是大小写无关的，但是通常都使用小写的形式。")]),e._v(" "),t("h2",{attrs:{id:"域名的解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名的解析"}},[e._v("#")]),e._v(" 域名的解析")]),e._v(" "),t("blockquote",[t("p",[e._v("就像 "),t("code",[e._v("IP 地址")]),e._v("必须转换成 "),t("code",[e._v("MAC 地址")]),e._v("才能访问主机一样，"),t("code",[e._v("域名")]),e._v("也必须要转换成 "),t("code",[e._v("IP 地址")]),e._v("，这个过程就是"),t("code",[e._v("域名解析")]),e._v("。")])]),e._v(" "),t("p",[e._v("DNS 架构图：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/e5/ac/e51df3245609880641043af65bba94ac.png",alt:"DNS 架构"}})]),e._v(" "),t("h3",{attrs:{id:"dns-的核心系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-的核心系统"}},[e._v("#")]),e._v(" DNS 的核心系统")]),e._v(" "),t("blockquote",[t("p",[e._v("DNS 的核心系统：是一个三层的树状、分布式服务，基本对应域名的结构如下：")])]),e._v(" "),t("p",[t("strong",[e._v("1、根域名服务器（Root DNS Server）")]),e._v("：")]),e._v(" "),t("blockquote",[t("p",[e._v("管理顶级域名服务器，返回"),t("code",[e._v("com、net、cn")]),e._v("等顶级域名服务器的 IP 地址。")])]),e._v(" "),t("p",[t("strong",[e._v("2、顶级域名服务器（Top-level DNS Server）")]),e._v("：")]),e._v(" "),t("blockquote",[t("p",[e._v("管理各自域名下的权威域名服务器，比如 com 顶级域名服务器可以返回 apple.com 域名服务器的 IP 地址。")])]),e._v(" "),t("p",[t("strong",[e._v("3、权威域名服务器（Authoritative DNS Server）")]),e._v("：")]),e._v(" "),t("blockquote",[t("p",[e._v("管理自己域名下主机的 IP 地址，比如 apple.com 权威域名服务器可以返回 www.apple.com 的 IP 地址。")])]),e._v(" "),t("h3",{attrs:{id:"两种方法减压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两种方法减压"}},[e._v("#")]),e._v(" 两种方法减压")]),e._v(" "),t("p",[t("strong",[e._v("1、缓存")]),e._v("：")]),e._v(" "),t("p",[e._v("1）、许多大公司、网络运行商都会建立自己的 DNS 服务器，作为用户 DNS 查询的代理，代替用户访问核心 DNS 系统。")]),e._v(" "),t("p",[e._v("2）、这些“野生”服务器被称为"),t("code",[e._v("非权威域名服务器")]),e._v("。可以缓存之前的查询结果，如果已经有了记录，就无需再向根服务器发起查询，直接返回对应的 IP 地址。")]),e._v(" "),t("p",[e._v("比较知名的DNS有：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://baike.baidu.com/item/Google",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google"),t("OutboundLink")],1),e._v("：8.8.8.8")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BE%AE%E8%BD%AF?fromtitle=microsoft&fromid=125917",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft"),t("OutboundLink")],1),e._v("：4.2.2.1")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://baike.baidu.com/item/Cloudflare/17359757?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudFlare"),t("OutboundLink")],1),e._v("：1.1.1.1")])]),e._v(" "),t("p",[t("strong",[e._v("2、hosts文件")]),e._v("：")]),e._v(" "),t("p",[e._v("操作系统里也会对 DNS 解析结果做缓存，它里面有一个特殊的"),t("code",[e._v("主机映射")]),e._v("文件，通常是一个可编辑的文本：")]),e._v(" "),t("ul",[t("li",[e._v("在 Linux 里是"),t("code",[e._v("/etc/hosts")])]),e._v(" "),t("li",[e._v("在 Windows 里是"),t("code",[e._v("C:\\WINDOWS\\system32\\drivers\\etc\\hosts")])])]),e._v(" "),t("p",[e._v("如果操作系统在缓存里找不到 DNS 记录，就会找这个文件。")]),e._v(" "),t("h3",{attrs:{id:"dns解析的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns解析的过程"}},[e._v("#")]),e._v(" DNS解析的过程")]),e._v(" "),t("p",[e._v("浏览器DNS缓存--\x3e操作系统缓存--\x3eHosts文件--\x3e非权威域名服务器（缓存DNS服务器，比如我们每家每户上网设置的DNS服务器）--\x3e根域名服务器--\x3e顶级域名服务器--\x3e权威域名服务器（域名注册商的DNS服务器）。")]),e._v(" "),t("p",[e._v("DNS解析流程图（需要博客支持"),t("a",{attrs:{href:"https://github.com/knsv/mermaid",target:"_blank",rel:"noopener noreferrer"}},[e._v("mermaid"),t("OutboundLink")],1),e._v("，才能解析）：")]),e._v(" "),t("div",{staticClass:"language-mermaid line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("graph TD\n    浏览器DNS缓存 --\x3e 操作系统缓存\n    操作系统缓存 --\x3e Hosts文件\n    Hosts文件 --\x3e 非权威域名服务器\n    非权威域名服务器 --\x3e 根域名服务器\n    根域名服务器 --\x3e 顶级域名服务器\n    顶级域名服务器 --\x3e 权威域名服务器\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h2",{attrs:{id:"域名的-新玩法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名的-新玩法"}},[e._v("#")]),e._v(" 域名的“新玩法”")]),e._v(" "),t("p",[t("strong",[e._v("1、重定向")]),e._v("：")]),e._v(" "),t("p",[e._v("常用于服务器临时维护，DNS 修改内部的 IP 地址映射关系，保证业务服务正常运行。")]),e._v(" "),t("p",[t("strong",[e._v("2、名字空间")]),e._v("：")]),e._v(" "),t("p",[e._v("使用开源软件搭建一个内部使用的DNS，作为名字服务器。这样我们开发的各种内部服务就都用域名来标记，发起网络通信时就不必在使用写死的 IP 地址。")]),e._v(" "),t("p",[t("strong",[e._v("3、负载均衡")]),e._v("：")]),e._v(" "),t("p",[e._v("方式1：因为域名解析可以返回多个 IP 地址，所以一个域名可以对应多台主机，客户端收到多个 IP 地址后，就可以自己使用轮询算法依次向服务器发起请求，实现负载均衡。")]),e._v(" "),t("p",[e._v("方式2：域名解析可以配置内部的策略，返回离客户端最近的主机，或者返回当前服务质量最好的主机，这样在 DNS 端把请求分发到不同的服务器，实现负载均衡。")]),e._v(" "),t("p",[t("strong",[e._v("4、恶意玩法")]),e._v("：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("域名屏蔽")]),e._v("：对域名直接不解析，返回错误，让你无法拿到 IP 地址，也就无法访问网站")]),e._v(" "),t("li",[t("code",[e._v("域名劫持")]),e._v("：也叫"),t("code",[e._v("域名污染")]),e._v("，你要访问 A 网站，但 DNS 给了你 B 网站。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);