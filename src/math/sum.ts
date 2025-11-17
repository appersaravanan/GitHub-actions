export function sum(a: number, b: number): number {
  return a + b;
}

export function sumMany(values: number[]): number {
  return values.reduce((acc, v) => acc + v, 0);
}
