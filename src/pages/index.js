import Head from 'next/head'

import Navbar from '@/components/navbar/navbar'
import { Container } from '@chakra-ui/react'


export default function Home({ children, router }) {
  return (
    <>
      <Navbar path={router} />

      <Container maxW="container.md" pt={7}>
        {children}
      </Container>

    </>
  )
}
