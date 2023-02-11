import { useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

const Link = ({ children, href, ...props }) => {
  return (
    <NextLink href={href} {...props} color={useColorModeValue()}>
      {children}
    </NextLink>
  )
}

export default Link