import Head from 'next/head'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/navbar/navbar'
import { Container } from '@chakra-ui/react'


export default function Home({ children, router }) {
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

      <Navbar path={router} />

      <Container maxW="container.md" pt={7}>
        {children}
      </Container>

    </>
  )
}
