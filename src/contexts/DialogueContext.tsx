import { createContext, ReactNode, useRef, useState } from 'react'
import { DialogueReason } from '../types/dialogue'
import {
  IDLE_DIALOGUES,
  KNOWN_WORD_DIALOGUES,
  NEW_WORD_DIALOGUES,
  SET_DIALOGUES,
  TIPS_DIALOGUES,
  TIPS_TYPES,
  UNKNOWN_WORD_DIALOGUES,
} from '../constants/dialogue'

interface DialogueContextType {
  content: ReactNode

  generateDialogue: (word: string, reason: DialogueReason) => void
}

const initialState = {
  content: null,

  generateDialogue: () => {},
}

export const DialogueContext = createContext<DialogueContextType>(initialState)

interface DialogueProviderType {
  children: ReactNode
}

export const DialogueProvider = (props: DialogueProviderType) => {
  const { children } = props
  const timeoutId1 = useRef<number>(0)
  const timeoutId2 = useRef<number>(0)
  const [content, setContent] = useState<ReactNode>("What's your next word?")

  const generateDialogue = (word: string, reason: DialogueReason) => {
    clearTimeout(timeoutId1.current)
    clearTimeout(timeoutId2.current)
    if (reason !== DialogueReason.IDLE && reason !== DialogueReason.TIPS) {
      setTimeout(() => generateDialogue('', DialogueReason.IDLE), 15000)
      setTimeout(() => generateDialogue('', DialogueReason.TIPS), 60000)
    }
    if (reason != DialogueReason.KNOWN_WORD && word in SET_DIALOGUES) {
      setContent(SET_DIALOGUES[word as keyof typeof SET_DIALOGUES])
      return
    }

    switch (reason) {
      case DialogueReason.NEW_WORD:
        setContent(
          NEW_WORD_DIALOGUES[
            Math.floor(Math.random() * NEW_WORD_DIALOGUES.length)
          ],
        )
        break
      case DialogueReason.UNKNOWN_WORD:
        setContent(
          UNKNOWN_WORD_DIALOGUES[
            Math.floor(Math.random() * UNKNOWN_WORD_DIALOGUES.length)
          ],
        )
        break
      case DialogueReason.KNOWN_WORD:
        setContent(
          KNOWN_WORD_DIALOGUES[
            Math.floor(Math.random() * KNOWN_WORD_DIALOGUES.length)
          ],
        )
        break
      case DialogueReason.TIPS:
        setContent(
          TIPS_DIALOGUES[
            Math.floor(Math.random() * TIPS_DIALOGUES.length)
          ].replace(
            '<<type>>',
            TIPS_TYPES[Math.floor(Math.random() * TIPS_TYPES.length)],
          ),
        )
        break
      case DialogueReason.IDLE:
        setContent(
          IDLE_DIALOGUES[Math.floor(Math.random() * IDLE_DIALOGUES.length)],
        )
        break
    }
  }

  const value = {
    content,
    generateDialogue,
  }

  return (
    <DialogueContext.Provider value={value}>
      {children}
    </DialogueContext.Provider>
  )
}
