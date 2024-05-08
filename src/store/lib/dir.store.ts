import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { CustomDirItem, IDirItem } from '../../types'
import { usePathStore } from './path.store'

export const useDirStore = defineStore('dir', () => {
  const pathStore = usePathStore()
  const currDir = ref(new Array<IDirItem>())
  const path = computed(() => pathStore.path)

  const additionalItems = computed<IDirItem[]>(() => [
    new CustomDirItem(pathStore.path, '..'),
  ])

  const items = computed(() => additionalItems.value.concat(currDir.value))

  async function get(reqPath?: string) {
    if (!reqPath && pathStore.path) return

    const result: IDirItem[] = await window.ipcRenderer.invoke('get-dir', reqPath)

    pathStore.path = result[0]?.path ?? reqPath

    currDir.value = result
  }

  return { path, items, get }
})
