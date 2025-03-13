export function sumSmallNumbers(a: number, b: number): number {
  if(a < 0 || b < 0 || a > 9 || b > 9) {
    throw new Error('Numbers must be between 0 and 9');
  }
  return a + b;
}