import React from 'react'
import CountUp from 'react-countup'

const Records = ({ products={count: 10, text: ''}, members={count: 5000, text: ''}, partners={count: 10, text: ''}, happyClients={count: 100, text:''} }) => {
	return (
		<div className="recordShadow w-[110rem] lg:w-[85rem] mx-auto mt-[15rem] lg:mt-[10rem] bg-[#FFFFFF] border rounded-[1.6rem] border-solid border-[#CFD9F0]">
			<div className="flex justify-center gap-[0rem] px-[1rem] py-[2rem]">
				<div className="flex flex-col items-center border-r-2 pl-[3rem] pr-[4rem]">
					<h4 className="gradientText flex justify-center bold text-[6rem] lg:text-[4rem]">
						<CountUp end={products?.count} duration={1} delay={0} />
						{`+ `}
					</h4>
					<p className="regular text-[#414348] text-[3.3rem] lg:text-[1.8rem] text-center">
						{products?.text ? products.text : `Products`}
					</p>
				</div>
				<div className="flex flex-col items-center border-r-2 pl-[3rem] pr-[4rem]">
					<h4 className="gradientText flex justify-center bold text-[6rem] lg:text-[4rem]">
						<CountUp end={members?.count} duration={5} delay={0} />
						{`+ `}
					</h4>
					<p className="regular text-[#414348] text-[3.3rem] lg:text-[1.8rem] text-center">
					{members?.text ? members.text : `Members`}
					</p>
				</div>
				<div className="flex flex-col items-center border-r-2 pl-[3rem] pr-[4rem]">
					<h4 className="gradientText flex justify-center bold text-[6rem] lg:text-[4rem]">
						<CountUp end={partners?.count} duration={2} delay={0} />
						{`+ `}
					</h4>
					<p className="regular text-[#414348] text-[3.3rem] lg:text-[1.8rem] text-center">
						{partners?.text ? partners?.text :  `Partners`}
					</p>
				</div>
				<div className="flex flex-col items-center pl-[3rem] pr-[4rem]">
					<h4 className="gradientText flex justify-center bold text-[6rem] lg:text-[4rem] ">
						<CountUp end={happyClients?.count} duration={1} delay={0} />
						{`+ `}
					</h4>
					<p className="regular text-[#414348] text-[3.3rem] lg:text-[1.8rem] text-center">
						{happyClients?.text ? happyClients?.text : `Happy Clients `}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Records
