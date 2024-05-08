<template>
  <div class="editor">
    <RouteHeader :path="currentPath" />
    <textarea class="editor__file" v-model="file" />
    <button @click="onClick">Сохранить</button>
  </div>
</template>

<script setup lang="ts">
import RouteHeader from '@/components/RouteHeader.vue'
import { useFileStore } from '@/store'
import { getPath } from '@/utils'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = useFileStore()

const route = useRoute()

const currentPath = getPath(route.params.path)

const { file } = storeToRefs(store)

onMounted(async () => {
  await store.get(currentPath)

  console.log(file)
})

async function onClick() {
  await store.save()
}
</script>

<style>
.editor__file {
  width: 100%;
  height: 80vh;
}
</style>
