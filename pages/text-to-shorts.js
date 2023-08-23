import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Header from "../components/Header"
import Showcase from '@/components/Showcase'
import Badges from '@/components/Badges'
import HowItWorks from '@/components/HowItWorks'
import Vs from '@/components/Vs'
import Testimonial from '@/components/Testimonial'
import Testi from '@/components/Testi'
import InfoText from '@/components/InfoText'
import Records from '@/components/Records'
import Footer from '@/components/Footer'
import PricingSection from '@/components/Pricing'
import {groq} from "next-sanity"
import { sanityClient } from '../sanity'
import showcase from '@/y/schemas/showcase'
import Social from '@/components/Social'
import { useMediaQuery } from 'react-responsive';
import NewTesti from '@/components/NewTesti'
import Faq from '@/components/Faq'
import Brands from '@/components/Brands'



const inter = Inter({ subsets: ['latin'] })

export default function TextToShorts({showcase2, howItWorks2, vs, pricing, testimonials, infoText, social, faq, newTestimonials}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Fragment>
      <Header />
      <Showcase showcase={showcase2}/>
      <Badges />
      <HowItWorks howItWorks={howItWorks2} />
      <Vs vs={vs} />
      {/* <PricingSection pricing={pricing} /> */}
      {/* <Testimonial testimonials={testimonials} /> */}
      {/* <Testi testimonials={testimonials} /> */}
      <NewTesti newTestimonials={newTestimonials}/>
      <InfoText infoText={infoText} />
      {/* <Faq faq={faq}/> */}
      {/* <Records />
      <Footer social={social}/>
      <Social social={social}/> */}

    </Fragment>
  )
}

export const getStaticProps = async() => {

  const showcase2 = await sanityClient.fetch(groq`
  *[_type == "showcase2"]{
    _id,
    title,
    subtitle,
    detail,
  }[0]
  `)
  const howItWorks2 = await sanityClient.fetch(groq`
  *[_type == "howItWorks2"][0]
  `)
  const vs = await sanityClient.fetch(groq`
  *[_type == "vs"][0]
  `)

  const pricing = await sanityClient.fetch(groq`
  *[_type == "pricing"][0]
  `)

  const testimonials = await sanityClient.fetch(groq`
  *[_type == "testimonials"][0]
  `)

  const infoText = await sanityClient.fetch(groq`
  *[_type == "infoText"][0]
  `)

  const social = await sanityClient.fetch(groq`
  *[_type == "social"][0]
  `)

  const faq = await sanityClient.fetch(groq`
  *[_type == "faq"][0]
  `)

  const newTestimonials = await sanityClient.fetch(groq`
  *[_type == "newTestimonials"][0]
  `)
  
  return {
    props: {
      showcase2,
      howItWorks2,
      vs,
      pricing,
      testimonials,
      infoText,
      social,
      faq,
      newTestimonials,
    },
    revalidate:10,
  }
}