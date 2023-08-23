import React from 'react'
import styles from '../components/PrimaryButton/PrimaryButton.module.css'
import Gender from '@/components/Gender'
import Link from 'next/link';

const SelectGender = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div>
      <Gender />
      <div className='flex justify-center mt-[8rem] gap-[2rem]'>

      <button
      onClick={goBack}
          className={`${styles.buttonInverted} shadow-lg shadow-blue-500/50 border-[5px] lg:border-[1px] border-solid  border-[#d0d7e7] medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem]`}
        >
          Back
        </button>
        <Link href="/sign-in">
          <button
            // type="submit"
            className={`${styles.button} shadow-lg shadow-blue-500/50 medium lg:flex items-center justify-center rounded-[8rem] lg:rounded-[3.6rem] lg:w-[18.8rem] lg:h-[3.9rem] text-[5rem] lg:text-[1.5rem] py-[2rem] px-[9.5rem] lg:py-[1rem] lg:px-[2.5rem]`}
          >
            Next
          </button>
        </Link>
       
      </div>
    </div>
  )
}

export default SelectGender