import React from 'react'
import styles from './testi.module.css'

const TestimonialDetail = ({ name, image, description }) => {
	return (
		<div
			className={`${styles.testiCard} px-[4rem] flex  lg:h-[100%] h-[60rem] lg:w-[58rem] mx-auto`}
		>
			<div className="flex lg:items-start ">
				<img src={image} alt="testiImage" className="testiImageShadow lg:w-[40rem]" />
			</div>
			<div className="justify-center ml-[2.8rem] w-[60%] lg:w-[38.4rem] h-[35.5rem] pr-[2rem]">
				<img
					src="/static/icon-testimonials.svg"
					className="w-[4rem] h-[3.5rem] lg:w-[4rem] lg:h-[2rem]"
				/>
				<p className=" text-[4rem] lg:text-[1.6rem] regular my-[2.8rem]">
					{description}
				</p>
				<span className="text-[4rem] lg:text-[2rem] medium">
					&mdash; {name}
				</span>
			</div>
		</div>
	)
}

export default TestimonialDetail
