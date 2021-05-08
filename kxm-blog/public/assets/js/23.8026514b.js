(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{546:function(_,v,o){_.exports=o.p+"assets/img/1.3.influences_on_go.009aae84.jpg"},829:function(_,v,o){"use strict";o.r(v);var t=o(6),a=Object(t.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"_1-2-1-影响-go-语言发展的早期编程语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-影响-go-语言发展的早期编程语言"}},[_._v("#")]),_._v(" 1.2.1 影响 Go 语言发展的早期编程语言")]),_._v(" "),t("p",[_._v("正如 “21 世纪的 C 语言” 这句话所说，Go 语言并不是凭空而造的，而是和 C++、Java 和 C# 一样属于 C 系。不仅如此，设计者们还汲取了其它编程语言的精粹部分融入到 Go 语言当中。")]),_._v(" "),t("p",[_._v("在声明和包的设计方面，Go 语言受到 Pascal、Modula 和 Oberon 系语言的影响；在并发原理的设计上，Go 语言从同样受到 Tony Hoare 的 CSP（通信序列进程 "),t("em",[_._v("Communicating Sequential Processes")]),_._v("）理论影响的 Limbo 和 Newsqueak 的实践中借鉴了一些经验，并使用了和 Erlang 类似的机制。")]),_._v(" "),t("p",[_._v("这是一门完全开源的编程语言，因为它使用 BSD 授权许可，所以任何人都可以进行商业软件的开发而不需要支付任何费用。")]),_._v(" "),t("p",[_._v("尽管为了能够让目前主流的开发者们能够对 Go 语言中的类 C 语言的语法感到非常亲切而易于转型，但是它在极大程度上简化了这些语法，使得它们比 C/C++ 的语法更加简洁和干净。同时，Go 语言也拥有一些动态语言的特性，这使得使用 Python 和 Ruby 的开发者们在使用 Go 语言的时候感觉非常容易上手。")]),_._v(" "),t("p",[_._v("下图展示了一些其它编程语言对 Go 语言的影响：")]),_._v(" "),t("p",[t("img",{attrs:{src:o(546),alt:""}})]),_._v(" "),t("p",[_._v("图 1.3 其它编程语言对 Go 语言的影响")]),_._v(" "),t("h2",{attrs:{id:"_1-2-2-为什么要创造一门编程语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-为什么要创造一门编程语言"}},[_._v("#")]),_._v(" 1.2.2 为什么要创造一门编程语言")]),_._v(" "),t("ul",[t("li",[_._v("C/C++ 的发展速度无法跟上计算机发展的脚步，十多年来也没有出现一门与时代相符的主流系统编程语言，因此人们需要一门新的系统编程语言来弥补这个空缺，尤其是在计算机信息时代。")]),_._v(" "),t("li",[_._v("相比计算机性能的提升，软件开发领域不被认为发展得足够快或者比硬件发展得更加成功（有许多项目均以失败告终），同时应用程序的体积始终在不断地扩大，这就迫切地需要一门具备更高层次概念的低级语言来突破现状。")]),_._v(" "),t("li",[_._v("在 Go 语言出现之前，开发者们总是面临非常艰难的抉择，究竟是使用执行速度快但是编译速度并不理想的语言（如：C++），还是使用编译速度较快但执行效率不佳的语言（如：.NET、Java），或者说开发难度较低但执行速度一般的动态语言呢？显然，Go 语言在这 3 个条件之间做到了最佳的平衡：快速编译，高效执行，易于开发。")])]),_._v(" "),t("h2",{attrs:{id:"_1-2-3-go-语言的发展目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-go-语言的发展目标"}},[_._v("#")]),_._v(" 1.2.3 Go 语言的发展目标")]),_._v(" "),t("p",[_._v("Go 语言的主要目标是将静态语言的安全性和高效性与动态语言的易开发性进行有机结合，达到完美平衡，从而使编程变得更加有乐趣，而不是在艰难抉择中痛苦前行。")]),_._v(" "),t("p",[_._v("因此，Go 语言是一门类型安全和内存安全的编程语言。虽然 Go 语言中仍有指针的存在，但并不允许进行指针运算。")]),_._v(" "),t("p",[_._v("Go 语言的另一个目标是对于网络通信、并发和并行编程的极佳支持，从而更好地利用大量的分布式和多核的计算机，这一点对于谷歌内部的使用来说就非常重要了。设计者通过 goroutine 这种轻量级线程的概念来实现这个目标，然后通过 channel 来实现各个 goroutine 之间的通信。他们实现了分段栈增长和 goroutine 在线程基础上多路复用技术的自动化。")]),_._v(" "),t("p",[_._v("这个特性显然是 Go 语言最强有力的部分，不仅支持了日益重要的多核与多处理器计算机，也弥补了现存编程语言在这方面所存在的不足。")]),_._v(" "),t("p",[_._v("Go 语言中另一个非常重要的特性就是它的构建速度（编译和链接到机器代码的速度），一般情况下构建一个程序的时间只需要数百毫秒到几秒。作为大量使用 C++ 来构建基础设施的谷歌来说，无疑从根本上摆脱了 C++ 在构建速度上非常不理想的噩梦。这不仅极大地提升了开发者的生产力，同时也使得软件开发过程中的代码测试环节更加紧凑，而不必浪费大量的时间在等待程序的构建上。")]),_._v(" "),t("p",[_._v("依赖管理是现今软件开发的一个重要组成部分，但是 C 语言中“头文件”的概念却导致越来越多因为依赖关系而使得构建一个大型的项目需要长达几个小时的时间。人们越来越需要一门具有严格的、简洁的依赖关系分析系统从而能够快速编译的编程语言。这正是 Go 语言采用包模型的根本原因，这个模型通过严格的依赖关系检查机制来加快程序构建的速度，提供了非常好的可量测性。")]),_._v(" "),t("p",[_._v("整个 Go 语言标准库的编译时间一般都在 20 秒以内，其它的常规项目也只需要半秒钟的时间来完成编译工作。这种闪电般的编译速度甚至比编译 C 语言或者 Fortran 更加快，使得编译这一环节不再成为在软件开发中困扰开发人员的问题。在这之前，动态语言将快速编译作为自身的一大亮点，像 C++ 那样的静态语言一般都有非常漫长的编译和链接工作。而同样作为静态语言的 Go 语言，通过自身优良的构建机制，成功地去除了这个弊端，使得程序的构建过程变得微不足道，拥有了像脚本语言和动态语言那样的高效开发的能力。")]),_._v(" "),t("p",[_._v("另外，Go 语言在执行速度方面也可以与 C/C++ 相提并论。")]),_._v(" "),t("p",[_._v("由于内存问题（通常称为内存泄漏）长期以来一直伴随着 C++ 的开发者们，Go 语言的设计者们认为内存管理不应该是开发人员所需要考虑的问题。因此尽管 Go 语言像其它静态语言一样执行本地代码，但它依旧运行在某种意义上的虚拟机，以此来实现高效快速的垃圾回收（使用了一个简单的标记-清除算法）。")]),_._v(" "),t("p",[_._v("尽管垃圾回收并不容易实现，但考虑这将是未来并发应用程序发展的一个重要组成部分，Go 语言的设计者们还是完成了这项艰难的任务。")]),_._v(" "),t("p",[_._v("Go 语言还能够在运行时进行反射相关的操作。")]),_._v(" "),t("p",[_._v("使用 "),t("code",[_._v("go install")]),_._v(" 能够很轻松地对第三方包进行部署。")]),_._v(" "),t("p",[_._v("此外，Go 语言还支持调用由 C 语言编写的海量库文件（第 3.9 节），从而能够将过去开发的软件进行快速迁移。")]),_._v(" "),t("h2",{attrs:{id:"_1-2-4-指导设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-指导设计原则"}},[_._v("#")]),_._v(" 1.2.4 指导设计原则")]),_._v(" "),t("p",[_._v("Go语言通过减少关键字的数量（25 个）来简化编码过程中的混乱和复杂度。干净、整齐和简洁的语法也能够提高程序的编译速度，因为这些关键字在编译过程中少到甚至不需要符号表来协助解析。")]),_._v(" "),t("p",[_._v("这些方面的工作都是为了减少编码的工作量，甚至可以与 Java 的简化程度相比较。")]),_._v(" "),t("p",[_._v("Go 语言有一种极简抽象艺术家的感觉，因为它只提供了一到两种方法来解决某个问题，这使得开发者们的代码都非常容易阅读和理解。众所周知，代码的可读性是软件工程里最重要的一部分（ "),t("strong",[_._v("译者注：代码是写给人看的，不是写给机器看的")]),_._v(" ）。")]),_._v(" "),t("p",[_._v("这些设计理念没有建立其它概念之上，所以并不会因为牵扯到一些概念而将某个概念复杂化，他们之间是相互独立的。")]),_._v(" "),t("p",[_._v("Go 语言有一套完整的编码规范，你可以在 "),t("a",{attrs:{href:"http://golang.org/doc/go_spec.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Go 语言编码规范"),t("OutboundLink")],1),_._v(" 页面进行查看。")]),_._v(" "),t("p",[_._v("它不像 Ruby 那样通过实现过程来定义编码规范。作为一门具有明确编码规范的语言，它要求可以采用不同的编译器如 gc 和 gccgo（第 2.1 节）进行编译工作，这对语言本身拥有更好的编码规范起到很大帮助。")]),_._v(" "),t("p",[t("a",{attrs:{href:"http://en.wikipedia.org/wiki/LALR_parser",target:"_blank",rel:"noopener noreferrer"}},[_._v("LALR"),t("OutboundLink")],1),_._v(" 是 Go 语言的语法标准，你也可以在 "),t("a",{attrs:{href:"https://github.com/golang/go/blob/master/src%2Fcmd%2Finternal%2Fgc%2Fgo.y",target:"_blank",rel:"noopener noreferrer"}},[t("code",[_._v("src/cmd/internal/gc/go.y")]),t("OutboundLink")],1),_._v(" 中查看到，这种语法标准在编译时不需要符号表来协助解析。")]),_._v(" "),t("h2",{attrs:{id:"_1-2-5-语言的特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-5-语言的特性"}},[_._v("#")]),_._v(" 1.2.5 语言的特性")]),_._v(" "),t("p",[_._v("Go 语言从本质上（程序和结构方面）来实现并发编程。")]),_._v(" "),t("p",[_._v("因为 Go 语言没有类和继承的概念，所以它和 Java 或 C++ 看起来并不相同。但是它通过接口（interface）的概念来实现多态性。Go 语言有一个清晰易懂的轻量级类型系统，在类型之间也没有层级之说。因此可以说这是一门混合型的语言。")]),_._v(" "),t("p",[_._v("在传统的面向对象语言中，使用面向对象编程技术显得非常臃肿，它们总是通过复杂的模式来构建庞大的类型层级，这违背了编程语言应该提升生产力的宗旨。")]),_._v(" "),t("p",[_._v("函数是 Go 语言中的基本构件，它们的使用方法非常灵活。在第六章，我们会看到 Go 语言在函数式编程方面的基本概念。")]),_._v(" "),t("p",[_._v("Go 语言使用静态类型，所以它是类型安全的一门语言，加上通过构建到本地代码，程序的执行速度也非常快。")]),_._v(" "),t("p",[_._v("作为强类型语言，隐式的类型转换是不被允许的，记住一条原则：让所有的东西都是显式的。")]),_._v(" "),t("p",[_._v("Go 语言其实也有一些动态语言的特性（通过关键字 "),t("code",[_._v("var")]),_._v("），所以它对那些逃离 Java 和 .Net 世界而使用 Python、Ruby、PHP 和 JavaScript 的开发者们也具有很大的吸引力。")]),_._v(" "),t("p",[_._v("Go 语言支持交叉编译，比如说你可以在运行 Linux 系统的计算机上开发运行 Windows 下运行的应用程序。这是第一门完全支持 UTF-8 的编程语言，这不仅体现在它可以处理使用 UTF-8 编码的字符串，就连它的源码文件格式都是使用的 UTF-8 编码。Go 语言做到了真正的国际化！")]),_._v(" "),t("h2",{attrs:{id:"_1-2-6-语言的用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-6-语言的用途"}},[_._v("#")]),_._v(" 1.2.6 语言的用途")]),_._v(" "),t("p",[_._v("Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。")]),_._v(" "),t("p",[_._v("Go 语言一个非常好的目标就是实现所谓的复杂事件处理（"),t("a",{attrs:{href:"http://en.wikipedia.org/wiki/Complex_event_processing",target:"_blank",rel:"noopener noreferrer"}},[_._v("CEP"),t("OutboundLink")],1),_._v("），这项技术要求海量并行支持，高度的抽象化和高性能。当我们进入到物联网时代，CEP 必然会成为人们关注的焦点。")]),_._v(" "),t("p",[_._v("但是 Go 语言同时也是一门可以用于实现一般目标的语言，例如对于文本的处理，前端展现，甚至像使用脚本一样使用它。")]),_._v(" "),t("p",[_._v("值得注意的是，因为垃圾回收和自动内存分配的原因，Go 语言不适合用来开发对实时性要求很高的软件。")]),_._v(" "),t("p",[_._v("越来越多的谷歌内部的大型分布式应用程序都开始使用 Go 语言来开发，例如谷歌地球的一部分代码就是由 Go 语言完成的。")]),_._v(" "),t("p",[_._v("如果你想知道一些其它组织使用Go语言开发的实际应用项目，你可以到 "),t("a",{attrs:{href:"http://go-lang.cat-v.org/organizations-using-go",target:"_blank",rel:"noopener noreferrer"}},[_._v("使用 Go 的组织"),t("OutboundLink")],1),_._v(" 页面进行查看。出于隐私保护的考虑，许多公司的项目都没有展示在这个页面。我们将会在第 21 章讨论到一个使用 Go 语言开发的大型存储区域网络（SAN）案例。")]),_._v(" "),t("p",[_._v("在 Chrome 浏览器中内置了一款 Go 语言的编译器用于本地客户端（NaCl），这很可能会被用于在 Chrome OS 中执行 Go 语言开发的应用程序。")]),_._v(" "),t("p",[_._v("Go 语言可以在 Intel 或 ARM 处理器上运行，因此它也可以在安卓系统下运行，例如 Nexus 系列的产品。")]),_._v(" "),t("p",[_._v("在 Google App Engine 中使用 Go 语言：2011 年 5 月 5 日，官方发布了用于开发运行在 Google App Engine 上的 Web 应用的 Go SDK，在此之前，开发者们只能选择使用 Python 或者 Java。这主要是 David Symonds 和 Nigel Tao 努力的成果。目前最新的稳定版是基于 Go 1.4 的 SDK 1.9.18，于 2015 年 2 月 18 日发布。当前 Go 语言的稳定版本是 Go 1.4.2。")]),_._v(" "),t("h2",{attrs:{id:"_1-2-7-关于特性缺失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-7-关于特性缺失"}},[_._v("#")]),_._v(" 1.2.7 关于特性缺失")]),_._v(" "),t("p",[_._v("许多能够在大多数面向对象语言中使用的特性 Go 语言都没有支持，但其中的一部分可能会在未来被支持。")]),_._v(" "),t("ul",[t("li",[_._v("为了简化设计，不支持函数重载和操作符重载")]),_._v(" "),t("li",[_._v("为了避免在 C/C++ 开发中的一些 Bug 和混乱，不支持隐式转换")]),_._v(" "),t("li",[_._v("Go 语言通过另一种途径实现面向对象设计（第 10-11 章）来放弃类和类型的继承")]),_._v(" "),t("li",[_._v("尽管在接口的使用方面（第 11 章）可以实现类似变体类型的功能，但本身不支持变体类型")]),_._v(" "),t("li",[_._v("不支持动态加载代码")]),_._v(" "),t("li",[_._v("不支持动态链接库")]),_._v(" "),t("li",[_._v("不支持泛型")]),_._v(" "),t("li",[_._v("通过 "),t("code",[_._v("recover")]),_._v(" 和 "),t("code",[_._v("panic")]),_._v(" 来替代异常机制（第 13.2-3 节）")]),_._v(" "),t("li",[_._v("不支持静态变量")])]),_._v(" "),t("p",[_._v("关于 Go 语言开发团队对于这些方面的讨论，你可以通过 "),t("a",{attrs:{href:"http://golang.org/doc/go_faq.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Go 常见问题"),t("OutboundLink")],1),_._v(" 页面查看。")]),_._v(" "),t("h2",{attrs:{id:"_1-2-8-使用-go-语言编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-8-使用-go-语言编程"}},[_._v("#")]),_._v(" 1.2.8 使用 Go 语言编程")]),_._v(" "),t("p",[_._v("如果你有其它语言的编程经历（面向对象编程语言，如：Java、C#、Object-C、Python、Ruby），在你进入到 Go 语言的世界之后，你将会像迷恋你的 X 语言一样无法自拔。Go 语言使用了与其它语言不同的设计模式，所以当你尝试将你的X语言的代码迁移到 Go 语言时，你将会非常失望，所以你需要从头开始，用 Go 的理念来思考。")]),_._v(" "),t("p",[_._v("如果你在至高点使用 Go 的理念来重新审视和分析一个问题，你通常会找到一个适用于 Go 语言的优雅的解决方案。")]),_._v(" "),t("h2",{attrs:{id:"_1-2-9-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-9-小结"}},[_._v("#")]),_._v(" 1.2.9 小结")]),_._v(" "),t("p",[_._v("这里列举一些 Go 语言的必杀技：")]),_._v(" "),t("ul",[t("li",[_._v("简化问题，易于学习")]),_._v(" "),t("li",[_._v("内存管理，简洁语法，易于使用")]),_._v(" "),t("li",[_._v("快速编译，高效开发")]),_._v(" "),t("li",[_._v("高效执行")]),_._v(" "),t("li",[_._v("并发支持，轻松驾驭")]),_._v(" "),t("li",[_._v("静态类型")]),_._v(" "),t("li",[_._v("标准类库，规范统一")]),_._v(" "),t("li",[_._v("易于部署")]),_._v(" "),t("li",[_._v("文档全面")]),_._v(" "),t("li",[_._v("免费开源")])])])}),[],!1,null,null,null);v.default=a.exports}}]);