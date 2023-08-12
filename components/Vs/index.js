import { vsData } from '@/constants'
import React from 'react'

const Vs = ({ vs }) => {

    return (
        <>
            { (
                <div id="solutions" className="mt-[15rem] lg:mt-[19.5rem] ">
                    <h2 className="flex justify-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[5rem]">
                       {vs?.title}
                    </h2>
                    <p className='regular justify-center text-center m-auto lg:w-[55%]  lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>
                       {vs?.subtitle}
                    </p>
                    <div className='flex lg:flex-row flex-col gap-[10rem] justify-center mt-[5rem] px-[4rem] lg:px-0'>
                        <div className='shadow-lg shadow-blue-500/50 p-[3rem]'>
                            <h3 className='bold lg:my-0 my-[3rem] text-[5rem] lg:text-[2rem]'>{vs?.manuallyTitle}</h3>
                           {vs?.manuallyPoints?.map((i, index) => (
                              <div key={index} className='flex gap-[1rem]'>
                              <img src="/sad.svg" className='w-[10%] lg:mt-[1.5rem]' />
                              <p className='regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>{i}</p>
                          </div>
                           ))}
                        </div>
                        <div className='lg:mt-[15rem] lg:my-0 my-[5rem]'>
                            <div className='bg-purple-400 shadow-lg shadow-purple-500/50 p-[3rem] m-auto rounded-[100%] w-[10%] lg:w-[100%] py-[1.5rem] lg:py-0 lg:px-[6px] text-center justify-center text-white'>
                                <p className='regular  text-center align-middle text-[6rem] lg:mt-[2rem] lg:text-[3.8rem] '>
                                    vs
                                </p>
                            </div>
                        </div>
                        <div className='shadow-lg shadow-red-500/50 p-[3rem]'>
                            <h3 className='bold lg:my-0 my-[8rem] text-[5rem] lg:text-[2rem]'>{vs?.automagicallyTitle}</h3>
                            {vs?.autoMagicallyPoints?.map((i, index) => (
                                 <div key={index} className='flex gap-[1rem]'>
                                 <img src="/happy.svg" className='w-[10%] lg:mt-[1.5rem]' />
                                 <p className='regular justify-center lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>{i}</p>
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