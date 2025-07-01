import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import * as S from './tetris.styles'

import { PieceFilled } from '../../molecules/pieceFilled/pieceFilled'
import { TetrisGrid } from '../../molecules/tetrisGrid/tetrisGrid'
import {
  paintCell,
  paintCellNext,
  shuffle,
  verifyIsCollide,
} from '../../../utils/utils'

import Layout from '../../templates/layout/layout'
import { useKeyboardControls } from '../../../hooks/useKeyboardControls'
import { Constants } from '../../../utils/constants'
import { TetrisContext } from '../../../context'

const Tetris = () => {
  const {
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
    nextPiece,
    setNextPiece,
    filledCells,
    setFilledCells,
  } = useContext(TetrisContext)
  const [level, setLevel] = useState<number>(1)

  const [nextShape, setNextShape] = useState(() => {
    const index = shuffle(Constants.getShapeLevel(level))
    return Constants.getShapeLevel(level)[index]
  })

  const [nextVocabulary, setNextVocabulary] = useState(() => {
    const index = shuffle(Constants.vocabularyWords)
    return Constants.vocabularyWords[index]
  })
  const [nextColor, setNextColor] = useState(() => {
    const index = shuffle(Constants.currentColors)
    return Constants.currentColors[index]
  })
  const params = useMemo(
    () => ({ text: vocabulary, color: color }),
    [vocabulary, color],
  )

  const paramsNext = useMemo(
    () => ({ text: nextVocabulary, color: nextColor }),
    [nextVocabulary, nextColor],
  )

  const draw = useCallback(() => {
    const cells = paintCell({ shape: shape, currentPosition: position })
    setPaintedCells(cells)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, shape])

  const freeze = useCallback(() => {
    const newPosition = position + Constants.gridWidth
    const willCollide = shape.some((row) =>
      row.some((squareIndex) => {
        const nextIndex = squareIndex + newPosition
        return (
          nextIndex >= Constants.GRID_SIZE ||
          filledCells.some((c) => c.index === nextIndex)
        )
      }),
    )
    if (willCollide) {
      const newFilled = [...filledCells]
      shape.forEach((row) => {
        row.forEach((squareIndex) => {
          newFilled.push({
            index: squareIndex + position,
            color: color,
          })
        })
      })
      const newShape = nextShape
      const newVobaculary = nextVocabulary
      const randomIndexLevel2 = shuffle(Constants.getShapeLevel(level))
      const upcomingShape = Constants.getShapeLevel(level)[randomIndexLevel2]
      const upCommingVocabularyWords =
        Constants.vocabularyWords[shuffle(Constants.vocabularyWords)]
      const upcomingColor =
        Constants.currentColors[shuffle(Constants.currentColors)]
      const initialPosition = 3
      const newColor = nextColor
      const isGameOver = newShape.some((row) =>
        row.some((squareIndex) =>
          newFilled.some(
            (cell) => cell.index === squareIndex + initialPosition,
          ),
        ),
      )

      if (isGameOver) {
        clearInterval(timerId!)
        setTimerId(null)
        alert('Game Over!')
        onRestart()
        setLevel(1)
        return
      }

      setFilledCells(newFilled)
      setShape(newShape)
      setVocabulary(newVobaculary)
      setNextShape(upcomingShape)
      setColor(newColor)
      setNextVocabulary(upCommingVocabularyWords)
      setNextColor(upcomingColor)
      setNextShape(upcomingShape)
      displayNextShape()
      setPosition(3)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filledCells, position, shape])

  const displayNextShape = useCallback(() => {
    const cells = paintCellNext({ shape: nextShape, currentPosition: 8 })
    setNextPiece(cells)
  }, [nextShape, setNextPiece])

  useEffect(() => {
    draw()
    displayNextShape()
  }, [draw, displayNextShape, setPaintedCells])

  useEffect(() => {
    freeze()
  }, [freeze])

  const checkIfRowIsFilled = () => {
    let newFilled = [...filledCells]
    let rowsCleared = 0

    for (let row = Constants.ROWS - 1; row >= 0; row--) {
      const start = row * Constants.gridWidth
      const currentRow = Array.from(
        { length: Constants.gridWidth },
        (_, i) => start + i,
      )

      const isFull = currentRow.every((index) =>
        newFilled.some((cell) => cell.index === index),
      )

      if (isFull) {
        rowsCleared++

        newFilled = newFilled.filter((cell) => !currentRow.includes(cell.index))

        newFilled = newFilled.map((cell) => {
          return cell.index < start
            ? { ...cell, index: cell.index + Constants.gridWidth }
            : cell
        })

        row++
      }
    }

    if (rowsCleared > 0) {
      setFilledCells(newFilled)
      setScore((prev) => prev + rowsCleared * 100)
    }
  }

  const moveDown = () => {
    setPosition((prev) => prev + Constants.gridWidth)
  }

  const onRestart = () => {
    setFilledCells([])
    setPaintedCells([])
    setPosition(3)
    setScore(0)
    if (timerId) {
      clearInterval(timerId)
    }
    setTimerId(null)
  }

  useEffect(() => {
    if (filledCells.length > 0) {
      checkIfRowIsFilled()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filledCells])

  const movePiece = (direction: 'left' | 'right') => {
    const isAtEdge = shape.some((row) =>
      row.some((squareIndex) => {
        const newIndex = squareIndex + position
        return direction === 'left'
          ? newIndex % Constants.gridWidth === 0
          : newIndex % Constants.gridWidth === Constants.gridWidth - 1
      }),
    )

    if (isAtEdge) return
    const type = direction === 'left' ? 'decrement' : 'increment'
    const filledCellsIndex = filledCells.map((cel) => cel.index)
    const willCollide = verifyIsCollide({
      position,
      shape,
      type,
      filledCells: filledCellsIndex,
    })

    if (willCollide) return

    setPosition((prev) => (direction === 'left' ? prev - 1 : prev + 1))
  }

  useEffect(() => {
    const newLevel = Math.min(2, Math.floor(score / 1000) + 1)
    if (newLevel !== level) {
      setLevel(newLevel)
    }
  }, [score, level])

  function startGame() {
    if (timerId) {
      clearInterval(timerId)
      setTimerId(null)
      displayNextShape()
    } else {
      setTimerId(setInterval(moveDown, 600))
    }
  }

  useKeyboardControls({
    timerId,
    moveLeft: () => movePiece('left'),
    moveRight: () => movePiece('right'),
    moveDown,
  })
  return (
    <Layout>
      <S.Container>
        <S.WrapperText>
          <h1>Tetris</h1>
        </S.WrapperText>
        <S.ScoreContainer>
          <h1>
            Score: <span>{score}</span>
          </h1>
        </S.ScoreContainer>
        <S.GameArea>
          <S.MainGrid>
            <TetrisGrid
              filledCells={filledCells}
              paintedCells={paintedCells || []}
              cellCount={Constants.GRID_SIZE}
              pieceParams={params}
            />
          </S.MainGrid>
          <S.WrapperNextPiece>
            <h1>Next Piece</h1>
            <S.NextPiecePreview>
              <PieceFilled
                paintedCells={nextPiece || []}
                cellCount={Constants.GRID_SIZE}
                pieceParams={paramsNext}
              />
            </S.NextPiecePreview>
            <S.LevelWrapper>
              <h1>Level</h1>
              <p>{level}</p>
            </S.LevelWrapper>
          </S.WrapperNextPiece>
        </S.GameArea>
        <S.Controls>
          <button onClick={startGame}>Start</button>
          <button onClick={onRestart}>Restart</button>
        </S.Controls>
      </S.Container>
    </Layout>
  )
}

export default Tetris
