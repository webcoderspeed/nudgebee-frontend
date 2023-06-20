import classNames from 'classnames';
import React from 'react';

const HeadingWithBottomBorder = ({
	title,
	headingClasses,
	borderClasses,
}: {
	title: string;
	headingClasses?: string;
	borderClasses?: string;
}) => {
	const classes = classNames(
		'text-[18px] leading-[22px] font-[600]',
		headingClasses,
	);

	return (
		<div className='flex flex-col gap-1'>
			<h4 className={classes}>{title}</h4>
			<span
				className={classNames('bg-[#3162D066]', borderClasses)}
			/>
		</div>
	);
};

export default HeadingWithBottomBorder;
