import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import RecordProvider from './contexts/RecordContext'
import './index.css'
import { AchievementProvider } from './contexts/AchievementContext.tsx'
import { ModalProvider } from './contexts/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RecordProvider>
        <ModalProvider>
          <AchievementProvider>
            <App />
          </AchievementProvider>
        </ModalProvider>
      </RecordProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
