import * as S from './tetrisGrid.styles'
import type { GridProps } from './types'

export const TetrisGrid = ({
  filledCells,
  paintedCells,
  cellCount,
  pieceParams,
}: GridProps) => {
  const { color, text, sizeShape } = pieceParams
  const middleIndex = paintedCells[Math.floor(paintedCells.length / 10)]

  function getCellColor(index: number): string {
    const filled = filledCells.find((cell) => cell.index === index)
    if (filled) return filled.color
    if (paintedCells.includes(index)) return color
    return 'transparent'
  }

  return (
    <>
      {Array.from({ length: cellCount }, (_, index) => {
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
