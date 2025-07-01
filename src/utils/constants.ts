export const Constants = {
  ROWS: 20,
  COLS: 10,
  get GRID_SIZE() {
    return this.ROWS * this.COLS
  },
  get gridWidth() {
    return this.COLS
  },

  levelOne: {
    squareShapeBig: [
      [0, 1, 2],
      [10, 11, 12],
      [20, 21, 22],
    ],
    squareShapeMediumVertical: [
      [0, 1],
      [10, 11],
      [20, 21],
    ],
    squareShapeMediumHorizontal: [
      [0, 1, 2],
      [10, 11, 12],
    ],
    squareShapeSmall: [
      [0, 1],
      [10, 11],
    ],
  },

  levelTwo: {
    squareShapeHollowCenter: [
      [0, 1, 2],
      [10, 11, 12],
      [20, 21, 22],
    ],
    squareShapeDiagonal: [
      [0, 1, 2, 3, 4, 5],
      [10, 11, 12, 13, 14, 15],
      [20, 21, 22, 23, 24, 25],
    ],
    squareShapeBorderOnly: [
      [0, 1, 2, 3],
      [10, 11, 12, 13],
      [20, 21, 22, 23],
      [30, 31, 32, 33],
    ],
  },

  getShapeLevel(level: number) {
    switch (level) {
      case 1:
        return [
          this.levelOne.squareShapeBig,
          this.levelOne.squareShapeMediumHorizontal,
          this.levelOne.squareShapeMediumVertical,
          this.levelOne.squareShapeSmall,
        ]
      case 2:
        return [
          this.levelTwo.squareShapeBorderOnly,
          this.levelTwo.squareShapeDiagonal,
          this.levelTwo.squareShapeHollowCenter,
        ]
      default:
        return [
          this.levelOne.squareShapeBig,
          this.levelOne.squareShapeMediumHorizontal,
          this.levelOne.squareShapeMediumVertical,
          this.levelOne.squareShapeSmall,
        ]
    }
  },

  currentColors: [
    '#1976D2',
    '#FBC02D',
    '#7E57C2',
    '#388E3C',
    '#D32F2F',
    '#303F9F',
    '#F57C00',
  ],

  miniGridWidth: 6,
  vocabularyWords: [
    'apple',
    'ball',
    'cat',
    'dog',
    'car',
    'house',
    'sun',
    'milk',
    'book',
    'pencil',
    'chair',
    'table',
    'hat',
    'shoe',
    'cup',
    'tree',
    'bird',
    'train',
    'bus',
    'fish',
  ],
}
