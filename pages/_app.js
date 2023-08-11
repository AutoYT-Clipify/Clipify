import Container from '@/components/Container'
import Social from '@/components/Social'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Social />
        <Container>
      <Component {...pageProps} />
    </Container>
    </>

  )

}
