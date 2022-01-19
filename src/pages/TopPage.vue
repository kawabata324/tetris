<script setup lang="ts">
import { reactive } from 'vue';

  const state = reactive({name: ''})
  const startGame = ()=>{
    window.alert(`UserName:${state.name}`)
  }
</script>
<template>
  <div class="container mx-auto my-20 text-center">
    <h1 class="text-3xl font-bold">トップ画面</h1>
    <p class="mt-10">{{state.name}}</p>
    <div class="flex flex-col mx-auto items-center mt-10 w-80">
      <input
        v-model="state.name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
        text-center
        "
        type="text"
        placeholder="名前を入力してください(10文字以内)"
        maxlength="10"
      >
      <button
        @click="startGame"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10"
      >
        ゲームスタート!
      </button>
    </div>
  </div>
</template>
<style scoped></style>
