export type PaintCellProps = {
  shape: number[][]
  currentPosition: number
}

export type verifyIsCollideProps = {
  position: number
  shape: number[][]
  type: 'increment' | 'decrement'
  filledCells: number[]
}
