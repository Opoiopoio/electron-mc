export function getPath(path: string | string[]) {
  const result = Array.isArray(path) ? `/${path.join('/')}` : path
  return result
}
