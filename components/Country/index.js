import React from 'react'

const Country = () => {
    return (
        <div>
            <div className='mt-[5rem]'>
                <p className='regular justify-center text-center m-auto lg:w-[55%]  lg:pr-[6rem]  text-[5rem]  lg:text-[1.8rem] text-[#5C5C5C]'>Step 1 out of 5</p>
                <h2 className='flex justify-center bold mt-[2rem] lg:mt-[2rem] text-center lg:mt-[0rem] text-[9rem] lg:text-[3rem]'>Please select from top 5 countries that you want to target</h2>
            </div>
            <div className='m-[10rem] flex gap-[4rem] justify-center'>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg p-[1rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <img className='w-[15%]' src="/static/country/norway.png" />
                        <h4 className='bold text-[1.5rem] text-center'>Norway</h4>
                    </div>
                    <p className='regular justify-center text-center text-[5rem] lg:mt-[2rem] lg:text-[1.5rem] text-[#5C5C5C]'>Ad revenue :- $43.15</p>
                </div>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg p-[1rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <img className='w-[15%]' src="/static/country/germany.png" />
                        <h4 className='bold text-[1.5rem] text-center'>Germany</h4>
                    </div>
                    <p className='regular justify-center text-center text-[5rem] lg:mt-[2rem] lg:text-[1.5rem] text-[#5C5C5C]'>Ad revenue :- $38.85</p>
                </div>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg p-[1rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <img className='w-[15%]' src="/static/country/moldova.png" />
                        <h4 className='bold text-[1.5rem] text-center'>Moldova</h4>
                    </div>
                    <p className='regular justify-center text-center text-[5rem] lg:mt-[2rem] lg:text-[1.5rem] text-[#5C5C5C]'>Ad revenue :- $29.50</p>
                </div>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg p-[1rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <img className='w-[15%]' src="/static/country/algeria.png" />
                        <h4 className='bold text-[1.5rem] text-center'>Algeria</h4>
                    </div>
                    <p className='regular justify-center text-center text-[5rem] lg:mt-[2rem] lg:text-[1.5rem] text-[#5C5C5C]'>Ad revenue :- $24.50</p>
                </div>
                <div className={'w-[20%] border-solid border-[2px] border-[gray] rounded-lg p-[1rem]'}>
                    <div className='flex gap-[1rem] justify-center'>
                        <img className='w-[15%]' src="/static/country/korea.png" />
                        <h4 className='bold text-[1.5rem] text-center'>South Korea</h4>
                    </div>
                    <p className='regular justify-center text-center text-[5rem] lg:mt-[2rem] lg:text-[1.5rem] text-[#5C5C5C]'>Ad revenue :- $17.00</p>
                </div>

            </div>
        </div>
    )
}

export default Country