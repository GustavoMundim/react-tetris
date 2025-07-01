import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'

import { TetrisContext } from '.'
import { useTetris } from '../hooks/useTetris'

type FilledCell = {
  index: number
  color: string
}

export type ContextProps = {
  position: number
  setPosition: Dispatch<SetStateAction<number>>
  vocabulary: string
  setVocabulary: (hardware: string) => void
  color: string
  setColor: (color: string) => void
  shape: number[][]
  setShape: (shape: number[][]) => void
  score: number
  setScore: Dispatch<SetStateAction<number>>
  timerId: number | null
  setTimerId: (timer: number | null) => void
  paintedCells: number[]
  setPaintedCells: (cells: number[]) => void
  filledCells: FilledCell[]
  setFilledCells: (filledCells: FilledCell[]) => void
  nextPiece: number[]
  setNextPiece: (nextPiece: number[]) => void
}

export const TetrisContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const { randomColor, randomText, allShapes } = useTetris()
  const [position, setPosition] = useState<number>(3)
  const [vocabulary, setVocabulary] = useState<string>(randomText)
  const [color, setColor] = useState<string>(randomColor)
  const [shape, setShape] = useState(() => {
    const randomIndex = Math.floor(Math.random() * allShapes.length)
    return allShapes[randomIndex]
  })
  const [score, setScore] = useState<number>(0)
  const [timerId, setTimerId] = useState<number | null>(null)
  const [paintedCells, setPaintedCells] = useState<number[]>([])
  const [filledCells, setFilledCells] = useState<FilledCell[]>([])
  const [nextPiece, setNextPiece] = useState<number[]>([])

  return (
    <TetrisContext.Provider
      value={{
        position,
        setPosition,
        vocabulary,
        setVocabulary,
        color,
        setColor,
        shape,
        setShape,
        score,
        setScore,
        timerId,
        setTimerId,
        paintedCells,
        setPaintedCells,
        filledCells,
        setFilledCells,
        nextPiece,
        setNextPiece,
      }}
    >
      {children}
    </TetrisContext.Provider>
  )
}
