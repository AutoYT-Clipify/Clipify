import React, { useState, useEffect } from 'react'
import styles from '../Header.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';

const MobileDropDown = ({setToogle}) => {
    

     return (
    <div className={`${styles.dropdownMobile} w-full pb-[5rem] lg:hidden mt-[16rem] fixed top-[0rem] z-10`}>
        <ul className='flex flex-col px-[5rem] py-[1rem] gap-[3rem]'>
            <li className={ `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>setToogle(false)}>
            <Link href={'/'}>Home</Link>
            </li>
            <li className={ `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>setToogle(false)}>
            <Link href="#services">Services</Link>		
            </li>
           
            <li className = { `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>setToogle(false)}>
            <Link href="#solutions">Solutions</Link>
            </li>
           
            <li className={ `text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>setToogle(false)}>
            <Link href="#pricing">Pricing</Link>	
            </li>
           
            <li className={`text-[6rem] text-[#020202] medium link flex items-center gap-[3rem]`} onClick={()=>setToogle(false)}>
            <Link href="#testimonials">Testimonials</Link>
            </li>
        </ul>

    </div>
  )
}

export default MobileDropDown