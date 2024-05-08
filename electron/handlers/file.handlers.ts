import { readFile as readFielPromise, writeFile } from 'fs/promises'

export async function readFile(path: string) {
  const res = await readFielPromise(path)
  return res.toString()
}

export async function saveFile(path: string, value: string) {
  await writeFile(path, value)
}
