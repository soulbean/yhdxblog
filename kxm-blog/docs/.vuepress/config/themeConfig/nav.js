// nav
module.exports = [{
		text: '首页',
		link: '/',
		icon: 'reco-home'
	},
	{
		text: '索引',
		icon: 'reco-api',
		items: [{
				text: '总目录',
				link: '/sitemap/',
				icon: 'reco-blog'
			},
			{
				text: '分类',
				link: '/categories/',
				icon: 'reco-category'
			},
			{
				text: '标签',
				link: '/tags/',
				icon: 'reco-tag'
			},
			{
				text: '归档',
				link: '/archives/',
				icon: 'reco-date'
			},
		]
	},
	{
		text: '岗前培训',
		link: '/prejob/',
		icon: ''
	},
	{
		text: '文档教程',
		link: '/docs/',
		icon: ''
	},
	{
		text: 'HTML大前端',
		link: '/frontend/',
		icon: ''
	},
	{
		text: 'Java语言',
		link: '/javalang/',
		icon: ''
	},
	{
		text: '数据库',
		link: '/database/',
		icon: ''
	},
	
	{
		text: 'Go语言',
		link: '/golang/',
		icon: ''
	},
	
	{
		text: '关于',
		icon: 'reco-message',
		link: '/about/',
		items: [{
			text: '联系',
			items: [{
				text: '联系我们',
				link: '/bookshop/linkme/',
				icon: 'reco-account'
			}, ]
		}, {
			text: '博客',
			items: [{
				text: '博客说明',
				link: '/bookshop/explain/',
				icon: 'reco-document'
			}]
		}, {
			text: '其他',
			items: [{
					text: '资源工具',
					link: '/resource-tools/',
					icon: 'reco-document'
				}
			]
		}, ]
	}
]
