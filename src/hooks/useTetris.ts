import { Constants } from '../utils/constants'
import { shuffle } from '../utils/utils'

export const useTetris = () => {
  const randomTextIndex = shuffle(Constants.vocabularyWords)
  const randomColorIndex = shuffle(Constants.currentColors)

  const randomText = Constants.vocabularyWords[randomTextIndex]
  const randomColor = Constants.currentColors[randomColorIndex]
  const allShapes = Constants.getShapeLevel(1)

  return {
    allShapes,
    randomColor,
    randomText,
  }
}
