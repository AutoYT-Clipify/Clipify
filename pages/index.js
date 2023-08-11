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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Showcase />
      <Badges />
      <HowItWorks />
      <Vs />
      <PricingSection />
      <Testimonial />
      <Testi />
      <InfoText />
      <Records />
      <Footer />
    </Fragment>
  )
}
