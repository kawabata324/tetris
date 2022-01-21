<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { Tetromino, TETROMINO_TYPE } from "../common/Tetromino";

const route = useRoute();
const state = reactive({
  name: route.query.name,
});

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

//画面の最上部の左端にIテトロミノを出現させる
fields[0][0] = 1;
fields[1][0] = 1;
fields[2][0] = 1;
fields[3][0] = 1;

const classBlockColor = (y: number, x: number): string => {
  const colorType: TETROMINO_TYPE = fields[y][x] as TETROMINO_TYPE;
  return Tetromino.colorType(colorType);
};

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
                :key="() => `${y}${x}`"
                class="border border-black p-4"
                :class="classBlockColor(y, x)"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
.block-i-light-blue {
  background-color: aqua;
}
.block-o-yellow {
  background-color: yellow;
}
.block-s-green {
  background-color: green;
}
.block-z-red {
  background-color: red;
}
.block-j-blue {
  background-color: blue;
}
.block-l-orange {
  background-color: orange;
}

.block-t-purple {
  background-color: purple;
}
</style>
