import Container from '@/components/Container'

import { sanityClient } from '@/sanity'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>

        <Container>
      <Component {...pageProps} />
    </Container>
    </>

  )

}
