export const TETROMINO = {
  I: 1, //水色のI型テトロミノ
  O: 2, //黄色のO型テトロミノ
  S: 3, //緑色のS型テトロミノ
  Z: 4, //赤色のZ型テトロミノ
  J: 5, //青色のJ型テトロミノ
  L: 6, //オレンジ色のL型テトロミノ
  T: 7, //紫色のT型テトロミノ
} as const;

//1~7のユニオン型になるように指定する
export type TETROMINO_TYPE = typeof TETROMINO[keyof typeof TETROMINO];
