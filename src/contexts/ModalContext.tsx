import { createContext, ReactNode } from 'react'
import { useDisclosure } from '@chakra-ui/react'

interface ModalContextType {
  wordRecord: {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
  }
}

const initialState = {
  wordRecord: {
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
  },
}

export const ModalContext = createContext<ModalContextType>(initialState)

interface ModalProviderType {
  children: ReactNode
}

export const ModalProvider = (props: ModalProviderType) => {
  const { children } = props
  const wordRecord = useDisclosure()

  const value = {
    wordRecord,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
