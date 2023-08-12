import Link from "next/link"
import styles from "./social.module.css"
import { useState } from "react"
import social from "@/y/schemas/social";
import { useEffect } from "react";

const Social = ({social}) => {
  
  return (
    <div className='flex flex-col  fixed top-[20%] lg:top-[30%] right-[1rem] lg:right-0  gap-[2.5rem] lg:gap-4 w-[8rem] lg:w-[4.7rem] height-[17.8rem] z-10'>
      <Link href={social?.facebook || ''}><img className={`${styles.social} lg:w-[3rem] lg:h-[3rem]`} src={'/static/facebook.svg'} alt='linkedin' /></Link>
      <Link href={social?.twitter || ''}><img className={`${styles.social} lg:w-[3rem] lg:h-[3rem]`} src={'/static/twitter.svg'} alt='twitter' /></Link>
      <Link href={social?.telegram || ''}><img className={`${styles.social} lg:w-[3rem] lg:h-[3rem]`} src={'/static/telegram.svg'} alt='twitter' /></Link>
    </div>
  )
}

export default Social