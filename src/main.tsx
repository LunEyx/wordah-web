import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import RecordProvider from './contexts/RecordContext'
import './index.css'
import { AchievementProvider } from './contexts/AchievementContext.tsx'
import { ModalProvider } from './contexts/ModalContext.tsx'
import { store } from './app/store.ts'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <RecordProvider>
          <ModalProvider>
            <AchievementProvider>
              <App />
            </AchievementProvider>
          </ModalProvider>
        </RecordProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
