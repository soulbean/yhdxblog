(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{949:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("所谓Futures就是指：有时候在你使用某一个值之前需要先对其进行计算。这种情况下，你就可以在另一个处理器上进行该值的计算，到使用时，该值就已经计算完毕了。")]),t._v(" "),n("p",[t._v("Futures模式通过闭包和通道可以很容易实现，类似于生成器，不同地方在于Futures需要返回一个值。")]),t._v(" "),n("p",[t._v("参考条目文献给出了一个很精彩的例子：假设我们有一个矩阵类型，我们需要计算两个矩阵A和B乘积的逆，首先我们通过函数"),n("code",[t._v("Inverse(M)")]),t._v("分别对其进行求逆运算，再将结果相乘。如下函数"),n("code",[t._v("InverseProduct()")]),t._v("实现了如上过程：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InverseProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a Matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b Matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a_inv "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Inverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    b_inv "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Inverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Product")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a_inv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b_inv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("在这个例子中，a和b的求逆矩阵需要先被计算。那么为什么在计算b的逆矩阵时，需要等待a的逆计算完成呢？显然不必要，这两个求逆运算其实可以并行执行的。换句话说，调用"),n("code",[t._v("Product")]),t._v("函数只需要等到"),n("code",[t._v("a_inv")]),t._v("和"),n("code",[t._v("b_inv")]),t._v("的计算完成。如下代码实现了并行计算方式：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InverseProduct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a Matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b Matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a_inv_future "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InverseFuture")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// start as a goroutine")]),t._v("\n    b_inv_future "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InverseFuture")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// start as a goroutine")]),t._v("\n    a_inv "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("a_inv_future\n    b_inv "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("b_inv_future\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Product")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a_inv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b_inv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[n("code",[t._v("InverseFuture")]),t._v("函数以"),n("code",[t._v("goroutine")]),t._v("的形式起了一个闭包，该闭包会将矩阵求逆结果放入到future通道中：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InverseFuture")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a Matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" Matrix "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    future "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" Matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        future "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Inverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" future\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("当开发一个计算密集型库时，使用Futures模式设计API接口是很有意义的。在你的包使用Futures模式，且能保持友好的API接口。此外，Futures可以通过一个异步的API暴露出来。这样你可以以最小的成本将包中的并行计算移到用户代码中。（参见参考文件18："),n("a",{attrs:{href:"http://www.golangpatterns.info/concurrency/futures",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.golangpatterns.info/concurrency/futures"),n("OutboundLink")],1),t._v("）")])])}),[],!1,null,null,null);s.default=e.exports}}]);