// export type IDirItem = Omit<
//   Dirent,
//   | 'isFile'
//   | 'isDirectory'
//   | 'isBlockDevice'
//   | 'isCharacterDevice'
//   | 'isSymbolicLink'
//   | 'isFIFO'
//   | 'isSocket'
// > &
//   Partial<
//     Omit<
//       Stats,
//       | 'isFile'
//       | 'isDirectory'
//       | 'isBlockDevice'
//       | 'isCharacterDevice'
//       | 'isSymbolicLink'
//       | 'isFIFO'
//       | 'isSocket'
//     >
//   > & {
//     isFile: boolean
//   }

export interface IDirItem {
  name: string
  path: string
  dev?: number | undefined
  ino?: number | undefined
  mode?: number | undefined
  nlink?: number | undefined
  uid?: number | undefined
  gid?: number | undefined
  rdev?: number | undefined
  size?: number | undefined
  blksize?: number | undefined
  blocks?: number | undefined
  atimeMs?: number | undefined
  mtimeMs?: number | undefined
  ctimeMs?: number | undefined
  birthtimeMs?: number | undefined
  atime?: Date | undefined
  mtime?: Date | undefined
  ctime?: Date | undefined
  birthtime?: Date | undefined
  isFile: boolean
}

export class CustomDirItem implements IDirItem {
  isFile: boolean
  constructor(public path: string, public name: string) {
    this.isFile = false
  }
}
