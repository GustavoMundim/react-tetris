import * as S from './pieceFilled.styles'

type GridProps = {
  cellCount: number
  paintedCells: number[]
  pieceParams: {
    text: string
    color: string
  }
}

export const PieceFilled = ({
  paintedCells,
  cellCount,
  pieceParams,
}: GridProps) => {
  const middleIndex = paintedCells[Math.floor(paintedCells.length / 10)]
  const { color, text } = pieceParams

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
            <S.GridCell key={index} color={pieceColor!}>
              {index === middleIndex && <p>{text}</p>}
            </S.GridCell>
          )
        })}
    </>
  )
}
