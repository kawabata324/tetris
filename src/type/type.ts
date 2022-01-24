//テトロミノの種類を定数群で定義する
//as constにすることで全ての値をreadonlyにする
const TETROMINO = {
  I: 1, //1:I-テトロミノ水色
  O: 2, //2:O-テトロミノ黄色
  S: 3, //3:S-テトロミノ緑色
  Z: 4, //4:Z-テトロミノ赤色
  J: 5, //5:J-テトロミノ青色
  L: 6, //6:L-テトロミノオレンジ
  T: 7, //7:T-テトロミノ紫
} as const;

//typeof演算子によって上記のObjectの値のリテラル型を当てはめている
export type TETROMINO_TYPE = typeof TETROMINO[keyof typeof TETROMINO];
