import { TETROMINO_TYPE } from './TETROMINO_TYPE';

const tetromino = [
  [
    //0 空白
    [0]
  ],
  //1-Iの水色
  [[1, 1, 1, 1]],
  //2-Oの黄色
  [
    [2, 2],
    [2, 2],
  ],
  //3-Sの緑色
  [
    [0, 3, 3],
    [3, 3, 0],
  ],
  //4-Zの赤色
  [
    [4, 4, 0],
    [0, 4, 4],
  ],
  //5-Jの青色
  [
    [0, 0, 5],
    [5, 5, 5],
  ],
  //6-Lのオレンジ
  [
    [6, 0, 0],
    [6, 6, 6],
  ],
  //７-Tの紫
  [
    [0, 7, 0],
    [7, 7, 7],
  ],
];

//Class Tetrominoの定義
export class Tetromino {
  constructor(private type: TETROMINO_TYPE) {}

  static colorType(colorType: TETROMINO_TYPE): string {
    switch (colorType) {
      case 1:
        return "block-i-light-blue";
      case 2:
        return "block-o-yellow";
      case 3:
        return "block-s-green";
      case 4:
        return "block-z-red";
      case 5:
        return "block-j-blue";
      case 6:
        return "block-l-orange";
      case 7:
        return "block-t-purple";
      default:
        return "";
    }
  }

  static random(): Tetromino{
    //8 - 1 = 7
    const tetrominoTypes = tetromino.length - 1
    //1 ~ 7
    const randomType = Math.floor(Math.random() * tetrominoTypes) + 1

    return new Tetromino(randomType as TETROMINO_TYPE)
  }

  get data() {
    return tetromino[this.type];
  }

}
