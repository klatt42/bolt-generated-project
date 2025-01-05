import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primary: '#9F7AEA',
      secondary: '#553C9A',
    },
  },
  components: {
    Select: {
      baseStyle: {
        field: {
          bg: 'gray.800',
          borderColor: 'gray.600',
          _hover: {
            bg: 'gray.700',
          }
        },
        option: {
          bg: 'gray.800',
          color: 'white',
        }
      }
    }
  },
  styles: {
    global: {
      'select option': {
        background: '#1A202C',
        color: 'white',
      }
    }
  }
})

export default theme
