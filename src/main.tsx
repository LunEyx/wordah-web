import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import RecordProvider from './contexts/RecordContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RecordProvider>
        <App />
      </RecordProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
