import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFileStore = defineStore('file', () => {
  const path = ref('')

  const file = ref('')

  async function get(reqPath: string) {
    file.value = await window.ipcRenderer.invoke('read-file', reqPath)

    path.value = reqPath
  }

  async function save() {
    await window.ipcRenderer.invoke('save-file', path.value, file.value)
  }

  return { path, file, get, save }
})
