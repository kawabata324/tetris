import {TETROMINO_TYPE} from '../type/type'

//テトロミノの定義
const tetrominos = [
  [
    //0:空白
    [0],
  ],
  [
    //1:I-テトロミノ水色
    [1, 1, 1, 1],
  ],
  [
    //2:O-テトロミノ黄色
    [2, 2],
    [2, 2],
  ],
  [
    //3:S-テトロミノ緑色
    [0, 3, 3],
    [3, 3, 0],
  ],
  [
    //4:Z-テトロミノ赤色
    [4, 4, 0],
    [0, 4, 4],
  ],
  [
    //5:J-テトロミノ青色
    [0, 0, 5],
    [5, 5, 5],
  ],
  [
    //6:L-テトロミノオレンジ
    [6, 0, 0],
    [6, 6, 6],
  ],
  [
    //7:T-テトロミノ紫
    [0, 7, 0],
    [7, 7, 7],
  ],
];


//テトロミノクラス

export class Tetromino {
  constructor(private type: TETROMINO_TYPE) {}
  //Tetrominoのstyleをstringで返す
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
  //自身のテトロミノの二次元配列を取得する
  get data(): number[][] {
    return tetrominos[this.type];
  }
  //ランダムなテトロミノを取得する
  static random(): Tetromino {
    //0:空白が含まれているので除外 7
    const tetrominoTypes = tetrominos.length - 1;
    //0~6までの値 なので +1して１~7までの値にしてその値をランダムに取得する
    const randomType = Math.floor(Math.random() * tetrominoTypes) + 1;

    return new Tetromino(randomType as TETROMINO_TYPE)
  }
}

