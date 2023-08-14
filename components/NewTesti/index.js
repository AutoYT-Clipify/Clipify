import React from 'react'

const NewTesti = ({newTestimonials}) => {
    let data = newTestimonials?.newTestimonialsData
    
    return (
        <div className='mt-[10rem] lg:mt-0 px-[4rem] lg:px-0'>
            <h2 className="flex justify-center text-center bold mt-[2rem] lg:mt-[0rem] text-[9rem] lg:text-[5rem] lg:mb-0 mb-[5rem]">
            {newTestimonials?.title}
            </h2>
            <p className='regular justify-center text-center m-auto lg:w-[55%]  lg:pr-[6rem]  text-[5rem] lg:mt-[2rem] lg:text-[1.8rem] text-[#5C5C5C]'>
            {newTestimonials?.subtitle}
            </p>
            <div className="style-0">
                <div className="style-1">
                    <div className="style-2"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" className="style-3" />
                        <h3 className="style-4">{data[0]?.title}</h3>
                        <p className="style-5">{data[0]?.detail}</p>
                        <div className="style-6">
                            <div className="style-7"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6a1bf45c972_Joseph-Kania.png" loading="lazy" alt="" className="style-8" />
                                <div className="style-9">
                                    <div className="style-10">Joseph Kania</div>
                                    <div className="style-11">Content Cretor</div>
                                </div>
                            </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" className="style-12" />
                        </div>
                    </div>
                    <div className="style-13"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6582e45ca10_logo-02.svg" loading="lazy" alt="" className="style-14" />
                        <h3 className="style-15">{data[1]?.title}</h3>
                        <p className="style-16">{data[1]?.detail}</p>
                        <div className="style-17">
                            <div className="style-18"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6ef7e45c973_Mustafa.png" loading="lazy" alt="" className="style-19" />
                                <div className="style-20">
                                    <div className="style-21">Mustafa Y.</div>
                                    <div className="style-22">Startup Founder</div>
                                </div>
                            </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/6291e61a354f09336db9411b_5-white-rose-star.svg" loading="lazy" alt="" className="style-23" />
                        </div>
                    </div>
                    <div className="style-24"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e64ec445ca58_Testimonials-3-1.png" loading="lazy" alt="" className="style-25" />
                        <div className="style-26"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" className="style-27" />
                            <h3 className="style-28">{data[2]?.title}</h3>
                            <p className="style-29">{data[2]?.detail}</p>
                            <div className="style-30">
                                <div className="style-31"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6a14345c974_Clark-Brown.png" loading="lazy" alt="" className="style-32" />
                                    <div className="style-33">
                                        <div className="style-34">Clark Brown</div>
                                        <div className="style-35">Youtuber</div>
                                    </div>
                                </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" className="style-36" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="style-37">
                    <div className="style-38"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e649fe45ca55_Testimonials-4-1.png" loading="lazy" srcset="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e649fe45ca55_Testimonials-4-1-p-500.png 500w, https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e649fe45ca55_Testimonials-4-1.png 576w" sizes="(max-width: 479px) 0px, (max-width: 767px) 100vw, 288px" alt="" className="style-39" />
                        <div className="style-40"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6582e45ca10_logo-02.svg" loading="lazy" alt="" className="style-41" />
                            <h3 className="style-42">{data[3]?.title}</h3>
                            <p className="style-43">{data[3]?.detail}</p>
                            <div className="style-44">
                                <div className="style-45"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e67c9b45c975_Talha.png" loading="lazy" alt="" className="style-46" />
                                    <div className="style-47">
                                        <div className="style-48">Talha R.</div>
                                        <div className="style-49">Influencer</div>
                                    </div>
                                </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" className="style-50" />
                            </div>
                        </div>
                    </div>
                    <div className="style-51"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" className="style-52" />
                        <h3 className="style-53">{data[4]?.title}</h3>
                        <p className="style-54">{data[4]?.detail}</p>
                        <div className="style-55">
                            <div className="style-56"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e63c5045c976_Jenny-Andrei.png" loading="lazy" alt="" className="style-57" />
                                <div className="style-58">
                                    <div className="style-59">Jenny Andrei</div>
                                    <div className="style-60">Freelancer</div>
                                </div>
                            </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" className="style-61" />
                        </div>
                    </div>
                </div>
                <div className="style-62">
                    <div className="style-63"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" className="style-64" />
                        <h3 className="style-65">{data[5]?.title}</h3>
                        <p className="style-66">{data[5]?.detail}</p>
                        <div className="style-67">
                            <div className="style-68"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6929145c977_David-Rodin.png" loading="lazy" alt="" className="style-69" />
                                <div className="style-70">
                                    <div className="style-71">David Rodin</div>
                                    <div className="style-72">Musician</div>
                                </div>
                            </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" className="style-73" />
                        </div>
                    </div>
                    <div className="style-74"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" className="style-75" />
                        <h3 className="style-76">{data[6]?.title}</h3>
                        <p className="style-77">{data[6]?.detail}</p>
                        <div className="style-78">
                            <div className="style-79"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6c67145c978_Dorothea-Kelly.png" loading="lazy" alt="" className="style-80" />
                                <div className="style-81">
                                    <div className="style-82">Dorothea Kelly</div>
                                    <div className="style-83">Youtuber</div>
                                </div>
                            </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/6291e61a354f09336db9411b_5-white-rose-star.svg" loading="lazy" alt="" className="style-84" />
                        </div>
                    </div>
                    <div className="style-85"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6ac8c45ca56_Testimonials-8-1.png" loading="lazy" alt="" className="style-86" />
                        <div className="style-87"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" className="style-88" />
                            <h3 className="style-89">{data[7]?.title}</h3>
                            <p className="style-90">{data[7]?.detail}</p>
                            <div className="style-91">
                                <div className="style-92"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e670e045c979_Nedyalko-Spas.png" loading="lazy" alt="" className="style-93" />
                                    <div className="style-94">
                                        <div className="style-95">Nedyalko Spas</div>
                                        <div className="style-96">Video Creator</div>
                                    </div>
                                </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" className="style-97" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="style-98">
                    <div className="style-99"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" className="style-100" />
                        <h3 className="style-101">{data[8]?.title}</h3>
                        <p className="style-102">{data[8]?.detail}</p>
                        <div className="style-103">
                            <div className="style-104"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e680c245c97b_Zohaib-Zeeshan.png" loading="lazy" alt="" className="style-105" />
                                <div className="style-106">
                                    <div className="style-107">Zohaib Zeeshan</div>
                                    <div className="style-108">Youtuber</div>
                                </div>
                            </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" className="style-109" />
                        </div>
                    </div>
                    <div className="style-110"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6425c45ca57_Testimonials-10-1.png" loading="lazy" alt="" className="style-111" />
                        <div className="style-112"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" className="style-113" />
                            <h3 className="style-114">{data[9]?.title}</h3>
                            <p className="style-115">{data[9]?.detail}</p>
                            <div className="style-116">
                                <div className="style-117"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e61b5b45c97a_Bart-Gusta.png" loading="lazy" alt="" className="style-118" />
                                    <div className="style-119">
                                        <div className="style-120">Bart Gusta</div>
                                        <div className="style-121">Upcoming Content creator</div>
                                    </div>
                                </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6fccc45ca11_5-rose-star.svg" loading="lazy" alt="" className="style-122" />
                            </div>
                        </div>
                    </div>
                    <div className="style-123"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e69b4d45c971_logo-g2.svg" loading="lazy" alt="" className="style-124" />
                        <h3 className="style-125">{data[10]?.title}</h3>
                        <p className="style-126">{data[10]?.detail}</p>
                        <div className="style-127">
                            <div className="style-128"><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/627a1045a798e615fa45c97c_Moses-Olanrewaju.png" loading="lazy" alt="" className="style-129" />
                                <div className="style-130">
                                    <div className="style-131">Moses Olanrewaju</div>
                                    <div className="style-132">Freelancer</div>
                                </div>
                            </div><img src="https://global-uploads.webflow.com/627a1044a798e6627445c8d1/6291e61a354f09336db9411b_5-white-rose-star.svg" loading="lazy" alt="" className="style-133" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewTesti