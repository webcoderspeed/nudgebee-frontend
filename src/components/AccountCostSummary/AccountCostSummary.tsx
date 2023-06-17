import React from 'react'
import HeadingWithBottomBorder from '../Heading/HeadingWithBottomBorder';
import { FiShare2 } from 'react-icons/fi';

const AccountCostSummary = () => {
  return (
		<div className='w-full bg-white p-8 rounded-lg'>
			<div className='flex items-center gap-2'>
				<HeadingWithBottomBorder
					title='Account cost summary'
					borderClasses='h-[3px] w-[73px]'
				/>{' '}
				<span className='border px-2 py-1 rounded-md border-[#737373] flex items-center justify-center'>
					<FiShare2 color='#737373' />
				</span>
			</div>
		</div>
	);
}

export default AccountCostSummary