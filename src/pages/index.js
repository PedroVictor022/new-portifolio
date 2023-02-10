import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/navbar/navbar'
import { Container } from '@chakra-ui/react'
import HeaderC from '@/components/headerC/headerC'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ router }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pedro Victor - Homepage</title>
      </Head>

      {/* CREATE A NAVBAR */}
      {/* ADDING ROUTER PROPS = router.asPath */}

      <Navbar path={router}/>

      <Container maxW="container.md" pt={7}>
        <HeaderC />
      </Container>
    
    </>
  )
}
