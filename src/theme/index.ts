import { extendTheme } from '@chakra-ui/react'
import { progressTheme } from './components/progress'

export const theme = extendTheme({
  components: {
    Progress: progressTheme,
  },
  fonts: {
    heading: 'Wordah',
    body: 'Wordah',
  },
})
