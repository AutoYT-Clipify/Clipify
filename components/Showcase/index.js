import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PrimaryButton from '../PrimaryButton'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ButtonInverted from "../PrimaryButton/ButtonInverted"
import { Player } from 'video-react';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/router';

const Showcase = ({ showcase }) => {
    const [i, setI] = useState(0);
    const [placeholder, setPlaceholder] = useState('');
    const txt = 'Create a insta reel of a siberian husky.';
    const speed = 150;
    const [showSpinner, setShowSpinner] = useState(false);
    const [showImage, setShowImage] = useState(false)
    const spinnerDuration = 3000; // Time in milliseconds
    const router = useRouter();
    const currentPathname = router.pathname;
    // console.log(currentPathname, 'path')
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    useEffect(() => {
        if(currentPathname === '/text-to-tiktok') {
            setTitle('Turn Your Text Prompt to the Next Viral Tiktok with AI');
            setDetail('Turn Your Text Prompt into a Viral TikTok with Human-like voice over & Caption ready to post on all platforms! Supports all languages. Try For Free - no credit card required')
        }else if (currentPathname === '/text-to-reels') {
            setTitle('Turn Your Text Prompt to the Next Viral Reels with AI');
            setDetail('Turn Your Text Prompt into a Viral Reels with Human-like voice over & Caption ready to post on all platforms! Supports all languages. Try For Free - no credit card required')
        } else if (currentPathname === '/text-to-shorts') {
            setTitle('Turn Your Text Prompt to the Next Viral Shorts with AI')  
            setDetail('Turn Your Text Prompt into a Viral Shorts with Human-like voice over & Caption ready to post on all platforms! Supports all languages. Try For Free - no credit card required')
        } else if (currentPathname === '/blog-to-video') {
            setTitle('One Masterpiece, Multiple Masterposts. Dominate Search, Maximize Reach.')
            setDetail('Turn Your blog into the next Viral Social media campaign with Human-like voice over & Caption ready to post on all platforms! Supports all languages. Try For Free - no credit card required.')
        }
    }, [])
    

    useEffect(() => {
        const type = () => {
            if (i < txt.length) {
                setPlaceholder((prevPlaceholder) => prevPlaceholder + txt.charAt(i));
                setI((prevI) => prevI + 1);
            } else {
                // setPlaceholder('');
                // setI(0);
                setShowSpinner(true);

            }
        };

        const timer = setTimeout(type, speed);

        return () => {
            clearTimeout(timer);
        };
    }, [i]);

    useEffect(() => {
        if (showSpinner) {
            setTimeout(() => {
                setShowSpinner(false);
                setShowImage(true)
            }, spinnerDuration);
        }


    }, [showSpinner]);

    useEffect(() => {
        if (showImage) {
            setTimeout(() => {
                setShowSpinner(false);
                setShowImage(false)
                 setPlaceholder('');
                setI(0);
            }, 2000);
        }


    }, [showImage]);

    return (
        <>
            {(
                <div id="home" className={"bg-image mt-[25rem] lg:mt-[15.2rem] flex flex-col lg:flex-row  gap-[0rem] lg:gap-[rem]"}>
                    <div className="flex-1 self-center pr-[3rem]">
                        <h4 className="flex justify-left bold gradient text-[6rem] lg:text-[2rem] mt-[8rem] lg:mt-[0rem] mb-[-30px] lg:mb-[0px]">
                            {showcase?.title}
                        </h4>
                        <h2 className="bold lg:pr-[6rem] text-[7rem] lg:text-[4rem] mt-[5rem] lg:mt-[0.7rem] leading-[8rem] lg:leading-[5rem]">
                            {title}
                        </h2>
                        <p className="regular  lg:pr-[6rem]  text-[6rem] mt-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]">
                            {detail}
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
                            {/* <PrimaryButton text="Get Started" /> */}
                            <form
                                // onSubmit={handleSubmit(onSubmit)} 
                                className="ml-[2em] lg:ml-0 w-[105rem] h-[16rem] lg:w-[53.4rem] lg:h-[5.4rem] flex relative mt-[8rem] lg:mt-[1.2rem] z-[20]">
                                <input
                                    type='email'
                                    placeholder="Type or paste any blog to convert into any video"
                                    // {...register("email", { required: "Email Address is required" })}
                                    // aria-invalid={errors.email ? "true" : "false"}
                                    className="border lg:pl-2 pl-[4rem] h-z border-[#909090]/[.5] h-full w-full rounded-[.6rem] text-[4.5rem] lg:text-[1.6rem] lg:font-medium placeholder:ml-3 placeholder:text-[3.6rem] placeholder:text-[#909090] placeholder:lg:text-[1.6rem] placeholder:font-medium px-[1.3rem] focus:outline-0"
                                />
                                {/* {errors.email && <p className='text-[red] text-[3.5rem] lg:text-[1.3rem] absolute left-[1.5rem] lg:left-1 top-[17rem]  lg:top-[5.8rem]'>{errors.email?.message}</p>} */}
                                <Link href={'/get-started'}>
                                    <button
                                        className="text-[4rem] medium lg:m-0 mr-[.5rem] mt-[.9rem] p-[1rem] w-[29rem] h-[13.4rem] lg:text-[1.5rem] lg:w-[15.6rem] lg:h-[4.5rem] bg-[#fff] text-[#7B68EE] rounded-[2rem] lg:rounded-[.5rem] absolute right-[.5rem] top-[.35rem]"
                                        type='submit'
                                    // onClick={handleSubmit}
                                    >
                                        Generate →
                                    </button>
                                </Link>

                            </form>

                        </motion.div>
                        <div className='mt-[4rem]'>
                            <Link href="/get-started">
                                <PrimaryButton text="Create Video" />
                            </Link>

                        </div>

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
                        className=" relative flex-1 order-first lg:order-last">
                        {/* <Image
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
                    </div> */}
                        {placeholder.length === txt.length ? (

                            <div className={showSpinner ? "flex justify-center items-center mt-[12rem]" : "flex justify-center items-center"}>
                                {showSpinner ? (
                                    <ClipLoader
                                        size={50}
                                        color="#FF4D00"
                                        loading={true}
                                        cssOverride={{
                                            borderWidth: '5px'
                                        }}
                                    />
                                ) : (
                                    <>
                                        {showImage && (
                                            <img
                                                src="/husky.svg"
                                                alt="Your Image"
                                                className="w-[40%] h-[100%] z-[100]" // Adjust image dimensions and styling
                                            />
                                        )}
                                    </>

                                )}
                            </div>
                        ) : (
                            <form
                                // onSubmit={handleSubmit(onSubmit)} 
                                className="ml-[2em] lg:ml-[5rem] w-[105rem] h-[16rem] lg:w-[45.4rem] lg:h-[5.4rem] flex relative mt-[8rem] lg:mt-[9.2rem] z-[20]">
                                <input
                                    type='email'
                                    placeholder={placeholder}
                                    // {...register("email", { required: "Email Address is required" })}
                                    // aria-invalid={errors.email ? "true" : "false"}
                                    className=" border lg:pl-2 pl-[4rem] h-z border-[#909090]/[.5] h-full w-full rounded-[.6rem] text-[4.5rem] lg:text-[1.6rem] lg:font-medium placeholder:ml-3 placeholder:text-[3.6rem] placeholder:text-[#909090] placeholder:lg:text-[1.6rem] placeholder:font-medium px-[1.3rem] focus:outline-0"
                                />
                                {/* {errors.email && <p className='text-[red] text-[3.5rem] lg:text-[1.3rem] absolute left-[1.5rem] lg:left-1 top-[17rem]  lg:top-[5.8rem]'>{errors.email?.message}</p>} */}
                                <button
                                    className="text-[4rem] medium lg:m-0 mr-[.5rem] mt-[.9rem] p-[1rem] w-[29rem] h-[13.4rem] lg:text-[1.5rem] lg:w-[15.6rem] lg:h-[4.5rem] bg-[#fff] text-[#7B68EE] rounded-[2rem] lg:rounded-[.5rem] absolute right-[.5rem] top-[.35rem]"
                                    type='submit'
                                // onClick={handleSubmit}
                                >
                                    Generate →
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </>
    )
}

export default Showcase