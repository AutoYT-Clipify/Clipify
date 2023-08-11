import React from 'react'
import styles from "./Badges.module.css"

const Badges = () => {
  return (
    <div className={" mt-[25rem] lg:mt-[15.2rem] flex justify-center  px-[7rem] gap-[1rem] lg:gap-[3rem]"}>
        {
            data?.map((i) => (
                <img className='w-[20%] lg:w-[15%]' key={i} src={`static/badges/${i}.svg`}/>
            ))
        }
    </div>
  )
}

export default Badges

const data = [1, 2, 3, 4, 5]