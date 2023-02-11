import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// const styles = {
//   global: props => ({
//     body: {
//       bg: mode('#222', '#202023')(props)
//     }
//   })
// }

const fonts = {
   heading: "'M PLUS Rounded 1c'"
}

const colors = {
   glassTeal: '#88ccca'
}
const config = {
   initialColorMode: 'dark',
   useSystemColorMode: true
}
const theme = extendTheme({
   config,
   styles: {
      global: {
         body: {
            bg: '#222'
         }
      }
   },
   components,
   colors,
   fonts
})

export default theme