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



const inter = Inter({ subsets: ['latin'] })

export default function Home({showcase, howItWorks, vs, pricing, testimonials, infoText, social}) {
  return (
    <Fragment>
      <Header />
      <Showcase showcase={showcase}/>
      <Badges />
      <HowItWorks howItWorks={howItWorks} />
      <Vs vs={vs} />
      <PricingSection pricing={pricing} />
      <Testimonial testimonials={testimonials} />
      <Testi testimonials={testimonials} />
      <InfoText infoText={infoText} />
      <Records />
      <Footer social={social}/>
      <Social social={social}/>
    </Fragment>
  )
}

export const getStaticProps = async() => {

  const showcase = await sanityClient.fetch(groq`
  *[_type == "showcase"]{
    _id,
    title,
    subtitle,
    detail,
  }[0]
  `)
  const howItWorks = await sanityClient.fetch(groq`
  *[_type == "howItWorks"][0]
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
  return {
    props: {
      showcase,
      howItWorks,
      vs,
      pricing,
      testimonials,
      infoText,
      social
    },
    revalidate:10,
  }
}