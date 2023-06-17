import { Lato } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import { FiAlertCircle, FiShare2 } from 'react-icons/fi';
import AccountCostSummary from '@/components/AccountCostSummary/AccountCostSummary';

const inter = Lato({
	subsets: ['latin'],
	weight: '400',
});

export default function Home() {
	return (
		<main
			className={`${inter.className} bg-[#213A8E] `}
			style={{
				background: `linear-gradient(94.05deg, #213A8E 2.37%, #0C2785 23.11%, #021A6F 107.95%)`,
			}}
		>
			<Navbar />
			<div className='p-20 flex flex-col justify-between gap-10 h-full'>
				<div>
					<h3 className='text-white text-[22px] font-normal leading-[26px]'>
						Welcome back,{' '}
						<span className='px-2 py-1 rounded-md bg-[#5567A6]'>James!</span>
					</h3>
					<p className='text-[#D9D1D1] text-sm my-4'>
						{`Let's look at the overall spend breakdown for the services you have connected!`}
					</p>
				</div>
				{/* <div className='flex items-center gap-2'>
					<Button
						{...{
							icon: <FiAlertCircle className='mt-[2px]' />,
							text: 'Cost Summary',
						}}
					/>
					<Button
						{...{
							icon: <FiShare2 className='mt-[2px]' />,
							text: 'Share',
						}}
					/>
				</div> */}

				<AccountCostSummary />
			</div>
		</main>
	);
}

const Button = ({ text, icon }: { text: string; icon: JSX.Element }) => {
	return (
		<button className='bg-[#27429C] px-2 py-1 rounded-md text-sm text-white flex items-center gap-1'>
			{text} {icon}
		</button>
	);
};
