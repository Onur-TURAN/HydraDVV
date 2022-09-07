import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Arda'nın anasayfası" />
        <meta name="author" content="Arda Yıldız" />
        <meta name="author" content="hydradwv" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Arda Yıldız" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hydra_dv" />
        <meta name="twitter:creator" content="@hydra_dv" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Arda Yıldız" />
        <meta name="og:title" content="Arda Yıldız" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Arda Yıldız - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
       

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
