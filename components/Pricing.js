import { useState } from 'react'
import Button from './Button'
import PricingCard from './PricingCard'
import plans from '@/constants'


const PricingSection = ({pricing}) => {
	const [subscriptionDuration, setSubscriptionDuration] = useState('monthly');
	const { basic, pro, standard } = pricing?.plan[0];
	let planArray = []
	planArray.push(basic, standard,  pro);

	return (
		<div id="pricing" className="mt-[15rem] lg:mt-[10rem] py-[6.4rem] flex flex-col items-center">
			<h4 className="text-grey-light2 bold gradient text-[3.5rem] lg:text-[1.6rem]">{pricing?.title}</h4>
			<h3 className="text-[6.1rem] lg:px-0 px-[15rem] lg:text-[4.1rem] bold lg:w-[73.4rem] text-center text-secondary mt-[2.2rem] leading-[6rem] lg:leading-[4.5rem]">
				{pricing?.subtitle}
			</h3>
			{/* Buttons */}
			<div className="flex gap-8 mt-[6.9rem]">
				<Button
					type={`${
						subscriptionDuration === 'monthly'
							? 'solid'
							: subscriptionDuration === 'yearly'
							? 'outlined'
							: 'solid'
					}`}
					text="Monthly"
					handleOnClick={() => setSubscriptionDuration('monthly')}
				/>
				<Button
					type={`${
						subscriptionDuration === 'yearly'
							? 'solid'
							: subscriptionDuration === 'monthly'
							? 'outlined'
							: 'solid'
					}`}
					text="Yearly"
					handleOnClick={() => setSubscriptionDuration('yearly')}
				/>
			</div>

			<div className="flex flex-col lg:flex-row gap-[5.3rem] mt-[5.4rem]">
				{planArray?.map((plan) => (
					<PricingCard
						plan={plan}
						key={plan}
						subscriptionDuration={subscriptionDuration}
					/>
				))}
			</div>
		</div>
	)
}

export default PricingSection
