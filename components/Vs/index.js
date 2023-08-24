import { vsData } from '@/constants'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Vs = ({ vs }) => {
    const router = useRouter();
    const currentPathname = router.pathname;
    console.log(currentPathname, 'path')
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    useEffect(() => {
        if(currentPathname === '/text-to-tiktok') {
            setTitle('Turn From A Content Editor to A Creator. Save 20+ Hrs/Week. Get Ahead.');          
        }else if (currentPathname === '/text-to-reels') {
            setTitle('Turn From A Content Editor to A Creator. Save 20+ Hrs/Week. Get Ahead.');
        } else if (currentPathname === '/text-to-shorts') {
            setTitle('Turn From A Content Editor to A Creator. Save 20+ Hrs/Week. Get Ahead.')  
        } else if (currentPathname === '/blog-to-video') {
          setTitle('Turn Your Blogs to Videos to Dominate Search, Maximize Reach.')
        }
    }, [])

    return (
        <>
            { (
                <div id="solutions" className="mt-[15rem] lg:mt-[19.5rem] ">
                    <h2 className="flex justify-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[4rem] lg:w-[70%] lg:m-auto text-center">
                       {title}
                    </h2>
                    <p className='regular justify-center text-center m-auto lg:w-[55%]  lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>
                       {vs?.subtitle}
                    </p>
                    <div className='flex lg:flex-row flex-col gap-[10rem] justify-center mt-[5rem] px-[4rem] lg:px-0'>
                        <div className='shadow-lg shadow-blue-500/50 p-[3rem] flex-1'>
                            <h3 className='bold lg:my-0 my-[3rem] text-[5rem] lg:text-[2rem]'>{vs?.manuallyTitle}</h3>
                           {vs?.manuallyPoints?.map((i, index) => (
                              <div key={index} className='flex gap-[1rem]'>
                              <img src="/sad.svg" className='w-[10%] lg:mt-[1.5rem]' />
                              <p className='flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>{i}</p>
                          </div>
                           ))}
                        </div>
                        <div className='lg:mt-[15rem] lg:my-0 my-[5rem]'>
                            <div className='bg-purple-400 shadow-lg shadow-purple-500/50 p-[3rem] m-auto rounded-[100%] w-[10%] lg:w-[100%] py-[1.5rem] lg:py-0 lg:px-[9px] text-center justify-center text-white'>
                                <p className='regular  text-center align-middle text-[6rem] lg:mt-[2rem] lg:text-[3.8rem] '>
                                    vs
                                </p>
                            </div>
                        </div>
                        <div className='shadow-lg shadow-red-500/50 p-[3rem] flex-1'>
                            <h3 className='bold lg:my-0 my-[8rem] text-[5rem] lg:text-[2rem]'>{vs?.automagicallyTitle}</h3>
                            {vs?.autoMagicallyPoints?.map((i, index) => (
                                 <div key={index} className='flex gap-[1rem]'>
                                 <img src="/happy.svg" className='w-[10%] lg:mt-[1.5rem]' />
                                 <p className='flex-1 regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>{i}</p>
                             </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default Vs