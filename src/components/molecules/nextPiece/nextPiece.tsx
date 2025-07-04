import * as S from './nextPiece.styles'

type GridProps = {
  cellCount: number
  paintedCells: number[]
  pieceParams: {
    text: string
    color: string
    sizeShape: string
  }
}

export const NextPiece = ({
  paintedCells,
  cellCount,
  pieceParams,
}: GridProps) => {
  const { color, text, sizeShape } = pieceParams
  const middleIndex = paintedCells[Math.floor(paintedCells.length / 10)]

  function getCellColor(index: number) {
    if (paintedCells.includes(index)) return color

    return 'transparent'
  }

  return (
    <>
      {Array(cellCount)
        .fill(null)
        .map((_, index) => {
          const pieceColor = getCellColor(index)
          return (
            <S.GridCell
              key={index}
              color={pieceColor}
              params={{ size: sizeShape, text }}
            >
              {index === middleIndex && <h1>{text}</h1>}
            </S.GridCell>
          )
        })}
    </>
  )
}
