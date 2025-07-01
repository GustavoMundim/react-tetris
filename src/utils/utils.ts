import type {
  PaintCellProps,
  verifyIsCollideProps,
} from '../components/organisms/game/types'
import { Constants } from './constants'

function shuffle(data: number[][][] | string[]) {
  return Math.floor(Math.random() * data.length)
}

function paintCell({ shape, currentPosition }: PaintCellProps) {
  const cellsToPaint: number[] = []
  shape.forEach((row) =>
    row.forEach((index) => cellsToPaint.push(index + currentPosition)),
  )
  return cellsToPaint
}

function paintCellNext({ shape, currentPosition }: PaintCellProps) {
  const cellsToPaint: number[] = []
  shape.forEach((row) =>
    row.forEach((index) =>
      cellsToPaint.push(index + currentPosition + Constants.miniGridWidth),
    ),
  )
  return cellsToPaint
}

function verifyIsCollide({
  type,
  shape,
  filledCells,
  position,
}: verifyIsCollideProps) {
  const offset = type === 'increment' ? 1 : -1

  const willCollide = shape.some((row) =>
    row.some((index) => filledCells.includes(index + position + offset)),
  )

  return willCollide
}

export { shuffle, paintCell, verifyIsCollide, paintCellNext }
