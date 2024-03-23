import { createContext, ReactNode, useState } from 'react'

interface DialogueContextType {
  content: ReactNode
}

const initialState = {
  content: null,
}

export const DialogueContext = createContext<DialogueContextType>(initialState)

interface DialogueProviderType {
  children: ReactNode
}

export const DialogueProvider = (props: DialogueProviderType) => {
  const { children } = props
  const [content] = useState<ReactNode>("What's your next word?")

  const value = {
    content,
  }

  return (
    <DialogueContext.Provider value={value}>
      {children}
    </DialogueContext.Provider>
  )
}
