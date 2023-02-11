import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NextLink from "../utils/NextLink";
import ThemeToggleButton from "../utils/toggleBtn";

const LinkItem = ({ href, path, children }) => {
  const active = path = href;
  const inactiveColor = useColorMode('gray.200', 'whiteAlpha.900')
  return (
    <NextLink 
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? "#3202023" : inactiveColor}
    >
      {children}
    </NextLink>
  )
}

// Nav component
const Navbar = props => {
  const { path } = props;

  return (
    <Box
      position="relative"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      pb={5}
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
          justifyContent="center"

          gap={15}
        >
          <Flex
            align="center"
            mr={5}
          >
            {/* As a text */}
            <Heading
              as="h1"
              size="2xl"
              letterSpacing={'tighter'}
            >
              Pedro.Dev
            </Heading>
          </Flex>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            align={{ base: 'none', md: 'center' }}
            width={{ base: 'full', md: 'auto' }}
            flexGrow={1}
            mt={{ base: 0, md: 5 }}
            gap="1rem"
          >
            <NextLink href="/" path={path}>
              Home
            </NextLink>
            <NextLink href="/" path={path}>
              Home
            </NextLink>
            <NextLink href="/" path={path}>
              Home
            </NextLink>
          </Stack>
        </Flex>
        <Box flex={1} align="right" mt={{ base: 0, md: 1 }}>
          <ThemeToggleButton />
          <Box
            ml={2}
            display={{ base: "inline-block", md: 'none' }}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {/* Rever esse menu */}
                <NextLink href="/" passHref>
                  <MenuItem>Home</MenuItem>
                </NextLink>
                <NextLink href="/projetos" path>
                  <MenuItem>Projetos</MenuItem>
                </NextLink>
                <NextLink href="/sobre">
                  <MenuItem>Sobre</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>


      </Container>
    </Box>
  )
}

export default Navbar;