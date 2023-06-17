export interface INavigation {
	text: string;
	link: string;
	children?: INavigation[];
}

const navigation: INavigation[] = [
	{
		text: 'Overview',
		link: '/',
	},
	{
		text: 'Cost reports',
		link: '/cost-reports',
	},
	{
		text: 'Recommendations',
		link: '/recommendations',
	},
	{
		text: 'My reports',
		link: '/my-reports',
	},
	{
		text: 'Documentation',
		link: '/documentation',
	},
	{
		text: 'All',
		link: '#',
		children: [
			{
				text: 'text1',
				link: '/text1',
			},
			{
				text: 'text2',
				link: '/text2',
			},
			{
				text: 'text3',
				link: '/text3',
			},
		],
	},
];

export default navigation;
