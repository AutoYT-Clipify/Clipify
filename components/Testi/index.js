import { urlFor } from '@/sanity';
import React, { Fragment } from 'react'

const Testi = ({testimonials}) => {
    return (
        <Fragment>
            {/* <div className='mt-[20rem] lg:mt-[10rem]  mx-auto w-[90%] lg:w-[50%]'>
                <h4 className=" bold gradient text-center  text-[6rem] lg:text-[2rem]">Testimonials</h4>
                <h2 className="bold text-[9rem] text-center lg:text-[5rem] mt-[1rem] lg:mt-[0.7rem]">
                    What others are saying
                </h2>
                <p className="regular text-center text-[6rem] lg:text-[1.8rem] text-[#5C5C5C] mb-[2.6rem]">
                    On the way to develop our Blockchain Ecosystem, this is the roadmap we will be following in our journey.
                </p>
            </div>
            <div className='flex mt-[2rem] justify-center'>
            <Link href={'https://t.me/Ritz_Expelee'}>
                <PrimaryButton text={'Get Started'} />
            </Link>
            </div> */}
            <div className='mt-[5rem] grid px-[8rem] lg:px-[0rem] grid-cols-1 lg:grid-cols-3 gap-2'>
            {testimonials?.testimonials?.map((item, index) => {
                const {name, description, image} = item;
                return (
                    
                    <TestimonialDetail 
                        key={index}
                        name={name}
                        description={description}
                        image={urlFor(image).url()}
                    />
                )
            })}
            </div>
            {/* <Brands /> */}
        </Fragment>

    )
}

const TestimonialDetail = ({name, description, image}) => {
    return (
        <div className="shadow-lg shadow-indigo-500/50 justify-center border-solid border-gray-400 border rounded-md p-[3rem]  ml-[2.8rem] mb-[8rem] lg:mb-[3rem]  pr-[2rem]">
        <img
            src="/static/icon-testimonials.svg"
            className="w-[4rem] h-[3.5rem] lg:w-[4rem] lg:h-[2rem]"
            alt=""
        />
        <p className=" text-[5rem] lg:text-[1.6rem] regular my-[2.8rem]">
        {description}
        </p>
        <div className='flex items-center gap-[3rem] lg:gap-[1rem]'>
        <div>
          <img className='w-[15rem] rounded-full lg:w-[4rem]' src={`${image}`} alt="" />
        </div>
        <div className=''>
          <p className='medium text-[6rem] lg:text-[1.5rem]'>{name}</p>
        </div>
      </div>
    </div>
    )
}

const testimonials = [
	{
		name: ' Sarah Johnson, CEO at InnovateTech',
		image: '/static/testi/Sarah.jpg',
		description: `Automate YouTube is a game-changer! It's like having a personal assistant for my channel`,
	},
	{
		name: 'Michael Davis, CFO at Stellar Solutions',
		image: '/static/testi/Michael.jpg',
		description: `Thanks to Automate YouTube, my uploads are seamless and my engagement has skyrocketed! `
	},
    {
		name: "Emily Thompson, Marketing Manager at ArtCollect",
		image: '/static/testi/Emily.jpg',
		description: `I can't believe I used to do everything manually. Automate YouTube is a time-saver!`
	},
	{
		name: "David Wilson, CTO at TechWorld",
		image: '/static/testi/David.jpg',
		description: `My channel's growth went into overdrive after I started using Automate YouTube. - Maya G`
	},
    {
		name: 'Jennifer Roberts, Project Manager at GameMakers',
		image: '/static/testi/jeneffer.jpg',
		description: `I can't believe I used to do everything manually. Automate YouTube is a time-saver! - Emily P`
	},
	{
		name: "John Brown, Operations Manager at CryptoTrade",
		image: '/static/testi/John.jpg',
		description: `Automate YouTube = More Views + Less Stress. A must-have for serious creators!`
	},
]

export default Testi