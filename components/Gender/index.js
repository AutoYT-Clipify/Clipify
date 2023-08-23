import React, { useState } from 'react'

const Gender = () => {
    const [gender, setGender] = useState(null)
  return (
    <div>
    <div className='mt-[5rem]'>
    <p className='regular justify-center text-center m-auto lg:w-[55%]  lg:pr-[6rem]  text-[5rem]  lg:text-[1.8rem] text-[#5C5C5C]'>Step 2 out of 2</p>
          <h2 className='flex justify-center bold mt-[2rem] lg:mt-[2rem] text-center lg:mt-[0rem] text-[9rem] lg:text-[3rem]'>Choose your favourite voice: Male or Female</h2>
      </div>
      <div className='m-[10rem] flex gap-[4rem] justify-center'>
          <div onClick={()=>setGender('male')} className={gender === 'male' ? 'w-[20%] border-solid border-[2px] border-[#7B68EE] rounded-lg p-[1rem]' : 'w-[20%] border-solid border-[2px] border-[gray] rounded-lg p-[1rem]'}>
              <img className='m-auto w-[50%]' src="/male.png" />
              <p className='regular justify-center text-center text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>Male</p>
          </div>
          <div onClick={()=>setGender('female')}  className={gender === 'female' ? 'w-[20%] border-solid border-[2px] border-[#7B68EE] rounded-lg p-[1rem]' : 'w-[20%] border-solid border-[2px] border-[gray] rounded-lg p-[1rem]'}>
          <img className='m-auto w-[50%]' src="/female.png" />
          <p className='regular justify-center text-center text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>Female</p>
          </div>
      </div>
  </div>
  )
}

export default Gender