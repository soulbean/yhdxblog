(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{997:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("第 1 个版本的代码 "),a("em",[t._v("goto_v1")]),t._v(" 见 "),a("a",{attrs:{href:"examples/chapter_19/goto_v1"}},[t._v("goto_v1")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_19-3-数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-3-数据结构"}},[t._v("#")]),t._v(" 19.3 数据结构")]),t._v(" "),a("p",[t._v("（本节代码见 "),a("a",{attrs:{href:"examples/chapter_19/goto_v1/store.go"}},[t._v("goto_v1/store.go")]),t._v("。）")]),t._v(" "),a("p",[t._v("当程序运行在生产环境时，会收到很多短网址的请求，同时会有一些将长 URL 转换成短 URL 的请求。我们的程序要以什么样的结构存储这些数据呢？"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/04.第19章：构建一个完整的应用程序/19.2.html"}},[t._v("19.2 节")]),t._v(" 中 (A) 和 (B) 两种 URL 都是字符串，此外，它们相互关联：给定键 (B) 能获取到值 (A)，他们互相"),a("em",[t._v("映射")]),t._v("（map）。要将数据存储在内存中，我们需要这种结构，它们几乎存在于所有的编程语言中，只是名称有所不同，例如“哈希表”或“字典”等。")],1),t._v(" "),a("p",[t._v("Go 语言就有这种内建的映射（map）："),a("code",[t._v("map[string]string")]),t._v("。")]),t._v(" "),a("p",[t._v("键的类型写在 "),a("code",[t._v("[")]),t._v(" 和 "),a("code",[t._v("]")]),t._v(" 之间，紧接着是值的类型。有关映射的所有知识详见 "),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/04.第19章：构建一个完整的应用程序/08.0.html"}},[t._v("8 章")]),t._v("。为特定类型指定一个别名在严谨的程序中非常实用。Go 语言中通过关键字 "),a("code",[t._v("type")]),t._v(" 来定义，因此有定义：")],1),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" URLStore "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("它从短 URL 映射到长 URL，两者都是字符串。")]),t._v(" "),a("p",[t._v("要创建那种类型的变量，并命名为 m，使用：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("URLStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("假设 "),a("em",[t._v("http://goto/a")]),t._v(" 映射到 "),a("em",[t._v("http://google.com/")]),t._v(" ，我们要把它们存储到 m 中，可以用如下语句：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://google.com/"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("（键只是 "),a("em",[t._v("http://goto/")]),t._v(" 的后缀，其前缀总是不变的。）")]),t._v(" "),a("p",[t._v('要获得给定 "a" 对应的长 URL，可以这么写：')]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("此时 "),a("code",[t._v("url")]),t._v(" 的值等于 "),a("code",[t._v("http://google.com/")]),t._v("。")]),t._v(" "),a("p",[t._v("注意，使用了 "),a("code",[t._v(":=")]),t._v(" 就不需要指明 url 的类型为 "),a("code",[t._v("string")]),t._v("，编译器会从右侧的值中推断出来。")]),t._v(" "),a("h2",{attrs:{id:"使程序线程安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使程序线程安全"}},[t._v("#")]),t._v(" 使程序线程安全")]),t._v(" "),a("p",[t._v("这里，变量 "),a("code",[t._v("URLStore")]),t._v(" 是中心化的内存存储。当收到网络流量时，会有很多 "),a("code",[t._v("Redirect")]),t._v(" 服务的请求。这些请求其实只涉及读操作：以给定的短 URL 作为键，返回对应的长 URL 的值。然而，对 "),a("code",[t._v("Add")]),t._v(" 服务的请求则大不相同，它们会更改 "),a("code",[t._v("URLStore")]),t._v("，添加新的键值对。当在瞬间收到大量更新请求时，可能会产生如下问题：添加操作可能被另一个同类请求打断，写入的长 URL 值可能会丢失；另外，读取和更改同时进行，导致可能读到脏数据。代码中的 map 并不保证当开始更新数据时，会彻底阻止另一个更新操作的启动。也就是说，map 不是线程安全的，goto 会并发地为很多请求提供服务。因此必须使 "),a("code",[t._v("URLStore")]),t._v(" 是线程安全的，以便可以从不同的线程访问它。最简单和经典的方法是为其增加一个锁，它是 Go 标准库 "),a("code",[t._v("sync")]),t._v(" 包中的 "),a("code",[t._v("Mutex")]),t._v(" 类型，必须导入到我们的代码中（关于锁详见 "),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/04.第19章：构建一个完整的应用程序/09.3.html"}},[t._v("9.3 节")]),t._v("）。")],1),t._v(" "),a("p",[t._v("现在，我们把 "),a("code",[t._v("URLStore")]),t._v(" 类型的定义更改为一个结构体（就是字段的集合，类似 C 或 Java ，"),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/04.第19章：构建一个完整的应用程序/10.0.html"}},[t._v("10 章")]),t._v(" 介绍了结构体），它含有两个字段："),a("code",[t._v("map")]),t._v(" 和 "),a("code",[t._v("sync")]),t._v(" 包的 "),a("code",[t._v("RWMutex")]),t._v("：")],1),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sync"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" URLStore "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\turls "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// map from short to long URLs")]),t._v("\n\tmu sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RWMutex\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("code",[t._v("RWMutex")]),t._v(" 有两种锁：分别对应读和写。多个客户端可以同时设置读锁，但只有一个客户端可以设置写锁（以排除所有的读锁），有效地串行化变更，使他们按顺序生效。")]),t._v(" "),a("p",[t._v("我们将在 "),a("code",[t._v("Get")]),t._v(" 函数中实现 "),a("code",[t._v("Redirect")]),t._v(" 服务的读请求，在 "),a("code",[t._v("Set")]),t._v(" 函数中实现 "),a("code",[t._v("Add")]),t._v(" 服务的写请求。"),a("code",[t._v("Get")]),t._v(" 函数类似下面这样：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("URLStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\turl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RUnlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" url\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("函数按照键（短 URL）返回对应映射后的 URL。它所处理的变量是指针类型（见 "),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/04.第19章：构建一个完整的应用程序/04.9.html"}},[t._v("4.9 节")]),t._v("），指向 "),a("code",[t._v("URLStore")]),t._v("。但在读取值之前，先用 "),a("code",[t._v("s.mu.RLock()")]),t._v(" 放置一个读锁，这样就不会有更新操作妨碍读取。数据读取后撤销锁定，以便挂起的更新操作可以开始。如果键不存在于 map 中会怎样？会返回字符串的零值（空字符串）。注意点号（"),a("code",[t._v(".")]),t._v("）类似面向对象的语言：在 "),a("code",[t._v("s")]),t._v(" 的 "),a("code",[t._v("mu")]),t._v(" 字段上调用方法 "),a("code",[t._v("RLock()")]),t._v("。")],1),t._v(" "),a("p",[a("code",[t._v("Set")]),t._v(" 函数同时需要 URL 的键值对，且必须放置写锁 "),a("code",[t._v("Lock()")]),t._v(" 来排除同一时刻任何其他更新操作。函数返回布尔值 "),a("code",[t._v("true")]),t._v(" 或 "),a("code",[t._v("false")]),t._v(" 来表示 "),a("code",[t._v("Set")]),t._v(" 操作是否成功：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("URLStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" present "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" present "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("形式 "),a("code",[t._v("_, present := s.urls[key]")]),t._v(" 可以测试 map 中是否已经包含该键，包含则 "),a("code",[t._v("present")]),t._v(" 为 "),a("code",[t._v("true")]),t._v("，否则为 "),a("code",[t._v("false")]),t._v("。这种形式称为“逗号 ok 模式”，在 Go 代码中会频繁出现。如果键已存在，"),a("code",[t._v("Set")]),t._v(" 函数直接返回布尔值 "),a("code",[t._v("false")]),t._v("，map 不会被更新（这样可以保证短 URL 不会重复）。如果键不存在，把它加入 map 中并返回 "),a("code",[t._v("true")]),t._v("。左侧 "),a("code",[t._v("_")]),t._v(" 是一个值的占位符，赋值给 "),a("code",[t._v("_")]),t._v(" 来表明我们不会使用它。注意在更新后尽早调用 "),a("code",[t._v("Unlock()")]),t._v(" 来释放对 "),a("code",[t._v("URLStore")]),t._v(" 的锁定。")]),t._v(" "),a("h2",{attrs:{id:"使用-defer-简化代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-defer-简化代码"}},[t._v("#")]),t._v(" 使用 defer 简化代码")]),t._v(" "),a("p",[t._v("目前代码还比较简单，容易记得操作完成后调用 "),a("code",[t._v("Unlock()")]),t._v(" 解锁。然而在代码更复杂时很容易忘记解锁，或者放置在错误的位置，往往导致问题很难追踪。对于这种情况 Go 提供了一个特殊关键字 "),a("code",[t._v("defer")]),t._v("（见 "),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/04.第19章：构建一个完整的应用程序/06.4.html"}},[t._v("6.4 节")]),t._v("）。在本例中，可以在 "),a("code",[t._v("Lock")]),t._v(" 之后立即示意 "),a("code",[t._v("Unlock")]),t._v("，不过其效果是 "),a("code",[t._v("Unlock()")]),t._v(" 只会在函数返回之前被调用。")],1),t._v(" "),a("p",[a("code",[t._v("Get")]),t._v(" 可以简化成以下代码（我们消除了本地变量 "),a("code",[t._v("url")]),t._v("）：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("URLStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RUnlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("code",[t._v("Set")]),t._v(" 的逻辑在某种程度上也变得清晰了（我们不用再考虑解锁的事了）：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("URLStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" present "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" present "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"urlstore-工厂函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#urlstore-工厂函数"}},[t._v("#")]),t._v(" URLStore 工厂函数")]),t._v(" "),a("p",[a("code",[t._v("URLStore")]),t._v(" 结构体中包含 map 类型的字段，使用前必须先用 "),a("code",[t._v("make")]),t._v(" 初始化。在 Go 中创建一个结构体实例，一般是通过定义一个前缀为 "),a("code",[t._v("New")]),t._v("，能返回该类型已初始化实例的函数（通常是指向实例的指针）。")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewURLStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("URLStore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("URLStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("在 "),a("code",[t._v("return")]),t._v(" 语句中，创建了 "),a("code",[t._v("URLStore")]),t._v(" 字面量实例，其中包含初始化了的 map 映射。锁无需特别指明初始化，这是 Go 创建结构体实例的惯例。"),a("code",[t._v("&")]),t._v(" 是取址运算符，它将我们要返回的内容变成指针，因为 "),a("code",[t._v("NewURLStore")]),t._v(" 返回类型是 "),a("code",[t._v("*URLStore")]),t._v("。然后调用该函数来创建 "),a("code",[t._v("URLStore")]),t._v(" 变量：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewURLStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"使用-urlstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-urlstore"}},[t._v("#")]),t._v(" 使用 URLStore")]),t._v(" "),a("p",[t._v("要新增一对短/长 URL 到 map 中，我们只需调用 s 上的 "),a("code",[t._v("Set")]),t._v(" 方法，由于返回布尔值，可以把它包裹在 "),a("code",[t._v("if")]),t._v(" 语句中：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://google.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("要获取给定短 URL 对应的长 URL，调用 s 上的 "),a("code",[t._v("Get")]),t._v(" 方法，将返回值放入变量 "),a("code",[t._v("url")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重定向到 url")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 键未找到")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这里我们利用 Go 语言 "),a("code",[t._v("if")]),t._v(" 语句的特性，可以在起始部分、条件判断前放置初始化语句。另外还需要一个 "),a("code",[t._v("Count")]),t._v(" 方法以获取 map 中键值对的数量，可以使用内建的 "),a("code",[t._v("len")]),t._v(" 函数：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("URLStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RUnlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("如何根据给定的长 URL 计算出短 URL 呢？为此我们创建一个函数 "),a("code",[t._v("genKey(n int) string {…}")]),t._v("，将 "),a("code",[t._v("s.Count()")]),t._v(" 的当前值作为其整型参数传入。（具体算法并不重要，示例代码可以在 "),a("a",{attrs:{href:"examples/chapter_19/goto_v1/key.go"}},[t._v("key.go")]),t._v(" 找到。）")]),t._v(" "),a("p",[t._v("现在，我们可以创建一个 "),a("code",[t._v("Put")]),t._v(" 方法，接收一个长 URL，用 "),a("code",[t._v("genKey")]),t._v(" 生成其短 URL 键，调用 "),a("code",[t._v("Set")]),t._v(" 方法在此键下存储长 URL 数据，然后返回这个键：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("URLStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("genKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" key\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// shouldn’t get here")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[a("code",[t._v("for")]),t._v(" 循环会一直尝试调用 "),a("code",[t._v("Set")]),t._v(" 直到成功为止（意味着生成了一个尚未存在的短网址）。现在我们定义好了数据存储，以及配套的可工作的函数（见代码 "),a("a",{attrs:{href:"examples/chapter_19/goto_v1/store.go"}},[t._v("store.go")]),t._v("）。但这本身并不能完成任务，我们还需要开发 web 服务器以交付 "),a("code",[t._v("Add")]),t._v(" 和 "),a("code",[t._v("Redirect")]),t._v(" 服务。")]),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/04.第19章：构建一个完整的应用程序/directory.html"}},[t._v("目录")])],1),t._v(" "),a("li",[t._v("上一节："),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/04.第19章：构建一个完整的应用程序/19.2.html"}},[t._v("短网址项目简介")])],1),t._v(" "),a("li",[t._v("下一节："),a("RouterLink",{attrs:{to:"/GO01.Go入门指南/05.第四部分：实际应用/04.第19章：构建一个完整的应用程序/19.4.html"}},[t._v("用户界面：web 服务端")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);