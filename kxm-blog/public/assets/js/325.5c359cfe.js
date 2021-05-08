(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{893:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("s为了示范，我们创建了一个名为 uc 的简单包，它含有一个 "),a("code",[s._v("UpperCase")]),s._v(" 函数将字符串的所有字母转换为大写。当然这并不值得创建一个自定义包，同样的功能已被包含在 "),a("code",[s._v("strings")]),s._v(" 包里，但是同样的技巧也可以应用在更复杂的包中。")]),s._v(" "),a("h2",{attrs:{id:"_9-8-1-自定义包的目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-8-1-自定义包的目录结构"}},[s._v("#")]),s._v(" 9.8.1 自定义包的目录结构")]),s._v(" "),a("p",[s._v("下面的结构给了你一个好的示范(uc 代表通用包名, 名字为粗体的代表目录，斜体代表可执行文件):")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("/home/user/goprograms\n\tucmain.go\t(uc包主程序)\n\tMakefile (ucmain的makefile)\n\tucmain\n\tsrc/uc\t (包含uc包的go源码)\n\t\tuc.go\n\t \tuc_test.go\n\t \tMakefile (包的makefile)\n\t \tuc.a\n\t \t_obj\n\t\t\tuc.a\n\t\t_test\n\t\t\tuc.a\n\tbin\t\t(包含最终的执行文件)\n\t\tucmain\n\tpkg/linux_amd64\n\t\tuc.a\t(包的目标文件)\n")])])]),a("p",[s._v("将你的项目放在 goprograms 目录下(你可以创建一个环境变量 GOPATH，详见第 2.2/3 章节：在 .profile 和 .bashrc 文件中添加 "),a("code",[s._v("export GOPATH=/home/user/goprograms")]),s._v(")，而你的项目将作为 src 的子目录。uc 包中的功能在 uc.go 中实现。")]),s._v(" "),a("p",[s._v("示例 9.6 "),a("a",{attrs:{href:"examples/chapter_9/uc.go"}},[s._v("uc.go")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" uc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strings"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" strings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToUpper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("包通常附带一个或多个测试文件，在这我们创建了一个 uc_test.go 文件，如第 9.8 节所述。")]),s._v(" "),a("p",[s._v("示例 9.7 "),a("a",{attrs:{href:"examples/chapter_9/test.go"}},[s._v("test.go")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" uc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testing"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" ucTest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" out "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" ucTests "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("ucTest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tucTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ABC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tucTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cvo-az"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CVO-AZ"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tucTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Antwerp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ANTWERP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TestUC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("testing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ut "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" ucTests "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tuc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" uc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" ut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Errorf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UpperCase(%s) = %s, must be %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\tut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("通过指令编译并安装包到本地："),a("code",[s._v("go install uc")]),s._v(", 这会将 uc.a 复制到 pkg/linux_amd64 下面。")]),s._v(" "),a("p",[s._v("另外，使用 make ，通过以下内容创建一个包的 Makefile 在 src/uc 目录下:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("include $(GOROOT)/src/Make.inc\n\nTARG=uc\nGOFILES=\\\n\t\tuc.go\\\n\ninclude $(GOROOT)/src/Make.pkg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("在该目录下的命令行调用: gomake")]),s._v(" "),a("p",[s._v("这将创建一个 _obj 目录并将包编译生成的存档 uc.a 放在该目录下。")]),s._v(" "),a("p",[s._v("这个包可以通过 go test 测试。")]),s._v(" "),a("p",[s._v("创建一个 uc.a 的测试文件在目录下，输出为 PASS 时测试通过。")]),s._v(" "),a("p",[s._v("在第 13.8 节我们将给出另外一个测试例子并进行深入研究。")]),s._v(" "),a("p",[s._v("备注：有可能你当前的用户不具有足够的资格使用 go　install(没有权限)。这种情况下，选择 root 用户 su。确保 Go 环境变量和 Go 源码路径也设置给 su，同样也适用你的普通用户(详见第 2.3 节)。")]),s._v(" "),a("p",[s._v("接下来我们创建主程序 ucmain.go:")]),s._v(" "),a("p",[s._v("示例 9.8 "),a("a",{attrs:{href:"/examples/chapter_9/ucmain.go"}},[s._v("ucmain.go")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/uc"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tstr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"USING package uc!"')]),s._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("然后在这个目录下输入 "),a("code",[s._v("go install")]),s._v("。")]),s._v(" "),a("p",[s._v("另外复制 uc.a 到 /home/user/goprograms 目录并创建一个 Makefile 并写入文本：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("include $(GOROOT)/src/Make.inc\nTARG=ucmain\nGOFILES=\\\n\tucmain.go\\\n\ninclude $(GOROOT)/src/Make.cmd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("执行 gomake 编译 "),a("code",[s._v("ucmain.go")]),s._v(" 生成可执行文件ucmain")]),s._v(" "),a("p",[s._v("运行 "),a("code",[s._v("./ucmain")]),s._v(" 显示: "),a("code",[s._v("USING PACKAGE UC!")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_9-8-2-本地安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-8-2-本地安装包"}},[s._v("#")]),s._v(" 9.8.2 本地安装包")]),s._v(" "),a("p",[s._v("本地包在用户目录下，使用给出的目录结构，以下命令用来从源码安装本地包：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("go install /home/user/goprograms/src/uc # 编译安装uc\ncd /home/user/goprograms/uc\ngo install ./uc \t# 编译安装uc（和之前的指令一样）\ncd ..\ngo install .\t# 编译安装ucmain\n")])])]),a("p",[s._v("安装到 "),a("code",[s._v("$GOPATH")]),s._v(" 下：")]),s._v(" "),a("p",[s._v("如果我们想安装的包在系统上的其他 Go 程序中被使用，它一定要安装到 "),a("code",[s._v("$GOPATH")]),s._v(" 下。\n这样做，在 .profile 和 .bashrc 中设置 "),a("code",[s._v("export GOPATH=/home/user/goprograms")]),s._v("。")]),s._v(" "),a("p",[s._v("然后执行 go install uc 将会复制包存档到 "),a("code",[s._v("$GOPATH/pkg/LINUX_AMD64/uc")]),s._v("。")]),s._v(" "),a("p",[s._v("现在，uc 包可以通过 "),a("code",[s._v('import "uc"')]),s._v(" 在任何 Go 程序中被引用。")]),s._v(" "),a("h2",{attrs:{id:"_9-8-3-依赖系统的代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-8-3-依赖系统的代码"}},[s._v("#")]),s._v(" 9.8.3 依赖系统的代码")]),s._v(" "),a("p",[s._v("在不同的操作系统上运行的程序以不同的代码实现是非常少见的：绝大多数情况下语言和标准库解决了大部分的可移植性问题。")]),s._v(" "),a("p",[s._v("你有一个很好的理由去写平台特定的代码，例如汇编语言。这种情况下，按照下面的约定是合理的：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("prog1.go\nprog1_linux.go\nprog1_darwin.go\nprog1_windows.go\n")])])]),a("p",[s._v("prog1.go 定义了不同操作系统通用的接口，并将系统特定的代码写到 prog1_os.go 中。\n对于 Go 工具你可以指定 "),a("code",[s._v("prog1_$GOOS.go")]),s._v(" 或 "),a("code",[s._v("prog1_$GOARCH.go")]),s._v("\n或在平台 Makefile 中："),a("code",[s._v("prog1_$(GOOS).go\\")]),s._v(" 或 "),a("code",[s._v("prog1_$(GOARCH).go\\")]),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);