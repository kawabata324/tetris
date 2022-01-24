export class Field {
  constructor(private field: number[][], data?: number[][]) {
    if (data) {
      field = data;
    } else {
      const row = 20;
      const col = 10;
      const twentyArray: number[][] = new Array(row);

      for (let step = 0; step < row; step++) {
        const tenInZeroArray: number[] = new Array(col).fill(0);
        twentyArray[step] = tenInZeroArray;
      }
      field = twentyArray;
    }
  }

  static deepCopy(field: Field): Field {
    const data = field.data;
    const newField: number[][] = new Array(data.length);

    data.forEach((rows, y) => {
      newField[y] = new Array(rows.length);
      rows.forEach((_, x) => {
        newField[y][x] = data[y][x];
      });
    });
    return new Field(newField);
  }

  get data(): number[][] {
    return this.field;
  }

  update = (
    tetrominoData: number[][],
    tetrominoPosition: { x: number; y: number }
  ): void => {
    for (let i = 0; i < tetrominoData.length; i++) {
      const cols = tetrominoData[i];
      for (let j = 0; j < cols.length; j++) {
        const block = cols[j];

        if (block > 0) {
          this.field[i + tetrominoPosition.x][j + tetrominoPosition.y] = block;
        }
      }
    }
  };
}
