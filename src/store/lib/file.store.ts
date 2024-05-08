import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { usePathStore } from './path.store'

export const useFileStore = defineStore('file', () => {
  const pathStore = usePathStore()
  const path = computed(() => pathStore.path)

  const file = ref('')

  async function get(reqPath: string) {
    file.value = await window.ipcRenderer.invoke('read-file', reqPath)

    pathStore.path = reqPath
  }

  async function save() {
    await window.ipcRenderer.invoke('save-file', pathStore.path, file.value)
  }

  return { path, file, get, save }
})
