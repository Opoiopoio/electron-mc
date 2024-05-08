export function getPath(path: string | string[]) {
  return Array.isArray(path) ? `/${path.join('/')}` : path
}
