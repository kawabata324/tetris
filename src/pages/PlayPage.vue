<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const state = reactive({
  name: route.query.name,
});

//テトリスのフィールドを定義
const rowNum = 20;
const columnNum = 10;
//20行の空の配列を定義 [[],[].....]
  const fields: number[][] = new Array(rowNum);

for (let step=0; step < rowNum; step++){
  //[,,,,,,,,,] 10個の区切りがある配列を作成し fill methodで全てに０を入れるfieldColumnを作る
  const fieldColumn = new Array(columnNum).fill(0);

  //fields[0] に作成した０が10個入った配列を代入し、行ごとに管理できるようにする
  fields[step] = fieldColumn
}

//画面の最上部の左端にIテトロミノを出現させる
fields[0][0] = 1
fields[1][0] = 1
fields[2][0] = 1
fields[3][0] = 1

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
    //5:J-テトロミノ藍色
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
</script>
<template>
  <div class="container mx-auto my-20 text-center">
    <h1 class="text-3xl font-bold">トップ画面</h1>
    <h2 class="text-xl mt-10">UserName:{{ state.name }}</h2>
    <div class="flex flex-col mx-auto mt-10 w-80">
      <div class="container flex justify-center">
        <table class="table-auto border-x-4 border-b-4 b border-black">
          <tbody>
            <tr v-for="(row, y) in fields" :key="y">
              <td
                v-for="(column, x) in row"
                :key="() => `${x}${y}`"
                class="border border-black p-4"
              >
                {{ column }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
