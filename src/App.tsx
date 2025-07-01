import Tetris from './components/organisms/game/tetris'
import { TetrisContextProvider } from './context/TetrisContext'

function App() {
  return (
    <TetrisContextProvider>
      <Tetris />
    </TetrisContextProvider>
  )
}

export default App
