import React, { useState } from 'react'

const Sm = () => {
    const[selectedData, setSelectedData] = useState([])

    const handleClick = (selectItem) => {
        const updatedData = [...selectedData]; // Create a copy of the array
      
        const index = updatedData.indexOf(selectItem);
      
        if (index === -1) {
          // 'selectItem' is not present, add it
          updatedData.push(selectItem);
        } else {
          // 'selectItem' is present, remove it
          updatedData.splice(index, 1);
        }
      
        setSelectedData(updatedData); // Update the state with the new array
      };
    console.log(selectedData.includes('tiktok'))
  return (
    <div>
        <div className='mt-[5rem]'>
                <p className='regular justify-center text-center m-auto lg:w-[55%]    text-[5rem]  lg:text-[1.8rem] text-[#5C5C5C]'>Step 1 out of 2</p>
                <h2 className='flex justify-center text-center bold mt-[2rem] m-auto lg:w-[55%] lg:mt-[0rem] text-[9rem] lg:text-[3rem]'>Select a social media platform that you want to post to:</h2>
            </div>
            <div className='mx-[10rem] mt-[5rem] flex gap-[4rem] justify-center'>
                <div 
                onClick={() => handleClick('tiktok')} 
                className={selectedData.includes('tiktok') ? 'w-[20%] border-solid border-[2px] border-[#7B68EE] rounded-2xl py-[5rem] px-[0rem]' : 'w-[20%] border-solid border-[2px] border-[#CECECE] rounded-2xl py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Tik Tok</h4>
                    </div>
                </div>
                <div  onClick={() => handleClick('reels')}  className={selectedData.includes('reels') ? 'w-[20%] border-solid border-[2px] border-[#7B68EE] rounded-2xl py-[5rem] px-[0rem]' : 'w-[20%] border-solid border-[2px] border-[#CECECE] rounded-2xl py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Reels</h4>
                    </div>
                </div>
                <div  onClick={() => handleClick('shorts')}  className={selectedData.includes('shorts') ? 'w-[20%] border-solid border-[2px] border-[#7B68EE] rounded-2xl py-[5rem] px-[0rem]' : 'w-[20%] border-solid border-[2px] border-[#CECECE] rounded-2xl py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Shorts</h4>
                    </div>
                </div>
               
            </div>
            <div className='mx-[10rem] mt-[5rem] flex gap-[4rem] justify-center'>
                <div  onClick={() => handleClick('facebook')}  className={selectedData.includes('facebook') ? 'w-[20%] border-solid border-[2px] border-[#7B68EE] rounded-2xl py-[5rem] px-[0rem]' : 'w-[20%] border-solid border-[2px] border-[#CECECE] rounded-2xl py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Facebook</h4>
                    </div>
                </div>
                <div  onClick={() => handleClick('youtube')}  className={selectedData.includes('youtube') ? 'w-[20%] border-solid border-[2px] border-[#7B68EE] rounded-2xl py-[5rem] px-[0rem]' : 'w-[20%] border-solid border-[2px] border-[#CECECE] rounded-2xl py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Youtube</h4>
                    </div>
                </div>
                <div  onClick={() => handleClick('linkedin')}  className={selectedData.includes('linkedin') ? 'w-[20%] border-solid border-[2px] border-[#7B68EE] rounded-2xl py-[5rem] px-[0rem]' :  'w-[20%] border-solid border-[2px] border-[#CECECE] rounded-2xl py-[5rem] px-[0rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <h4 className='bold text-[2rem] text-center'>Linkedin</h4>
                    </div>
                </div>
               
            </div>
    </div>
  )
}

export default Sm