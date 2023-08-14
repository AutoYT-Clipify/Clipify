import React from 'react'
import Link from 'next/link'
import PrimaryButton from '../PrimaryButton'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ButtonInverted from "../PrimaryButton/ButtonInverted"
import { Player } from 'video-react';

const Showcase = ({showcase}) => {

    return (
        <>
        {(
            <div className={" mt-[25rem] lg:mt-[15.2rem] flex flex-col lg:flex-row px-[7rem] gap-[0rem] lg:gap-[rem]"}>
                <div className="flex-1 self-center">
                    <h4 className="flex justify-left bold gradient text-[6rem] lg:text-[2rem] mt-[8rem] lg:mt-[0rem] mb-[-30px] lg:mb-[0px]">
                      {showcase?.title}
                    </h4>
                    <h2 className="bold lg:pr-[6rem] text-[7rem] lg:text-[4rem] mt-[5rem] lg:mt-[0.7rem] leading-[8rem] lg:leading-[5rem]">
                        {showcase?.subtitle}
                    </h2>
                    <p className="regular  lg:pr-[6rem]  text-[6rem] mt-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">
                        {showcase?.detail}
                    </p>
                    <motion.div
                    initial={{
                        y: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="group mt-[4rem] lg:mt-[1.8rem] flex gap-[3rem]">
                        <PrimaryButton text="Get Started" />
                        {/* <ButtonInverted text="AI Video" /> */}
                    </motion.div>
                </div>
                {/* Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    className="showcase-image relative flex-1 order-first lg:order-last">
                    <Image
                        width={715}
                        height={428.33}
                        src={'/static/showcase.svg'}
                        alt="project1"
                    />
                    <div className='showcaseVideo w-[60%]'  >
                    <video controls autoPlay={true} loop>
                        <source src="https://synthesia-results.s3.eu-west-1.amazonaws.com/website_demos/transparent+avatars/homepage/TransparentAvatar-WebsiteHero-02-hevc-safari-hevc-safari.mp4" type="video/mp4; codecs=&quot;hvc1&quot;" />
                        <source src="https://synthesia-results.s3.eu-west-1.amazonaws.com/website_demos/transparent+avatars/homepage/TransparentAvatar-WebsiteHero-02-hevc-safari-vp9-chrome.webm" type="video/webm" />
                    </video>
                    </div>
                </motion.div>
            </div>
        )}
        </>
    )
}

export default Showcase