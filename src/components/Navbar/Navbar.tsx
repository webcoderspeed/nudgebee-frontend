import navigation, { INavigation } from '@/data/navigation';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { BsChevronDown } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { RiNotification3Line } from 'react-icons/ri';
import { Avatar } from 'antd';

const Navbar = () => {
	return (
		<header className='flex items-center justify-between px-20 py-4 bg-[#213A8E]'>
			<nav className='flex items-center gap-2'>
				<div className='border-[#B9B9B9] border-[1px] rounded-md px-4 py-2 h-10 w-24 mr-6' />
				{navigation?.map((item) => (
					<NavItem
						key={item.text}
						{...item}
					/>
				))}
			</nav>
			<div className='flex items-center gap-5'>
				<Link href={'/settings'}>
					<CiSettings
						color='white'
						size={24}
					/>
				</Link>
				<Link href={'/notifications'}>
					<RiNotification3Line
						color='white'
						size={24}
					/>
				</Link>
				<Link href={'/profile'}>
					<Avatar
						src='https://img.freepik.com/premium-photo/cute-boy-pixar-style-cartoon-3d-illustration-generative-ai_808510-252.jpg'
						size={30}
					/>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;

const NavItem = ({ link, text, children }: INavigation) => {
	const { pathname } = useRouter();

	const linkClasses = classNames(
		'text-white px-4 py-2 text-sm font-bold relative  flex items-center gap-2 ',
		{
			'bg-[#5567A6] rounded-md': pathname === link,
		},
	);

	return (
		<div className='relative group '>
			<Link
				href={link}
				className={linkClasses}
			>
				{text}{' '}
				{children && (
					<BsChevronDown className='font-extrabold group-hover:rotate-180 transition-all' />
				)}
			</Link>
			{children && (
				<div
					className={
						'absolute left-0 rounded-b-md shadow-md bg-[#213A8E] min-w-[10rem] transition-all duration-500 hidden opacity-0 group-hover:block group-hover:opacity-100'
					}
				>
					{children.map((item) => (
						<NavItem
							key={item.text}
							{...item}
						/>
					))}
				</div>
			)}
		</div>
	);
};
