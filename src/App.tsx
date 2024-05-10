import { useAppSelector } from './hooks/redux'
import InitializePage from './pages/InitializePage'
import MainPage from './pages/MainPage'

function App() {
  const isInitialized = useAppSelector((state) => state.game.isInitialized)

  return isInitialized ? <MainPage /> : <InitializePage />
}

export default App
