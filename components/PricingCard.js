import { getPlanFeatures } from '@/constants'
import Image from 'next/image'


const PricingCard = ({ plan, subscriptionDuration }) => {

	return (
		<>
			<div className="drop-shadow-2xl w-[76rem]  lg:w-[39.1rem] lg:h-[60rem] border border-grey-light3 bg-white rounded-[11px] p-[4rem] lg:p-[3rem]">
				{/* Plan Name */}
				<h4 className="text-secondary bold text-[5rem] lg:text-[2.9rem]">
					{plan?.planName}{' '}
					<span className="text-grey-light2 text-[3rem] lg:text-[1.5rem] bold">
						EARLY ACCESS
					</span>
				</h4>
				{subscriptionDuration === 'yearly' && (
					<span className="text-blue text-[4rem] lg:text-[1.7rem] medium">{plan?.discount}</span>
				)}

				{/* Prices */}
				<div className="mt-[2.1rem] mb-[4rem]">
					{/* <h4 className="text-grey-light2 medium text-[5rem] lg:text-[3rem] line-through">
						$
						{subscriptionDuration === 'monthly'
							? original_price
							: subscriptionDuration === 'yearly'
							? yearly_original_price
							: 'monthly'}
					</h4> */}
					<h4 className="text-grey-light1 medium text-[5rem] lg:text-[3.8rem]">
						$
						{subscriptionDuration === 'monthly'
							? plan?.pricingMonthly
							: subscriptionDuration === 'yearly'
							? plan?.finalPrice
							: 'monthly'}{' '}
						<span className="medium text-[4rem] lg:text-[2.2rem]  text-grey-light2">
							/ {subscriptionDuration === 'monthly' ? 'month' : 'year'}{' '}
							{subscriptionDuration === 'yearly' && (
								<span className="line-through medium text-[4rem] lg:text-[1.7rem]">
									${plan?.pricingYearly}
								</span>
							)}
						</span>
					</h4>
					<span className="medium text-[3.5rem] lg:text-[1.8rem]">
						Billed {subscriptionDuration}
					</span>
				</div>
				{/* Features */}
				<ul>
					{plan?.features?.map((feature) => (
						<li key={feature.name} className="flex mb-[1.7rem]">
							<div className="relative w-[50px] h-[50px] lg:w-[16px] lg:h-[16px]">
								<Image src="/icon-check.svg" alt="" fill />
							</div>
							<div className="ml-[11px] lg:w-[27.5rem]">
								<h4 className="medium text-[3.5rem] lg:text-[1.6rem] text-secondary">
									{feature?.name}:
								</h4>
								<p className=" text-[3.5rem] lg:text-[1.6rem] regular text-grey-light1">
									{feature?.description}
								</p>
							</div>
						</li>
					))}
				</ul>

				{subscriptionDuration === 'monthly' && (
					<span className="text-blue text-[3rem] lg:text-[1.5rem] medium">
						Get 20% off on Yearly subscription
					</span>
				)}
			</div>
		</>
	)
}

export default PricingCard
