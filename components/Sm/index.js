import React from 'react'

const Sm = () => {
  return (
    <div>
        <div className='mt-[5rem]'>
                <p className='regular justify-center text-center m-auto lg:w-[55%]    text-[5rem]  lg:text-[1.8rem] text-[#5C5C5C]'>Step 1 out of 2</p>
                <h2 className='flex justify-center text-center bold mt-[2rem] m-auto lg:w-[55%] lg:mt-[0rem] text-[9rem] lg:text-[3rem]'>Select a social media platform that you want to post to:</h2>
            </div>
            <div className='mx-[10rem] mt-[5rem] flex gap-[4rem] justify-center'>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Tik Tok</h4>
                    </div>
                </div>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Reels</h4>
                    </div>
                </div>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Shorts</h4>
                    </div>
                </div>
               
            </div>
            <div className='mx-[10rem] mt-[5rem] flex gap-[4rem] justify-center'>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Facebook</h4>
                    </div>
                </div>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Youtube</h4>
                    </div>
                </div>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Linkedin</h4>
                    </div>
                </div>
               
            </div>
    </div>
  )
}

export default Sm