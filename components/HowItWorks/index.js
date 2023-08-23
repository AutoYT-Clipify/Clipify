import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity'

const HowItWorks = ({ howItWorks }) => {

    const howItWorksData = [
        {
            id:1,
            title: howItWorks?.menu1Title,
            description: howItWorks?.menu1SubTitle,
            points: howItWorks?.menu1Points,
            image: howItWorks?.menu1Image
        },
        {
            id:2,
            title: howItWorks?.menu2Title,
            description: howItWorks?.menu2SubTitle,
            points: howItWorks?.menu2Points,
            image: howItWorks?.menu2Image
        },
        {
            id:3,
            title: howItWorks?.menu3Title,
            description: howItWorks?.menu3SubTitle,
            points: howItWorks?.menu3Points,
            image: howItWorks?.menu3Image
        },


    ]
    return (
        <>
            { (
                <div id="services" className="mt-[15rem] lg:mt-[10.5rem] px-[7rem] ">
                    <h4 className="flex justify-center bold gradient text-[5rem] lg:text-[2.5rem] mb-[-30px] lg:mb-[-10px]">
                        How it works
                    </h4>
                    {/* <h2 className="flex justify-center bold mt-[2rem]  text-center lg:mt-[0rem] text-[9rem] lg:text-[5rem]">
                       {howItWorks?.title}
                    </h2>
                    <p className='regular justify-center text-center m-auto lg:w-[55%]  lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>
                        {howItWorks?.subtitle}
                    </p> */}
                    {howItWorksData?.map((i) => (
                        <div key={i?.id} className={i?.id % 2 !== 0 ? `flex flex-col lg:flex-row justify-center gap-[0rem] my-[10rem]` : `flex flex-col lg:flex-row-reverse justify-center gap-[0rem] my-[3rem]`}>
                            <div className={i?.id === 2 ? 'lg:ml-[8rem] flex-1' : 'flex-1'}>
                                <h2 className="inline-block  bold mt-[2rem] lg:mt-[0rem] text-[8rem] lg:text-[3.5rem]">
                                    {i?.title}
                                </h2>
                                <p className='regular inline-block lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>
                                    {i?.description}
                                </p>
                                {
                                    i?.points?.map((point) => (
                                        <div key={point} className='flex gap-[3rem] lg:gap-2'>
                                            <img className='w-[7%] lg:w-[4.5%] lg:mt-[2rem]' src="/tick.svg" />
                                            <p className='flex-1 regular inline-block lg:pr-[6rem] mt-[4rem] text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>{point}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 0 }
                                }}
                                className="lg:mt-0 mt-[15rem] flex-1">
                                <img src={urlFor(i?.image)?.url() || ''} className={i?.id === 2 ? `h-[100%] lg:w-[130rem] rounded-[1rem]` : `h-[100%] lg:w-[100rem] rounded-[1rem]`} />
                            </motion.div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default HowItWorks