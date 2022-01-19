<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const state = reactive({
  name: route.query.name,
});

//テトリスのフィールドを定義するコード
const rowNum = 20;
const columnNum = 10;
//20行の空の配列を定義 [[],[].....]
const fields: number[][] = new Array(rowNum);
//[,,,,,,,,,] 10個の区切りがある配列を作成し fill methodで全てに０を入れるfieldColumnを作る
const fieldColumn = new Array(columnNum).fill(0);
//[,,,,,,,,.....] 20個区切りがある配列に対して作成した配列(0が１０個)を入れる
fields.fill(fieldColumn);
</script>
<template>
  <div class="container mx-auto my-20 text-center">
    <h1 class="text-3xl font-bold">トップ画面</h1>
    <h2 class="text-xl mt-10">UserName:{{ state.name }}</h2>
    <div class="flex flex-col mx-auto mt-10 w-80">
      <div class="container flex justify-center">
        <table class="table-auto border-x-4 border-b-4  b border-black">
          <tbody>
            <tr v-for="(row, y) in fields" :key="y">
              <td
                v-for="(colomn, x) in row"
                :key="() => `${x}${y}`"
                class="border border-black p-4"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
