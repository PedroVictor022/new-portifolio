import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react"

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
