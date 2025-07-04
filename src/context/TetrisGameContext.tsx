import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'

import { TetrisGameContext } from '.'
import { useTetris } from '../hooks/useTetris'

type FilledCell = {
  index: number
  color: string
}

export type ShapeObj = {
  matriz: number[][]
  shape: string
  size: string
}

export type TetrisGameProps = {
  position: number
  setPosition: Dispatch<SetStateAction<number>>
  vocabulary: string
  setVocabulary: (vocabulary: string) => void
  color: string
  setColor: (color: string) => void
  shape: ShapeObj
  setShape: (shape: ShapeObj) => void
  score: number
  setScore: Dispatch<SetStateAction<number>>
  timerId: ReturnType<typeof setInterval> | null
  setTimerId: Dispatch<SetStateAction<ReturnType<typeof setInterval> | null>>
  paintedCells: number[]
  setPaintedCells: (cells: number[]) => void
  filledCells: FilledCell[]
  setFilledCells: (filledCells: FilledCell[]) => void
  nextPiece: number[]
  setNextPiece: (nextPiece: number[]) => void
}

export const TetrisGameContextProvider = ({
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
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval> | null>(
    null,
  )
  const [paintedCells, setPaintedCells] = useState<number[]>([])
  const [filledCells, setFilledCells] = useState<FilledCell[]>([])
  const [nextPiece, setNextPiece] = useState<number[]>([])

  return (
    <TetrisGameContext.Provider
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
    </TetrisGameContext.Provider>
  )
}
