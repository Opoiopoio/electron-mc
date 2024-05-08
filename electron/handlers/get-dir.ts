import { readdir, stat } from 'fs/promises'

export async function getDir(path?: string) {
  path = path || process.env.APP_ROOT

  let currPath = path

  if (path.endsWith('/.')) {
    currPath = path.replace('/.', '')
  } else if (path.endsWith('/..')) {
    currPath = path.replace('/..', '')
    const index = currPath.lastIndexOf('/')

    currPath = currPath.substring(0, index)
  }

  const dirs = await readdir(path, { withFileTypes: true })

  const stats = dirs.map(async (dir) => {
    const info = await stat(`${path}/${dir.name}`).catch((e) => {
      console.log(e)
      return {}
    })
    return { ...dir, ...info, isFile: dir.isFile(), path: currPath }
  })

  const unsorted = await Promise.all(stats)

  const resutl = unsorted.sort((left, right) => {
    if (left.isFile && !right.isFile) return 1
    else if (!left.isFile && right.isFile) return -1

    return left.name.localeCompare(right.name)
  })

  return resutl
}
