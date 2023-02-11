import { Box, Container } from "@chakra-ui/react"
import Navbar from "./navbar/navbar"

export const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pedro Victor - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />

      <Container>
        { children }
      </Container>
    </Box>
  )
}