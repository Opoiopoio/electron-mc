import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { CustomDirItem, IDirItem } from '../../types'

export const useDirStore = defineStore('dir', () => {
  const path = ref('')
  const currDir = ref(new Array<IDirItem>())

  const additionalItems = computed<IDirItem[]>(() => [
    new CustomDirItem(path.value, '..'),
  ])

  const items = computed(() => additionalItems.value.concat(currDir.value))

  async function getDir(reqPath?: string) {
    const result: IDirItem[] = await window.ipcRenderer.invoke('get-dir', reqPath)

    path.value = result[0]?.path ?? reqPath

    currDir.value = result

    console.log(currDir.value)
  }

  return { path, items, getDir }
})
