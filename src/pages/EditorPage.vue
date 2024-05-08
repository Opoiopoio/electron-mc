<template>
  <div class="editor">
    <RouteHeader :path="currentPath" />
    <textarea class="editor__file" v-model="file" />
    <button class="editor__save-button" @click="onClick">Сохранить</button>
  </div>
</template>

<script setup lang="ts">
import RouteHeader from '@/components/RouteHeader.vue'
import { PageNameEnum } from '@/router'
import { useFileStore } from '@/store'
import { getPath } from '@/utils'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useFileStore()

const route = useRoute()
const router = useRouter()

const currentPath = getPath(route.params.path)

const { file } = storeToRefs(store)

onMounted(async () => {
  await store.get(currentPath)
})

async function onClick() {
  await store.save()

  router.push({
    name: PageNameEnum.explorer,
    params: { path: currentPath.substring(0, currentPath.lastIndexOf('/')) },
  })
}
</script>

<style>
.editor {
  text-align: left;
}

.editor__file {
  margin-top: 15px;
  width: 100%;
  height: calc(80vh - 15px);

  resize: none;
}

.editor__save-button {
  margin-top: 15px;
}
</style>
