const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  title: "银海学心岛",
  base: '/blogs/', // 格式：'/<部署仓库名>/'， 默认'/'
  description: "银海学心岛是银海大学的图书馆",
  dest: "public",
  theme: require.resolve('../../theme-reco-vdoing'), // 使用本地主题
  markdown: {
    lineNumbers: true // 代码行号
  },
  head,
  plugins,
  themeConfig
}