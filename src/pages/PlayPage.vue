<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

  const route = useRoute()
  const state = reactive({
    name: route.query.name
  })
</script>
<template>
  <div>
    <h1>プレイ画面</h1>
    <p>UserName:{{state.name}}</p>
  </div>
</template>
<style scoped></style>
