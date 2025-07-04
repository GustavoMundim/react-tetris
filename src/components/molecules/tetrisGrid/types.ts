type FilledCell = {
  index: number
  color: string
}

type GridProps = {
  filledCells: FilledCell[]
  paintedCells: number[]
  cellCount: number
  pieceParams: {
    color: string
    text: string
    sizeShape: string
  }
}

type checkClassNameProps = {
  index: number
  filledCells: number[]
  paintedCells: number[]
  color: string
}

export { type GridProps, type checkClassNameProps }
