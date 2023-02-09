import { Box, Container, Flex, Heading, Menu, MenuItem, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import ThemeToggleButton from "../utils/toggleBtn";


const Link = ({ children, href }) => {
  return (
    <NextLink herf={href}>
      {children}
    </NextLink>
  )
}



// Nav component
const Navbar = (props) => {

  return (
    <Box
      position="relative"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex
          align="center"
          mr={5}
        >
          {/* As a text */}
          <Heading
            as="h1"
            size="3xl"
            letterSpacing={'tight'}
          >
            {/* PRINCIPAL TEXT HEADER */}
            My Frontend Portifolio
          </Heading>
          {/* Menu options */}
          <Stack
            direction={{
              base: 'column',
              md: 'row'
            }}
            display={{
              base: 'none',
              md: 'flex'
            }}
            align={{
              base: 'none',
              md: 'center'
            }}
            width={{
              base: 'full',
              md: 'auto'
            }}
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            gap="1rem"
          >
            <NextLink href="/" passHref>
              Home
            </NextLink>
            <NextLink href="/projetos" passHref>
              Projetos
            </NextLink>
            <NextLink href="/sobre" passHref>
              Sobre
            </NextLink>
            <Box flex={1} align="right">
              <ThemeToggleButton />
              <Box 
                ml={2}
                display={{ base: "inline-block", md: 'none' }}
              >
                <Menu>
                  
                </Menu>
              </Box>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;