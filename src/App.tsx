import Tetris from './components/organisms/game/tetris'
import { TetrisGameContext } from './context'
import { TetrisGameContextProvider } from './context/TetrisGameContext'

function App() {
  return (
    <TetrisGameContextProvider>
      <Tetris context={TetrisGameContext} />
    </TetrisGameContextProvider>
  )
}

export default App
