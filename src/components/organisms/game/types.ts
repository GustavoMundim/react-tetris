import type { ShapeObj } from '../../../context/TetrisGameContext'

export type PaintCellProps = {
  shape: ShapeObj
  currentPosition: number
}

export type verifyIsCollideProps = {
  position: number
  shape: ShapeObj
  type: 'increment' | 'decrement'
  filledCells: number[]
}
