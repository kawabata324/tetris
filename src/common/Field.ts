export class Field {
  constructor(private field: number[][], data?: number[][]) {
    if (data) {
      field = data;
    } else {
      //テトリスのフィールドを定義
      const rowNum = 20;
      const columnNum = 10;
      //20行の空の配列を定義 [[],[].....]
      const fields: number[][] = new Array(rowNum);

      for (let step = 0; step < rowNum; step++) {
        //[,,,,,,,,,] 10個の区切りがある配列を作成し fill methodで全てに０を入れるfieldColumnを作る
        const fieldColumn = new Array(columnNum).fill(0);

        //fields[0] に作成した０が10個入った配列を代入し、行ごとに管理できるようにする
        fields[step] = fieldColumn;
      }
      //上記で作成した二次元配列をクラス変数fieldに設定する
      field = fields;
    }
  }

  //テトリスのフィールドをコピーするために利用する。テトロミノ設置直後のテトリスのフィールドをコピーすることで、それを次のテトロミノが落下してくる際の状態を保持するテトリスのフィールドとして利用可能になる
  //引数 fieldには、コピーしたいテトリスのフィールドを指定する
  static deepCopy = (field: Field): Field =>{
    const data = field.data;
    const newFieldData = new Array<Array<number>>(data.length)

    for (const [i, rows] of data.entries()){
      newFieldData[i] = new Array(rows.length);
      for(const [j] of rows.entries()){
        newFieldData[i][j] = data[i][j]
      }
    }

    return new Field(newFieldData)
  }

  //自身のテトリスのフィールドの二次元配列を取得する
  get data(): number[][] {
    return this.field;
  }

  //テトリスのフィールドで落下中のテトリミノの状態を反映する
  //data引数には、テトリミノの二次元配列を指定する
  //position引数には、テトリミノの位置をx,yのオブジェクトで指定する
  update = (data: number[][], position: { x: number; y: number }): void => {
    //テトリミノの描画領域のマス目を１マスずつチェックする
    for(let i = 0; i < data.length; i++){
      const cols = data[i]
      for (let j = 0; j < cols.length; j++){
        const block = cols[j];

        //テトロミノを描画すべきマス目(block > 0)であれば、そのマスにテトロミノの値を設定する
        if(block>0){
          this.field[i + position.y][j + position.x] = block
        }
      }
    }
  };
}
