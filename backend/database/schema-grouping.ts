// Playing around with creating a fixed length array type in TypeScript

type BuildFixedArray<T, N extends number, R extends T[] = []> = 
  R["length"] extends N ? R : BuildFixedArray<T, N, [T, ...R]>;

function blank<N extends number>(len: N): BuildFixedArray<null, N> {
  return Array(len).fill(null) as BuildFixedArray<null, N>;
}

export const UserDataGroup: BuildFixedArray<string | null, 64> = [
  "contract",
  ...blank(63)
];