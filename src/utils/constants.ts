export const Constants = {
  ROWS: 20,
  COLS: 10,
  get GRID_SIZE() {
    return this.ROWS * this.COLS
  },
  get gridWidth() {
    return this.COLS
  },

  title:
    'Você recebeu a tarefa de organizar os arquivos dentro da memória de seu dispositivo. Tente encaixá-los da melhor forma para caber bastante coisa.',
  levelOne: {
    squareShapeBig: [
      {
        matriz: [
          [0, 1, 2],
          [10, 11, 12],
          [20, 21, 22],
        ],
        shape: 'square',
        size: '3x3',
      },
    ],
    squareShapeMediumVertical: [
      {
        matriz: [
          [0, 1],
          [10, 11],
          [20, 21],
        ],
        shape: 'rectangle',
        size: '3x2',
      },
    ],
    squareShapeMediumHorizontal: [
      {
        matriz: [
          [0, 1, 2],
          [10, 11, 12],
        ],
        shape: 'rectangle',
        size: '2x3',
      },
    ],
    squareShapeSmall: [
      {
        matriz: [
          [0, 1],
          [10, 11],
        ],
        shape: 'square',
        size: '2x2',
      },
    ],
  },

  levelTwo: {
    squareShapeHollowCenter: [
      {
        matriz: [
          [0, 1, 2],
          [10, 11, 12],
          [20, 21, 22],
        ],
        shape: 'square',
        size: '3x3',
      },
    ],
    squareShapeDiagonal: [
      {
        matriz: [
          [0, 1, 2, 3, 4, 5],
          [10, 11, 12, 13, 14, 15],
          [20, 21, 22, 23, 24, 25],
        ],
        shape: 'rectangle',
        size: '3x6',
      },
    ],
    squareShapeBorderOnly: [
      {
        matriz: [
          [0, 1, 2, 3],
          [10, 11, 12, 13],
          [20, 21, 22, 23],
          [30, 31, 32, 33],
        ],
        shape: 'square',
        size: '4x4',
      },
    ],
  },
  getShapeLevel(level: number) {
    switch (level) {
      case 1:
        return [
          ...this.levelOne.squareShapeBig,
          ...this.levelOne.squareShapeMediumHorizontal,
          ...this.levelOne.squareShapeMediumVertical,
          ...this.levelOne.squareShapeSmall,
        ]
      case 2:
        return [
          ...this.levelTwo.squareShapeBorderOnly,
          ...this.levelTwo.squareShapeDiagonal,
          ...this.levelTwo.squareShapeHollowCenter,
        ]
      default:
        return [
          ...this.levelOne.squareShapeBig,
          ...this.levelOne.squareShapeMediumHorizontal,
          ...this.levelOne.squareShapeMediumVertical,
          ...this.levelOne.squareShapeSmall,
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
