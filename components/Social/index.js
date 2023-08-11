import Link from "next/link"
import styles from "./social.module.css"

const Social = () => {
  return (
    <div className='flex flex-col  fixed top-[20%] lg:top-[30%] right-[1rem] lg:right-0  gap-[2.5rem] lg:gap-4 w-[8rem] lg:w-[4.7rem] height-[17.8rem] z-10'>
        <Link href="#"><img className={`${styles.social} lg:w-[3rem] lg:h-[3rem]`} src={'/static/linked.svg'} alt='linkedin' /></Link>
        <Link href="#"><img className={`${styles.social} lg:w-[3rem] lg:h-[3rem]`} src={'/static/twitter.svg'} alt='twitter' /></Link>
        <Link href="#"><img className={`${styles.social} lg:w-[3rem] lg:h-[3rem]`} src={'/static/telegram.svg'} alt='twitter' /></Link>
    </div>
  )
}

export default Social