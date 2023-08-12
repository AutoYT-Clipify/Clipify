import { Fragment, useEffect, useState } from 'react'
import TestimonialDetail from './TestimonialDetail'
import AliceCarousel from 'react-alice-carousel'
import Link from 'next/link'
import 'react-alice-carousel/lib/alice-carousel.css';
import { urlFor } from '@/sanity';

const Testimonial = ({testimonials}) => {
	const [items, setItems] = useState(null)

	useEffect(() => {
		const items = testimonials?.testimonials?.map((item, index) => {
			const { name, image, description } = item

			return (
				<TestimonialDetail
					name={name}
					image={urlFor(image)?.url()}
					key={index}
					description={description}
				/>
			)
		})
		setItems(items)
	}, [])

	const ArrowNext = () => (
		<div className="hidden lg:block absolute  lg:right-[-5.9rem] top-[15rem]">
			<img
				className="w-[10rem] lg:w-[35px] lg:h-[35px]"
				src={'/static/rightArrow.svg'}
				alt="rightArrow"
			/>
		</div>
	)

	const ArrowPrev = () => <Fragment></Fragment>

	const responsive = {
		393: {
			items: 1,
		},
		667: {
			items: 1,
		},
		1350: {
			items: 2,
		},
	}
	
	return (
		<div id="testimonials" className="relative lg:mx-auto mx-[1rem] mt-[15rem] lg:mt-[10.5rem]">
			<div className="mb-[8rem]">
				<h4 className="flex justify-center bold text-[5rem] lg:text-[2rem] gradient mb-[-30px] lg:mb-[-10px]">
					{testimonials?.title}
				</h4>
				<h2 className=" flex justify-center bold text-[9rem] lg:text-[5rem]">
				{testimonials?.subtitle}
				</h2>
				{/* <Link href="/testimonials">
					<div className="regular pr-[8rem] lg:pr-0 my-[10rem] lg:my-0 text-[5rem] lg:text-[1.5rem] flex justify-center lg:justify-end mt-[5rem] underline link">
						<p>View All</p>
					</div>
				</Link> */}
			</div>
			{items?.length > 0 && (
				<AliceCarousel
					mouseTracking
					infinite
					autoPlayInterval={1500}
					animationDuration={1500}
					disableDotsControls={false}
					responsive={responsive}
					items={items}
					autoPlay={true}
					keyboardNavigation={true}
					renderNextButton={ArrowNext}
					renderPrevButton={ArrowPrev}
				/>
			)}
		</div>
	)
}
export default Testimonial

// const testimonials = [
// 	{
// 		name: ' Sarah Johnson, CEO at InnovateTech',
// 		image: '/static/testi/Sarah.jpg',
// 		description: `Automate YouTube is a game-changer! It's like having a personal assistant for my channel`,
// 	},
// 	{
// 		name: 'Michael Davis, CFO at Stellar Solutions',
// 		image: '/static/testi/Michael.jpg',
// 		description: `Thanks to Automate YouTube, my uploads are seamless and my engagement has skyrocketed! `
// 	},
//     {
// 		name: "Emily Thompson, Marketing Manager at ArtCollect",
// 		image: '/static/testi/Emily.jpg',
// 		description: `I can't believe I used to do everything manually. Automate YouTube is a time-saver!`
// 	},
// 	{
// 		name: "David Wilson, CTO at TechWorld",
// 		image: '/static/testi/David.jpg',
// 		description: `My channel's growth went into overdrive after I started using Automate YouTube. - Maya G`
// 	},
//     {
// 		name: 'Jennifer Roberts, Project Manager at GameMakers',
// 		image: '/static/testi/jeneffer.jpg',
// 		description: `I can't believe I used to do everything manually. Automate YouTube is a time-saver! - Emily P`
// 	},
// 	{
// 		name: "John Brown, Operations Manager at CryptoTrade",
// 		image: '/static/testi/John.jpg',
// 		description: `Automate YouTube = More Views + Less Stress. A must-have for serious creators!`
// 	},
// ]
